import featuredIcon from "@/assets/icons/featured.png";
import homeIcon from "@/assets/icons/home.png";
import logoutIcon from "@/assets/icons/logout.png";
import offersIcon from "@/assets/icons/offers.png";
import offerwallIcon from "@/assets/icons/offerwall.png";
import profileIcon from "@/assets/icons/profile.png";
import referIcon from "@/assets/icons/refer.png";
import supportIcon from "@/assets/icons/support.png";
import taskIcon from "@/assets/icons/task.png";
import walletIcon from "@/assets/icons/wallet.png";

export const APP_ICONS = {
  home: homeIcon,
  featured: featuredIcon,
  offers: offersIcon,
  task: taskIcon,
  refer: referIcon,
  wallet: walletIcon,
  support: supportIcon,
  offerwall: offerwallIcon,
  profile: profileIcon,
  logout: logoutIcon,
} as const;

export type AppIconName = keyof typeof APP_ICONS;

export function AppIcon({
  name,
  className = "size-6",
  alt = "",
}: {
  name: AppIconName;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={APP_ICONS[name]}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      loading="lazy"
      width={816}
      height={816}
      draggable={false}
      className={`select-none object-contain ${className}`}
    />
  );
}
