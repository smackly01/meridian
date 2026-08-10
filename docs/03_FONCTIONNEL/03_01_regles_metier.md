# 03.01 - Règles métier

> **Document** : 03.01 - Règles métier
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/config/site.ts`, `src/data/*.ts`, `src/pages/*.tsx`

## 1. Objectif

Lister les règles de gestion implémentées dans le code (visibilité des contenus, statuts, catégories, options de site).

## 2. Faits observés

### 2.1 Publication des contenus

- Règle : un contenu n'est affiché que si `published === true`.
  - Projets : `src/data/projects.ts` - tous les éléments `published: false` actuellement.
  - Équipe : `src/data/team.ts` - tous les éléments `published: false` (la bio du fondateur, bien que présente, n'est pas rendue).
  - Actualités : `src/data/news.ts` - tous les éléments `published: false`.
- La page Partenaires respecte une règle de visibilité globale : si `site.content.partners === false`, la liste est remplacée par un message « à venir » (`src/config/site.ts:47-49`, `src/pages/PartnersPage.tsx:107-121`).

### 2.2 Statuts de projet

- Les projets portent un statut parmi : `realized` (réalisé), `ongoing` (en cours), `development` (en développement), `confidential` (confidentiel) (`src/types.ts`).
- Le statut est affiché via `StatusBadge` (`src/components/ProjectCard.tsx`) avec des styles par statut (`STATUS_STYLES`).
- Les projets `confidential` présentent un cadenas et un message dédié (`src/pages/ProjectDetailPage.tsx`).

### 2.3 Catégories métier

- **Secteurs** (8) : Transport, Énergie, Eau, Santé, Infrastructures publiques, Sport, Numérique & Télécommunications (et regroupements éventuels) (`src/data/sectors.ts`).
- **Catégories d'actualités** : news, press, event, conference, partnership, project, analysis (`src/types.ts`, `src/data/news.ts`, filtres `src/pages/NewsPage.tsx`).
- **Catégories de partenaires** (7) : institutions publiques, banques et financements, investisseurs, industriels, experts/consultants, etc. (`src/data/partners.ts`, `CATEGORY_ORDER` dans `src/pages/PartnersPage.tsx`).

### 2.4 Règles de contact et localisation

- Langues : 3 actives (fr, en, pt) ; langue par défaut : `fr` (`src/config/site.ts:52-55`, `src/i18n/index.tsx:16`).
- Coordonnées : adresse à Brazzaville, téléphone `+242 22 555 00 00`, email `contact@Méridian.africa`, horaires « Lun–Ven, 9h–18h » (valeurs placeholder) (`src/config/site.ts:34-42`).
- `gdpr.enabled: true` : signalétique placeholder de conformité RGPD (aucune implémentation de consentement cookie observée) (`src/config/site.ts:44-46`).

### 2.5 Règles de soumission de projet

- Taille maximale de fichier : 10 Mo (`MAX_FILE_MB`, `src/components/form/SubmitProjectForm.tsx`).
- Extensions autorisées : `.pdf`, `.doc`, `.docx`, `.xls`, `.xlsx`, `.ppt`, `.pptx` (`ACCEPTED`, même fichier).
- Consentement obligatoire avant soumission (case à cocher).

## 3. Interprétations & recommandations

Hypothèse / interprétation : les « règles métier » sont ici des règles de contenu/visibilité pilotées par des flags simples, cohérentes avec un site vitrine en phase de préparation de contenu.

Recommandations (interprétation) :
- Lors de la mise en production, basculer `site.content.partners` et les `published` selon le calendrier éditorial.
- Formaliser les règles de validation côté backend (si backend ajouté) pour la soumission de projets (taille, types de fichiers, anti-spam) - voir `06_SECURITE` et `11_FORMS`.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Une gestion de workflow de validation éditoriale (brouillon / en attente / approuvé) - seule la binaire `published` existe.
- Des règles de tarification, devis, ou processus d'achat - non applicables à ce type de site vitrine.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Flag `published` | `src/data/*.ts` |
| Flag partenaires | `src/config/site.ts:47-49` |
| Statuts projet | `src/types.ts`, `ProjectCard.tsx` |
| Catégories | `src/types.ts`, `NewsPage.tsx`, `PartnersPage.tsx` |
| Règles fichiers | `src/components/form/SubmitProjectForm.tsx` |
