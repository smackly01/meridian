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
    { to: "/", label: t("nav.home"), desc: t("sitemapPage.desc.home") },
    { to: "/a-propos", label: t("nav.about"), desc: t("sitemapPage.desc.about") },
    { to: "/expertise", label: t("nav.expertise"), desc: t("sitemapPage.desc.expertise") },
    { to: "/secteurs", label: t("nav.sectors"), desc: t("sitemapPage.desc.sectors") },
    { to: "/projets", label: t("nav.projects"), desc: t("sitemapPage.desc.projects") },
    { to: "/partenaires", label: t("nav.partners"), desc: t("sitemapPage.desc.partners") },
    { to: "/actualites", label: t("nav.news"), desc: t("sitemapPage.desc.news") },
    { to: "/contact", label: t("nav.contact"), desc: t("sitemapPage.desc.contact") },
  ];

  const infoPages = [
    { to: "/mentions-legales", label: t("footer.legal"), desc: t("sitemapPage.desc.legal") },
    {
      to: "/politique-de-confidentialite",
      label: t("footer.privacy"),
      desc: t("sitemapPage.desc.privacy"),
    },
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
        <div className="container-x grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal>
            <div>
              <h2 className="overline-on-light">{t("sitemapPage.mainTitle")}</h2>
              <ul className="mt-6 space-y-6">
                {mainPages.map((page) => (
                  <li
                    key={page.to}
                    className="border-l-2 border-mist-200 pl-4 transition-colors hover:border-gold-500"
                  >
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
                    <p className="mt-1 text-sm leading-relaxed text-mist-500">{page.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div>
              <h2 className="overline-on-light">{t("footer.sectorsTitle")}</h2>
              <ul className="mt-6 space-y-6">
                {sectors.map((sector) => (
                  <li
                    key={sector.id}
                    className="border-l-2 border-mist-200 pl-4 transition-colors hover:border-gold-500"
                  >
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
                    <p className="mt-1 text-sm leading-relaxed text-mist-500">{tx(sector.short, lang)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div>
              <h2 className="overline-on-light">{t("sitemapPage.infoTitle")}</h2>
              <ul className="mt-6 space-y-6">
                {infoPages.map((page) => (
                  <li
                    key={page.to}
                    className="border-l-2 border-mist-200 pl-4 transition-colors hover:border-gold-500"
                  >
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
                    <p className="mt-1 text-sm leading-relaxed text-mist-500">{page.desc}</p>
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
