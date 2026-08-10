# 05.01 - Balisage SEO

> **Document** : 05.01 - Balisage SEO
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/components/Seo.tsx`, `src/pages/*.tsx`, `index.html`

## 1. Objectif

Documenter le balisage SEO mis en place (title, meta, canonical, Open Graph, JSON-LD).

## 2. Faits observés

### 2.1 Composant central `Seo.tsx`

- Accepte : `title`, `description`, `path`, `jsonLd` (optionnel), `type`.
- Construit et insère dynamiquement (via `document.head`) :
  - `<title>` et `<meta name="description">`.
  - Canonical : `https://www.Méridian.africa/{lang}{path}` (`src/components/Seo.tsx`).
  - Open Graph : `og:title`, `og:description`, `og:url`, `og:image` (`/og-image.jpg`), `og:locale` (`pt_PT` pour le portugais, `fr_FR`/`en_US` sinon).
  - Twitter Card : `twitter:card` (`summary_large_image`).
  - `hreflang` : alternates pour les langues actives (fr/en/pt).
  - JSON-LD injecté (ex. organisation).
- Met à jour `document.documentElement.lang` selon la langue (`src/components/Seo.tsx`).

### 2.2 Utilisation par page

- Les pages principales utilisent les textes SEO du dictionnaire i18n : `t('meta.home.title')`, `t('meta.home.description')`, etc. (`src/i18n/fr.ts`, `src/pages/*.tsx`).
- Les pages de détail génèrent un title/description dynamique à partir de l'entité (secteur, projet, article).
- JSON-LD :
  - `organizationJsonLd` - page Accueil (`src/pages/HomePage.tsx`).
  - `articleJsonLd` - page Article (`src/pages/ArticlePage.tsx`).

### 2.3 Balisage statique (`index.html`)

- `<html lang="fr">` (par défaut) (`index.html:2`).
- `<meta charset>`, viewport, `theme-color #081426` (`index.html:3-6`).
- `<link rel="icon" href="/favicon.svg">` (`index.html:7`).
- Description par défaut dans le meta (`index.html:8-12`).
- Preconnect Google Fonts (`index.html:13-18`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : le balisage SEO est bien structuré et dynamique par page ; les clés `meta.*` du i18n assurent des titres/descriptions localisés.

Recommandations (interprétation) :
1. **`og-image.jpg` non livré** : le composant référence `/og-image.jpg` mais `public/` ne contient que `favicon.svg` - l'image OG doit être fournie pour le partage social.
2. Vérifier que les `<meta>` injectés dynamiquement ne dupliquent pas les balises statiques (upsert) - le composant utilise `upsertMeta`/`upsertLink`.
3. Vérifier la longueur des titres/descriptions par langue (limites SERP ~60/160 caractères).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Des balises `robots` noindex/nofollow par page (aucune page ne se marque noindex).
- Un `meta` de vérification (Google Search Console / Bing Webmaster).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Composant SEO | `src/components/Seo.tsx` |
| Canonical / hreflang / OG | `src/components/Seo.tsx` |
| JSON-LD organisation | `src/pages/HomePage.tsx`, `src/components/Seo.tsx` |
| JSON-LD article | `src/pages/ArticlePage.tsx` |
| Meta statiques | `index.html` |
| Textes SEO i18n | `src/i18n/fr.ts` (clés `meta.*`) |
