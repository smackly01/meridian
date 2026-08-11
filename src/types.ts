import type { Lang } from "@/i18n";

/** A string that exists in several languages. Falls back fr -> en -> pt. */
export type Localized = Partial<Record<Lang, string>>;

export type ProjectStatus = "realized" | "ongoing" | "development" | "confidential";

export interface Project {
  id: string;
  slug: string;
  title: Localized;
  country: Localized;
  sector: string;
  status: ProjectStatus;
  description: Localized;
  role: Localized;
  impact: Localized;
  images: string[];
  confidential: boolean;
  /** set to false to hide a project from listing while keeping the data */
  published?: boolean;
}

export interface Sector {
  id: string;
  slug: string;
  name: Localized;
  short: Localized;
  description: Localized;
  issues: Localized;
  /** how Méridian intervenes in this sector */
  approach: Localized;
  /** concrete results expected from the interventions */
  outcomes: Localized[];
  projectTypes: { title: Localized; items: Localized[] }[];
  examples: Localized[];
  image: string;
  icon: string;
}

export type PartnerCategory =
  | "public"
  | "finance"
  | "investment"
  | "technical"
  | "engineering"
  | "construction"
  | "technology";

export interface Partner {
  id: string;
  category: PartnerCategory;
  name: Localized;
  type: Localized;
}

export interface TeamMember {
  id: string;
  name: Localized;
  role: Localized;
  bio: Localized;
  linkedin?: string;
  photo?: string;
  /** set to false to hide a member slot */
  published?: boolean;
}

export type NewsCategory =
  | "news"
  | "press"
  | "event"
  | "conference"
  | "partnership"
  | "project"
  | "analysis";

export interface NewsItem {
  id: string;
  slug: string;
  title: Localized;
  category: NewsCategory;
  date: string;
  image: string;
  excerpt: Localized;
  body: Localized[];
  published?: boolean;
}

export interface GalleryPhoto {
  id: string;
  image: string;
  caption: Localized;
  context: Localized;
  location: Localized;
}

export interface CountryPresence {
  id: string;
  name: Localized;
  /** country flag emoji */
  flag: string;
  /** normalized map position, 0..100 (x, y) */
  position: { x: number; y: number };
  /** whether presence data is available */
  hasData: boolean;
  projects?: number;
  sectors?: string[];
}
