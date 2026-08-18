import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { cn, tx } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { sectors } from "@/data/sectors";
import { LanguageSwitcher } from "./LanguageSwitcher";

function Logo({ className }: { className?: string }) {
  return (
    <Link
      to={useI18n().localize("/")}
      aria-label="Fil Investment Group - Accueil"
      className={cn("group inline-flex items-center", className)}
    >
      <img src="/logo.jpeg" alt="Fil Investment Group" className="h-12 w-auto" />
    </Link>
  );
}

function SectorsDropdown() {
  const { t, lang, localize } = useI18n();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive =
    location.pathname === localize("/secteurs") ||
    location.pathname.startsWith(localize("/secteurs") + "/");

  const openDropdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        type="button"
        className={cn(
          "group relative inline-flex items-center gap-1.5 font-display text-[0.82rem] font-semibold tracking-wide transition-colors hover:text-white",
          isActive ? "text-white" : "text-white/80",
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => {
          if (open) closeDropdown();
          else openDropdown();
        }}
      >
        {t("nav.sectors")}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
        <span
          className={cn(
            "absolute -bottom-1.5 left-0 h-px bg-gold-500 transition-all duration-300",
            isActive ? "w-full" : "w-0 group-hover:w-full",
          )}
        />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 -translate-x-4 pt-3 transition-all duration-300 ease-premium",
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
      >
        <div
          className="w-[520px] rounded-[6px] border border-white/10 bg-ink-900/95 p-2 shadow-panel backdrop-blur-xl"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <div className="grid grid-cols-2 gap-1.5">
            {sectors.map((sector, i) => {
              const Icon = getIcon(sector.icon);
              return (
                <Link
                  key={sector.id}
                  to={localize(`/secteurs/${sector.slug}`)}
                  className="group/card relative flex gap-3.5 rounded-[4px] p-3 transition-colors duration-200 hover:bg-white/5"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-[3px]">
                    <img
                      src={sector.image}
                      alt={tx(sector.name, lang)}
                      className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover/card:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                    <div className="absolute left-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-[2px] border border-white/20 bg-ink-900/50 backdrop-blur-sm">
                      <Icon className="h-3 w-3 text-gold-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <span className="font-display text-[0.6rem] font-semibold uppercase tracking-overline text-gold-500/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-0.5 font-display text-[0.82rem] font-bold leading-snug text-white/90 transition-colors group-hover/card:text-white">
                      {tx(sector.name, lang)}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-[0.7rem] leading-relaxed text-white/45">
                      {tx(sector.short, lang)}
                    </p>
                  </div>
                  <ArrowUpRight className="absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/0 transition-all duration-200 group-hover/card:text-gold-400/70" />
                </Link>
              );
            })}
          </div>
          <div className="mt-1.5 border-t border-white/5 pt-1.5">
            <Link
              to={localize("/secteurs")}
              className="flex items-center justify-center gap-1.5 rounded-[3px] py-2 font-display text-[0.75rem] font-semibold text-white/60 transition-colors hover:text-gold-400"
            >
              {t("homeSectors.cta")}
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { t, lang, localize } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileSectorsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const items: { key: string; to: string; hasDropdown?: boolean }[] = [
    { key: "home", to: "/" },
    { key: "about", to: "/a-propos" },
    { key: "expertise", to: "/expertise" },
    { key: "sectors", to: "/secteurs", hasDropdown: true },
    { key: "projects", to: "/projets" },
    { key: "news", to: "/actualites" },
    { key: "contact", to: "/contact" },
  ];

  const isActive = (to: string): boolean => {
    const active = localize(to);
    if (active === localize("/")) return location.pathname === active;
    return location.pathname === active || location.pathname.startsWith(active + "/");
  };

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
          {items.map((item) =>
            item.hasDropdown ? (
              <SectorsDropdown key={item.key} />
            ) : (
              <Link
                key={item.key}
                to={localize(item.to)}
                className={cn(
                  "group relative font-display text-[0.82rem] font-semibold tracking-wide transition-colors hover:text-white",
                  isActive(item.to) ? "text-white" : "text-white/80",
                )}
              >
                {t(`nav.${item.key}`)}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-gold-500 transition-all duration-300",
                    isActive(item.to) ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher inverted />
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
          {items.map((item, i) =>
            item.hasDropdown ? (
              <div
                key={item.key}
                style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                className={cn(
                  "border-b border-white/5 transition-all",
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                )}
              >
                <button
                  type="button"
                  onClick={() => setMobileSectorsOpen((v) => !v)}
                  className={cn(
                    "flex w-full items-center justify-between py-4 font-display text-lg font-semibold transition-colors hover:text-gold-400",
                    isActive(item.to) || mobileSectorsOpen ? "text-gold-400" : "text-white/90",
                  )}
                >
                  {t(`nav.${item.key}`)}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      mobileSectorsOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-[max-height] duration-400 ease-premium",
                    mobileSectorsOpen ? "max-h-[600px]" : "max-h-0",
                  )}
                >
                  <div className="grid grid-cols-2 gap-2 pb-4 pt-1">
                    {sectors.map((sector) => {
                      const Icon = getIcon(sector.icon);
                      return (
                        <Link
                          key={sector.id}
                          to={localize(`/secteurs/${sector.slug}`)}
                          className="group/mobile relative overflow-hidden rounded-[3px] border border-white/5 bg-white/[0.03] p-2.5 transition-colors hover:bg-white/[0.06]"
                        >
                          <div className="relative mb-2 h-14 w-full overflow-hidden rounded-[2px]">
                            <img
                              src={sector.image}
                              alt={tx(sector.name, lang)}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover/mobile:scale-110"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                            <div className="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-[2px] bg-ink-900/50 backdrop-blur-sm">
                              <Icon className="h-2.5 w-2.5 text-gold-400" strokeWidth={1.5} />
                            </div>
                          </div>
                          <h3 className="font-display text-xs font-bold leading-snug text-white/90">
                            {tx(sector.name, lang)}
                          </h3>
                          <p className="mt-0.5 line-clamp-2 text-[0.65rem] leading-relaxed text-white/40">
                            {tx(sector.short, lang)}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.key}
                to={localize(item.to)}
                style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                className={cn(
                  "border-b border-white/5 py-4 font-display text-lg font-semibold transition-all hover:text-gold-400",
                  isActive(item.to) ? "text-gold-400" : "text-white/90",
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ),
          )}
          <div className="mt-6 flex items-center justify-between gap-4">
            <LanguageSwitcher inverted />
          </div>
        </nav>
      </div>
    </header>
  );
}
