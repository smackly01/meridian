import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fr } from "./fr";
import { en } from "./en";
import { pt } from "./pt";

export type Lang = "fr" | "en" | "pt";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export const DEFAULT_LANG: Lang = "fr";

export const LOCALE_NAMES: Record<Lang, string> = {
  fr: "Français",
  en: "English",
  pt: "Português",
};

export type Dict = typeof fr;

const MESSAGES: Record<Lang, Dict> = { fr, en, pt };

type PathSegment = string | number;

function getPath(obj: unknown, path: string): string {
  const segs = path.split(".").map((s) => {
    const n = Number(s);
    return Number.isNaN(n) ? s : n;
  });
  let cur: unknown = obj;
  for (const seg of segs as PathSegment[]) {
    if (cur === null || cur === undefined) return path;
    cur = (cur as Record<PathSegment, unknown>)[seg];
  }
  return typeof cur === "string" ? cur : path;
}

export function getLocalized(obj: Record<Lang, string> | undefined, lang: Lang): string {
  if (!obj) return "";
  return obj[lang] || obj.fr || obj.en || "";
}

interface I18nCtx {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  /** prefix a path with the current language, e.g. /projets -> /fr/projets */
  localize: (path: string) => string;
  /** remove the language prefix from a path */
  stripLang: (path: string) => Lang;
  /** build an href to the same page in another language */
  altHref: (path: string, lang: Lang) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

const LANG_RE = /^\/(fr|en|pt)(?:\/|$)/;

function extractLang(path: string): { lang: Lang; rest: string } {
  const m = path.match(LANG_RE);
  if (m) {
    return { lang: m[1] as Lang, rest: path.slice(m[0].length) || "/" };
  }
  return { lang: DEFAULT_LANG, rest: path || "/" };
}

function browserLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const raw = window.navigator.language || DEFAULT_LANG;
  const code = raw.split("-")[0].toLowerCase();
  if (code === "en" || code === "pt" || code === "fr") return code;
  return DEFAULT_LANG;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { lang } = useMemo(
    () => extractLang(location.pathname),
    [location.pathname],
  );

  const setLang = (next: Lang) => {
    if (next === lang) return;
    const { rest } = extractLang(location.pathname);
    navigate(`/${next}${rest === "/" ? "" : rest}`);
  };

  const value = useMemo<I18nCtx>(
    () => ({
      lang,
      setLang,
      t: (key: string) => getPath(MESSAGES[lang] ?? MESSAGES.fr, key),
      localize: (path: string) =>
        path.startsWith("/") ? `/${lang}${path === "/" ? "" : path}` : path,
      stripLang: (path: string) => extractLang(path).lang,
      altHref: (path: string, target: Lang) => {
        const { rest } = extractLang(path);
        return `/${target}${rest === "/" ? "" : rest}`;
      },
    }),
    [lang, setLang, location.pathname],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function initialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  return extractLang(window.location.pathname).lang || browserLang();
}
