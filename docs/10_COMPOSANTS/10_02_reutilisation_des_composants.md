# 10.02 - Réutilisation des composants

> **Document** : 10.02 - Réutilisation des composants
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/components/*.tsx`, `src/pages/*.tsx`

## 1. Objectif

Cartographier les usages (qui utilise quoi) pour faciliter la maintenance et les évolutions.

## 2. Faits observés

### 2.1 Usage dans le Layout

- `Layout` est utilisé par toutes les pages (via `App.tsx`).
- `Header`, `Footer`, `ScrollToTopButton` sont montés dans `Layout`.

### 2.2 Usage dans les pages

| Composant | Pages l'utilisant |
| --- | --- |
| `PageHero` | Pages intérieures (À propos, Expertise, Secteurs, Projets, Partenaires, Actualités, Contact, Soumettre, Légales, Plan, 404) |
| `SectionHeading` | Accueil, À propos, Expertise, Secteurs, etc. |
| `SectorCard` | `SectorsPage`, `HomePage` |
| `ProjectCard` | `ProjectsPage`, `HomePage` |
| `NewsCard` | `NewsPage`, `HomePage` (implicite via liste) |
| `CtaBanner` | `HomePage` |
| `GallerySection` | `HomePage`, `AboutPage` (implicite) |
| `AfricaMap` | `AboutPage`, sections présence |
| `ApproachTimeline` | `AboutPage`, `ExpertisePage` |
| `FinanceSection` | `HomePage`, `ExpertisePage` |
| `EcosystemSection` | `HomePage` |
| `Button` / `ButtonLink` | Toutes les pages (CTA) |
| `Media` | Cartes, heroes, galeries |
| `ScrollReveal` | Sections animées de nombreuses pages |
| `Stat` | Accueil, À propos |
| `StatusBadge` | `ProjectCard`, `ProjectDetailPage` |
| `Seo` | Toutes les pages (directement ou via `PageHero`) |

### 2.3 Composants « feuilles » (sans dépendance vers d'autres composants du projet)

- `Stat`, `ScrollToTopButton`, `SectionHeading`, `Button`, `Seo`, `fields.tsx`.

### 2.4 Dépendance des sections entre elles

- `HomePage` orchestre : `ApproachTimeline` (implicite), `FinanceSection`, `EcosystemSection`, `GallerySection`, `CtaBanner`, cartes.
- `PageHero` intègre `Seo` (chaque page en hérite pour le SEO).

## 3. Interprétations & recommandations

Hypothèse / interprétation : le graphe de dépendances est sain - les composants partagés sont réutilisés, sans couplage excessif entre pages.

Recommandations (interprétation) :
- Documenter les props principales des composants partagés (cf. tableaux ci-dessus) pour guider les contributeurs.
- Éviter de créer des variantes « à la volée » : passer par `Button`/`SectionHeading` existants.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un storybook / catalogue visuel des composants.
- Des composants de type « tab », « accordéon » génériques réutilisables.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Composants | `src/components/` |
| Usage dans pages | `src/pages/*.tsx` |
