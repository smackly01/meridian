import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
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
import { NextSectionArrow } from "@/components/NextSectionArrow";
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
  const visibleSectors = sectors.slice(0, 4);

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
            <ButtonLink to={localize("/contact")} variant="primary" size="lg">
              {t("common.contactUs")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to={localize("/expertise")} variant="outline-light" size="lg">
              {t("hero.ctaSecondary")}
            </ButtonLink>
          </div>
          <a
            href="#intro"
            className="mt-32 inline-flex h-16 w-16 items-center justify-center self-center rounded-full border border-white/25 text-white/60 transition-colors hover:border-gold-400 hover:text-gold-400 md:mt-44"
            style={{ animationDelay: "0.5s" }}
            aria-label={t("hero.scroll")}
          >
            <ChevronDown className="h-9 w-9 animate-bounce" strokeWidth={2.5} aria-hidden="true" />
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
        <NextSectionArrow href="#stats" />
      </section>

      {/* STATS */}
      <section id="stats" className="border-y border-mist-200 bg-mist-50">
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
          <NextSectionArrow href="#approach" />
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="section-dark on-dark relative overflow-hidden">
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
          <NextSectionArrow href="#secteurs" dark />
        </div>
      </section>

      {/* SECTORS */}
      <section id="secteurs" className="section bg-white">
        <div className="container-x">
          <SectionHeading
            overline={t("homeSectors.overline")}
            title={t("homeSectors.title")}
            body={t("homeSectors.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleSectors.map((sector, i) => (
              <ScrollReveal key={sector.id} delay={(i % 4) * 60} className="h-full">
                <SectorCard sector={sector} index={i} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12 flex justify-center">
            <ButtonLink to={localize("/secteurs")} variant="outline-dark">
              {t("homeSectors.cta")}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </ScrollReveal>
          <NextSectionArrow href="#finance" />
        </div>
      </section>

      {/* FINANCE */}
      <FinanceSection />

      {/* PROJECTS */}
      {visibleProjects.length > 0 && (
        <section id="projets" className="section bg-white">
          <div className="container-x">
            <SectionHeading
              overline={t("homeProjects.overline")}
              title={t("homeProjects.title")}
              body={t("homeProjects.subtitle")}
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={(i % 3) * 60} className="h-full">
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal className="mt-12 flex justify-center">
              <ButtonLink to={localize("/projets")} variant="outline-dark">
                {t("homeProjects.viewAll")}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </ScrollReveal>
            <NextSectionArrow href="#africa" />
          </div>
        </section>
      )}

      {/* AFRICA */}
      <AfricaMap nextHref={site.content.partners ? "#ecosystem" : "#galerie"} />

      {/* ECOSYSTEM */}
      {site.content.partners && <EcosystemSection />}

      {/* GALLERY */}
      <GallerySection />

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
