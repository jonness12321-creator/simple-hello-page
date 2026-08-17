import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ExternalLink, Layers } from "lucide-react";

import { Button } from "@/components/ui/button";
import { listSdkOfferwallProviders } from "@/lib/sdk-offerwall.functions";

/**
 * INTEGRATION POINT — SDK offerwall networks.
 *
 * Providers are configured in Admin → SDK Offerwalls (table `sdk_offerwall_providers`),
 * no longer hardcoded here. Each card is still a placeholder slot: a future SDK
 * adapter supplies the launch call, nothing is integrated yet.
 */
export function OfferwallSlot({ limit }: { limit?: number }) {
  const fetchProviders = useServerFn(listSdkOfferwallProviders);

  const providers = useQuery({
    queryKey: ["sdk-offerwall-public", limit ?? "all"],
    queryFn: () => fetchProviders({ data: limit ? { limit } : {} }),
  });

  if (providers.isLoading) {
    return <p className="text-sm text-muted-foreground">Loading offerwalls…</p>;
  }

  if (!providers.data?.length) {
    return (
      <p className="text-sm text-muted-foreground">
        No offerwall networks are active yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {providers.data.map((provider) => (
        <article key={provider.id} className="surface-card flex flex-col gap-2 p-3">
          <span className="grid size-9 place-items-center overflow-hidden rounded-xl bg-jade-gradient text-primary-foreground">
            {provider.logoUrl ? (
              <img src={provider.logoUrl} alt={`${provider.name} logo`} className="size-9 object-cover" />
            ) : (
              <Layers className="size-4" />
            )}
          </span>
          <div>
            <p className="font-semibold leading-tight">{provider.name}</p>
            <p className="text-xs text-muted-foreground">{provider.tagline}</p>
          </div>
          <Button size="sm" variant="outline" className="mt-auto gap-1" disabled>
            Mobile app only <ExternalLink className="size-3.5" />
          </Button>
        </article>
      ))}
    </div>
  );
}
