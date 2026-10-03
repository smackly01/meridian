import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { ButtonLink } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

export function FinanceSection() {
  const { t, localize } = useI18n();
  const points = Array.from({ length: 5 }, (_, i) => t(`finance.points.${i}`));

  return (
    <section id="finance" className="section relative border-t border-mist-200 bg-mist-50">
      <div className="container-x grid items-start gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            overline={t("finance.overline")}
            title={t("finance.title")}
            body={t("finance.subtitle")}
          />
          <ScrollReveal className="mt-10">
            <ButtonLink to={localize("/contact")} variant="dark" size="lg">
              {t("finance.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="eyebrow">{t("finance.pointsTitle")}</p>
          <ul className="mt-2">
            {points.map((p) => (
              <li key={p} className="border-b border-mist-300 py-5 font-serif text-xl text-ink-900">
                {p}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
