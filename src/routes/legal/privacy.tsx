import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CashGPT" },
      {
        name: "description",
        content: "How CashGPT collects, uses and protects your account and earning data.",
      },
      { property: "og:title", content: "Privacy Policy — CashGPT" },
      {
        property: "og:description",
        content: "How CashGPT collects, uses and protects your account and earning data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-lg bg-background px-4 py-8">
      <Link
        to="/profile"
        className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        ← Back to profile
      </Link>
      <h1 className="mt-4 text-2xl">Privacy Policy</h1>
      <section className="surface-card mt-6 space-y-3 p-5">
        <h2 className="text-lg">What we collect</h2>
        <p className="text-sm text-muted-foreground">
          Your account details (name, email or phone number), wallet and earning activity, payout
          details you add, and a device identifier used solely for fraud prevention.
        </p>
        <h2 className="text-lg">How we use it</h2>
        <p className="text-sm text-muted-foreground">
          To credit rewards accurately, process withdrawals, prevent duplicate or fraudulent
          accounts, and send you payout and quest notifications.
        </p>
        <h2 className="text-lg">Sharing</h2>
        <p className="text-sm text-muted-foreground">
          Offer and offerwall partners receive an anonymised identifier so your completions can be
          credited. We never sell your personal data.
        </p>
        <h2 className="text-lg">Retention & control</h2>
        <p className="text-sm text-muted-foreground">
          You can edit your profile at any time and delete your account from the Profile page.
          Deleting your account removes your profile and earning history permanently.
        </p>
        <h2 className="text-lg">Contact</h2>
        <p className="text-sm text-muted-foreground">
          Questions about your data? Raise a ticket from the in-app Support screen.
        </p>
      </section>
    </main>
  );
}
