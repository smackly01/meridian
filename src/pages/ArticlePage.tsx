import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, CalendarDays, Link2 } from "lucide-react";
import { useI18n } from "@/i18n";
import { Seo, articleJsonLd, breadcrumbJsonLd } from "@/components/Seo";
import { Media } from "@/components/Media";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsCard } from "@/components/NewsCard";
import { CtaBanner } from "@/components/CtaBanner";
import { news } from "@/data/news";
import { tx, formatDate } from "@/lib/utils";

export default function ArticlePage() {
  const { slug } = useParams();
  const { t, lang, localize } = useI18n();
  const article = news.find((n) => n.slug === slug);

  if (!article || article.published === false) {
    return <Navigate to={localize("/actualites")} replace />;
  }

  const title = tx(article.title, lang);
  const related = news
    .filter((n) => n.id !== article.id && n.published !== false)
    .slice(0, 3);

  async function share() {
    if (navigator.share) {
      await navigator.share({ title, url: window.location.href });
    } else {
      await navigator.clipboard?.writeText(window.location.href);
    }
  }

  return (
    <>
      <Seo
        title={`${title} - ${t("meta.news.title")}`}
        description={tx(article.excerpt, lang)}
        path={`/actualites/${article.slug}`}
        type="article"
        jsonLd={[
          articleJsonLd(title, tx(article.excerpt, lang), article.date),
          breadcrumbJsonLd(lang, [
            [t("nav.home"), "/"],
            [t("nav.news"), "/actualites"],
            [title, `/actualites/${article.slug}`],
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900 pb-16 pt-36 md:pt-44">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative max-w-4xl">
          <Link
            to={localize("/actualites")}
            className="overline on-dark inline-flex items-center gap-2 hover:text-gold-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {t("articlePage.backToNews")}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-[3px] border border-white/15 bg-white/10 px-2.5 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              {t(`newsPage.filters.${article.category}`)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-white/60">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {formatDate(article.date, lang)}
            </span>
          </div>
          <h1 className="t-h1 on-dark mt-5 text-balance">{title}</h1>
          <button
            type="button"
            onClick={share}
            className="mt-6 inline-flex items-center gap-2 rounded-[3px] border border-white/20 px-4 py-2 font-display text-xs font-semibold text-white/80 transition-colors hover:border-gold-500 hover:text-gold-300"
          >
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
            {t("articlePage.share")}
          </button>
        </div>
      </section>

      {/* Cover */}
      <section className="bg-ink-900 pb-16">
        <div className="container-x max-w-4xl">
          <ScrollReveal>
            <Media
              src={article.image}
              alt={title}
              label={t("newsPage.hero.overline")}
              className="aspect-[21/10] w-full rounded-[3px]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          {article.body.map((para, i) => (
            <ScrollReveal key={i}>
              <p className="mb-6 text-lg leading-relaxed text-mist-600">{tx(para, lang)}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-mist-50">
          <div className="container-x">
            <SectionHeading overline={t("newsPage.hero.overline")} title={t("articlePage.relatedTitle")} />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <ScrollReveal key={item.id} delay={(i % 3) * 60} className="h-full">
                  <NewsCard item={item} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
