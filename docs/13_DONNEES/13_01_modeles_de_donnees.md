# 13.01 - Modèles de données

> **Document** : 13.01 - Modèles de données
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/types.ts`, `src/data/*.ts`

## 1. Objectif

Documenter les structures de données du projet.

## 2. Faits observés

### 2.1 Types génériques (`src/types.ts`)

- **`Localized`** : champ trilingue `{ fr: string; en: string; pt: string }` - utilisé par les textes de contenu.
- **`ProjectStatus`** : `realized | ongoing | development | confidential`.
- **`NewsCategory`** : `news | press | event | conference | partnership | project | analysis`.
- **`PartnerCategory`** : catégories de partenaires.
- **`Project`, `Sector`, `Partner`, `TeamMember`, `NewsItem`, `CountryPresence`, `GalleryPhoto`** : structures des entités de contenu.

### 2.2 Secteur (`Sector`)

- `slug` (identifiant URL), icône (clé du catalogue `src/lib/icons.ts`), champs `Localized` (titre, description courte/longue, enjeux, sous-domaines), image, ordre.

### 2.3 Projet (`Project`)

- `slug`, `title` (Localized), statut (`ProjectStatus`), secteur, pays, description, montant, durée, type (ex. PPP), images, `published`.

### 2.4 Actualité (`NewsItem`)

- `slug`, `title` (Localized), catégorie (`NewsCategory`), date (ISO), auteur (optionnel), contenu (Localized), image, `published`.

### 2.5 Équipe (`TeamMember`)

- `name`, rôle (Localized), bio (Localized), photo, `published`.

### 2.6 Partenaire (`Partner`)

- `name`, catégorie, description (Localized), logo, `published` (si applicable).

### 2.7 Pays de présence (`CountryPresence`)

- `name`, position (x/y sur la carte `AfricaMap`), nombre de projets, secteurs.

### 2.8 Galerie (`GalleryPhoto`)

- `image`, légende (Localized), lieu, date éventuelle.

### 2.9 Contenus légaux (`src/data/legal.ts`)

- `LegalSection` : titre + paragraphes ; `legalSections[page]` avec `page: "legal" | "privacy"`.
- Données d'éditeur : Méridian SA, capital 10 000 000 F CFA, RCCM B 2011 B 01452 (Brazzaville), directeur de publication, hébergeur InfraCloud SAS.

## 3. Interprétations & recommandations

Hypothèse / interprétation : les modèles sont simples et suffisants pour un site vitrine ; les types `Localized` généralisent le multilingue sur tous les contenus.

Recommandations (interprétation) :
1. Si un CMS est intégré plus tard, ces types serviront de contrat d'interface.
2. Ajouter un champ `updatedAt`/`createdAt` sur les contenus si l'éditorial devient actif (tri et sitemap).
3. Documenter les enum de statut/catégorie pour les contributeurs.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un modèle d'utilisateur / de compte (aucune authentification).
- Un modèle de FAQ, de témoignage ou de post de blog « libre » distinct de `NewsItem`.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Types | `src/types.ts` |
| Données | `src/data/*.ts` |
| Icônes | `src/lib/icons.ts` |
