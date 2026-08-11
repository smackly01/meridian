import { ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n";

interface Props {
  href: string;
  dark?: boolean;
}

/** Centered animated link to the next home section, styled like the hero "Découvrir". */
export function NextSectionArrow({ href, dark }: Props) {
  const { t } = useI18n();
  return (
    <div className="mt-14 flex justify-center">
      <a
        href={href}
        aria-label={t("hero.scroll")}
        className={
          dark
            ? "inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-white/50 transition-colors hover:text-gold-400"
            : "inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-mist-400 transition-colors hover:text-gold-600"
        }
      >
        {t("hero.scroll")}
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </div>
  );
}
