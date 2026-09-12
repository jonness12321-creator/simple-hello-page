import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/AppShell";
import { FeaturedOffers } from "@/components/FeaturedOffers";
import { SectionHeading } from "@/components/States";

export const Route = createFileRoute("/_authenticated/featured")({
  head: () => ({
    meta: [
      { title: "Featured Offers — CashGPT" },
      { name: "description", content: "Browse every featured partner offer and claim your rewards." },
      { property: "og:title", content: "Featured Offers — CashGPT" },
      {
        property: "og:description",
        content: "Browse every featured partner offer and claim your rewards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturedPage,
});

function FeaturedPage() {
  return (
    <AppShell subtitle="Featured offers">
      <div className="mb-3">
        <SectionHeading icon="featured">Featured Offers</SectionHeading>
      </div>
      <FeaturedOffers />
    </AppShell>
  );
}
