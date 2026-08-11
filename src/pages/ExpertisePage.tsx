import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ButtonLink } from "@/components/Button";
import { images } from "@/config/images";

const BLOCK_KEYS = ["problem", "approach", "expertise", "outcome"] as const;

export default function ExpertisePage() {
  const { t, localize } = useI18n();

  return (
    <>
      <PageHero
        seoPath="expertise"
        overline={t("expertise.hero.overline")}
        title={t("expertise.hero.title")}
        body={t("expertise.hero.body")}
        image={images.expertise}
      />

      <section className="section bg-white">
        <div className="container-x">
          <ol className="space-y-16 md:space-y-20">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i}>
                <ScrollReveal>
                  <div className="grid gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4">
                        <span className="font-display text-5xl font-extrabold text-mist-200">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-mist-200" aria-hidden="true" />
                      </div>
                      <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-ink-900">
                        {t(`expertise.items.${i}.title`)}
                      </h2>
                    </div>
                    <div className="grid gap-px overflow-hidden rounded-[3px] border border-mist-200 bg-mist-200 sm:grid-cols-2 lg:col-span-8">
                      {BLOCK_KEYS.map((key) => (
                        <div key={key} className="bg-white p-6">
                          <p className="overline-on-light">{t(`expertise.labels.${key}`)}</p>
                          <p className="mt-3 text-sm leading-relaxed text-mist-600">
                            {t(`expertise.items.${i}.${key}`)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>

          <ScrollReveal className="mt-20 border-t border-mist-200 pt-12 text-center">
            <ButtonLink to={localize("/contact")} variant="primary" size="lg">
              {t("common.contactUs")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
