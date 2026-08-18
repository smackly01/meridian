# 02.01 - Vue d'ensemble de l'architecture

> **Document** : 02.01 - Vue d'ensemble de l'architecture
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/components/Layout.tsx`, `package.json`

## 1. Objectif

Présenter l'architecture globale de l'application : pile technologique, flux d'exécution, découpage modulaire.

## 2. Faits observés

### 2.1 Pile technologique

| Couche | Technologie | Version installée |
| --- | --- | --- |
| Langage | TypeScript | 5.9.3 |
| UI | React | 18.3.1 |
| Routage | react-router-dom | 6.30.4 |
| Style | Tailwind CSS + postcss + autoprefixer | 3.4.19 / 8.4.49 / 10.4.20 |
| Build | Vite | 5.4.21 |
| Icônes | lucide-react | 0.462.0 |
| Utils | clsx + tailwind-merge | 2.1.1 / 2.6.1 |

### 2.2 Flux d'exécution

1. `index.html` charge `src/main.tsx` via `<script type="module">` (`index.html:23`).
2. `main.tsx` monte `<BrowserRouter><App /></BrowserRouter>` dans `StrictMode` (`src/main.tsx:7-12`).
3. `App.tsx` : résout le préfixe de langue (redirection éventuelle), récupère le contexte i18n, rend `Suspense` + `Routes`.
4. Chaque route charge sa page en `lazy()` (`src/App.tsx:9-31`) → découpage automatique du code (code splitting).
5. `Layout` enveloppe chaque page : `Header`, `<main id="main">`, `Footer`, `ScrollToTopButton` (`src/components/Layout.tsx`).
6. Les contenus sont importés statiquement depuis `src/data/*.ts` et les textes depuis `src/i18n/fr|en|pt.ts`.

### 2.3 Découpage modulaire

```
src/
├── main.tsx            → point d'entrée React
├── App.tsx             → routing + résolution langue
├── index.css           → styles globaux + design tokens Tailwind
├── types.ts            → types partagés
├── config/             → site.ts (identité, endpoints), images.ts (catalogue images)
├── i18n/               → index.tsx (contexte/langue), fr.ts / en.ts / pt.ts (dictionnaires)
├── lib/                → utils.ts (cn, tx, formatDate), icons.ts, useInView.ts
├── data/               → secteurs, projets, partenaires, équipe, actualités, pays, galerie, legal
├── components/         → UI + sections + layouts + form
├── pages/              → 15 pages
└── styles/             → index.css (global)
```

### 2.4 Caractéristiques techniques notables

- **Alias d'import** : `@` → `src` (`vite.config.ts:10`, `tsconfig.json:21-23`).
- **Code splitting** : pages importées via `React.lazy` (`src/App.tsx:9-31`) ; chunk `vendor` manuel pour react/react-dom/react-router-dom (`vite.config.ts:19-22`).
- **Cible de build** : `es2020`, sourcemaps désactivées (`vite.config.ts:16-17`).
- **StrictMode TypeScript** : `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` (`tsconfig.json:8-11`).
- **React StrictMode** activé (double rendu en dev) (`src/main.tsx:7`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : l'architecture est celle d'un site vitrine statique moderne, orientée performance (lazy loading, vendor chunk, pas d'état global lourd) et simple à héberger (statique, sans serveur Node à l'exécution).

Recommandations (interprétation) :
- L'ajout d'un backend (formulaires) n'affectera pas cette architecture : prévoir un endpoint d'API et un proxy dev si nécessaire.
- Le contenu étant en dur dans le code, l'évolution vers un CMS (si un jour nécessaire) passera par une refonte des sources de données (`src/data/`), pas par un changement d'architecture.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- La présence d'un serveur de rendu (SSR) - l'application est exclusivement client-side (CSR).
- La présence d'un gestionnaire d'état métier (aucune bibliothèque de state management hors contexte i18n).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Config build | `vite.config.ts` |
| Point d'entrée | `src/main.tsx` |
| Routing | `src/App.tsx` |
| Layout | `src/components/Layout.tsx` |
| Dép. installées | `package-lock.json` |
| Alias / strict | `vite.config.ts:10`, `tsconfig.json` |
