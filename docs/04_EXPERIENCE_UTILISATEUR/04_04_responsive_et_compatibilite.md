# 04.04 - Responsive et compatibilité

> **Document** : 04.04 - Responsive et compatibilité
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `tailwind.config.js`, `src/components/Header.tsx`, `src/components/ApproachTimeline.tsx`, `src/pages/*.tsx`, `src/index.css`

## 1. Objectif

Documenter le comportement responsive et la compatibilité navigateurs.

## 2. Faits observés

### 2.1 Approche responsive

- **Tailwind CSS** avec breakpoints par défaut : `sm` (640), `md` (768), `lg` (1024), `xl` (1280), `2xl` (1536) (`tailwind.config.js`, non surchargés).
- Classes `md:`, `lg:`, `xl:` utilisées massivement dans les pages et composants (grilles, espacements, typographie).
- **Typographie fluide** : échelles `clamp()` dans `src/index.css` (classes `t-h1`, `t-h2`, …) → adaptation automatique à la taille d'écran.

### 2.2 Menu mobile

- Header : menu complet en `lg`+ ; bouton hamburger + panneau en dessous de `lg` (`src/components/Header.tsx`).
- Sélecteur de langue présent dans les deux états.

### 2.3 Comportements spécifiques

- **ApproachTimeline** : desktop = grille 3 colonnes horizontale ; mobile = timeline verticale (`src/components/ApproachTimeline.tsx`).
- **Grilles de cartes** : adaptation des colonnes (`grid-cols-1` → `lg:grid-cols-3`, etc.) sur les listes de secteurs, projets, actualités.
- **Footer** : colonnes en grille responsive (1 → 4 colonnes).
- **Hero** : plein écran avec superposition ; textes fluides.
- **AfricaMap** : dimensionnée par viewport (`AfricaMap.tsx`).

### 2.4 Compatibilité cible

- Cible de build Vite : `es2020` (`vite.config.ts:16`) → compatible avec navigateurs modernes (Chrome 85+, Edge 85+, Firefox 79+, Safari 14+ approximativement).
- `Intl.DateTimeFormat` utilisé avec locales (`fr-FR`, `pt-PT`, `en-GB`) - support large dans les navigateurs modernes.
- `IntersectionObserver` - support large depuis 2019.
- `navigator.share` utilisé dans le partage d'articles avec repli copie de lien (`src/pages/ArticlePage.tsx`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : le site est conçu mobile-first (grilles et menus adaptatifs) avec une cible de navigateurs récents.

Recommandations (interprétation) :
- Valider le rendu mobile sur des appareils réels (iOS/Android) - notamment le menu hamburger et le formulaire en 5 étapes.
- Vérifier le comportement de l'`IntersectionObserver` et de `navigator.share` dans les navigateurs plus anciens (le code fournit un repli pour share, cf. `ArticlePage`).
- Prévoir un test de régression visuelle multi-écrans.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Des tests de rendu sur navigateurs multiples (BrowserStack, Playwright) - aucun configuré.
- Des breakpoints personnalisés hors défaut Tailwind.
- La gestion du mode hors-ligne (PWA / service worker) - absente.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Breakpoints | `tailwind.config.js` |
| Typographie fluide | `src/index.css` |
| Menu mobile | `src/components/Header.tsx` |
| Timeline responsive | `src/components/ApproachTimeline.tsx` |
| Cible build | `vite.config.ts:16` |
