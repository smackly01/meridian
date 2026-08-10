# 01.03 - Périmètre

> **Document** : 01.03 - Périmètre
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `package.json`, `src/**`, `public/**`, `index.html`

## 1. Objectif

Délimiter ce qui est couvert par le projet livré (périmètre « dans »), ce qui n'est pas couvert (périmètre « hors »), et les dépendances externes observées.

## 2. Faits observés

### 2.1 Périmètre « dans » (présent dans le dépôt)

- Front-end complet : React 18, React Router 6, Tailwind CSS 3, TypeScript 5 (`package.json:12-29`).
- Internationalisation trilingue FR / EN / PT (`src/i18n/`).
- Fichiers statiques publics : `favicon.svg`, `robots.txt`, `sitemap.xml`, `_redirects` (`public/`).
- Configuration de déploiement Vercel (`vercel.json`) et Netlify/Pages (`public/_redirects`).
- Contenu de démonstration structuré (projets, secteurs, partenaires, équipe, actualités, pays, galerie, contenus légaux) dans `src/data/`.
- Deux formulaires : contact et soumission de projet (`src/components/form/`).
- Composants réutilisables (UI, sections, SEO, médias) dans `src/components/`.
- Scripts npm : `dev`, `build`, `preview`, `typecheck` (`package.json:6-11`).

### 2.2 Périmètre « hors » (absent du dépôt)

- **Backend / API** : les formulaires envoient vers `/api/contact` et `/api/projects` (`src/config/site.ts:57-58`) ; aucune implémentation serveur n'est présente dans le dépôt.
- **Base de données** : aucun client de base de données ; aucune donnée persistée côté client (pas de `localStorage`/`sessionStorage` utilisé dans le code).
- **Gestionnaire de contenu (CMS)** : aucune dépendance CMS ; contenu statique dans le code.
- **Tests automatisés** : aucun framework de test ni fichier de test détecté.
- **Linter / formateur** : aucun script `lint` ni dépendance ESLint/Prettier dans `package.json`.
- **CI/CD** : aucun fichier de pipeline (`.github/workflows`, `.gitlab-ci.yml`, etc.) dans le dépôt.
- **README / documentation** : aucun `README.md` à la racine.
- **Gestion d'état avancée** : pas de Redux/Zustand/Context métier autre que le contexte i18n (`src/i18n/index.tsx`).
- **Analytics / suivi** : aucune bibliothèque d'analytics ; la config `gdpr.enabled: true` est un placeholder (`src/config/site.ts:44-46`).
- **Tests visuels / Storybook** : absents.

### 2.3 Dépendances externes observées

- Google Fonts : Manrope + Inter, chargées via `index.html:13-18` (avec `display=swap`).
- Images : hébergées sur Unsplash (`images.unsplash.com`) - `src/config/images.ts`, `src/data/*.ts`.
- Icônes : bibliothèque `lucide-react` (`package.json:15`).
- Aucune clé d'API, aucun identifiant de mesure, aucun endpoint externe de production dans le code.

## 3. Interprétations & recommandations

Hypothèse / interprétation : le périmètre livré est volontairement « front-end vitrine » : les formulaires sont câblés sur des endpoints d'API qui devront être implémentés côté serveur (ou remplacés par un service tiers) avant mise en production réelle.

Recommandations (interprétation) :
- Définir le périmètre cible de la version de production : backend de formulaires (et protection anti-spam côté serveur), hébergement des documents, choix analytics.
- Ajouter au minimum un script `lint` et des tests de non-régression (cf. `15_MAINTENANCE`).
- Créer un `README.md` documentant les commandes et l'architecture.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- La solution d'hébergement effective de production (les fichiers Vercel/Netlify indiquent une compatibilité, pas un déploiement constaté).
- Le fournisseur de l'image `og-image.jpg` référencée par le composant SEO (`src/components/Seo.tsx:37`) - l'image est référencée par URL mais n'est pas présente dans `public/` (vérifié : seul `favicon.svg` est livré dans `public/`).
- Le mode de gestion du domaine et du certificat SSL.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Dépendances | `package.json:12-29` |
| Scripts | `package.json:6-11` |
| Endpoints formulaires | `src/config/site.ts:57-58` |
| Fichiers publics | `public/` |
| Repli SPA | `public/_redirects`, `vercel.json` |
| Images externes | `src/config/images.ts` |
| Fonts | `index.html:13-18` |
