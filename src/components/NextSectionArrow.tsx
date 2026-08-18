import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n";

interface Props {
  href: string;
  dark?: boolean;
}

/**
 * Link to the next section, anchored bottom-right of the section box - same
 * offsets as the hero's scroll cue, independent of the section's content
 * height. The parent `<section>` must be a positioned ancestor (`relative`).
 */
export function NextSectionArrow({ href, dark }: Props) {
  const { t } = useI18n();
  return (
    <a
      href={href}
      aria-label={t("hero.scroll")}
      className={
        dark
          ? "absolute bottom-6 right-6 z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white/60 transition-colors hover:border-gold-400 hover:text-gold-400 md:bottom-10 md:right-10"
          : "absolute bottom-6 right-6 z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-mist-300 text-mist-400 transition-colors hover:border-gold-600 hover:text-gold-600 md:bottom-10 md:right-10"
      }
    >
      <ChevronDown className="h-7 w-7 animate-bounce" aria-hidden="true" />
    </a>
  );
}
