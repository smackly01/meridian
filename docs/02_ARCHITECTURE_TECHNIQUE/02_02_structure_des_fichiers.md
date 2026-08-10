# 02.02 - Structure des fichiers

> **Document** : 02.02 - Structure des fichiers
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : arborescence du dépôt, `src/**`

## 1. Objectif

Cartographier l'arborescence complète du projet pour permettre la navigation et la maintenance.

## 2. Faits observés

### 2.1 Racine du projet

```
Méridian/
├── .claude/                 → settings.local.json (autorisation Bash netstat)
├── .gitignore
├── dist/                    → sortie de build
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public/
│   ├── _redirects
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

### 2.2 Dossier `src/`

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── types.ts
├── components/
│   ├── AfricaMap.tsx
│   ├── ApproachTimeline.tsx
│   ├── Button.tsx
│   ├── CtaBanner.tsx
│   ├── EcosystemSection.tsx
│   ├── FinanceSection.tsx
│   ├── Footer.tsx
│   ├── GallerySection.tsx
│   ├── Header.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Layout.tsx
│   ├── Media.tsx
│   ├── NewsCard.tsx
│   ├── PageHero.tsx
│   ├── ProjectCard.tsx
│   ├── ScrollReveal.tsx
│   ├── ScrollToTopButton.tsx
│   ├── SectionHeading.tsx
│   ├── SectorCard.tsx
│   ├── Seo.tsx
│   ├── Stat.tsx
│   ├── form/
│   │   ├── ContactForm.tsx
│   │   ├── SubmitProjectForm.tsx
│   │   └── fields.tsx
│   └── layout/ (si présent - voir note 4)
├── config/
│   ├── images.ts
│   └── site.ts
├── data/
│   ├── countries.ts
│   ├── gallery.ts
│   ├── legal.ts
│   ├── news.ts
│   ├── partners.ts
│   ├── projects.ts
│   ├── sectors.ts
│   └── team.ts
├── i18n/
│   ├── en.ts
│   ├── fr.ts
│   ├── index.tsx
│   └── pt.ts
├── lib/
│   ├── icons.ts
│   ├── useInView.ts
│   └── utils.ts
├── pages/
│   ├── AboutPage.tsx
│   ├── ArticlePage.tsx
│   ├── ContactPage.tsx
│   ├── ExpertisePage.tsx
│   ├── HomePage.tsx
│   ├── LegalPage.tsx
│   ├── NewsPage.tsx
│   ├── NotFoundPage.tsx
│   ├── PartnersPage.tsx
│   ├── ProjectDetailPage.tsx
│   ├── ProjectsPage.tsx
│   ├── SectorDetailPage.tsx
│   ├── SectorsPage.tsx
│   ├── SitemapPage.tsx
│   └── SubmitProjectPage.tsx
└── styles/ (si présent - voir note 4)
```

### 2.3 Convention de nommage

- Composants : `PascalCase.tsx` ; composant par fichier (un fichier = un composant principal).
- Pages : suffixe `Page.tsx` (`HomePage`, `SectorDetailPage`, …).
- Données : `kebab-case` anglais par domaine (`countries.ts`, `sectors.ts`, …).
- Dictionnaires i18n : code de langue (`fr.ts`, `en.ts`, `pt.ts`).
- Helpers : `camelCase` dans `lib/` (`useInView.ts`, `utils.ts`, `icons.ts`).
- Styles globaux : `index.css` dans `src/` et éventuellement `styles/`.

### 2.4 Correspondance page ↔ fichier

| Page | Fichier |
| --- | --- |
| Accueil | `src/pages/HomePage.tsx` |
| À propos | `src/pages/AboutPage.tsx` |
| Expertise | `src/pages/ExpertisePage.tsx` |
| Secteurs / détail | `SectorsPage.tsx` / `SectorDetailPage.tsx` |
| Projets / détail | `ProjectsPage.tsx` / `ProjectDetailPage.tsx` |
| Partenaires | `PartnersPage.tsx` |
| Actualités / article | `NewsPage.tsx` / `ArticlePage.tsx` |
| Contact | `ContactPage.tsx` |
| Soumettre un projet | `SubmitProjectPage.tsx` |
| Légales (2) | `LegalPage.tsx` |
| Plan du site | `SitemapPage.tsx` |
| 404 | `NotFoundPage.tsx` |

## 3. Interprétations & recommandations

Hypothèse / interprétation : l'arborescence est lisible et conventionnelle ; la séparation données / composants / pages est claire.

Recommandations (interprétation) :
- Les sous-dossiers `components/layout/` et `src/styles/` : leur existence dépend de la présence effective dans le dépôt - à vérifier lors de la phase de contrôle. Les fichiers `Header`/`Footer`/`Layout` sont observés dans `src/components/` directement.
- Documenter dans `README.md` cette arborescence pour les nouveaux contributeurs.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- La présence d'un dossier `components/layout/` ou `styles/` distinct (les composants de layout sont observés dans `src/components/` directement ; le CSS global est `src/index.css`).
- La présence d'un fichier `README.md` à la racine.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Arborescence complète | exploration du dépôt |
| Correspondance routes/pages | `src/App.tsx:36-51` |
| Fichiers publics | `public/` |
