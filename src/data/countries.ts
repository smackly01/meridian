import type { CountryPresence } from "@/types";

/**
 * Africa map - structured content, easily configured.
 * `position` is normalized on a 0..100 grid (x: east, y: south).
 * Demo content: realistic countries of presence aligned with the
 * fictional projects presented on the site.
 * Flags are served by flagcdn (ISO 3166-1 alpha-2 codes).
 */
export const countries: CountryPresence[] = [
  {
    id: "af-1",
    name: { fr: "Sénégal", en: "Senegal", pt: "Senegal" },
    flag: "https://flagcdn.com/w160/sn.png",
    position: { x: 0.9, y: 31 },
    hasData: true,
    projects: 1,
    sectors: ["transport"],
  },
  {
    id: "af-2",
    name: { fr: "Côte d'Ivoire", en: "Côte d'Ivoire", pt: "Costa do Marfim" },
    flag: "https://flagcdn.com/w160/ci.png",
    position: { x: 20, y: 44 },
    hasData: true,
    projects: 1,
    sectors: ["water", "transport"],
  },
  {
    id: "af-3",
    name: { fr: "Burkina Faso", en: "Burkina Faso", pt: "Burquina Faso" },
    flag: "https://flagcdn.com/w160/bf.png",
    position: { x: 23.6, y: 34.2 },
    hasData: true,
    projects: 1,
    sectors: ["transport"],
  },
  {
    id: "af-4",
    name: { fr: "Niger", en: "Niger", pt: "Níger" },
    flag: "https://flagcdn.com/w160/ne.png",
    position: { x: 28.7, y: 32.6 },
    hasData: true,
    projects: 1,
    sectors: ["energy"],
  },
  {
    id: "af-5",
    name: { fr: "Nigeria", en: "Nigeria", pt: "Nigéria" },
    flag: "https://flagcdn.com/w160/ng.png",
    position: { x: 36.4, y: 38.8 },
    hasData: true,
    projects: 1,
    sectors: ["energy"],
  },
  {
    id: "af-6",
    name: { fr: "Cameroun", en: "Cameroon", pt: "Camarões" },
    flag: "https://flagcdn.com/w160/cm.png",
    position: { x: 42.1, y: 46 },
    hasData: true,
    projects: 1,
    sectors: ["health"],
  },
  {
    id: "af-7",
    name: { fr: "Gabon", en: "Gabon", pt: "Gabão" },
    flag: "https://flagcdn.com/w160/ga.png",
    position: { x: 39.1, y: 50.8 },
    hasData: true,
    projects: 1,
    sectors: ["digital"],
  },
  {
    id: "af-8",
    name: { fr: "Rwanda", en: "Rwanda", pt: "Ruanda" },
    flag: "https://flagcdn.com/w160/rw.png",
    position: { x: 68.7, y: 54 },
    hasData: true,
    projects: 1,
    sectors: ["digital"],
  },
  {
    id: "af-9",
    name: { fr: "Kenya", en: "Kenya", pt: "Quénia" },
    flag: "https://flagcdn.com/w160/ke.png",
    position: { x: 78.3, y: 53.2 },
    hasData: true,
    projects: 1,
    sectors: ["energy", "digital"],
  },
  {
    id: "af-10",
    name: { fr: "Mozambique", en: "Mozambique", pt: "Moçambique" },
    flag: "https://flagcdn.com/w160/mz.png",
    position: { x: 72.3, y: 87.4 },
    hasData: true,
    projects: 1,
    sectors: ["energy"],
  },
];
