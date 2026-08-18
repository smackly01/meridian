import { useEffect } from "react";
import { useI18n, LANGS, DEFAULT_LANG, LOCALE_NAMES, type Lang } from "@/i18n";
import { site } from "@/config/site";

interface SeoProps {
  title: string;
  description: string;
  /** current page path without the language prefix, e.g. "/expertise" */
  path: string;
  jsonLd?: Record<string, unknown>[];
  type?: "website" | "article";
  /** explicit robots directive for this page; defaults to "index, follow" */
  robots?: string;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Seo({ title, description, path, jsonLd, type = "website", robots }: SeoProps) {
  const { lang } = useI18n();
  const canonical = `${site.url}/${lang}${path === "/" ? "" : path}`;
  const ogImage = `${site.url}/og-image.jpg`;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots ?? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:site_name", site.name);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:locale", ogLocale(lang));
    LANGS.filter((l) => l.code !== lang).forEach((l) =>
      upsertMeta("property", "og:locale:alternate", ogLocale(l.code)),
    );
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", site.name);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    upsertLink("canonical", canonical);

    // hreflang alternatives (only for active languages)
    document.head
      .querySelectorAll('link[rel="alternate"][data-hreflang]')
      .forEach((n) => n.remove());
    LANGS.forEach((l) => {
      const el = document.createElement("link");
      el.setAttribute("rel", "alternate");
      el.setAttribute("hreflang", l.code);
      el.setAttribute("data-hreflang", l.code);
      el.setAttribute("href", `${site.url}/${l.code}${path === "/" ? "" : path}`);
      document.head.appendChild(el);
    });
    // x-default points to the default-language version of the page
    const xDefault = document.createElement("link");
    xDefault.setAttribute("rel", "alternate");
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.setAttribute("data-hreflang", "x-default");
    xDefault.setAttribute(
      "href",
      `${site.url}/${DEFAULT_LANG}${path === "/" ? "" : path}`,
    );
    document.head.appendChild(xDefault);

    // JSON-LD structured data
    document.head.querySelectorAll('script[data-jsonld="1"]').forEach((n) => n.remove());
    const scripts = jsonLd ?? [];
    scripts.forEach((data) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.jsonld = "1";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    });

    return () => {
      document.head.querySelectorAll('script[data-jsonld="1"]').forEach((n) => n.remove());
    };
  }, [title, description, canonical, jsonLd, lang, type, robots]);

  return null;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/logo.jpeg`,
    image: `${site.url}/og-image.jpg`,
    email: site.contact.email,
    telephone: site.contact.phone,
    foundingDate: "2011",
    description:
      "Fil Investment Group développe, structure et finance des projets d'infrastructures stratégiques, principalement en Afrique.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressCountry: "CG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.contact.email,
      telephone: site.contact.phone,
      availableLanguage: LANGS.map((l) => LOCALE_NAMES[l.code]),
    },
    areaServed: [
      { "@type": "Country", name: "Sénégal" },
      { "@type": "Country", name: "Niger" },
      { "@type": "Country", name: "Côte d'Ivoire" },
      { "@type": "Country", name: "Rwanda" },
      { "@type": "Country", name: "Burkina Faso" },
      { "@type": "Country", name: "Mozambique" },
      { "@type": "Country", name: "République du Congo" },
      { "@type": "Country", name: "Cameroun" },
      { "@type": "Country", name: "Gabon" },
    ],
    knowsAbout: [
      "Infrastructure development",
      "Project finance",
      "Public-private partnerships",
      "Transport infrastructure",
      "Energy infrastructure",
      "Water infrastructure",
      "Digital infrastructure",
      "Project structuring",
      "Africa infrastructure",
    ],
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
    ].filter(Boolean),
  };
}

export function articleJsonLd(title: string, description: string, published: string) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    datePublished: `${published}T09:00:00Z`,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.jpeg` },
    },
    inLanguage: langToBcp47(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/${langToBcp47()}/actualites`,
    },
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function ogLocale(lang: Lang): string {
  switch (lang) {
    case "pt":
      return "pt_PT";
    case "en":
      return "en_US";
    default:
      return "fr_FR";
  }
}

function langToBcp47(): string {
  if (typeof document === "undefined") return "fr";
  return document.documentElement.lang || "fr";
}

/**
 * BreadcrumbList structured data. `items` is a flat list of page labels,
 * e.g. breadcrumbJsonLd(lang, [["Accueil", "/"], ["Projets", "/projets"]]).
 */
export function breadcrumbJsonLd(lang: Lang, items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${site.url}/${lang}${path === "/" ? "" : path}`,
    })),
  };
}
