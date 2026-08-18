# 08.05 - Récap des images par page (dimensions)

> **Document** : 08.05 - Récap des images par page
> **Date** : 2026-08-18
> **Statut** : Snapshot vérifié sur le code actuel (`src/`)
> **Fichiers source** : `src/config/images.ts`, `src/data/{sectors,projects,news,gallery,team,partners}.ts`, `src/components/{PageHero,Media,GallerySection,Header,Footer,Seo}.tsx`, `src/pages/*.tsx`
> **Note** : ce document recoupe [08_03_inventaire_des_images.md](08_03_inventaire_des_images.md) ; quelques écarts ont été constatés avec le code actuel (voir § 5).

## 1. Principe

Le site combine :
- des **fichiers locaux** (`/public`) pour le logo, le favicon et l'image de partage social ;
- des **photos Unsplash distantes** pour tout le reste, chargées via `Media`/`<img>` avec `object-cover`. Le paramètre `w=` de l'URL fixe la largeur demandée à la source ; le **ratio réellement affiché** est imposé côté CSS par des classes `aspect-[...]`, indépendamment de la taille du fichier source. Aucune image n'a de `width`/`height` HTML fixes.

## 2. Assets locaux

| Fichier | Dimensions réelles | Utilisation | Affichage |
| --- | --- | --- | --- |
| `public/logo.jpeg` | 992 × 1064 px | Logo — `Header.tsx:15`, `Footer.tsx:61` | `h-12 w-auto` (48px de haut) |
| `public/og-image.jpg` | 1200 × 630 px | `og:image` / `twitter:image` — `Seo.tsx:37` | Hors-page, image de partage social |
| `public/favicon.svg` | Vectoriel (viewBox 64×64) | Favicon | Scalable |

## 3. Images par page

| Page | Emplacement | Image(s) | Largeur source (`w=`) | Ratio d'affichage (CSS) |
| --- | --- | --- | --- | --- |
| **HomePage** (`/`) | Hero | `images.hero` (photo-1621336490817) | 1920 | Plein écran (`min-h-[100svh]`), pas de ratio fixe |
| | Intro | `images.about` (photo-1521737604893) | 1600 | `aspect-[4/5]` |
| | Galerie — photo vedette (1/6) | `gallery[0]` | 1600 | Remplit la cellule (`min-h-[300px]`/`420px`, `row-span-2`) |
| | Galerie — 5 autres photos | `gallery[1..5]` | 1200 | `aspect-[4/3]` |
| **AboutPage** (`/a-propos`) | Hero | `images.about` | 1600 | Bandeau plein, pas de ratio fixe |
| | Image de contenu | `images.about` | 1600 | `aspect-[4/5]` |
| | Photos équipe (×4) | `photo: undefined` → placeholder SVG | – | `aspect-[3/4]` |
| **ExpertisePage** (`/expertise`) | Hero | `images.expertise` (photo-1454165804606) | 1600 | Bandeau plein |
| **SectorsPage** (`/secteurs`) | Hero | `images.africa` (photo-1568625502763) | 1600 | Bandeau plein |
| | Cartes secteurs (×4) | voir § 4 | 1200 chacune | `aspect-[16/9]` |
| **SectorDetailPage** (`/secteurs/:slug`) | Hero | `sector.image` (une des 4 ci-dessus) | 1200 | Bandeau plein, `h-full w-full` |
| **ProjectsPage** (`/projets`) | Hero | `images.projects` (photo-1503387762) | 1600 | Bandeau plein |
| | Cartes projets (×6) | voir § 4 | 1200 chacune | `aspect-[16/10]` |
| **ProjectDetailPage** (`/projets/:slug`) | Image principale | `project.images[0]` | 1200 | `aspect-[21/9]` |
| | Galerie additionnelle | `project.images[1+]` | – | `aspect-[16/10]` — **aucun projet n'a de 2e image actuellement** |
| **NewsPage** (`/actualites`) | Hero | `images.news` (photo-1522071820081) | 1600 | Bandeau plein |
| | Carte vedette (1/5) | voir § 4 | 1200 | `aspect-[16/9] md:aspect-auto md:w-1/2` |
| | Cartes actu (4 autres) | voir § 4 | 1200 chacune | `aspect-[16/9]` |
| **ArticlePage** (`/actualites/:slug`) | Couverture | `article.image` | 1200 | `aspect-[21/10]` |
| **PartnersPage** (`/partenaires`) | Hero | `images.partners` (photo-1521791136064) | 1600 | Bandeau plein |
| | Logos partenaires | Aucun — 10 partenaires en texte seul, pas de champ image/logo dans le modèle | – | – |
| **ContactPage** (`/contact`) | Hero | `images.contact` (photo-1524758631624) | 1600 | Bandeau plein |
| **LegalPage** (mentions légales, etc.) | Hero | `images.about` (réutilisée) | 1600 | Bandeau plein |
| **SitemapPage** (`/plan-du-site`) | Hero | `images.africa` (réutilisée) | 1600 | Bandeau plein |
| **NotFoundPage** (404) | — | Aucune image | – | – |

## 4. Détail des URLs par section

**Galerie (HomePage)** — `gallery.ts` (6 photos) :
- g1 `photo-1521737604893` (1600, vedette)
- g2 `photo-1521791136064` (1200)
- g3 `photo-1473341304170` (1200)
- g4 `photo-1542744173` (1200)
- g5 `photo-1552664730` (1200)
- g6 `photo-1758519289200` (1200)

**Secteurs** — `sectors.ts` (4 cartes, toutes `w=1200`) :
`photo-1429497419816` · `photo-1466611653911` · `photo-1476231682828` · `photo-1558494949`

**Projets** — `projects.ts` (6 projets, toutes `w=1200`, 1 seule image par projet) :
`photo-1504307651254` · `photo-1548337138` · `photo-1476231682828` · `photo-1558494949` · `photo-1494412574643` · `photo-1473341304170`

**Actualités** — `news.ts` (5 articles, toutes `w=1200`) :
`photo-1758519289200` · `photo-1504307651254` · `photo-1466611653911` · `photo-1540575467063` · `photo-1503387762`

## 5. Points notables

- Plusieurs URLs sont **réutilisées entre sections** (ex. `photo-1476231682828` sert à la fois à un secteur et à un projet ; `photo-1503387762` sert de hero « Projets » et d'image d'actualité) — attendu pour du contenu de démo, à corriger avant mise en prod avec de vraies photos.
- Les 4 photos d'équipe (`team.ts`) n'ont **pas d'image réelle** (`photo: undefined`) → placeholder SVG affiché à leur place.
- Les partenaires n'ont **aucun champ logo/image** dans le modèle de données actuel (`partners.ts`).
- `images.heroMobile` (w=1200, `images.ts:14`) est défini mais **jamais utilisé** dans le code — pas de `<picture>`/srcset responsive sur le hero.
- Écarts constatés avec [08_03_inventaire_des_images.md](08_03_inventaire_des_images.md) : ce dernier mentionne 7 images projets et une page « Soumettre un projet » qui n'existent plus dans le code actuel (`src/pages/` ne compte que 6 projets et pas de page de soumission) — à vérifier/mettre à jour si le contenu de 08.03 doit rester la référence.
