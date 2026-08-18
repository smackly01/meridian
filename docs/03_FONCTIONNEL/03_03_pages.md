# 03.03 - Pages

> **Document** : 03.03 - Pages
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/pages/*.tsx`

## 1. Objectif

Décrire le rôle et le contenu de chaque page, tel qu'implémenté.

## 2. Faits observés

### 2.1 Accueil - `HomePage.tsx`

- Hero plein écran avec image de fond + titre + CTA.
- Section stats (5 compteurs animés : années d'expérience, projets, pays, etc.).
- Section expertise (lien vers `/expertise`).
- Aperçu de 6 secteurs (`visibleSectors.slice(6)`).
- Aperçu de 3 projets (`visibleProjects.slice(3)`).
- Section Finance.
- Section Écosystème (conditionnée à `site.content.partners`).
- Galerie photo.
- Bandeau CTA final.
- JSON-LD organisation (`organizationJsonLd`).

### 2.2 À propos - `AboutPage.tsx`

- Présentation de l'entreprise, image, valeurs (6 éléments).
- Chiffres clés.
- Équipe : liste filtrée sur `published` (vide actuellement).
- CTA contact.

### 2.3 Expertise - `ExpertisePage.tsx`

- Bandeau PageHero + 4 blocs numérotés : Problème, Approche, Expertise, Résultats (`BLOCK_KEYS`).

### 2.4 Secteurs - `SectorsPage.tsx`

- Grille des secteurs (`SectorCard`) + carte « Soumettre votre projet » en pointillés.

### 2.5 Détail secteur - `SectorDetailPage.tsx`

- Hero image du secteur, description, enjeux, sous-domaines, CTA contact. Redirection 404 si slug inconnu.

### 2.6 Projets - `ProjectsPage.tsx`

- Filtres : par secteur et par statut (`STATUSES` array). Grille de `ProjectCard`.

### 2.7 Détail projet - `ProjectDetailPage.tsx`

- Contenu complet, statut (`StatusBadge`), données clés (montant, durée, PPP), « projet suivant » en bas. Verrou pour les projets confidentiels. Redirection 404 si non publié.

### 2.8 Partenaires - `PartnersPage.tsx`

- Si `site.content.partners` : catégories (7) avec partenaires. Sinon : message « à venir » + CTA contact.

### 2.9 Actualités - `NewsPage.tsx`

- Filtres par catégorie (7 + « toutes »). Article vedette + grille `NewsCard`.

### 2.10 Article - `ArticlePage.tsx`

- Contenu complet, métadonnées (date, catégorie), bouton de partage (`navigator.share` ou copie de lien), articles liés (3), article précédent/suivant.

### 2.11 Contact - `ContactPage.tsx`

- Coordonnées (adresse, téléphone, email, horaires) + réseaux sociaux + `ContactForm`.

### 2.12 Soumettre un projet - `SubmitProjectPage.tsx`

- Bannière de confidentialité (cadenas) + `SubmitProjectForm` en 5 étapes.

### 2.13 Mentions légales / Politique de confidentialité - `LegalPage.tsx`

- Contenu paramétré par `page` (`legal` ou `privacy`) depuis `src/data/legal.ts`.

### 2.14 Plan du site - `SitemapPage.tsx`

- Liens : pages principales (9), secteurs (7), pages info (2).

### 2.15 404 - `NotFoundPage.tsx`

- Message « 404 - Page introuvable » avec retour à l'accueil (fond sombre).

## 3. Interprétations & recommandations

Hypothèse / interprétation : chaque page joue un rôle clair ; les pages de liste (secteurs/projets/actualités) et de détail sont homogènes.

Recommandations (interprétation) :
- Penser à un système de « plus d'actualités » (pagination ou chargement) quand le nombre d'articles augmentera.
- Les pages de détail gagneraient à disposer d'un fil d'Ariane (voir `03_02`).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Des pages « success stories » ou « témoignages » distinctes.
- Une page d'erreur serveur (500) spécifique.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Toutes les pages | `src/pages/*.tsx` |
| Routage | `src/App.tsx:36-51` |
| Contenu par page | voir `08_CONTENU/08_02` |
