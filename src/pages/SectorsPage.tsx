import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { SectorCard } from "@/components/SectorCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { sectors } from "@/data/sectors";
import { images } from "@/config/images";

export default function SectorsPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        seoPath="sectors"
        overline={t("sectorsPage.hero.overline")}
        title={t("sectorsPage.hero.title")}
        body={t("sectorsPage.hero.body")}
        image={images.africa}
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal>
              <p className="overline mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
                {t("sectorsPage.subtitle.overline")}
                <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
              </p>
              <h2 className="t-h2 text-balance">{t("sectorsPage.subtitle.title")}</h2>
              <p className="mt-5 text-lg leading-relaxed text-mist-600">
                {t("sectorsPage.subtitle.body")}
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.id} delay={(i % 3) * 60} className="h-full">
                <SectorCard sector={sector} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
