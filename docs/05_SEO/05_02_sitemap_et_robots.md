# 05.02 - Sitemap et robots.txt

> **Document** : 05.02 - Sitemap et robots.txt
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `public/sitemap.xml`, `public/robots.txt`

## 1. Objectif

Décrire le contenu du sitemap et les directives des robots.

## 2. Faits observés

### 2.1 Sitemap - `public/sitemap.xml`

- Format XML Sitemap, avec variations `hreflang` pour **3 langues** (fr/en/pt) sur chaque URL.
- Pages couvertes (les 3 langues pour chacune) :

| Groupe | URL (sans langue) |
| --- | --- |
| Accueil | `/` |
| À propos | `/a-propos` |
| Expertise | `/expertise` |
| Secteurs | `/secteurs` |
| Détail secteurs | `/secteurs/transport`, `/secteurs/energy`, `/secteurs/water`, `/secteurs/health`, `/secteurs/infrastructures-publiques`, `/secteurs/sport`, `/secteurs/numerique-telecommunications` |
| Projets | `/projets` |
| Partenaires | `/partenaires` |
| Actualités | `/actualites` |
| Contact | `/contact` |
| Soumettre un projet | `/soumettre-un-projet` |
| Mentions légales | `/mentions-legales` |
| Politique de confidentialité | `/politique-de-confidentialite` |
| Plan du site | `/plan-du-site` |

- **Non inclus dans le sitemap** : les pages de détail projets (`/projets/:slug`) et articles (`/actualites/:slug`) - cohérent avec l'état « aucun contenu publié » actuel, mais à prévoir dès la publication de contenu.

### 2.2 Robots.txt - `public/robots.txt`

- Directive `Allow: /`.
- Directive `Disallow: /admin` (aucune route `/admin` n'existe dans le routage - protection préventive).
- Pointe vers le sitemap (`Sitemap:`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : le sitemap est manuel et statique ; il devra être régénéré à chaque ajout/retrait de contenu publié.

Recommandations (interprétation) :
1. Générer dynamiquement le sitemap (post-build) à partir des données (`src/data/*.ts`) pour éviter les incohérences.
2. Ajouter les URL de détail projet/article dès qu'un contenu est publié.
3. Vérifier que l'URL du sitemap dans `robots.txt` correspond à l'URL de production (`https://www.Fil Investment Group.africa/sitemap.xml`).
4. Synchroniser les slugs dans le sitemap avec les slugs réels des données (le sitemap liste 7 secteurs - cohérent avec `src/data/sectors.ts`).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un sitemap d'images ou de news (sitemap news) - seul un sitemap standard est présent.
- La présence d'un `x-default` hreflang (seul fr/en/pt sont listés, sans x-default).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Sitemap | `public/sitemap.xml` |
| Robots | `public/robots.txt` |
| Slugs secteurs | `src/data/sectors.ts` |
