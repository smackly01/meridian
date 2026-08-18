# 12.03 - Hébergement et domaines

> **Document** : 12.03 - Hébergement et domaines
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/config/site.ts`, `index.html`, `public/_redirects`, `vercel.json`

## 1. Objectif

Documenter les informations d'hébergement et de domaine telles qu'elles apparaissent dans le code.

## 2. Faits observés

### 2.1 Domaine public

- `site.url = "https://www.Fil Investment Group.africa"` (`src/config/site.ts:31-32`).
- Utilisé pour : canonical (`src/components/Seo.tsx`), URL de partage, JSON-LD.

### 2.2 Types de déploiement supportés par la config

- **Vercel** : `vercel.json` (réécriture SPA).
- **Netlify / Cloudflare Pages / autres hosts statiques** : `public/_redirects`.
- **GitHub Pages** : non prévu (pas de fichier `.nojekyll` ni de config dédiée).

### 2.3 Fichiers statiques servis

- `public/favicon.svg` (favicon, référencé dans `index.html`).
- `public/robots.txt`, `public/sitemap.xml` (SEO).
- `public/_redirects` (config d'hébergement, non servi en tant que contenu).

### 2.4 Ressources externes (dépendance réseau)

- Google Fonts (Manrope + Inter) via `fonts.googleapis.com` / `fonts.gstatic.com` (`index.html:13-18`).
- Images Unsplash via `images.unsplash.com` (`src/config/images.ts`).
- Aucun autre domaine externe sollicité.

## 3. Interprétations & recommandations

Hypothèse / interprétation : le domaine annoncé est `Fil Investment Group.africa` ; le projet est compatible avec les hébergeurs statiques modernes.

Recommandations (interprétation) :
1. Servir le site en **HTTPS** (les hébergeurs cités le font par défaut).
2. Rediriger `Fil Investment Group.africa` (sans www) vers `www.Fil Investment Group.africa` ou l'inverse, et faire pointer le canonical/`site.url` sur l'URL finale.
3. Vérifier que le sous-domaine ou le domaine racine est bien celui du certificat SSL.
4. Penser au CDN et au cache long pour les assets hashés.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Le fournisseur DNS / enregistreur de domaine.
- La date d'expiration du domaine ou du certificat.
- La présence effective d'un déploiement en ligne à l'URL annoncée.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| URL du site | `src/config/site.ts:31-32` |
| Canonical | `src/components/Seo.tsx` |
| Fonts | `index.html:13-18` |
| Images | `src/config/images.ts` |
