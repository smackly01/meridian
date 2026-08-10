import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/i18n";
import { Seo } from "@/components/Seo";
import { ButtonLink } from "@/components/Button";

export default function NotFoundPage() {
  const { t, localize } = useI18n();

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink-900">
      <Seo
        title={t("meta.notFound.title")}
        description={t("meta.notFound.description")}
        path="/"
      />
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="container-x relative py-32 text-center">
        <p className="font-display text-8xl font-extrabold text-gold-500/25 md:text-9xl">404</p>
        <h1 className="on-dark t-h1 mt-4">{t("notFound.title")}</h1>
        <p className="on-dark mx-auto mt-4 max-w-md text-lg text-white/70">{t("notFound.body")}</p>
        <div className="mt-9 flex justify-center">
          <ButtonLink to={localize("/")} variant="primary" size="lg">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("notFound.action")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
