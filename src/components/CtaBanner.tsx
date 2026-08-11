import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { ButtonLink } from "./Button";
import { ScrollReveal } from "./ScrollReveal";
import { Media } from "./Media";
import { images } from "@/config/images";

/** Full-width call-to-action banner, used at the bottom of pages. */
export function CtaBanner() {
  const { t, localize } = useI18n();

  return (
    <section id="cta" className="relative overflow-hidden bg-ink-900 py-20 md:py-28">
      <div className="absolute inset-0">
        <Media src={images.projects} alt="" className="h-full w-full" eager />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/92 via-ink-950/78 to-ink-950/92" />
      </div>
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" aria-hidden="true" />
      <div
        className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,163,92,0.16) 0%, rgba(201,163,92,0) 70%)" }}
        aria-hidden="true"
      />
      <div className="container-x relative max-w-3xl text-center">
        <ScrollReveal>
          <span className="overline flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
            {t("hero.overline")}
            <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
          </span>
          <h2 className="t-h1 on-dark mt-5 text-balance">{t("ctaBanner.title")}</h2>
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
