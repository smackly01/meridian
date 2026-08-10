import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown, Building2 } from "lucide-react";
import { useI18n } from "@/i18n";
import { Seo, organizationJsonLd } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Stat } from "@/components/Stat";
import { ApproachTimeline } from "@/components/ApproachTimeline";
import { FinanceSection } from "@/components/FinanceSection";
import { SectorCard } from "@/components/SectorCard";
import { ProjectCard } from "@/components/ProjectCard";
import { AfricaMap } from "@/components/AfricaMap";
import { EcosystemSection } from "@/components/EcosystemSection";
import { GallerySection } from "@/components/GallerySection";
import { CtaBanner } from "@/components/CtaBanner";
import { Media } from "@/components/Media";
import { ButtonLink } from "@/components/Button";
import { sectors } from "@/data/sectors";
import { projects } from "@/data/projects";
import { images } from "@/config/images";
import { site } from "@/config/site";

export default function HomePage() {
  const { t, localize } = useI18n();

  const stats: { value: string; label: string }[] = [];
  for (let i = 0; i < 5; i++) {
    stats.push({ value: t(`stats.items.${i}.value`), label: t(`stats.items.${i}.label`) });
  }
  const visibleProjects = projects.filter((p) => p.published !== false).slice(0, 3);
  const visibleSectors = sectors.slice(0, 6);

  return (
    <>
      <Seo
        title={t("meta.home.title")}
        description={t("meta.home.description")}
        path="/"
        jsonLd={[organizationJsonLd()]}
      />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-950 md:items-center">
        <div className="absolute inset-0">
          <Media
            src={images.hero}
            alt=""
            label="Infrastructures d'envergure"
            icon="Building2"
            className="h-full w-full"
            eager
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/55 to-ink-950/92" />
          <div className="absolute inset-0 bg-grid-dark opacity-70" />
        </div>

        <div className="container-x relative flex flex-col pb-24 pt-40 md:pb-28 md:pt-48">
          <p className="overline hero-anim flex items-center gap-3" style={{ animationDelay: "0.1s" }}>
            <span className="h-px w-10 bg-current" aria-hidden="true" />
            {t("hero.overline")}
          </p>
          <h1
            className="t-display on-dark mt-6 max-w-4xl text-balance hero-anim"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.title")}
          </h1>
          <p
            className="on-dark mt-6 max-w-2xl text-lg leading-relaxed text-white/75 hero-anim"
            style={{ animationDelay: "0.3s" }}
          >
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row hero-anim" style={{ animationDelay: "0.4s" }}>
            <ButtonLink to={localize("/soumettre-un-projet")} variant="primary" size="lg">
              {t("hero.ctaPrimary")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to={localize("/expertise")} variant="outline-light" size="lg">
              {t("hero.ctaSecondary")}
            </ButtonLink>
          </div>
          <a
            href="#intro"
            className="mt-14 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-white/50 transition-colors hover:text-gold-400"
            style={{ animationDelay: "0.5s" }}
          >
            {t("hero.scroll")}
            <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section id="intro" className="section bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative">
              <Media
                src={images.about}
                alt={t("intro.title")}
                label={t("intro.overline")}
                icon="Building2"
                className="aspect-[4/5] w-full rounded-[3px]"
              />
              <div className="absolute -bottom-6 -right-6 hidden border border-mist-200 bg-white p-6 shadow-panel md:block">
                <p className="overline-on-light">{t("approach.overline")}</p>
                <p className="mt-2 max-w-[220px] font-display text-sm font-semibold leading-snug text-ink-900">
                  {t("finance.title")}
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div>
            <SectionHeading overline={t("intro.overline")} title={t("intro.title")} body={t("intro.body")} />
            <ScrollReveal className="mt-9">
              <ButtonLink to={localize("/expertise")} variant="dark" size="lg">
                {t("intro.cta")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-mist-200 bg-mist-50">
        <div className="container-x py-16">
          <ScrollReveal className="flex flex-col items-center text-center">
            <p className="overline flex items-center gap-3">
              <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
              {t("stats.overline")}
              <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
            </p>
            <h2 className="t-h2 mt-4">{t("stats.title")}</h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 60}>
                <div className="relative border-t border-mist-300 pt-6">
                  <Stat value={s.value} label={s.label} />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10">
            <p className="text-center text-xs text-mist-400">{t("stats.note")}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-dark on-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading
            dark
            align="center"
            overline={t("approach.overline")}
            title={t("approach.title")}
            body={t("approach.subtitle")}
          />
          <div className="mt-16">
            <ApproachTimeline />
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              overline={t("homeSectors.overline")}
              title={t("homeSectors.title")}
              body={t("homeSectors.subtitle")}
            />
            <ScrollReveal className="shrink-0">
              <ButtonLink to={localize("/secteurs")} variant="outline-dark">
                {t("homeSectors.cta")}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </ScrollReveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleSectors.map((sector, i) => (
              <ScrollReveal key={sector.id} delay={(i % 3) * 60} className="h-full">
                <SectorCard sector={sector} index={i} />
              </ScrollReveal>
            ))}
            {/* CTA tile completes the grid */}
            <ScrollReveal delay={120}>
              <Link
                to={localize("/secteurs")}
                className="group flex h-full min-h-[320px] flex-col justify-between rounded-[3px] border border-dashed border-ink-900/20 bg-mist-50 p-7 transition-all duration-300 hover:border-gold-500/60 hover:bg-mist-100"
              >
                <Building2 className="h-8 w-8 text-ink-800/40 transition-colors group-hover:text-gold-600" strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-900">{t("homeSectors.cta")}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-gold-600">
                    {t("common.viewAll")}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROJECT FINANCE */}
      <FinanceSection />

      {/* PROJECTS */}
      {visibleProjects.length > 0 && (
        <section className="section bg-white">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                overline={t("homeProjects.overline")}
                title={t("homeProjects.title")}
                body={t("homeProjects.subtitle")}
              />
              <ScrollReveal className="shrink-0">
                <ButtonLink to={localize("/projets")} variant="outline-dark">
                  {t("homeProjects.viewAll")}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </ScrollReveal>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={(i % 3) * 60} className="h-full">
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AFRICA */}
      <AfricaMap />

      {/* ECOSYSTEM */}
      {site.content.partners && <EcosystemSection />}

      {/* GALLERY */}
      <GallerySection />

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
