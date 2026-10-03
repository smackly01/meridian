# 08.06 - Cartographie des images (nombre et dimensions par page)

> **Document** : 08.06 - Cartographie des images
> **Date** : 2026-10-03
> **Statut** : Vérifié sur le code actuel (`src/`), après la refonte visuelle
> **Usage** : brief pour la fourniture des photos réelles. Complète [08_05_recap_images_dimensions.md](08_05_recap_images_dimensions.md), qui décrit l'état technique antérieur.

## 1. Règles communes

- **Format :** JPEG ou WebP, qualité 80, profil sRGB.
- **Poids :** 500 Ko maximum par fichier, 300 Ko visé.
- **Pas de texte incrusté** dans les images : les titres sont posés par le site.
- **Sujet centré :** toutes les images sont recadrées automatiquement (`object-cover`). Les bords peuvent être coupés selon l'écran.
- **Bandeaux sombres :** les images de hero et de bannière sont assombries de 50 à 90 %. Une photo claire et lisible reste nécessaire, mais les détails fins disparaissent.

## 2. Gabarits de dimensions

| Gabarit | Ratio | Dimensions à fournir | Orientation |
| --- | --- | --- | --- |
| Hero d'accueil (plein écran) | 16:9 | 2560 × 1440 px | Paysage, zone basse calme pour le texte |
| Bandeau de page (hero intérieur, bannière de fin) | 12:5 | 2400 × 1000 px | Paysage large |
| Image éditoriale verticale | 4:5 | 1200 × 1500 px | Portrait |
| Carte secteur, carte actualité | 16:9 | 1600 × 900 px | Paysage |
| Carte projet | 16:10 | 1600 × 1000 px | Paysage |
| Image principale de projet | 21:9 | 2520 × 1080 px | Panoramique |
| Couverture d'article | 21:10 | 2100 × 1000 px | Panoramique |
| Galerie, photo vedette | 3:4 | 1200 × 1600 px | Portrait |
| Galerie, autres photos | 4:3 | 1600 × 1200 px | Paysage |
| Portrait d'équipe | 3:4 | 900 × 1200 px | Portrait, buste |
| Image de partage social | 1,91:1 | 1200 × 630 px | Paysage |

Une même photo sert souvent à deux gabarits : la carte d'un projet et l'image principale de sa fiche, par exemple. Pour ces cas, fournir le plus grand des deux formats et garder le sujet au centre.

## 3. Images par page

| Page | Emplacement | Nombre | Gabarit | Source dans le code |
| --- | --- | --- | --- | --- |
| **Accueil** | Hero | 1 | Hero d'accueil | `images.hero` |
| | Intro « Notre rôle » | 1 | Éditoriale verticale | `images.about` |
| | Cartes secteurs | 4 | Carte secteur | `sectors[].image` |
| | Cartes projets | 3 | Carte projet | `projects[].images[0]` |
| | Galerie « Sur le terrain » | 6 | 1 vedette + 5 autres | `gallery[]` |
| | Bannière de fin | 1 | Bandeau de page | `images.projects` |
| | **Total** | **16** | | |
| **À propos** | Hero | 1 | Bandeau de page | `images.about` |
| | Image « Notre histoire » | 1 | Éditoriale verticale | `images.about` (même fichier que le hero) |
| | Portraits d'équipe | 4 | Portrait d'équipe | `team[].photo` (section masquée tant que l'équipe n'est pas publiée) |
| | Bannière de fin | 1 | Bandeau de page | `images.projects` |
| | **Total** | **3 visibles, 7 avec l'équipe** | | |
| **Expertise** | Hero + bannière de fin | 2 | Bandeau de page | `images.expertise`, `images.projects` |
| **Secteurs** | Hero | 1 | Bandeau de page | `images.africa` |
| | Cartes secteurs | 4 | Carte secteur | `sectors[].image` |
| | Bannière de fin | 1 | Bandeau de page | `images.projects` |
| | **Total** | **6** | | |
| **Secteur (×4 pages)** | Hero | 1 par page | Bandeau de page | `sector.image` (même fichier que la carte) |
| | Bannière de fin | 1 | Bandeau de page | `images.projects` |
| **Projets** | Hero | 1 | Bandeau de page | `images.projects` |
| | Cartes projets | 6 | Carte projet | `projects[].images[0]` |
| | Bannière de fin | 1 | Bandeau de page | `images.projects` (même fichier que le hero) |
| | **Total** | **8** | | |
| **Projet (×6 fiches)** | Image principale | 1 par fiche | Image principale de projet | `project.images[0]` (même fichier que la carte) |
| | Galerie du projet | 0 aujourd'hui | Carte projet | `project.images[1+]`, s'affiche dès 2 images |
| | Bannière de fin | 1 | Bandeau de page | `images.projects` |
| **Partenaires** | Hero + bannière de fin | 2 | Bandeau de page | `images.partners`, `images.projects` |
| **Actualités** | Hero | 1 | Bandeau de page | `images.news` |
| | Cartes actualités | 5 | Carte actualité | `news[].image` |
| | Bannière de fin | 1 | Bandeau de page | `images.projects` |
| | **Total** | **7** | | |
| **Article (×5)** | Couverture | 1 par article | Couverture d'article | `article.image` (même fichier que la carte) |
| | Articles associés | 3 | Carte actualité | `news[].image` |
| | Bannière de fin | 1 | Bandeau de page | `images.projects` |
| **Contact** | Hero | 1 | Bandeau de page | `images.contact` |
| **Mentions légales, confidentialité** | Hero + bannière de fin | 2 | Bandeau de page | `images.about`, `images.projects` |
| **Plan du site** | Hero | 1 | Bandeau de page | `images.africa` |
| **Page 404** | Aucune | 0 | | |

Le menu « Secteurs » de l'en-tête réutilise les 4 images de secteurs en vignettes de 64 px. Il n'y a rien à fournir en plus. La carte d'Afrique utilise des drapeaux, pas des photos.

## 4. Liste des fichiers uniques à fournir

| Famille | Nombre | Gabarit le plus exigeant |
| --- | --- | --- |
| Bandeaux généraux (`src/config/images.ts`) : accueil, à propos, expertise, projets, partenaires, actualités, Afrique, contact | 8 | Hero d'accueil pour `hero`, bandeau de page pour les autres. `about` doit aussi tenir en 4:5. |
| Secteurs (`src/data/sectors.ts`) | 4 | Bandeau de page, recadré aussi en 16:9 |
| Projets (`src/data/projects.ts`) | 6, plus les images de galerie facultatives | Image principale de projet, recadrée aussi en 16:10 |
| Actualités (`src/data/news.ts`) | 5 | Couverture d'article, recadrée aussi en 16:9 |
| Galerie (`src/data/gallery.ts`) | 6 | 1 portrait 3:4 et 5 paysages 4:3 |
| Équipe (`src/data/team.ts`) | 4 | Portrait d'équipe |
| Partage social (`public/og-image.jpg`) | 1 | 1200 × 630 px |
| **Total** | **34** | |

## 5. Points d'attention

- **La bannière de fin réutilise `images.projects` sur 11 pages.** Sur la page Projets, elle reprend aussi l'image du hero. Une image dédiée à la bannière éviterait cette répétition.
- **`images.about` apparaît trois fois** : intro de l'accueil, hero et image de la page À propos. Il faut prévoir au moins une seconde photo institutionnelle.
- **Toutes les images actuelles sont des photos de banque d'images (Unsplash).** D'après l'audit éditorial, les projets, la galerie et les actualités sont des contenus de démonstration. Leurs images doivent être remplacées en même temps que les textes.
