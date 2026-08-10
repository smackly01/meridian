# 13.02 - Sources de contenu

> **Document** : 13.02 - Sources de contenu
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/data/*.ts`, `src/config/site.ts`, `src/config/images.ts`, `src/i18n/*`

## 1. Objectif

Indiquer où chaque type de contenu est alimenté, pour faciliter la mise à jour par les équipes.

## 2. Faits observés

| Contenu | Fichier source | Forme |
| --- | --- | --- |
| Textes d'interface | `src/i18n/{fr,en,pt}.ts` | Dictionnaires de clés |
| Secteurs | `src/data/sectors.ts` | Tableau `Sector` |
| Projets | `src/data/projects.ts` | Tableau `Project` |
| Partenaires | `src/data/partners.ts` | Tableau `Partner` |
| Équipe | `src/data/team.ts` | Tableau `TeamMember` |
| Actualités | `src/data/news.ts` | Tableau `NewsItem` |
| Pays de présence | `src/data/countries.ts` | Tableau `CountryPresence` |
| Galerie | `src/data/gallery.ts` | Tableau `GalleryPhoto` |
| Mentions légales / confidentialité | `src/data/legal.ts` | `LegalSection[]` par page |
| Identité / coordonnées / endpoints | `src/config/site.ts` | Objet de configuration |
| Images (références) | `src/config/images.ts` | Catalogue URLs Unsplash |
| Icônes | `src/lib/icons.ts` | Mapping nom → composant lucide |

### 2.1 Publication (flags)

- `published: true|false` dans chaque entité de contenu (projets, actualités, équipe).
- `site.content.partners: true|false` pour la section Partenaires/Écosystème.

### 2.2 Convention d'édition

- Les champs textuels multilingues sont des objets `{ fr, en, pt }`.
- Les dates sont au format ISO (`src/data/news.ts`).
- Les images sont des URLs complètes (Unsplash) ou des identifiants passés par `u()` (`src/config/images.ts`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : toute la maintenance éditoriale se fait dans les fichiers `src/data/*.ts` et `src/config/site.ts`, sans interface d'administration.

Recommandations (interprétation) :
1. Documenter la procédure d'édition pour les non-développeurs (cf. `15_02_gestion_des_contenus`).
2. Après chaque changement, relancer `npm run typecheck` puis `npm run build`.
3. Remplacer systématiquement les contenus « démo » par les contenus réels avant publication publique.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un CMS, une API de contenu ou un espace d'administration (la maintenance est dans le code).
- Des assets locaux (images hébergées dans le projet) - aucune.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Sources de contenu | `src/data/*.ts`, `src/config/*.ts` |
| Publication | champs `published`, `site.content.partners` |
| Images | `src/config/images.ts` |
