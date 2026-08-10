import { Link } from "react-router-dom";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { tx, formatDate, cn } from "@/lib/utils";
import type { NewsItem, NewsCategory } from "@/types";
import { Media } from "./Media";

const CATEGORY_STYLES: Record<NewsCategory, string> = {
  news: "border-gold-500/40 bg-gold-500/10 text-gold-700",
  press: "border-mist-300 bg-mist-100 text-mist-600",
  event: "border-sky-500/30 bg-sky-50 text-sky-700",
  conference: "border-indigo-500/30 bg-indigo-50 text-indigo-700",
  partnership: "border-emerald-500/30 bg-emerald-50 text-emerald-700",
  project: "border-amber-500/30 bg-amber-50 text-amber-700",
  analysis: "border-rose-500/30 bg-rose-50 text-rose-700",
};

export function NewsCard({ item, featured }: { item: NewsItem; featured?: boolean }) {
  const { t, lang, localize } = useI18n();

  return (
    <Link
      to={localize(`/actualites/${item.slug}`)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[3px] border border-mist-200 bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-cardhover",
        featured && "md:flex-row",
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "aspect-[16/9] md:aspect-auto md:w-1/2" : "aspect-[16/9]")}>
        <Media
          src={item.image}
          alt={tx(item.title, lang)}
          label={t("newsPage.hero.overline")}
          className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
        />
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "md:p-8")}>
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "rounded-[3px] border px-2 py-0.5 font-display text-[0.65rem] font-bold uppercase tracking-wider",
              CATEGORY_STYLES[item.category],
            )}
          >
            {t(`newsPage.filters.${item.category}`)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-mist-400">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {formatDate(item.date, lang)}
          </span>
        </div>
        <h3
          className={cn(
            "mt-3 font-display font-bold leading-snug text-ink-900 transition-colors group-hover:text-gold-700",
            featured ? "text-2xl" : "text-lg",
          )}
        >
          {tx(item.title, lang)}
        </h3>
        <p className={cn("mt-2 flex-1 text-sm leading-relaxed text-mist-500", featured && "text-base")}>
          {tx(item.excerpt, lang)}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
          {t("common.readMore")}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
