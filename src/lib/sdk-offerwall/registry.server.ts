import type { SdkOfferwallAdapter } from "./types";

/**
 * Future SDK adapters register here (one file per network under ./adapters).
 * Intentionally empty: no SDK is integrated yet. A provider row without an
 * adapter simply renders as a configured-but-not-integrated placeholder.
 */
const adapters = new Map<string, SdkOfferwallAdapter>();

export function registerSdkAdapter(adapter: SdkOfferwallAdapter) {
  adapters.set(adapter.slug, adapter);
}

export function getSdkAdapter(slug: string): SdkOfferwallAdapter | undefined {
  return adapters.get(slug);
}

export function listSdkAdapterSlugs(): string[] {
  return [...adapters.keys()];
}
