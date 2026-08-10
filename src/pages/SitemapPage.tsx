import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { sectors } from "@/data/sectors";
import { images } from "@/config/images";
import { tx } from "@/lib/utils";

export default function SitemapPage() {
  const { t, lang, localize } = useI18n();

  const mainPages = [
    { to: "/", label: t("nav.home") },
    { to: "/a-propos", label: t("nav.about") },
    { to: "/expertise", label: t("nav.expertise") },
    { to: "/secteurs", label: t("nav.sectors") },
    { to: "/projets", label: t("nav.projects") },
    { to: "/partenaires", label: t("nav.partners") },
    { to: "/actualites", label: t("nav.news") },
    { to: "/contact", label: t("nav.contact") },
    { to: "/soumettre-un-projet", label: t("nav.submit") },
  ];

  const infoPages = [
    { to: "/mentions-legales", label: t("footer.legal") },
    { to: "/politique-de-confidentialite", label: t("footer.privacy") },
  ];

  return (
    <>
      <PageHero
        seoPath="sitemap"
        overline={t("sitemapPage.overline")}
        title={t("sitemapPage.title")}
        body={t("sitemapPage.body")}
        image={images.africa}
      />

      <section className="section bg-white">
        <div className="container-x grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal>
            <div>
              <h2 className="overline-on-light">{t("sitemapPage.mainTitle")}</h2>
              <ul className="mt-5 space-y-3">
                {mainPages.map((page) => (
                  <li key={page.to}>
                    <Link
                      to={localize(page.to)}
                      className="group inline-flex items-center gap-2 font-display text-base font-semibold text-ink-900 transition-colors hover:text-gold-600"
                    >
                      {page.label}
                      <ArrowUpRight
                        className="h-4 w-4 text-gold-500 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div>
              <h2 className="overline-on-light">{t("footer.sectorsTitle")}</h2>
              <ul className="mt-5 space-y-3">
                {sectors.map((sector) => (
                  <li key={sector.id}>
                    <Link
                      to={localize(`/secteurs/${sector.slug}`)}
                      className="group inline-flex items-center gap-2 font-display text-base font-semibold text-ink-900 transition-colors hover:text-gold-600"
                    >
                      {tx(sector.name, lang)}
                      <ArrowUpRight
                        className="h-4 w-4 text-gold-500 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div>
              <h2 className="overline-on-light">{t("sitemapPage.infoTitle")}</h2>
              <ul className="mt-5 space-y-3">
                {infoPages.map((page) => (
                  <li key={page.to}>
                    <Link
                      to={localize(page.to)}
                      className="group inline-flex items-center gap-2 font-display text-base font-semibold text-ink-900 transition-colors hover:text-gold-600"
                    >
                      {page.label}
                      <ArrowUpRight
                        className="h-4 w-4 text-gold-500 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
