# 01.04 - Personas et parcours

> **Document** : 01.04 - Personas et parcours
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/pages/*.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/form/*.tsx`, `src/i18n/fr.ts`

## 1. Objectif

Décrire les profils d'utilisateurs (personas) et les parcours de navigation tels qu'ils sont architecturés dans le code.

## 2. Faits observés

### 2.1 Personas déduits de l'architecture

| Persona | Motivation | Parcours supporté par le site |
| --- | --- | --- |
| Décideur institutionnel (État, opérateur public) | Évaluer la crédibilité de Fil Investment Group comme partenaire | Accueil → À propos → Expertise → Secteurs → Contact |
| Investisseur / bailleur de fonds | Identifier le modèle de financement et l'écosystème | Accueil → Expertise → Partenaires → Contact |
| Porteur de projet | Soumettre une opportunité d'infrastructure | Accueil → Secteurs → Soumettre un projet → Formulaire 5 étapes |
| Presse / observateur | Consulter l'actualité de l'entreprise | Accueil → Actualités → Article |
| Visiteur international (EN/PT) | Accéder au contenu dans sa langue | Toute page → LanguageSwitcher → URL préfixée /en/ ou /pt/ |

### 2.2 Parcours de navigation principaux (tels que rendus possibles par le code)

1. **Parcours découverte** : Header (menu 6 entrées) → pages principales ; Footer (navigation complète + secteurs) ; `ScrollToTopButton` pour remonter (`src/components/ScrollToTopButton.tsx`).
2. **Parcours conversion « contact »** : pages → `ContactPage` → `ContactForm` (9 champs) → POST `/api/contact` (`src/components/form/ContactForm.tsx:152-171`).
3. **Parcours conversion « soumission de projet »** : `SubmitProjectPage` (bannière confidentialité) → `SubmitProjectForm` en 5 étapes + consentement → POST multipart `/api/projects` (`src/components/form/SubmitProjectForm.tsx`).
4. **Parcours multilingue** : `LanguageSwitcher` bascule les URL (`/fr` → `/en` → `/pt` …) via `setLang`/`getPath` (`src/i18n/index.tsx:71-91`, `src/components/LanguageSwitcher.tsx:47-54`).
5. **Parcours navigation profonde** : `/:lang?/secteurs/:slug`, `/:lang?/projets/:slug`, `/:lang?/actualites/:slug` (`src/App.tsx:36-51`) ; retours « Article précédent/suivant » (`src/pages/ArticlePage.tsx`) et « projet suivant » (`src/pages/ProjectDetailPage.tsx`).
6. **Parcours erreur** : route `*` → `NotFoundPage` (404) (`src/App.tsx:51`, `src/pages/NotFoundPage.tsx`).

### 2.3 Points de conversion et appels à action (CTA)

- Bouton « Soumettre un projet » dans le Header (`src/components/Header.tsx:60`).
- `CtaBanner` (bandeau pleine largeur avec appel à action) sur l'accueil (`src/components/CtaBanner.tsx`, monté dans `src/pages/HomePage.tsx`).
- Carte « Soumettre votre projet » dans la grille des secteurs (`src/pages/SectorsPage.tsx`).
- Liens mailto/tél vers les coordonnées dans le Footer et la page Contact (`src/components/Footer.tsx:79-96`, `src/pages/ContactPage.tsx`).

### 2.4 Gestion du changement de langue et des parcours

- `setLang` mémorise la langue dans `localStorage` (`src/i18n/index.tsx:77-81`) - unique usage de stockage local observé.
- Le changement de langue conserve le chemin courant et préfixe par la nouvelle langue (`getPath`, `src/i18n/index.tsx:84-88`).
- L'utilisateur est redirigé vers la langue du navigateur au premier chargement si aucun préfixe n'est présent (`browserLang`, `src/i18n/index.tsx:25-29` ; logique dans `src/App.tsx`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : les parcours de conversion sont volontairement courts (2-3 clics depuis l'accueil jusqu'aux formulaires), avec des CTA répétés (header, bandeau, grille secteurs). C'est un choix de conception cohérent pour un site vitrine à forte intention de prise de contact.

Recommandations (interprétation) :
- Les personas « presse » et « investisseur » sont les moins bien servis (contenus en démonstration). Alimenter les actualités et la page partenaires pour les servir.
- La soumission de projet étant sans backend dans le dépôt, les parcours de conversion aboutissent actuellement à un « échec silencieux » simulé (`console.info` - voir `11_FORMS`). Ce point doit être traité avant mise en ligne.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- La présence d'outils de mesure des parcours (analytics, heatmaps, A/B testing) - aucun dans le code.
- La présence d'étapes d'entonnoir marketing (newsletter, leads magnets, pages de remerciement) - aucune page « merci » dans le routage.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Routes / préfixe langue | `src/App.tsx:36-51` |
| Menu principal | `src/components/Header.tsx:60-67` |
| Navigation footer | `src/components/Footer.tsx` |
| Bascule de langue | `src/components/LanguageSwitcher.tsx`, `src/i18n/index.tsx:71-91` |
| Formulaire contact | `src/components/form/ContactForm.tsx:152-171` |
| Formulaire soumission | `src/components/form/SubmitProjectForm.tsx` |
| Bandeau CTA | `src/components/CtaBanner.tsx` |
| Page 404 | `src/pages/NotFoundPage.tsx` |
