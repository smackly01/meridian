import { Handshake } from "lucide-react";
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
                      <div className="flex h-full flex-col rounded-[3px] border border-mist-200 p-7 transition-colors hover:border-ink-900/20 hover:bg-mist-50">
                        <h3 className="font-display text-lg font-bold text-ink-900">
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
                  <div className="flex h-full flex-col justify-between rounded-[3px] bg-ink-900 p-7 text-white">
                    <Handshake className="h-8 w-8 text-gold-400" strokeWidth={1.4} aria-hidden="true" />
                    <div>
                      <h3 className="font-display text-lg font-bold">{t("common.becomePartner")}</h3>
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
            <ScrollReveal className="mt-14">
              <div className="mx-auto max-w-2xl rounded-[3px] border border-dashed border-mist-300 bg-mist-50 px-8 py-16 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[3px] border border-gold-500/40 bg-white text-gold-600">
                  <Handshake className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-ink-900">
                  {t("partnersPage.soon.title")}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mist-500">
                  {t("partnersPage.soon.body")}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
