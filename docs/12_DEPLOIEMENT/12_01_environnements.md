# 12.01 - Environnements

> **Document** : 12.01 - Environnements
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `package.json`, `vite.config.ts`, `vercel.json`, `public/_redirects`

## 1. Objectif

Décrire les environnements (dev, préproduction, production) et leurs configurations.

## 2. Faits observés

### 2.1 Environnement de développement

- Commande : `npm run dev` → Vite dev server (`package.json:7`), observé sur le port **4322** (log dev).
- HMR activé (hot module replacement).
- Sourcemaps actives en dev.

### 2.2 Environnement de prévisualisation

- Commande : `npm run preview` (`package.json:9`) → `vite preview` pour tester le build en local.

### 2.3 Environnement de production

- Commande : `npm run build` (`package.json:8`) → `tsc` (typecheck) + `vite build` → dossier `dist/`.
- `vite build` génère des assets hashés + `manualChunks.vendor` (`vite.config.ts:19-22`).
- Sortie : `dist/` (constaté, avec `dist/assets/`).

### 2.4 Variables d'environnement

- **Aucune variable** utilisée dans le code (`import.meta.env`, `process.env` absents). Aucun fichier `.env*` livré (`.gitignore` exclut `.env`/`.env.*`, sauf `.env.example`).

### 2.5 Repli SPA (production)

- `public/_redirects` : `/* /index.html 200` → compatibilité Netlify/Pages.
- `vercel.json` : réécritures `{ "source": "/(.*)", "destination": "/index.html" }` → compatibilité Vercel.

## 3. Interprétations & recommandations

Hypothèse / interprétation : le projet est configuré pour être déployé comme site statique sur Vercel ou Netlify ; aucun environnement « préprod » distinct n'est prévu dans le code (les plates-formes peuvent en créer).

Recommandations (interprétation) :
1. Configurer un environnement de préproduction (PR preview) via Vercel/Netlify.
2. Si des endpoints d'API sont ajoutés, prévoir des variables d'environnement pour les URL selon l'environnement.
3. Vérifier le comportement de la redirection `/` → `/fr/` (préfixe de langue) en production.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- La configuration de l'environnement de production réel (domaine, région, limites).
- Des fichiers `.env.*` d'environnements.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Scripts | `package.json:6-11` |
| Build config | `vite.config.ts` |
| Repli Vercel | `vercel.json` |
| Repli Pages/Netlify | `public/_redirects` |
