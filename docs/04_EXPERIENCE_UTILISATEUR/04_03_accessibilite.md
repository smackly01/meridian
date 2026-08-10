# 04.03 - Accessibilité

> **Document** : 04.03 - Accessibilité
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/index.css`, `src/components/Layout.tsx`, `src/components/form/fields.tsx`, `src/components/*.tsx`

## 1. Objectif

Évaluer l'accessibilité (WCAG) implémentée dans le code.

## 2. Faits observés

### 2.1 Points positifs constatés

- **Skip link** : « Aller au contenu » ciblant `#main` (`src/components/Layout.tsx`).
- **Focus visible** : `:focus-visible` avec contour doré (`src/index.css`).
- **Réduction de mouvement** : respect de `prefers-reduced-motion` dans `Stat`, `ScrollToTopButton` et le défilement fluide global (`src/index.css`).
- **Sémantique HTML** : `header`, `nav`, `main`, `footer`, `section` (Layout, Header, Footer).
- **Formulaires** : `label` associé (`FieldShell`), `aria-invalid`, `aria-describedby`, erreurs avec `role="alert"` (`src/components/form/fields.tsx`).
- **Images** : `alt` sur les images média (`Media.tsx`) ; texte alternatif sur les icônes décoratives (SVG avec `aria-hidden`).
- **Liens externes** : `rel="noopener noreferrer"` (`Footer`).
- **Texte** : contrastes basés sur la palette (fond sombre + texte clair, fond clair + texte `ink`).
- **Landmarks** : `<main id="main">` unique.

### 2.2 Points à vérifier / limites observées

- **Menu mobile** : ouverture/fermeture gérée par `useState` ; à confirmer la présence d'`aria-expanded`/`aria-controls` sur le bouton hamburger.
- **Cartes cliquables** : les `ProjectCard`/`NewsCard`/`SectorCard` utilisent des `Link` ; vérifier que tout le contenu de la carte n'est pas décrit deux fois pour les lecteurs d'écran.
- **ScrollReveal** : les éléments animés restent dans le DOM (pas de `display:none`), mais à confirmer la lisibilité si l'animation ne se déclenche pas.
- **Animation de compteurs** : `Stat` respecte `prefers-reduced-motion`, mais à confirmer qu'en l'absence d'JS le nombre reste accessible.
- **Langue du document** : `document.documentElement.lang` mis à jour par le composant SEO selon la langue (`src/components/Seo.tsx`) - positif.

## 3. Interprétations & recommandations

Hypothèse / interprétation : le code intègre des bases solides d'accessibilité (skip link, focus, sémantique, formulaires) mais sans audit dédié ni tests automatisés.

Recommandations (interprétation) :
1. Lancer un audit (axe-core / Lighthouse) pour valider les points listés en 2.2.
2. Ajouter `aria-expanded`/`aria-controls` au bouton du menu mobile.
3. Tester la navigation clavier complète (Tab, Entrée, Échap).
4. Prévoir un `alt` pertinent sur chaque image de `Media` (ex. projets, équipe).
5. S'assurer que les animations ne bloquent jamais l'accès au contenu.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Une déclaration de conformité RGAA/WCAG.
- Des tests d'accessibilité automatisés (axe, jest-axe, …).
- La gestion des préférences de réduction de mouvement pour `ScrollReveal` (à confirmer).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Skip link | `src/components/Layout.tsx` |
| Focus visible | `src/index.css` |
| Formulaires accessibles | `src/components/form/fields.tsx` |
| Langue document | `src/components/Seo.tsx` |
| Réduction de mouvement | `src/index.css`, `Stat.tsx`, `ScrollToTopButton.tsx` |
