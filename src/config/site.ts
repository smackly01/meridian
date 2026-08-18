import type { Lang } from "@/i18n";

export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  /** placeholder values - replace with the company's real data */
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  /** ISO code used for GDPR consent / analytics placeholders */
  gdpr: {
    enabled: boolean;
  };
  /** content availability - flip to true once real content is provided */
  content: {
    partners: boolean;
  };
}

export const site: SiteConfig = {
  name: "Fil Investment Group",
  legalName: "Fil Investment Group",
  // Placeholder domain (no accent — ASCII required). Replace with the real
  // production domain before launch: canonical, OG, JSON-LD and sitemap
  // all derive from this value.
  url: "https://www.filinvestmentgroup.com",
  contact: {
    address: "Avenue Amilcar Cabral, Centre-ville — Brazzaville, République du Congo",
    phone: "+242 22 555 00 00",
    email: "contact@filinvestmentgroup.com",
    hours: "Lundi – Vendredi, 9h00 – 18h00 (WAT)",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/company/",
  },
  gdpr: {
    enabled: true,
  },
  content: {
    partners: false,
  },
};

export const SUPPORTED_LANGS: Lang[] = ["fr", "en", "pt"];

/** whether a language is active on the site */
export const ACTIVE_LANGS: Lang[] = ["fr", "en", "pt"];

export const SUBMIT_ENDPOINT = "/api/projects";
export const CONTACT_ENDPOINT = "/api/contact";
