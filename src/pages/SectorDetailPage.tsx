import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/i18n";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Media } from "@/components/Media";
import { CtaBanner } from "@/components/CtaBanner";
import { sectors } from "@/data/sectors";
import { tx } from "@/lib/utils";

export default function SectorDetailPage() {
  const { slug } = useParams();
  const { t, lang, localize } = useI18n();
  const sector = sectors.find((s) => s.slug === slug);

  if (!sector) return <Navigate to={localize("/secteurs")} replace />;

  return (
    <>
      <Seo
        title={`${tx(sector.name, lang)} - ${t("meta.sectors.title")}`}
        description={tx(sector.description, lang)}
        path={`/secteurs/${sector.slug}`}
        jsonLd={[
          breadcrumbJsonLd(lang, [
            [t("nav.home"), "/"],
            [t("nav.sectors"), "/secteurs"],
            [tx(sector.name, lang), `/secteurs/${sector.slug}`],
          ]),
        ]}
      />

      {/* Hero banner */}
      <section className="relative overflow-hidden bg-ink-900 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute inset-0">
          <Media src={sector.image} alt="" className="h-full w-full" eager />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950/90" />
        </div>
        <div className="container-x relative">
          <Link
            to={localize("/secteurs")}
            className="eyebrow on-dark hero-anim inline-flex items-center gap-2 hover:text-gold-300"
            style={{ animationDelay: "0.05s" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {t("sectorsPage.backToSectors")}
          </Link>
          <p
            className="eyebrow hero-anim mt-6 flex items-center gap-3"
            style={{ animationDelay: "0.1s" }}
          >
            {t("sectorsPage.hero.overline")}
          </p>
          <h1
            className="t-h1 on-dark mt-5 max-w-4xl text-balance hero-anim"
            style={{ animationDelay: "0.15s" }}
          >
            {tx(sector.name, lang)}
          </h1>
          <p
            className="on-dark mt-6 max-w-2xl text-lg leading-relaxed text-white/75 hero-anim"
            style={{ animationDelay: "0.25s" }}
          >
            {tx(sector.description, lang)}
          </p>
        </div>
      </section>

      {/* Issues */}
      <section className="section bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading overline={tx(sector.name, lang)} title={t("sectorsPage.issuesTitle")} />
            <ScrollReveal className="mt-6">
              <p className="t-body">{tx(sector.issues, lang)}</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="rounded-card border border-mist-200 bg-mist-50 p-8">
              <p className="eyebrow">{t("sectorsPage.projectTypesTitle")}</p>
              <div className="mt-5 space-y-7">
                {sector.projectTypes.map((group) => (
                  <div key={tx(group.title, lang)}>
                    <p className="font-display text-sm font-semibold text-ink-800">{tx(group.title, lang)}</p>
                    <ul className="mt-3">
                      {group.items.map((item) => (
                        <li key={tx(item, lang)} className="border-b border-mist-200 py-2.5 text-sm text-mist-600 last:border-0">
                          {tx(item, lang)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our role */}
      <section className="section bg-mist-50">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading overline={tx(sector.name, lang)} title={t("sectorsPage.roleTitle")} />
            <ScrollReveal className="mt-6">
              <p className="t-body">{tx(sector.approach, lang)}</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="h-full rounded-card border border-mist-200 bg-white p-8">
              <p className="eyebrow">{t("sectorsPage.outcomesTitle")}</p>
              <ul className="mt-5">
                {sector.outcomes.map((outcome) => (
                  <li key={tx(outcome, lang)} className="border-b border-mist-200 py-4 font-serif text-xl leading-snug text-ink-900 last:border-0">
                    {tx(outcome, lang)}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Examples */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            align="center"
            overline={t("sectorsPage.examplesTitle")}
            title={t("sectorsPage.examplesIntro")}
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {sector.examples.map((ex, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="h-full rounded-card border border-mist-200 bg-mist-50 p-6">
                  <p className="text-base leading-relaxed text-mist-600">{tx(ex, lang)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
