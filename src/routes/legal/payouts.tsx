import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/payouts")({
  head: () => ({
    meta: [
      { title: "Payout Policy — CashGPT" },
      {
        name: "description",
        content: "CashGPT cash-out minimums, processing times and payout review rules.",
      },
      { property: "og:title", content: "Payout Policy — CashGPT" },
      {
        property: "og:description",
        content: "CashGPT cash-out minimums, processing times and payout review rules.",
      },
    ],
  }),
  component: PayoutPolicyPage,
});

function PayoutPolicyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-lg bg-background px-4 py-8">
      <Link
        to="/profile"
        className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        ← Back to profile
      </Link>
      <h1 className="mt-4 text-2xl">Payout Policy</h1>
      <section className="surface-card mt-6 space-y-3 p-5">
        <h2 className="text-lg">Minimum cash-out</h2>
        <p className="text-sm text-muted-foreground">
          You can request a withdrawal once your available balance reaches $5.00. Only available
          balance can be withdrawn — pending or held rewards must clear first.
        </p>
        <h2 className="text-lg">Processing time</h2>
        <p className="text-sm text-muted-foreground">
          Requests are reviewed manually and usually settle within 24–72 hours. During weekends or
          high volume it can take a little longer.
        </p>
        <h2 className="text-lg">Payout methods</h2>
        <p className="text-sm text-muted-foreground">
          Add a UPI ID or bank account in Wallet → payout methods. Make sure the details match your
          own account; payouts to third-party accounts are rejected.
        </p>
        <h2 className="text-lg">No KYC required</h2>
        <p className="text-sm text-muted-foreground">
          We do not ask for identity documents. Approval is based on your earning activity only.
        </p>
        <h2 className="text-lg">Rejected requests</h2>
        <p className="text-sm text-muted-foreground">
          If a request is rejected, the full amount returns to your wallet and an admin note
          explains why. Fraudulent activity voids the balance instead.
        </p>
      </section>
    </main>
  );
}
