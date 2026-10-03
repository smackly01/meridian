import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { tx } from "@/lib/utils";
import type { Sector } from "@/types";
import { Media } from "./Media";

export function SectorCard({ sector }: { sector: Sector }) {
  const { lang, localize } = useI18n();

  return (
    <Link
      to={localize(`/secteurs/${sector.slug}`)}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-mist-200 bg-white transition-all duration-500 ease-premium hover:border-ink-900/20 hover:border-ink-900/25"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Media
          src={sector.image}
          alt={tx(sector.name, lang)}
          label={tx(sector.name, lang)}
          icon={sector.icon}
          className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl font-normal text-ink-900">{tx(sector.name, lang)}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">{tx(sector.short, lang)}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
          {tx({ fr: "En savoir plus", en: "Learn more", pt: "Saber mais" }, lang)}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  );
}
