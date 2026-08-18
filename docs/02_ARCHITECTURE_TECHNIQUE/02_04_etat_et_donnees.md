# 02.04 - État et données

> **Document** : 02.04 - État et données
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/i18n/index.tsx`, `src/lib/utils.ts`, `src/data/*.ts`, `src/components/form/*.tsx`, `src/pages/*.tsx`

## 1. Objectif

Décrire comment les données et l'état de l'application sont gérés.

## 2. Faits observés

### 2.1 Origine des données

- **Contenus** : fichiers statiques TypeScript dans `src/data/*.ts` (secteurs, projets, partenaires, équipe, actualités, pays, galerie, contenus légaux). Aucune API ni base de données.
- **Textes UI** : dictionnaires i18n `src/i18n/fr.ts`, `en.ts`, `pt.ts`, consommés via le contexte `useI18n()`.
- **Images** : catalogue Unsplash dans `src/config/images.ts` + URLs en dur dans `src/data/*.ts`.
- **Config site** : `src/config/site.ts` (identité, coordonnées, endpoints, langues, options).

### 2.2 Gestion de l'état local

| Domaine | Mécanisme |
| --- | --- |
| Langue courante | Contexte React `I18nProvider` + `localStorage` (`src/i18n/index.tsx:39-91`) |
| État des formulaires | `useState` locaux dans `ContactForm` / `SubmitProjectForm` |
| Filtres (projets, actualités) | `useState` locaux dans les pages (`ProjectsPage`, `NewsPage`) |
| Apparition au scroll | `IntersectionObserver` dans `ScrollReveal`, `useInView` |
| Compteurs animés | `useState` + `useEffect` dans `Stat` |
| Menu mobile | `useState` dans `Header` |

### 2.3 Utilitaires de données

- `cn(...)` : fusion de classes Tailwind (clsx + tailwind-merge) (`src/lib/utils.ts:6-12`).
- `tx(entry, lang)` : résolution de texte localisé avec fallback (`fr` → `en` → `pt`) (`src/lib/utils.ts:14-21`).
- `formatDate(iso, lang)` : formatage via `Intl.DateTimeFormat` selon la langue (`src/lib/utils.ts:23-40`).
- `localize(obj, lang)` : sélection d'un champ localisé d'un objet (`src/i18n/index.tsx:93-95`).

### 2.4 Types de données

`src/types.ts` définit les structures : `Localized` (champ trilingue), `Project`, `Sector`, `Partner`, `PartnerCategory`, `TeamMember`, `NewsItem`, `NewsCategory`, `CountryPresence`, `GalleryPhoto`, `ProjectStatus` (`realized | ongoing | development | confidential`), etc.

### 2.5 Données « publiées » vs « non publiées »

- Les listes publiques filtrent les éléments non publiés : projets (`ProjectsPage`), équipe (`AboutPage`), actualités (`NewsPage`).
- Exemple : `visibleProjects = projects.filter(p => p.published)` (`src/pages/HomePage.tsx`).
- Les éléments avec `published: false` n'apparaissent pas sur le site en l'état.

## 3. Interprétations & recommandations

Hypothèse / interprétation : la gestion d'état est volontairement légère (contexte unique pour la langue, état local pour le reste). C'est adapté à un site statique sans interactions métier complexes.

Recommandations (interprétation) :
- Si les formulaires sont connectés à un backend, l'état des soumissions et les erreurs réseau devront être traités (actuellement, l'échec est simulé par `console.info`).
- La persistance se limite à la langue (`localStorage`) - les filtres et l'état ne sont pas persistés, ce qui est cohérent pour ce type de site.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un mécanisme de cache de données, de revalidation ou de synchronisation temps réel.
- Un state management externe (Redux, Zustand, Jotai) - le code n'utilise que React Context + hooks.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Contexte langue | `src/i18n/index.tsx:39-91` |
| Utils | `src/lib/utils.ts` |
| Types | `src/types.ts` |
| Données statiques | `src/data/*.ts` |
| Filtre published | `src/pages/ProjectsPage.tsx`, `AboutPage.tsx`, `NewsPage.tsx` |
