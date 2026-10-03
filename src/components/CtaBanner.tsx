import { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { gsap, prefersReducedMotion } from "@/lib/motion";
import { ButtonLink } from "./Button";
import { ScrollReveal } from "./ScrollReveal";
import { Media } from "./Media";
import { images } from "@/config/images";

/** Full-width call-to-action banner, used at the bottom of pages. */
export function CtaBanner() {
  const { t, localize } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;
    const bg = section.querySelector<HTMLElement>("[data-cta-bg]");
    if (!bg) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { yPercent: -6, scale: 1.1 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="relative overflow-hidden bg-ink-900 py-20 md:py-28">
      <div data-cta-bg className="absolute inset-0">
        <Media src={images.projects} alt="" className="h-full w-full" eager />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/92 via-ink-950/78 to-ink-950/92" />
      </div>
      <div className="container-x relative max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="t-h1 on-dark text-balance">{t("ctaBanner.title")}</h2>
          <p className="on-dark mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {t("ctaBanner.body")}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink to={localize("/contact")} variant="primary" size="lg">
              {t("common.contactUs")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
