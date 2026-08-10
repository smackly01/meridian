# 09.01 - Architecture i18n

> **Document** : 09.01 - Architecture i18n
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/i18n/index.tsx`, `src/i18n/fr.ts`, `src/i18n/en.ts`, `src/i18n/pt.ts`, `src/config/site.ts`, `src/components/LanguageSwitcher.tsx`

## 1. Objectif

Documenter le fonctionnement de l'internationalisation (détection, bascule, mécanique de traduction).

## 2. Faits observés

### 2.1 Langues

- **3 langues supportées** : `fr`, `en`, `pt` (`src/i18n/index.tsx:14-18`).
- **Langue par défaut** : `fr` (`src/i18n/index.tsx:16`).
- **Langues actives** : `ACTIVE_LANGS = ["fr", "en", "pt"]` (`src/config/site.ts:55`) - la langue portugaise peut être désactivée sans suppression du code.
- Noms affichés : Français / English / Português (`LOCALE_NAMES`).

### 2.2 Mécanique

- **Contexte React** : `I18nProvider` + hook `useI18n()` (`src/i18n/index.tsx:39-91`) exposant `lang`, `setLang`, `t`, `localize`.
- **Type sécurisé** : `Dict typeof fr` → les dictionnaires `en.ts`/`pt.ts` doivent respecter la structure du français (erreur de compilation si clé manquante).
- **`t(key)`** : traduction d'une clé de dictionnaire.
- **`localize(obj, lang)`** : sélection du champ localisé d'un objet de données (`obj.fr || obj.en`).
- **`tx(entry, lang)`** (`src/lib/utils.ts`) : variante avec fallback fr→en→pt.
- **`getPath` / `stripLang`** : construction et suppression des préfixes de langue dans les URL (`src/i18n/index.tsx:84-88`).

### 2.3 Détection et redirection

- À la première visite sans préfixe : détection de la langue du navigateur (`browserLang`) → redirection vers `/fr/`, `/en/` ou `/pt/` ; sinon FR.
- Langue mémorisée dans `localStorage` (`src/i18n/index.tsx:77-81`) → reconnexion dans la langue choisie.

### 2.4 Bascule utilisateur

- `LanguageSwitcher` (`src/components/LanguageSwitcher.tsx`) : drapeaux SVG inline, conserve le chemin courant et préfixe la nouvelle langue.
- Présent dans le Header (desktop + mobile) et le Footer.

### 2.5 SEO multilingue

- `document.documentElement.lang` synchronisé (`src/components/Seo.tsx`).
- Balises `hreflang` fr/en/pt générées (`src/components/Seo.tsx`).
- `og:locale` : `pt_PT` pour le portugais, `fr_FR`/`en_US` sinon.

## 3. Interprétations & recommandations

Hypothèse / interprétation : l'architecture i18n est robuste : dictionnaires typés, URL préfixées par langue, fallbacks, localStorage, SEO hreflang.

Recommandations (interprétation) :
1. Respecter la règle : toute nouvelle clé ajoutée dans `fr.ts` doit être ajoutée dans `en.ts` et `pt.ts` (le typage `Dict` l'impose).
2. Pour les contenus éditoriaux longs (secteurs, projets), vérifier que chaque langue a bien un texte de qualité, pas seulement un fallback.
3. Si le portugais est inactif, le retirer de `ACTIVE_LANGS` (le code restera en place).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Une pluralisation/formatage de texte avancé (les phrases simples sont gérées par les clés).
- Une gestion de la direction RTL (non nécessaire pour FR/EN/PT).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Contexte i18n | `src/i18n/index.tsx` |
| Dictionnaires | `src/i18n/fr.ts`, `en.ts`, `pt.ts` |
| Langues actives | `src/config/site.ts:52-55` |
| Sélecteur | `src/components/LanguageSwitcher.tsx` |
| Utils | `src/lib/utils.ts` |
