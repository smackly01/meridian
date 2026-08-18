# 09.02 - Gestion des traductions

> **Document** : 09.02 - Gestion des traductions
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/i18n/fr.ts`, `src/i18n/en.ts`, `src/i18n/pt.ts`, `src/i18n/index.tsx`

## 1. Objectif

Documenter la maintenance des traductions : où les modifier, comment vérifier leur exhaustivité.

## 2. Faits observés

### 2.1 Emplacement des traductions

- Tous les textes d'interface sont dans `src/i18n/fr.ts`, `src/i18n/en.ts`, `src/i18n/pt.ts` (objet imbriqué plat, clés `domaine.sous-clé`).
- Les textes de contenu (secteurs, projets, etc.) sont dans les champs `Localized` des fichiers `src/data/*.ts` (`{ fr, en, pt }`).

### 2.2 Volume

- ~384 clés par langue (dénombré dans `fr.ts` ; `en.ts` et `pt.ts` structurés à l'identique).

### 2.3 Contrôle d'exhaustivité

- **Typage fort** : `Dict typeof fr` (`src/i18n/index.tsx`) → `tsc` échoue si `en.ts`/`pt.ts` n'ont pas exactement les mêmes clés.
- Commandes de vérification : `npm run typecheck` (voir `15_MAINTENANCE`).

### 2.4 Fallback automatique

- En cas de valeur manquante à l'exécution : `tx()`/`localize()` retombe sur `fr` puis `en` (`src/lib/utils.ts`, `src/i18n/index.tsx:93-95`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : la gestion des traductions est simple et sûre grâce au typage ; elle est entièrement manuelle (pas d'outil de traduction intégré).

Recommandations (interprétation) :
1. Après chaque modification de texte, lancer `npm run typecheck` pour valider l'égalité des dictionnaires.
2. Éviter les clés « à rallonge » (conserver les phrases dans les dictionnaires, pas dans les composants).
3. Faire relire les traductions EN/PT par un locuteur natif avant publication.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un outil externe de gestion de traduction (Crowdin, Lokalise, i18next-sync) - aucune dépendance.
- Des tests automatisés de présence des clés (le typage en tient lieu).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Dictionnaires | `src/i18n/fr.ts`, `en.ts`, `pt.ts` |
| Typage Dict | `src/i18n/index.tsx` |
| Fallback | `src/lib/utils.ts`, `src/i18n/index.tsx` |
