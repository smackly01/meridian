import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
import { useLayoutEffect, useRef } from "react";
import { setupHomeAnimations } from "@/lib/animations/home";

export default function HomePage() {
  const { t, localize } = useI18n();

  const stats: { value: string; label: string }[] = [];
  for (let i = 0; i < 5; i++) {
    stats.push({ value: t(`stats.items.${i}.value`), label: t(`stats.items.${i}.label`) });
  }
  const visibleProjects = projects.filter((p) => p.published !== false).slice(0, 3);
  const visibleSectors = sectors.slice(0, 4);

  const rootRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => setupHomeAnimations(rootRef.current), []);

  return (
    <div ref={rootRef}>
      <Seo
        title={t("meta.home.title")}
        description={t("meta.home.description")}
        path="/"
        jsonLd={[organizationJsonLd()]}
      />

      {/* HERO */}
      <section data-hero className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink-950">
        <div data-hero-bg className="absolute inset-0">
          <Media
            src={images.hero}
            alt=""
            label="Infrastructures d'envergure"
            icon="Building2"
            className="h-full w-full"
            eager
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-ink-950/50" />
        </div>

        <div data-hero-content className="container-x relative flex flex-col pb-20 pt-40 md:pb-24">
          <h1
            data-hero-title
            className="t-display on-dark max-w-3xl text-balance"
          >
            {t("hero.title")}
          </h1>
          <p
            data-hero-subtitle
            className="on-dark mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            {t("hero.subtitle")}
          </p>
          <div data-hero-cta className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink to={localize("/contact")} variant="primary" size="lg">
              {t("common.contactUs")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <Link
              to={localize("/expertise")}
              className="font-display text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-[6px] transition-colors hover:text-white hover:decoration-white"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="intro" className="section relative bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <Media
              src={images.about}
              alt={t("intro.title")}
              label={t("intro.overline")}
              icon="Building2"
              className="aspect-[4/5] w-full rounded-card"
              data-intro-media
            />
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
      <section id="stats" className="relative border-y border-mist-200 bg-mist-50">
        <div className="container-x py-16">
          <ScrollReveal>
            <p className="eyebrow">
              {t("stats.overline")}
            </p>
            <h2 className="t-h2 mt-4">{t("stats.title")}</h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 60}>
                <div>
                  <Stat value={s.value} label={s.label} />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10">
            <p className="text-xs text-mist-400">{t("stats.note")}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="section-dark on-dark relative overflow-hidden">
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
      <section id="secteurs" className="section relative bg-white">
        <div className="container-x">
          <SectionHeading
            overline={t("homeSectors.overline")}
            title={t("homeSectors.title")}
            body={t("homeSectors.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleSectors.map((sector, i) => (
              <ScrollReveal key={sector.id} delay={(i % 4) * 60} className="h-full">
                <SectorCard sector={sector} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12 flex justify-center">
            <ButtonLink to={localize("/secteurs")} variant="outline-dark">
              {t("homeSectors.cta")}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </ScrollReveal>
        </div>
      </section>

      {/* FINANCE */}
      <FinanceSection />

      {/* PROJECTS */}
      {visibleProjects.length > 0 && (
        <section id="projets" className="section relative bg-white">
          <div className="container-x">
            <SectionHeading
              overline={t("homeProjects.overline")}
              title={t("homeProjects.title")}
              body={t("homeProjects.subtitle")}
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project) => (
                <div key={project.id} data-project-card className="h-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <ScrollReveal className="mt-12 flex justify-center">
              <ButtonLink to={localize("/projets")} variant="outline-dark">
                {t("homeProjects.viewAll")}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </ScrollReveal>
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
    </div>
  );
}
