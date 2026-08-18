import { Building2, Landmark, TrendingUp, HardHat, Briefcase } from "lucide-react";
import { useI18n } from "@/i18n";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { NextSectionArrow } from "./NextSectionArrow";

const CATEGORY_ICONS = [Landmark, Landmark, TrendingUp, HardHat, Briefcase];

/** Ecosystem of partner types - logos are added later, categories are real. */
export function EcosystemSection() {
  const { t } = useI18n();

  return (
    <section id="ecosystem" className="section relative bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          overline={t("ecosystem.overline")}
          title={t("ecosystem.title")}
          body={t("ecosystem.subtitle")}
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[3px] border border-mist-200 bg-mist-200 sm:grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => {
            const Icon = CATEGORY_ICONS[i] ?? Building2;
            return (
              <ScrollReveal key={i} delay={i * 60} className="h-full">
                <div className="group flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-mist-50">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-mist-200 text-ink-800 transition-colors group-hover:border-gold-500/50 group-hover:text-gold-600">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold leading-snug text-ink-900">
                    {t(`ecosystem.categories.${i}.title`)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">
                    {t(`ecosystem.categories.${i}.body`)}
                  </p>
                  <p className="mt-5 border-t border-dashed border-mist-300 pt-3 text-xs text-mist-400">
                    {t("ecosystem.placeholder")}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal className="mt-10">
          <p className="text-center text-xs text-mist-400">{t("common.placeholderNote")}</p>
        </ScrollReveal>
      </div>
      <NextSectionArrow href="#galerie" />
    </section>
  );
}
