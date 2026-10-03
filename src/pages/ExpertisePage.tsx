import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { images } from "@/config/images";

const BLOCK_KEYS = ["problem", "approach", "expertise", "outcome"] as const;

export default function ExpertisePage() {
  const { t } = useI18n();

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
                      <span className="font-serif text-lg text-gold-600">{i + 1}.</span>
                      <h2 className="mt-3 font-serif text-3xl font-normal leading-snug text-ink-900">
                        {t(`expertise.items.${i}.title`)}
                      </h2>
                    </div>
                    <div className="grid gap-px overflow-hidden rounded-card border border-mist-200 bg-mist-200 sm:grid-cols-2 lg:col-span-8">
                      {BLOCK_KEYS.map((key) => (
                        <div key={key} className="bg-white p-6">
                          <p className="eyebrow">{t(`expertise.labels.${key}`)}</p>
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
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
