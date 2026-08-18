import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { legalSections } from "@/data/legal";
import { images } from "@/config/images";
import { tx } from "@/lib/utils";

export default function LegalPage({ page }: { page: "legal" | "privacy" }) {
  const { t, lang } = useI18n();
  const sections = legalSections[page];
  const isLegal = page === "legal";

  return (
    <>
      <PageHero
        seoPath={page}
        path={isLegal ? "/mentions-legales" : "/politique-de-confidentialite"}
        overline={t(`legalPage.${page}.overline`)}
        title={t(`legalPage.${page}.title`)}
        body={t(`legalPage.${page}.body`)}
        image={images.about}
      />
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <ScrollReveal key={i}>
                <h2 className="t-h3">{tx(s.title, lang)}</h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-base leading-relaxed text-mist-600">
                      {tx(p, lang)}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
