# 08.03 - Inventaire des images

> **Document** : 08.03 - Inventaire des images
> **Version** : 1.0
> **Date** : 2026-08-11
> **Statut** : En cours de validation (contenus démo)
> **Fichiers source** : `src/config/images.ts`, `src/data/sectors.ts`, `src/data/projects.ts`, `src/data/news.ts`, `src/data/gallery.ts`, composants et pages `src/pages/*`, `src/components/*`

## 1. Référentiel source des images

Toutes les images sont des photos Unsplash (chargées avec `object-cover`, donc recadrées selon
le conteneur). Largeurs demandées à la source :

| Clé | Fichier | Largeur source |
| --- | --- | --- |
| `hero` / `heroMobile` | `src/config/images.ts:13-14` | 1920 / 1200 |
| `about`, `expertise`, `projects`, `partners`, `news`, `africa`, `contact`, `ogImage` | `src/config/images.ts:15-22` | 1600 |
| 4 images secteurs | `src/data/sectors.ts` | 1200 |
| 7 images projets | `src/data/projects.ts` | 1200 |
| 5 images actualités | `src/data/news.ts` | 1200 |
| 6 images galerie | `src/data/gallery.ts` | 1200 (à la une : 1600) |

## 2. Images par page

| Page | Emplacement | Image | Affichage / ratio |
| --- | --- | --- | --- |
| **Accueil** | Hero | `images.hero` | Plein écran, ratio libre (100svh) |
| | Intro | `images.about` | **4/5** (800×1000) |
| | Secteurs (4 cartes) | Transport, Énergie, Eau, Num.&Télécoms | **16/9** (1600×900) |
| | Projets (3 cartes) | p1, p2, p3 | **16/10** (1600×1000) |
| | Galerie (6) | g1–g6 | à la une : libre ; autres : **4/3** |
| | Bandeau CTA | `images.projects` | Bandeau plein, ratio libre |
| **À propos** | Hero | `images.about` | Bandeau plein |
| | Histoire | `images.about` | **4/5** |
| | Équipe (4 membres) | photos vides → initiales | **3/4** (900×1200) |
| **Expertise** | Hero | `images.expertise` | Bandeau plein |
| **Secteurs** | Hero | `images.africa` | Bandeau plein |
| | 4 cartes secteur | (idem accueil) | **16/9** |
| **Secteur détail** | Hero | image du secteur (1200) | Bandeau plein |
| **Projets** | Hero | `images.projects` | Bandeau plein |
| | Cartes projets (7) | p1, p2, p3, p4, p5, p7, p8 | **16/10** |
| **Projet détail** | Image principale | `project.images[0]` | **21/9** (≈1920×823) |
| | Galerie | `project.images[1+]` | **16/10** (aucun projet n'en a) |
| **Partenaires** | Hero | `images.partners` | Bandeau plein |
| **Actualités** | Hero | `images.news` | Bandeau plein |
| | Carte à la une | n1 (ex) | **16/9** mobile / demi-largeur desktop |
| | Cartes (5) | n1–n5 | **16/9** |
| **Article** | Couverture | `article.image` | **21/10** (1600×762) |
| **Contact** | Hero | `images.contact` | Bandeau plein |
| **Soumettre un projet** | Hero | `images.projects` | Bandeau plein |
| **Plan du site** | Hero | `images.africa` | Bandeau plein |
| **Mentions légales / Confidentialité** | Hero | `images.about` | Bandeau plein |
| **Bandeau CTA** (multi-pages) | Fond | `images.projects` | Bandeau plein |

## 3. Résumé par dimensions identiques

### 16/9 (1600×900) — 9 images
- **Secteurs** (cartes, accueil + page secteurs) : Transport, Énergie, Eau, Numérique &
  Télécommunications (4)
- **Actualités** (NewsCard) : n1, n2, n3, n4, n5 (5) — la une reprend 16/9 sur mobile

### 16/10 (1600×1000) — 7 images
- **Projets** (ProjectCard) : Corridor Dakar–Saint-Louis, Parc solaire de Dosso, Adduction
  d'eau de Bouaké, Hôpital de l'Adamaoua, Data center de Kigali, Port sec de Ouagadougou,
  Interconnexion Nord–Sud

### 4/5 (800×1000) — 1 image (réutilisée 3×)
- `images.about` : Accueil (intro), À propos (héro + histoire)

### 4/3 (1200×900) — 5 images
- **Galerie** « Sur le terrain » : g2, g3, g4, g5, g6

### 3/4 (900×1200) — 4 emplacements (photos non fournies)
- **Équipe** (À propos) : member-1 à member-4

### 21/9 (≈1920×823) — 1 par projet
- **Projet détail**, image principale : p1–p8 (`images[0]`)

### 21/10 (1600×762) — 1 par article
- **Article**, couverture : n1–n5

### Pleine largeur / ratio libre — bandeaux
- `images.hero` (accueil), `images.about` (à propos, légal), `images.expertise`,
  `images.projects` (projets, soumettre, bandeau CTA), `images.partners`, `images.news`,
  `images.africa` (secteurs, plan du site), `images.contact`, + images secteurs en héros de
  page détail.

## 4. Sans image pour l'instant
- **Équipe** : photos vides → affichage des initiales
- **Logos Partenaires** : emplacements placeholder
