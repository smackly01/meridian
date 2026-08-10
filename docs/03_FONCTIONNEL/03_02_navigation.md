# 03.02 - Navigation

> **Document** : 03.02 - Navigation
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/Layout.tsx`

## 1. Objectif

Détailler les zones de navigation (header, footer, utilitaires) et leur comportement.

## 2. Faits observés

### 2.1 En-tête (Header)

- **Comportement** : barre fixe ; l'arrière-plan devient opaque après un léger scroll (`sticky`/`fixed` + état `scrolled`, `src/components/Header.tsx`).
- **Contenu** :
  - Logo Méridian (SVG) à gauche (`src/components/Header.tsx`).
  - Menu principal (6 entrées) : À propos, Expertise, Secteurs, Projets, Actualités, Contact (`src/components/Header.tsx:60-67`).
  - Bouton « Soumettre un projet » (`src/components/Header.tsx:60`).
  - Sélecteur de langue FR / EN / PT (`src/components/Header.tsx:95,141`).
- **Mobile** : menu hamburger avec panneau déroulant (`useState` d'ouverture, `src/components/Header.tsx`).

### 2.2 Pied de page (Footer)

- **Colonnes** :
  1. Présentation Méridian + réseaux sociaux (`src/components/Footer.tsx`).
  2. Navigation principale (8 entrées : À propos, Expertise, Secteurs, Projets, Partenaires, Actualités, Contact, Soumettre un projet).
  3. Les 7 secteurs en liens.
  4. Coordonnées : adresse, téléphone, email, horaires (`src/components/Footer.tsx:79-96`).
- **Bas de page** : © année courante, mentions légales, politique de confidentialité, plan du site, sélecteur de langue (`src/components/Footer.tsx:120-135`).

### 2.3 Utilitaires de navigation

- **Scroll to top** : sur changement de route, retour en haut (`src/components/Layout.tsx`).
- **ScrollToTopButton** : bouton flottant « retour en haut » visible après 480 px de scroll (`src/components/ScrollToTopButton.tsx`).
- **Skip link** : « Aller au contenu » → `#main` pour l'accessibilité clavier (`src/components/Layout.tsx`).
- **Breadcrumb** : non présent dans le code (pas de fil d'Ariane observé).

### 2.4 État des liens

- Liens internes : `Link` React Router (SPA, pas de rechargement).
- Liens externes : `target="_blank"` + `rel="noopener noreferrer"` pour les réseaux sociaux (`src/components/Footer.tsx`).
- Liens `mailto:` / `tel:` pour les coordonnées (`src/components/Footer.tsx:79-96`, `src/pages/ContactPage.tsx`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : la navigation est cohérente et complète pour un site institutionnel ; le footer sert de « méga-menu » en double de la navigation principale.

Recommandations (interprétation) :
- L'absence de fil d'Ariane peut être acceptable vu la profondeur de navigation (max 2 niveaux), mais serait utile sur les pages de détail (secteur/projet/article).
- Vérifier que le menu mobile est bien accessible au clavier (état `aria-expanded`, fermeture à l'échappement) - cf. `04_03_accessibilite`.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un menu « méga-menu » déroulant sur survol (les menus sont des listes simples de liens).
- Un champ de recherche interne.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Header | `src/components/Header.tsx` |
| Footer | `src/components/Footer.tsx` |
| Layout / skip / scroll | `src/components/Layout.tsx` |
| Bouton retour haut | `src/components/ScrollToTopButton.tsx` |
