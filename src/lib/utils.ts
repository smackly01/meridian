import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Localized } from "@/types";
import type { Lang } from "@/i18n";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** resolve a localized string for the current language, with fallbacks */
export function tx(value: Localized | undefined, lang: Lang): string {
  if (!value) return "";
  return value[lang] || value.fr || value.en || value.pt || "";
}

/** format an ISO date for a given locale */
export function formatDate(iso: string, lang: Lang): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  const locale = lang === "fr" ? "fr-FR" : lang === "pt" ? "pt-PT" : "en-GB";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
