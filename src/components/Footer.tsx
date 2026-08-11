import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { site } from "@/config/site";
import { sectors } from "@/data/sectors";
import { tx } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const { t, lang, localize } = useI18n();

  const nav = [
    { key: "home", to: "/" },
    { key: "about", to: "/a-propos" },
    { key: "expertise", to: "/expertise" },
    { key: "sectors", to: "/secteurs" },
    { key: "projects", to: "/projets" },
    { key: "partners", to: "/partenaires" },
    { key: "news", to: "/actualites" },
    { key: "contact", to: "/contact" },
  ];

  const socials = [
    { href: site.social.facebook, Icon: Facebook, label: "Facebook" },
    { href: site.social.instagram, Icon: Instagram, label: "Instagram" },
    { href: site.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-x pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="inline-flex items-center gap-3">
              <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
                <rect width="64" height="64" rx="4" fill="#C9A35C" />
                <path
                  d="M18 46V28M27 46V18M36 46V24M45 46V32M12 46h44"
                  stroke="#081426"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-display text-lg font-extrabold tracking-[0.18em]">
                Méridian
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-white/15 text-white/70 transition-colors hover:border-gold-500 hover:text-gold-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-overline text-gold-400">
              {t("footer.navTitle")}
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.key}>
                  <Link
                    to={localize(item.to)}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-overline text-gold-400">
              {t("footer.sectorsTitle")}
            </h3>
            <ul className="mt-5 space-y-3">
              {sectors.map((s) => (
                <li key={s.id}>
                  <Link
                    to={localize(`/secteurs/${s.slug}`)}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {tx(s.name, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-overline text-gold-400">
              {t("footer.contactTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500/70" aria-hidden="true" />
                <span>{site.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-500/70" aria-hidden="true" />
                <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-500/70" aria-hidden="true" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="mb-2 font-display text-xs font-bold uppercase tracking-overline text-gold-400">
                {t("footer.language")}
              </p>
              <LanguageSwitcher inverted />
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-balance font-display text-base font-bold uppercase tracking-[0.18em] text-white/40 sm:text-xl sm:tracking-[0.22em] lg:text-2xl lg:tracking-[0.28em]">
            {t("footer.statement")}
          </p>
        </div>

        {/* Legal bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {site.legalName}. {t("common.notAvailable")}
          </p>
          <div className="flex items-center gap-6">
            <Link to={localize("/mentions-legales")} className="text-xs text-white/45 hover:text-white">
              {t("footer.legal")}
            </Link>
            <Link
              to={localize("/politique-de-confidentialite")}
              className="text-xs text-white/45 hover:text-white"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              to={localize("/plan-du-site")}
              className="text-xs text-white/45 hover:text-white"
            >
              {t("footer.sitemap")}
            </Link>
            <Link
              to={localize("/contact")}
              aria-label={t("footer.contactTitle")}
              className="inline-flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300"
            >
              {t("footer.contactTitle")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
