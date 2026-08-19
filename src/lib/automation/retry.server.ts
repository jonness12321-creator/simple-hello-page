import { supabaseAdmin } from "@/integrations/supabase/client.server";

import { creditWallet, payReferralMilestone } from "../coinquest.server";
import { convertSdkCurrency, type SdkOfferwallProvider } from "../sdk-offerwall/types";
import { logAutomation } from "./logs.server";

/**
 * Re-processes a conversion that failed to credit (e.g. transient wallet error).
 * Never re-credits an already credited conversion.
 */
export async function retryConversionImpl(conversionId: string) {
  const { data: conversion, error } = await supabaseAdmin
    .from("sdk_offerwall_conversions")
    .select("*")
    .eq("id", conversionId)
    .maybeSingle();
  if (error) throw error;
  if (!conversion) throw new Error("Conversion not found");
  if (conversion.status === "credited") {
    return { ok: false, status: "credited" as const, reason: "already_credited" };
  }
  if (conversion.status === "duplicate") {
    return { ok: false, status: "duplicate" as const, reason: "duplicate" };
  }
  if (!conversion.user_id) {
    return { ok: false, status: "rejected" as const, reason: "user_not_found" };
  }

  const providerRes = await supabaseAdmin
    .from("sdk_offerwall_providers")
    .select("*")
    .eq("id", conversion.provider_id)
    .maybeSingle();
  const provider = providerRes.data as unknown as SdkOfferwallProvider | null;
  if (!provider) return { ok: false, status: "rejected" as const, reason: "unknown_provider" };

  const reward = convertSdkCurrency(provider, Number(conversion.currency_amount) || 0);
  if (reward <= 0) {
    return { ok: false, status: "rejected" as const, reason: "zero_reward" };
  }

  try {
    await creditWallet(
      conversion.user_id,
      reward,
      "offerwall",
      `${provider.name} offerwall reward (retry)`,
    );
  } catch (err) {
    await logAutomation({
      eventType: "wallet_credit",
      status: "error",
      source: provider.slug,
      providerId: provider.id,
      userId: conversion.user_id,
      referenceId: conversion.id,
      message: err instanceof Error ? err.message : "Retry wallet credit failed",
    });
    return { ok: false, status: "rejected" as const, reason: "wallet_credit_failed" };
  }

  await supabaseAdmin
    .from("sdk_offerwall_conversions")
    .update({
      status: "credited",
      reward_amount: reward,
      reject_reason: null,
      processed_at: new Date().toISOString(),
    })
    .eq("id", conversion.id);

  await logAutomation({
    eventType: "wallet_credit",
    status: "success",
    source: provider.slug,
    providerId: provider.id,
    userId: conversion.user_id,
    referenceId: conversion.id,
    message: `Retry credited $${reward.toFixed(2)} from ${provider.name}`,
    context: { reward },
  });

  try {
    await payReferralMilestone(conversion.user_id, "earning", "Referral: friend's first earning");
  } catch {
    // Referral automation must not fail the retry.
  }

  return { ok: true, status: "credited" as const, reward };
}
