import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { tx } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import type { Sector } from "@/types";
import { Media } from "./Media";

export function SectorCard({ sector, index }: { sector: Sector; index: number }) {
  const { lang, localize } = useI18n();
  const Icon = getIcon(sector.icon);

  return (
    <Link
      to={localize(`/secteurs/${sector.slug}`)}
      className="group relative flex h-full flex-col overflow-hidden rounded-[3px] border border-mist-200 bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-ink-900/20 hover:shadow-cardhover"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Media
          src={sector.image}
          alt={tx(sector.name, lang)}
          label={tx(sector.name, lang)}
          icon={sector.icon}
          className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/20 bg-ink-900/40 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-display text-xs font-semibold text-gold-600">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold text-ink-900">{tx(sector.name, lang)}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">{tx(sector.short, lang)}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
          {tx({ fr: "En savoir plus", en: "Learn more", pt: "Saber mais" }, lang)}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
