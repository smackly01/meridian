# 15.02 - Gestion des contenus

> **Document** : 15.02 - Gestion des contenus
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/data/*.ts`, `src/config/site.ts`, `src/i18n/*`

## 1. Objectif

Documenter la procédure de mise à jour des contenus du site (textes, projets, actualités, équipe, coordonnées).

## 2. Faits observés

### 2.1 Où modifier quoi

| Contenu | Fichier | Remarque |
| --- | --- | --- |
| Textes de l'interface | `src/i18n/{fr,en,pt}.ts` | Ajouter la clé dans les 3 langues |
| Secteurs | `src/data/sectors.ts` | Champs `{fr,en,pt}` + icône + image |
| Projets | `src/data/projects.ts` | + flag `published` |
| Actualités | `src/data/news.ts` | + flag `published` + date ISO |
| Équipe | `src/data/team.ts` | + flag `published` |
| Partenaires | `src/data/partners.ts` | + flag `site.content.partners` |
| Pays | `src/data/countries.ts` | Position sur carte |
| Galerie | `src/data/gallery.ts` | Image + légende |
| Légales | `src/data/legal.ts` | Sections par page |
| Coordonnées / identité | `src/config/site.ts` | Placeholders à remplacer |
| Images | `src/config/images.ts` | Catalogue d'URLs |

### 2.2 Procédure recommandée (interprétation)

1. Identifier le fichier de données concerné (tableau ci-dessus).
2. Modifier/ajouter l'entrée, en conservant la structure typée.
3. Pour un nouveau projet/article : créer un `slug` unique, mettre `published: true` pour l'afficher.
4. Vérifier les 3 langues (`fr`, `en`, `pt`).
5. Exécuter `npm run typecheck` (valide la cohérence des dictionnaires et des types).
6. Exécuter `npm run build` puis prévisualiser (`npm run preview`).
7. Déployer.

### 2.3 Règles de publication

- Un contenu avec `published: false` est invisible sur le site (filtre appliqué dans les pages).
- La section Partenaires/Écosystème dépend de `site.content.partners` (`src/config/site.ts:47-49`).
- Les textes `meta.*` pilotent le SEO (title/description) de chaque page.

## 3. Interprétations & recommandations

Hypothèse / interprétation : la mise à jour de contenu est un simple travail d'édition de fichiers TypeScript, sans interface d'administration.

Recommandations (interprétation) :
1. Établir un circuit de validation (auteur → relecteur → publication) avant de mettre `published: true`.
2. Versionner systématiquement (Git) pour pouvoir revenir en arrière.
3. Maintenir à jour `public/sitemap.xml` et le plan du site lors de l'ajout de pages.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un workflow éditorial formalisé (validateurs, responsabilités) hors du code.
- Une sauvegarde des contenus hors du dépôt Git.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Données | `src/data/*.ts` |
| Config | `src/config/site.ts` |
| Dictionnaires | `src/i18n/{fr,en,pt}.ts` |
| Filtres de publication | `src/pages/*.tsx` |
