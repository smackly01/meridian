import { Check, ArrowRight, ArrowDown } from "lucide-react";
import { useI18n } from "@/i18n";
import { ButtonLink } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { NextSectionArrow } from "./NextSectionArrow";

export function FinanceSection() {
  const { t, localize } = useI18n();
  const points: string[] = [];
  const flow: string[] = [];
  for (let i = 0; i < 5; i++) points.push(t(`finance.points.${i}`));
  for (let i = 0; i < 5; i++) flow.push(t(`finance.flow.${i}`));

  return (
    <section id="finance" className="section bg-mist-50">
      <div className="container-x grid items-start gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            overline={t("finance.overline")}
            title={t("finance.title")}
            body={t("finance.subtitle")}
          />
          <ScrollReveal className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10">
                  <Check className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-ink-800">{p}</span>
              </div>
            ))}
          </ScrollReveal>
          <ScrollReveal className="mt-10">
            <ButtonLink to={localize("/contact")} variant="dark" size="lg">
              {t("finance.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </ScrollReveal>
        </div>

        {/* Flow visualization */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[3px] border border-mist-200 bg-white p-8 shadow-card md:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-ink-800" />
            <p className="overline-on-light mb-8">{t("finance.flowTitle")}</p>
            <ol className="space-y-0">
              {flow.map((label, i) => (
                <li key={label}>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-extrabold text-mist-200">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-semibold text-ink-900">{label}</span>
                  </div>
                  {i < flow.length - 1 && (
                    <div className="ml-5 flex h-8 items-center">
                      <ArrowDown className="h-4 w-4 text-gold-500" aria-hidden="true" />
                      <span className="ml-4 h-px flex-1 bg-mist-200" aria-hidden="true" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
      <NextSectionArrow href="#projets" />
    </section>
  );
}
