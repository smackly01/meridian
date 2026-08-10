# 12.02 - Processus de déploiement

> **Document** : 12.02 - Processus de déploiement
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `package.json`, `vercel.json`, `public/_redirects`

## 1. Objectif

Documenter la chaîne de déploiement et les prérequis.

## 2. Faits observés

### 2.1 Chaîne de build

```
npm install
  ↓
npm run build   (typecheck tsc + vite build)
  ↓
dist/           (site statique prêt à servir)
```

### 2.2 Commandes vérifiées

- `npm run typecheck` : succès (aucune erreur de type).
- `npm run build` : succès (1640 modules analysés).
- `npm run dev` : serveur de développement fonctionnel (Vite 5.4.21, port 4322).

### 2.3 Configuration du déploiement

- **Vercel** : `vercel.json` présent (réécriture SPA). Pas de `buildCommand`/`outputDirectory` explicites → les valeurs par défaut Vercel s'appliquent (build : `npm run build`, sortie : `dist`).
- **Netlify / Cloudflare Pages** : `public/_redirects` (`/* /index.html 200`) ; commande `npm run build`, dossier `dist`.

### 2.4 Déploiements automatiques

- **Aucun pipeline CI** dans le dépôt (pas de `.github/workflows`, pas de config d'auto-deploy Vercel dans le code). Le déploiement se fait par les commandes ci-dessus ou les réglages de la plateforme.

## 3. Interprétations & recommandations

Hypothèse / interprétation : le projet est prêt pour un déploiement statique standard sur Vercel ou Netlify, en déploiement manuel ou via connexion Git.

Recommandations (interprétation) :
1. Connecter le dépôt Git à Vercel/Netlify pour activer les déploiements automatiques à chaque push.
2. Ajouter un fichier `vercel.json` avec `"buildCommand"` et `"outputDirectory"` explicites pour lever toute ambiguïté.
3. Configurer des previews par PR pour tester avant mise en production.
4. Après déploiement, valider : la redirection `/` → `/fr/`, le `sitemap.xml`, les en-têtes de sécurité (cf. `06_SECURITE`).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Le fournisseur d'hébergement effectivement utilisé.
- Une éventuelle pipeline CI/CD existante en dehors du dépôt.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Scripts | `package.json:6-11` |
| Config Vercel | `vercel.json` |
| Repli Netlify/Pages | `public/_redirects` |
