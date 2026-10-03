import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ButtonLink } from "@/components/Button";
import { partners } from "@/data/partners";
import { images } from "@/config/images";
import { site } from "@/config/site";
import { tx } from "@/lib/utils";
import type { PartnerCategory } from "@/types";

const CATEGORY_ORDER: PartnerCategory[] = [
  "public",
  "finance",
  "investment",
  "technical",
  "engineering",
  "construction",
  "technology",
];

export default function PartnersPage() {
  const { t, lang, localize } = useI18n();

  return (
    <>
      <PageHero
        seoPath="partners"
        overline={t("partnersPage.hero.overline")}
        title={t("partnersPage.hero.title")}
        body={t("partnersPage.hero.body")}
        image={images.partners}
      />

      <section className="section bg-white">
        <div className="container-x">
          {site.content.partners ? (
            <>
              <SectionHeading
                align="center"
                overline={t("ecosystem.overline")}
                title={t("ecosystem.title")}
                body={t("ecosystem.subtitle")}
              />

              <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {CATEGORY_ORDER.map((cat, i) => {
                  const catPartners = partners.filter((p) => p.category === cat);
                  return (
                    <ScrollReveal key={cat} delay={(i % 3) * 60}>
                      <div className="flex h-full flex-col rounded-card border border-mist-200 p-7 transition-colors hover:border-ink-900/20 hover:bg-mist-50">
                        <h3 className="font-display text-lg font-semibold text-ink-900">
                          {t(`partnersPage.categories.${i}.title`)}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-mist-500">
                          {t(`partnersPage.categories.${i}.body`)}
                        </p>
                        <div className="mt-5 flex-1 space-y-2">
                          {catPartners.length === 0 ? (
                            <p className="rounded-[3px] border border-dashed border-mist-300 px-4 py-5 text-center text-xs text-mist-400">
                              {t("partnersPage.slotLabel")}
                            </p>
                          ) : (
                            catPartners.map((p) => (
                              <div
                                key={p.id}
                                className="flex items-center justify-between rounded-[3px] border border-dashed border-mist-300 px-4 py-3"
                              >
                                <span className="font-display text-xs font-semibold text-mist-500">
                                  {tx(p.name, lang)}
                                </span>
                                <span className="text-[0.65rem] uppercase tracking-wider text-mist-400">
                                  {tx(p.type, lang)}
                                </span>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}

                {/* Become a partner */}
                <ScrollReveal>
                  <div className="flex h-full flex-col justify-end rounded-card bg-ink-900 p-7 text-white">
                    <div>
                      <h3 className="font-serif text-2xl font-normal text-white">{t("common.becomePartner")}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {t("ctaBanner.body")}
                      </p>
                      <ButtonLink to={localize("/contact")} variant="primary" className="mt-5">
                        {t("common.contactUs")}
                      </ButtonLink>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal className="mt-12">
                <p className="text-center text-xs text-mist-400">{t("common.placeholderNote")}</p>
              </ScrollReveal>
            </>
          ) : (
            <>
              <SectionHeading
                overline={t("partnersPage.families.overline")}
                title={t("partnersPage.families.title")}
              />
              <dl className="mt-12 border-t border-mist-200">
                {Array.from({ length: 4 }).map((_, i) => (
                  <ScrollReveal
                    key={i}
                    className="grid gap-3 border-b border-mist-200 py-8 md:grid-cols-12 md:gap-10"
                  >
                    <dt className="font-serif text-2xl leading-snug text-ink-900 md:col-span-5">
                      {t(`partnersPage.families.items.${i}.title`)}
                    </dt>
                    <dd className="text-base leading-relaxed text-mist-600 md:col-span-7">
                      {t(`partnersPage.families.items.${i}.body`)}
                    </dd>
                  </ScrollReveal>
                ))}
              </dl>
            </>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
