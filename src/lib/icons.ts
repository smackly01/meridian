import {
  Plane,
  Zap,
  Droplets,
  HeartPulse,
  Landmark,
  Trophy,
  Server,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  Plane,
  Zap,
  Droplets,
  HeartPulse,
  Landmark,
  Trophy,
  Server,
  Building2,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? Building2;
}
