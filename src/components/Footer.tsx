import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { site } from "@/config/site";
import { sectors } from "@/data/sectors";
import { tx } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ScrollReveal } from "./ScrollReveal";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16ZM12 7.7a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6Zm0 7.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm5.46-8.96a1.005 1.005 0 1 0 0 2.01 1.005 1.005 0 0 0 0-2.01Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

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
    { href: site.social.facebook, Icon: FacebookIcon, label: "Facebook" },
    { href: site.social.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: site.social.linkedin, Icon: LinkedInIcon, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-x pb-10 pt-16 md:pt-20">
        <ScrollReveal className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="inline-flex items-center">
              <img src="/logo.jpeg" alt="Fil Investment Group" className="h-12 w-auto" />
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
            <div className="mt-5">
              <p className="mb-1.5 font-display text-xs font-bold uppercase tracking-overline text-gold-400">
                {t("footer.language")}
              </p>
              <LanguageSwitcher inverted />
            </div>
          </div>
        </ScrollReveal>

        {/* Legal bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {site.legalName}. {t("footer.rights")}
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
