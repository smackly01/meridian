# 08.02 - Contenu par page

> **Document** : 08.02 - Contenu par page
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/pages/*.tsx`, `src/i18n/fr.ts`, `src/data/*.ts`

## 1. Objectif

Détailler le contenu affiché sur chaque page.

## 2. Faits observés

### 2.1 Accueil (`HomePage.tsx`)

- Hero : titre, sous-titre, CTA (« Découvrir notre expertise » / « Nous contacter »).
- 5 statistiques animées (années d'expérience, projets réalisés, pays de présence, …).
- Aperçu expertise (3 points).
- 6 secteurs d'activité.
- 3 projets (visibles : publiés uniquement).
- Section Finance (5 points + 5 flux).
- Section Écosystème (si partenaires actifs).
- Galerie (photos + légendes).
- Bandeau CTA final.

### 2.2 À propos (`AboutPage.tsx`)

- Présentation de l'entreprise, image.
- 6 valeurs (rigueur, transparence, excellence, …).
- Chiffres clés.
- Équipe (filtrée sur `published` - actuellement vide).
- CTA contact.

### 2.3 Expertise (`ExpertisePage.tsx`)

- Bandeau.
- 4 blocs numérotés : « Le problème », « Notre approche », « Notre expertise », « Nos résultats ».

### 2.4 Secteurs (`SectorsPage.tsx`)

- Grille des 7 secteurs + carte « Soumettre votre projet ».

### 2.5 Détail secteur (`SectorDetailPage.tsx`)

- Hero avec image du secteur.
- Description longue, enjeux, sous-domaines.
- CTA contact.

### 2.6 Projets (`ProjectsPage.tsx`)

- Filtres secteur + statut.
- Grille de projets publiés (vide actuellement).

### 2.7 Détail projet (`ProjectDetailPage.tsx`)

- Image, titre, statut (`StatusBadge`).
- Description, données clés (montant, durée, type PPP…).
- Verrou si confidentiel ; « projet suivant » en bas.

### 2.8 Partenaires (`PartnersPage.tsx`)

- Si activé : 7 catégories + partenaires.
- Sinon : message « à venir » + CTA contact.

### 2.9 Actualités (`NewsPage.tsx`)

- Filtres catégories (7).
- Article vedette + grille des articles publiés (vide actuellement).

### 2.10 Article (`ArticlePage.tsx`)

- Contenu, date, catégorie, bouton partage, articles liés, navigation précédent/suivant.

### 2.11 Contact (`ContactPage.tsx`)

- Coordonnées : adresse, téléphone (+242 22 555 00 00), email (contact@Méridian.africa), horaires (Lun–Ven 9h–18h).
- Réseaux sociaux.
- Formulaire de contact.

### 2.12 Soumettre un projet (`SubmitProjectPage.tsx`)

- Bannière confidentialité.
- Formulaire 5 étapes (voir `11_FORMS`).

### 2.13 Mentions légales / Politique de confidentialité (`LegalPage.tsx`)

- Contenus depuis `src/data/legal.ts` : éditeur, capital, RCCM, hébergeur, directeur de publication.
- Politique : données collectées, traitement, droits RGPD (contenu générique).

### 2.14 Plan du site (`SitemapPage.tsx`)

- Pages principales (9), secteurs (7), pages info (2).

### 2.15 404 (`NotFoundPage.tsx`)

- Message d'erreur + lien de retour.

## 3. Interprétations & recommandations

Hypothèse / interprétation : l'ensemble des pages est câblé ; seules les données « références » manquent (projets, actualités, équipe, partenaires) pour donner corps aux sections correspondantes.

Recommandations (interprétation) :
- Prioriser l'alimentation des projets et actualités (contenus les plus visibles côté référence).
- Harmoniser les images de chaque secteur (toutes via `src/config/images.ts`).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un contenu vidéo (aucune balise `<video>` observée).
- Des téléchargements de documents publics (brochures, rapports) - non présents.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Pages | `src/pages/*.tsx` |
| Textes | `src/i18n/fr.ts` |
| Données | `src/data/*.ts` |
