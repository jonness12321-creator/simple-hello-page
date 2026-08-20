import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — CashGPT" },
      { name: "description", content: "The rules for earning and cashing out rewards on CashGPT." },
      { property: "og:title", content: "Terms & Conditions — CashGPT" },
      {
        property: "og:description",
        content: "The rules for earning and cashing out rewards on CashGPT.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-lg bg-background px-4 py-8">
      <Link
        to="/profile"
        className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        ← Back to profile
      </Link>
      <h1 className="mt-4 text-2xl">Terms & Conditions</h1>
      <section className="surface-card mt-6 space-y-3 p-5">
        <h2 className="text-lg">Earning rewards</h2>
        <p className="text-sm text-muted-foreground">
          CashGPT rewards are earned by genuinely completing ads, offers and tasks. Automated
          traffic, emulators, VPN abuse, multiple accounts or tampering with reward callbacks void
          all balances.
        </p>
        <h2 className="text-lg">One account per person</h2>
        <p className="text-sm text-muted-foreground">
          Each person may hold a single account and a single device identifier. Duplicate accounts
          are flagged for review and may be suspended without payout.
        </p>
        <h2 className="text-lg">Referral program</h2>
        <p className="text-sm text-muted-foreground">
          You can earn up to $3.00 per referred friend: $1.00 when they sign up, $1.00 when they
          complete their first task, offer or quest, and $1.00 when they complete their first
          withdrawal. Each milestone pays once per referral.
        </p>
        <p className="text-sm text-muted-foreground">
          Complete all 3 milestones within 1 year of your friend's signup to keep the referral
          rewards. If your referred friend does not complete their first withdrawal within 1 year of
          their signup, the first two $1 referral rewards credited for that referral will be
          reversed.
        </p>
        <h2 className="text-lg">Changes & termination</h2>
        <p className="text-sm text-muted-foreground">
          Reward rates, offers and quests can change at any time. We may suspend accounts that
          breach these terms, and you can delete your account from the Profile page at any moment.
        </p>
        <p className="text-sm text-muted-foreground">
          See also our{" "}
          <Link to="/legal/privacy" className="font-semibold text-primary">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/legal/payouts" className="font-semibold text-primary">
            Payout Policy
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
