import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { OfferwallSlot } from "@/components/OfferwallSlot";
import { SectionHeading } from "@/components/States";

export const Route = createFileRoute("/_authenticated/offerwall")({
  head: () => ({
    meta: [
      { title: "Offerwall — CashGPT" },
      { name: "description", content: "All partner offerwall networks available in CashGPT." },
      { property: "og:title", content: "Offerwall — CashGPT" },
      {
        property: "og:description",
        content: "All partner offerwall networks available in CashGPT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OfferwallPage,
});

function OfferwallPage() {
  return (
    <AppShell subtitle="Offerwall">
      <div className="mb-3">
        <SectionHeading icon="offerwall">Offerwall</SectionHeading>
      </div>
      <OfferwallSlot />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Partner networks activate in the mobile app.
      </p>
    </AppShell>
  );
}
