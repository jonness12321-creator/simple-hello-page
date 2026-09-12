import { Link } from "@tanstack/react-router";

import { AppIcon, type AppIconName } from "@/components/AppIcon";

const TABS = [
  { to: "/home", label: "Home", icon: "home" },
  { to: "/offers", label: "Offers", icon: "offers" },
  { to: "/task", label: "Task", icon: "task" },
  { to: "/refer", label: "Refer", icon: "refer" },
  { to: "/support", label: "Support", icon: "support" },
] as const satisfies ReadonlyArray<{ to: string; label: string; icon: AppIconName }>;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur-md">
      <ul className="mx-auto flex w-full max-w-lg items-stretch justify-between px-2 py-1.5">
        {TABS.map(({ to, label, icon }) => (
          <li key={to} className="flex-1">
            <Link
              to={to}
              className="group flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-muted-foreground transition-colors data-[status=active]:text-primary"
              activeProps={{ className: "bg-background-alt" }}
            >
              <AppIcon name={icon} className="size-7 transition-transform group-hover:scale-110" />
              <span className="text-[11px] font-semibold">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
