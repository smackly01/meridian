# 04.02 - Composants UX et interactions

> **Document** : 04.02 - Composants UX et interactions
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/components/*.tsx`

## 1. Objectif

Décrire les composants d'interaction et leur comportement UX.

## 2. Faits observés

### 2.1 Apparition au scroll - `ScrollReveal.tsx`

- Utilise `IntersectionObserver` (seuil ~0.12, marge `-40px`) pour révéler les éléments au défilement (`reveal`).
- Utilitaire associé : `useInView.ts` (hook).

### 2.2 Compteurs animés - `Stat.tsx`

- Compteur incrémental animé à l'entrée dans le viewport, formatage numérique `fr-FR`.
- Respecte `prefers-reduced-motion`.

### 2.3 Carte Afrique - `AfricaMap.tsx`

- Carte de l'Afrique (projection lon/lat) avec points de présence pays (`AFRICA_RING`, `MADAGASCAR_RING`).
- Utilisée dans la page À propos / section présence pays.

### 2.4 Timeline d'approche - `ApproachTimeline.tsx`

- 6 étapes d'accompagnement + chaîne de parcours (« journey »).
- Desktop : grille 3 colonnes horizontale ; mobile : timeline verticale.

### 2.5 Section Finance - `FinanceSection.tsx`

- 5 points de proposition de valeur + 5 éléments de flux (montage financier).

### 2.6 Section Écosystème - `EcosystemSection.tsx`

- 5 catégories d'acteurs (icônes `Landmark`, `TrendingUp`, `HardHat`, `Briefcase`, …). Rendu conditionné à `site.content.partners`.

### 2.7 Galerie - `GallerySection.tsx`

- Photo vedette + grille du reste, légendes avec `MapPin`.

### 2.8 Bandeau CTA - `CtaBanner.tsx`

- Bandeau pleine largeur, image de fond `images.projects`, appel à l'action.

### 2.9 Bouton retour en haut - `ScrollToTopButton.tsx`

- Affiché après 480 px de scroll (`SHOW_AFTER`), respecte `prefers-reduced-motion`.

### 2.10 Médias - `Media.tsx` / `SvgPlaceholder`

- Image avec `loading="lazy"` (sauf hero/eager), `SvgPlaceholder` architectural avec `useId` (dégradé, motif, halo) pour les images manquantes.

### 2.11 Cartes de contenu - `ProjectCard` / `NewsCard` / `SectorCard`

- Cartes cliquables avec image, badge de statut (`StatusBadge`, `STATUS_STYLES`) ou catégorie (`CATEGORY_STYLES`), et lien vers le détail.

### 2.12 Sélecteur de langue - `LanguageSwitcher.tsx`

- Drapeaux SVG inline (pas d'emojis), menu déroulant ; bascule l'URL et la langue.

### 2.13 Formulaire UX - `fields.tsx`

- `FieldShell` : label, hint, erreur (`role="alert"`), `aria-invalid`/`aria-describedby`.

## 3. Interprétations & recommandations

Hypothèse / interprétation : les interactions sont orientées « narration au scroll » (reveal, compteurs, carte) et respectent globalement les préférences de réduction de mouvement.

Recommandations (interprétation) :
- Uniformiser les seuils d'`IntersectionObserver` (certains composants passent par `useInView`, d'autres par leurs propres options).
- Vérifier que le `ScrollReveal` ne cache pas de contenu si JavaScript est désactivé ou si l'observateur échoue (voir `04_03`).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Des carrousels ou sliders (aucune dépendance de slider ; les galeries sont des grilles).
- Des tooltips, modales ou toasts (en dehors des états de succès de formulaires).
- Des animations de transition entre routes (aucune bibliothèque type Framer Motion ; les transitions reposent sur les reveals).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| ScrollReveal / useInView | `src/components/ScrollReveal.tsx`, `src/lib/useInView.ts` |
| Stat | `src/components/Stat.tsx` |
| AfricaMap | `src/components/AfricaMap.tsx` |
| Timeline / Finance / Écosystème | `src/components/ApproachTimeline.tsx`, `FinanceSection.tsx`, `EcosystemSection.tsx` |
| Galerie / CTA | `src/components/GallerySection.tsx`, `CtaBanner.tsx` |
| Médias | `src/components/Media.tsx` |
| Cartes | `src/components/*Card.tsx` |
| Langue | `src/components/LanguageSwitcher.tsx` |
