import type { CountryPresence } from "@/types";

/**
 * Africa map - structured content, easily configured.
 * `position` is normalized on a 0..100 grid (x: east, y: south).
 * Demo content: realistic countries of presence aligned with the
 * fictional projects presented on the site.
 */
export const countries: CountryPresence[] = [
  {
    id: "af-1",
    name: { fr: "Sénégal", en: "Senegal", pt: "Senegal" },
    flag: "🇸🇳",
    position: { x: 0.9, y: 31 },
    hasData: true,
    projects: 1,
    sectors: ["transport"],
  },
  {
    id: "af-2",
    name: { fr: "Côte d'Ivoire", en: "Côte d'Ivoire", pt: "Costa do Marfim" },
    flag: "🇨🇮",
    position: { x: 20, y: 44 },
    hasData: true,
    projects: 1,
    sectors: ["water", "transport"],
  },
  {
    id: "af-3",
    name: { fr: "Burkina Faso", en: "Burkina Faso", pt: "Burquina Faso" },
    flag: "🇧🇫",
    position: { x: 23.6, y: 34.2 },
    hasData: true,
    projects: 1,
    sectors: ["transport"],
  },
  {
    id: "af-4",
    name: { fr: "Niger", en: "Niger", pt: "Níger" },
    flag: "🇳🇪",
    position: { x: 28.7, y: 32.6 },
    hasData: true,
    projects: 1,
    sectors: ["energy"],
  },
  {
    id: "af-5",
    name: { fr: "Nigeria", en: "Nigeria", pt: "Nigéria" },
    flag: "🇳🇬",
    position: { x: 36.4, y: 38.8 },
    hasData: true,
    projects: 1,
    sectors: ["energy"],
  },
  {
    id: "af-6",
    name: { fr: "Cameroun", en: "Cameroon", pt: "Camarões" },
    flag: "🇨🇲",
    position: { x: 42.1, y: 46 },
    hasData: true,
    projects: 1,
    sectors: ["health"],
  },
  {
    id: "af-7",
    name: { fr: "Gabon", en: "Gabon", pt: "Gabão" },
    flag: "🇬🇦",
    position: { x: 39.1, y: 50.8 },
    hasData: true,
    projects: 1,
    sectors: ["digital"],
  },
  {
    id: "af-8",
    name: { fr: "Rwanda", en: "Rwanda", pt: "Ruanda" },
    flag: "🇷🇼",
    position: { x: 68.7, y: 54 },
    hasData: true,
    projects: 1,
    sectors: ["digital"],
  },
  {
    id: "af-9",
    name: { fr: "Kenya", en: "Kenya", pt: "Quénia" },
    flag: "🇰🇪",
    position: { x: 78.3, y: 53.2 },
    hasData: true,
    projects: 1,
    sectors: ["energy", "digital"],
  },
  {
    id: "af-10",
    name: { fr: "Mozambique", en: "Mozambique", pt: "Moçambique" },
    flag: "🇲🇿",
    position: { x: 72.3, y: 87.4 },
    hasData: true,
    projects: 1,
    sectors: ["energy"],
  },
];
