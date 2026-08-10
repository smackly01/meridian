import { Lock } from "lucide-react";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SubmitProjectForm } from "@/components/form/SubmitProjectForm";
import { images } from "@/config/images";

export default function SubmitProjectPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        seoPath="submit"
        overline={t("submitPage.hero.overline")}
        title={t("submitPage.hero.title")}
        body={t("submitPage.hero.body")}
        image={images.projects}
      />

      <section className="section bg-mist-50">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="rounded-[3px] border border-mist-200 bg-white p-6 shadow-panel md:p-10">
                <div className="mb-8 flex items-start gap-3 rounded-[3px] border border-gold-500/30 bg-gold-500/5 p-4">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-mist-600">
                    {t("submitPage.step5.confidentiality")}
                  </p>
                </div>
                <SubmitProjectForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
