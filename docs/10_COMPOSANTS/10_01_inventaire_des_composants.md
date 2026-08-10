# 10.01 - Inventaire des composants

> **Document** : 10.01 - Inventaire des composants
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/components/*.tsx`, `src/components/form/*.tsx`, `src/pages/*.tsx`

## 1. Objectif

Lister et classer tous les composants React du projet.

## 2. Faits observés

### 2.1 Composants d'UI / atomes

| Composant | Rôle |
| --- | --- |
| `Button.tsx` | Boutons / liens boutons (variants, tailles) |
| `SectionHeading.tsx` | Titres de section (overline + titre + description) |
| `Stat.tsx` | Compteur animé |
| `Media.tsx` | Image (lazy) + placeholder SVG (`SvgPlaceholder`) |
| `ScrollReveal.tsx` | Apparition au scroll |
| `ScrollToTopButton.tsx` | Bouton retour en haut |

### 2.2 Composants de layout

| Composant | Rôle |
| --- | --- |
| `Layout.tsx` | Structure : skip link, Header, main, Footer |
| `Header.tsx` | En-tête (sticky, menu, mobile) |
| `Footer.tsx` | Pied de page (navigation, coordonnées, réseaux) |
| `PageHero.tsx` | Bandeau de page intérieure (titre + SEO) |

### 2.3 Composants métier / sections

| Composant | Rôle |
| --- | --- |
| `SectorCard.tsx` | Carte secteur |
| `ProjectCard.tsx` | Carte projet + `StatusBadge` |
| `NewsCard.tsx` | Carte actualité + `CATEGORY_STYLES` |
| `ApproachTimeline.tsx` | Timeline approche (6 étapes) |
| `FinanceSection.tsx` | Section finance (5 points + flux) |
| `EcosystemSection.tsx` | Section écosystème (5 catégories) |
| `GallerySection.tsx` | Section galerie |
| `CtaBanner.tsx` | Bandeau CTA pleine largeur |
| `AfricaMap.tsx` | Carte Afrique (points pays) |
| `LanguageSwitcher.tsx` | Sélecteur de langue |

### 2.4 Composants SEO

| Composant | Rôle |
| --- | --- |
| `Seo.tsx` | Balisage title/meta/canonical/OG/hreflang/JSON-LD |

### 2.5 Composants de formulaire (`form/`)

| Composant | Rôle |
| --- | --- |
| `ContactForm.tsx` | Formulaire de contact |
| `SubmitProjectForm.tsx` | Formulaire soumission projet (5 étapes) |
| `fields.tsx` | Champs réutilisables (`FieldShell`, `Input`, `Select`, `Textarea`) |

## 3. Interprétations & recommandations

Hypothèse / interprétation : le découpage en composants est propre : atomes réutilisables, layout, sections métier, formulaires, SEO. Aucune duplication majeure observée.

Recommandations (interprétation) :
1. Compléter `Media` par un chargement « eager » configurable (déjà fait pour hero) - vérifier les usages.
2. Les `Card` (secteur/projet/news) pourraient être factorisées (structure commune) sans urgence.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Des composants « testés » (aucun test présent).
- Une documentation Storybook des composants.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Composants | `src/components/` |
| Champs | `src/components/form/fields.tsx` |
