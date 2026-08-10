# 02.03 - Routing et navigation

> **Document** : 02.03 - Routing et navigation
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/App.tsx`, `src/i18n/index.tsx`, `src/components/LanguageSwitcher.tsx`, `src/components/Layout.tsx`

## 1. Objectif

Documenter le système de routage, la gestion du préfixe de langue et les mécanismes de navigation.

## 2. Faits observés

### 2.1 Préfixe de langue optionnel

- Toutes les routes sont préfixées par `/:lang?` (paramètre optionnel) (`src/App.tsx:36-51`).
- Au premier chargement sans préfixe : redirection automatique vers la langue du navigateur si elle est reconnue (FR/EN/PT), sinon FR par défaut (logique dans `src/App.tsx` et `src/i18n/index.tsx:25-29`).
- Exemple d'URL : `/fr/a-propos`, `/en/a-propos`, `/pt/a-propos`.

### 2.2 Gestion de la langue invalide

- Si un préfixe de langue inconnu est fourni, le routage le traite comme partie de la route (le chemin n'est pas reconnu) → affichage de la page 404 (`src/App.tsx:51`, `src/pages/NotFoundPage.tsx`).
- La langue est validée par la liste `ACTIVE_LANGS`/`SUPPORTED_LANGS` (`src/config/site.ts:52-55`).

### 2.3 Mécanismes de navigation

- `Link` de react-router-dom partout dans Header/Footer/cartes (pas de `<a>` brut hors liens externes).
- `useNavigate` pour les redirections programmatiques (ex. après changement de langue).
- `setLang(lang)` : mémorise dans `localStorage`, préfixe l'URL courante et navigue (`src/i18n/index.tsx:71-91`).
- `stripLang(path)` / `getPath(path, lang)` : utilitaires pour construire/dépréfixer les chemins (`src/i18n/index.tsx:84-88`).

### 2.4 Navigation UX

- **Scroll to top** sur changement de route : `Layout` remonte en haut de page à chaque changement de pathname (`src/components/Layout.tsx`).
- **Skip link** : lien d'évitement « Aller au contenu » → `#main` (`src/components/Layout.tsx`).
- **Chargement asynchrone** : `Suspense` avec un spinner (`border-mist-200 border-t-gold-500`) pendant le chargement des pages lazy (`src/App.tsx:34`).
- **404** : route `*` → `NotFoundPage` avec liens de retour (`src/pages/NotFoundPage.tsx`).

### 2.5 Liens entre pages

- Cartes : `SectorCard` → `/secteurs/:slug` (`src/components/SectorCard.tsx`) ; `ProjectCard` → `/projets/:slug` (`src/components/ProjectCard.tsx`) ; `NewsCard` → `/actualites/:slug` (`src/components/NewsCard.tsx`).
- Navigation de contexte : article précédent/suivant (`src/pages/ArticlePage.tsx`), projet suivant (`src/pages/ProjectDetailPage.tsx`).
- Plan du site : liens vers toutes les pages principales (`src/pages/SitemapPage.tsx`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : le préfixe de langue optionnel est un bon compromis (URL canoniques par langue, redirection automatique à la première visite). Le pattern « `/:lang?` » est un choix classique pour un site multilingue SPA.

Recommandations (interprétation) :
- À noter : le préfixe de langue est optionnel, donc `/` seul redirige vers `/fr/`. Il peut être pertinent de vérifier que les URL `/en/...` et `/pt/...` reçoivent bien leur balisage `hreflang` (cf. `05_SEO`).
- Les redirections 301 pour les anciennes URL (avant mise en place des préfixes) ne sont pas gérées dans le code - à prévoir côté hébergeur si besoin.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- La gestion d'URLs avec ou sans slash final en production (Vercel applique son propre traitement des traînées de slash).
- Un système de guard de route (auth, rôles) - inexistant, non nécessaire pour un site public.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Déclaration des routes | `src/App.tsx:36-51` |
| Suspense / lazy | `src/App.tsx:9-34` |
| Contexte i18n | `src/i18n/index.tsx` |
| Bascule de langue | `src/components/LanguageSwitcher.tsx` |
| Scroll to top / skip link | `src/components/Layout.tsx` |
| Cartes → détails | `src/components/*Card.tsx` |
