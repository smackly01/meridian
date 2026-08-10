import { useI18n } from "@/i18n";
import { ScrollReveal } from "./ScrollReveal";

/**
 * The transformation journey - 6 steps, then the impact chain.
 * Horizontal stepper on desktop, vertical on mobile.
 */
export function ApproachTimeline() {
  const { t } = useI18n();

  return (
    <div>
      {/* Stepper */}
      <ol className="relative grid gap-10 md:grid-cols-3 lg:gap-8">
        {/* connecting line on desktop */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-white/12 md:block"
          aria-hidden="true"
        />
        {Array.from({ length: 6 }).map((_, i) => {
          const step = t(`approach.steps.${i}.title`);
          const body = t(`approach.steps.${i}.body`);
          return (
            <li key={step} className="relative">
              <ScrollReveal delay={i * 60}>
                <div className="group flex gap-5 md:flex-col md:gap-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-ink-900 font-display text-sm font-bold text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-ink-900">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="md:mt-5">
                    <h3 className="font-display text-lg font-bold text-white">{step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
                  </div>
                </div>
              </ScrollReveal>
            </li>
          );
        })}
      </ol>

      {/* Journey chain */}
      <ScrollReveal className="mt-16 border-t border-white/10 pt-10">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="contents">
              <span className="font-display text-[0.8rem] font-semibold uppercase tracking-widest text-white/70">
                {t(`approach.journey.${i}`)}
              </span>
              {i < 6 && (
                <span className="text-gold-500" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
