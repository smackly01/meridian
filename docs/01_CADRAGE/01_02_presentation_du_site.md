# 01.02 - Présentation du site

> **Document** : 01.02 - Présentation du site
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/App.tsx`, `src/pages/*`, `public/sitemap.xml`, `index.html`

## 1. Objectif

Décrire le site tel qu'il se présente : nature, pages, navigation et publics visés, sur la base du code source.

## 2. Faits observés

### 2.1 Nature du site

- Application web monopage (SPA) en React + React Router (`src/main.tsx:7-12`), servie avec repli SPA côté serveur (`public/_redirects:2` - `/* /index.html 200` ; `vercel.json:2-4`).
- Site entièrement côté client : aucune donnée n'est chargée depuis une API dans le code du dépôt ; les contenus proviennent de fichiers statiques `src/data/*.ts`.

### 2.2 Pages déclarées

Routes déclarées dans `src/App.tsx:36-51` (toutes avec préfixe de langue optionnel `/:lang?`) :

| Route (sans langue) | Page | Fichier |
| --- | --- | --- |
| `/` | Accueil | `src/pages/HomePage.tsx` |
| `/a-propos` | À propos | `src/pages/AboutPage.tsx` |
| `/expertise` | Expertise | `src/pages/ExpertisePage.tsx` |
| `/secteurs` | Secteurs | `src/pages/SectorsPage.tsx` |
| `/secteurs/:slug` | Détail secteur | `src/pages/SectorDetailPage.tsx` |
| `/projets` | Projets | `src/pages/ProjectsPage.tsx` |
| `/projets/:slug` | Détail projet | `src/pages/ProjectDetailPage.tsx` |
| `/partenaires` | Partenaires | `src/pages/PartnersPage.tsx` |
| `/actualites` | Actualités | `src/pages/NewsPage.tsx` |
| `/actualites/:slug` | Article | `src/pages/ArticlePage.tsx` |
| `/contact` | Contact | `src/pages/ContactPage.tsx` |
| `/soumettre-un-projet` | Soumettre un projet | `src/pages/SubmitProjectPage.tsx` |
| `/mentions-legales` | Mentions légales | `src/pages/LegalPage.tsx` (page="legal") |
| `/politique-de-confidentialite` | Politique de confidentialité | `src/pages/LegalPage.tsx` (page="privacy") |
| `/plan-du-site` | Plan du site | `src/pages/SitemapPage.tsx` |
| `*` | 404 | `src/pages/NotFoundPage.tsx` |

### 2.3 Structure de page commune

- Chaque page est composée via `Layout` (`src/components/Layout.tsx`) : lien d'évitement, `Header`, `<main>`, `Footer`, bouton retour en haut (`ScrollToTopButton`).
- Les pages intérieures utilisent le composant `PageHero` (bandeau sombre institutionnel) qui injecte également les balises SEO (`src/components/PageHero.tsx:20-24`).

### 2.4 Navigation

- Menu principal (6 entrées) : À propos, Expertise, Secteurs, Projets, Actualités, Contact + bouton « Soumettre un projet » (`src/components/Header.tsx:60-67`).
- Pied de page : navigation complète (8 entrées), liste des 7 secteurs, coordonnées, réseaux sociaux, lien vers le plan du site et les pages légales (`src/components/Footer.tsx:12-135`).
- Plan du site généré (`src/pages/SitemapPage.tsx`) : pages principales, secteurs, pages info.

### 2.5 Langues

- Trois langues disponibles dans l'interface : FR, EN, PT (`src/i18n/index.tsx:14-18`), toutes actives (`src/config/site.ts:55`).
- Sélecteur de langue dans l'en-tête et le pied de page (`src/components/LanguageSwitcher.tsx`, `src/components/Header.tsx:95,141`, `src/components/Footer.tsx:133`).

### 2.6 Publics visés (déduits du contenu)

- Textes adressés à des institutions : « Nous accompagnons les États et les opérateurs… » (`src/data/sectors.ts:28`).
- Textes adressés à des porteurs de projets : page « Soumettre un projet » avec collecte d'informations projet/finance/documents (`src/components/form/SubmitProjectForm.tsx`).
- Textes adressés à des partenaires financiers/institutionnels : page Partenaires, section Écosystème (`src/pages/PartnersPage.tsx`, `src/components/EcosystemSection.tsx`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : le site cible trois audiences principales - États et opérateurs publics (décideurs), investisseurs et bailleurs de fonds, porteurs de projets. La structure de navigation (expertise + secteurs + projets) est cohérente avec cette cible institutionnelle.

Recommandations (interprétation) :
- Les URL françaises (`/projets`, `/actualites`, …) sont également utilisées pour les versions EN et PT (`/en/projets`, `/pt/projets`). À confirmer si l'entreprise souhaite des slugs traduits par langue.
- La page 404 et le plan du site doivent être régulièrement alignés sur l'arborescence réelle.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- La présence d'une page « carrières », « presse », « espace investisseurs » ou d'un blog dédié (non présents dans le routage).
- L'existence d'un espace réservé / intranet (le `robots.txt` bloque `/admin` mais aucune route `/admin` n'existe dans le routage).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Liste des routes | `src/App.tsx:36-51` |
| Page de montage | `src/main.tsx:7-12`, `src/components/Layout.tsx` |
| Bandeau des pages intérieures | `src/components/PageHero.tsx` |
| Menu principal | `src/components/Header.tsx:60-67` |
| Pied de page | `src/components/Footer.tsx` |
| Plan du site | `src/pages/SitemapPage.tsx` |
| URL indexées (sitemap) | `public/sitemap.xml` |
