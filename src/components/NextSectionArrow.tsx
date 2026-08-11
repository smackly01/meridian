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
    <div className="mt-14 flex justify-end">
      <a
        href={href}
        aria-label={t("hero.scroll")}
        className={
          dark
            ? "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-white/60 transition-colors hover:border-gold-400 hover:text-gold-400"
            : "inline-flex h-14 w-14 items-center justify-center rounded-full border border-mist-300 text-mist-400 transition-colors hover:border-gold-600 hover:text-gold-600"
        }
      >
        <ChevronDown className="h-7 w-7 animate-bounce" aria-hidden="true" />
      </a>
    </div>
  );
}
