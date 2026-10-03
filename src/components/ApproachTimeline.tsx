import { useI18n } from "@/i18n";
import { ScrollReveal } from "./ScrollReveal";

/** The six project steps. Three columns on desktop, stacked on mobile. */
export function ApproachTimeline() {
  const { t } = useI18n();

  return (
    <ol className="grid gap-x-10 gap-y-12 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => {
        const step = t(`approach.steps.${i}.title`);
        return (
          <li key={step}>
            <ScrollReveal delay={i * 60}>
              <span className="font-serif text-sm text-gold-400">{i + 1}.</span>
              <h3 className="mt-3 font-serif text-2xl font-normal text-white">{step}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {t(`approach.steps.${i}.body`)}
              </p>
            </ScrollReveal>
          </li>
        );
      })}
    </ol>
  );
}
