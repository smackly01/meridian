/**
 * Central image catalog - the single place to plug in the company's real
 * photographs. While a value is empty, an elegant placeholder is rendered
 * automatically (no broken images).
 *
 * The client's own photography (projects, leadership, institutional
 * meetings) takes priority over stock imagery.
 */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("photo-1621336490817-e36ae37bcde4", 1920),
  heroMobile: u("photo-1621336490817-e36ae37bcde4", 1200),
  about: u("photo-1521737604893-d14cc237f11d"),
  expertise: u("photo-1454165804606-c3d57bc86b40"),
  projects: u("photo-1503387762-592deb58ef4e"),
  partners: u("photo-1521791136064-7986c2920216"),
  news: u("photo-1522071820081-009f0129c71c"),
  africa: u("photo-1568625502763-2a5ec6a94c47"),
  contact: u("photo-1524758631624-e2822e304c36"),
  ogImage: u("photo-1621336490817-e36ae37bcde4"),
};
