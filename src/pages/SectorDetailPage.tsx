import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Media } from "@/components/Media";
import { ButtonLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { sectors } from "@/data/sectors";
import { tx } from "@/lib/utils";
import { getIcon } from "@/lib/icons";

export default function SectorDetailPage() {
  const { slug } = useParams();
  const { t, lang, localize } = useI18n();
  const sector = sectors.find((s) => s.slug === slug);

  if (!sector) return <Navigate to={localize("/secteurs")} replace />;

  const Icon = getIcon(sector.icon);

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
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div
          className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(201,163,92,0.18) 0%, rgba(201,163,92,0) 70%)" }}
          aria-hidden="true"
        />
        <div className="container-x relative">
          <Link
            to={localize("/secteurs")}
            className="overline on-dark hero-anim inline-flex items-center gap-2 hover:text-gold-300"
            style={{ animationDelay: "0.05s" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {t("sectorsPage.backToSectors")}
          </Link>
          <p
            className="overline hero-anim mt-6 flex items-center gap-3"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
            {t("sectorsPage.hero.overline")}
          </p>
          <h1
            className="t-h1 on-dark mt-5 flex max-w-4xl items-center gap-4 text-balance hero-anim"
            style={{ animationDelay: "0.15s" }}
          >
            <Icon className="h-10 w-10 shrink-0 text-gold-400" strokeWidth={1.5} aria-hidden="true" />
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
            <SectionHeading overline={t("sectorsPage.issuesTitle")} title={tx(sector.name, lang)} />
            <ScrollReveal className="mt-6">
              <p className="t-body">{tx(sector.issues, lang)}</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="rounded-[3px] border border-mist-200 bg-mist-50 p-8">
              <p className="overline-on-light">{t("sectorsPage.projectTypesTitle")}</p>
              <div className="mt-5 space-y-7">
                {sector.projectTypes.map((group) => (
                  <div key={tx(group.title, lang)}>
                    <p className="font-display text-sm font-bold text-ink-800">{tx(group.title, lang)}</p>
                    <ul className="mt-3 space-y-3">
                      {group.items.map((item) => (
                        <li key={tx(item, lang)} className="flex items-start gap-3 text-sm text-mist-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
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
            <SectionHeading overline={t("sectorsPage.roleTitle")} title={tx(sector.name, lang)} />
            <ScrollReveal className="mt-6">
              <p className="t-body">{tx(sector.approach, lang)}</p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="h-full rounded-[3px] border border-mist-200 bg-white p-8">
              <p className="overline-on-light">{t("sectorsPage.outcomesTitle")}</p>
              <ul className="mt-5 space-y-4">
                {sector.outcomes.map((outcome) => (
                  <li key={tx(outcome, lang)} className="flex items-start gap-3 text-sm leading-relaxed text-mist-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
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
                <div className="flex h-full items-start gap-4 border border-mist-200 bg-mist-50 p-6">
                  <span className="font-display text-2xl font-extrabold text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-mist-600">{tx(ex, lang)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12 text-center">
            <ButtonLink to={localize("/soumettre-un-projet")} variant="dark" size="lg">
              {t("sectorsPage.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
