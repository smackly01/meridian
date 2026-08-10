import { useState } from "react";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { NewsCard } from "@/components/NewsCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { news } from "@/data/news";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";
import type { NewsCategory } from "@/types";

const CATEGORIES: NewsCategory[] = [
  "news",
  "press",
  "event",
  "conference",
  "partnership",
  "project",
  "analysis",
];

export default function NewsPage() {
  const { t } = useI18n();
  const [category, setCategory] = useState<string>("all");

  const published = news.filter((n) => n.published !== false);
  const filtered = category === "all" ? published : published.filter((n) => n.category === category);
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHero
        seoPath="news"
        overline={t("newsPage.hero.overline")}
        title={t("newsPage.hero.title")}
        body={t("newsPage.hero.body")}
        image={images.news}
      />

      <section className="section bg-white">
        <div className="container-x">
          {/* Filters */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtres">
            {["all", ...CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={cn(
                  "rounded-[3px] border px-4 py-2 font-display text-xs font-semibold transition-colors",
                  category === c
                    ? "border-ink-900 bg-ink-900 text-white"
                    : "border-mist-300 text-mist-500 hover:border-ink-900/40 hover:text-ink-900",
                )}
              >
                {t(`newsPage.filters.${c}`)}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-20 text-center text-mist-500">{t("projectsPage.empty")}</p>
          ) : (
            <div className="mt-10 space-y-8">
              {featured && (
                <ScrollReveal>
                  <NewsCard item={featured} featured />
                </ScrollReveal>
              )}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((item, i) => (
                  <ScrollReveal key={item.id} delay={(i % 3) * 60}>
                    <NewsCard item={item} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
