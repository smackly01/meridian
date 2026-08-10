import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

function Logo({ className }: { className?: string }) {
  return (
    <Link
      to={useI18n().localize("/")}
      aria-label="Méridian - Accueil"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="4" fill="currentColor" className="text-gold-500" />
        <path
          d="M18 46V28M27 46V18M36 46V24M45 46V32M12 46h44"
          stroke="#081426"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-[0.18em] text-white">
          Méridian
        </span>
        <span className="mt-1 font-display text-[0.55rem] font-semibold uppercase tracking-overline text-gold-400/90">
          Infrastructure &amp; Finance
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const { t, localize } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items: { key: string; to: string }[] = [
    { key: "about", to: "/a-propos" },
    { key: "expertise", to: "/expertise" },
    { key: "sectors", to: "/secteurs" },
    { key: "projects", to: "/projets" },
    { key: "news", to: "/actualites" },
    { key: "contact", to: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        scrolled || open
          ? "border-b border-white/10 bg-ink-900/95 shadow-panel backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <Link
              key={item.key}
              to={localize(item.to)}
              className="group relative font-display text-[0.82rem] font-semibold tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {t(`nav.${item.key}`)}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher inverted />
          <Link
            to={localize("/soumettre-un-projet")}
            className="inline-flex h-10 items-center gap-2 rounded-[3px] bg-gold-500 px-5 font-display text-[0.82rem] font-bold tracking-wide text-ink-900 transition-all hover:bg-gold-400"
          >
            {t("nav.submit")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t("common.close") : t("common.menu")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/20 text-white transition-colors hover:bg-white/5 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-y-auto overscroll-contain bg-ink-900 transition-[max-height] duration-500 ease-premium lg:hidden",
          open ? "max-h-[calc(100svh-76px)] border-t border-white/10" : "max-h-0",
        )}
      >
        <nav
          aria-label="Navigation mobile"
          className="container-x flex flex-col gap-1 py-6"
        >
          {items.map((item, i) => (
            <Link
              key={item.key}
              to={localize(item.to)}
              style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
              className={cn(
                "border-b border-white/5 py-4 font-display text-lg font-semibold text-white/90 transition-all hover:text-gold-400",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
              )}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <div className="mt-6 flex items-center justify-between gap-4">
            <LanguageSwitcher inverted />
            <Link
              to={localize("/soumettre-un-projet")}
              className="inline-flex h-10 items-center gap-2 rounded-[3px] bg-gold-500 px-5 font-display text-sm font-bold text-ink-900"
            >
              {t("nav.submit")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
