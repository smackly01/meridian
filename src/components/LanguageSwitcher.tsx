import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n, LANGS, LOCALE_NAMES, type Lang } from "@/i18n";
import { ACTIVE_LANGS } from "@/config/site";
import { cn } from "@/lib/utils";

/** inline SVG flag for a language (emoji flags render as letters on Windows) */
function LangFlag({ code, className }: { code: Lang; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 overflow-hidden rounded-[2px] shadow-sm ring-1 ring-black/10",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 16" className="h-full w-full" focusable="false">
        {code === "fr" && (
          <>
            <rect width="8" height="16" fill="#0055A4" />
            <rect x="8" width="8" height="16" fill="#FFFFFF" />
            <rect x="16" width="8" height="16" fill="#EF4135" />
          </>
        )}
        {code === "en" && (
          <>
            <rect width="24" height="16" fill="#012169" />
            <path d="M0 0 24 16M24 0 0 16" stroke="#FFFFFF" strokeWidth="3.2" />
            <path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.4" />
            <path d="M12 0v16M0 8h24" stroke="#FFFFFF" strokeWidth="4" />
            <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2" />
          </>
        )}
        {code === "pt" && (
          <>
            <rect width="9.6" height="16" fill="#046A38" />
            <rect x="9.6" width="14.4" height="16" fill="#DA291C" />
            <circle cx="10" cy="8" r="3.4" fill="#FFE900" />
            <circle cx="10" cy="8" r="1.7" fill="#DA291C" />
          </>
        )}
      </svg>
    </span>
  );
}

/** Language switcher - PT is present in the architecture but can be disabled. */
export function LanguageSwitcher({ className, inverted }: { className?: string; inverted?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${LOCALE_NAMES[lang]}`}
        title={LOCALE_NAMES[lang]}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-10 items-center gap-2 rounded-[3px] border px-5 transition-colors",
          inverted
            ? "border-white/15 hover:border-white/30"
            : "border-ink-900/15 hover:border-ink-900/30",
        )}
      >
        <LangFlag code={lang} className="h-3.5 w-5" />
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            inverted ? "text-white/80" : "text-mist-500",
            open && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full z-50 mt-2 w-44 origin-top overflow-hidden rounded-[6px] border border-white/10 bg-ink-900 py-1.5 shadow-panel"
        >
          {LANGS.map((l) => {
            const active = l.code === lang;
            const disabled = !ACTIVE_LANGS.includes(l.code);
            return (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  disabled={disabled}
                  title={disabled ? `${l.label} - à venir / coming soon / em breve` : undefined}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-4 py-2 text-left font-display text-xs font-semibold tracking-wide transition-colors",
                    active
                      ? "bg-gold-500/15 text-gold-400"
                      : "text-white/70 hover:bg-white/5 hover:text-white",
                    disabled && "cursor-not-allowed opacity-40 hover:bg-transparent hover:text-white/70",
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <LangFlag code={l.code} className="h-3.5 w-5" />
                    {LOCALE_NAMES[l.code]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
