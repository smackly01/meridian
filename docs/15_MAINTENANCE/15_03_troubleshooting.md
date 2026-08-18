# 15.03 - Troubleshooting (dépannage)

> **Document** : 15.03 - Troubleshooting
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `package.json`, `src/**`, `vite.config.ts`

## 1. Objectif

Recenser les incidents fréquents et leurs solutions, à partir de l'analyse du projet.

## 2. Incidents et solutions

### 2.1 Build ou typecheck en échec

- **Symptôme** : `npm run build` ou `npm run typecheck` échoue.
- **Cause probable** : clé i18n manquante dans une langue (le typage `Dict` exige les 3 dictionnaires identiques), ou type invalide dans `src/data/*.ts`.
- **Vérifier** : la clé ajoutée dans `fr.ts` existe aussi dans `en.ts` et `pt.ts` (`src/i18n/`).
- **Solution** : compléter les dictionnaires, puis relancer `npm run typecheck`.

### 2.2 Un contenu n'apparaît pas

- **Symptôme** : projet/actualité/membre absent de la page.
- **Cause probable** : `published: false` (filtre appliqué dans les pages).
- **Solution** : passer `published: true` dans `src/data/<domaine>.ts`, puis rebuild.

### 2.3 La page Partenaires est vide / « à venir »

- **Cause** : `site.content.partners = false` (`src/config/site.ts:47-49`).
- **Solution** : passer à `true` et fournir les partenaires dans `src/data/partners.ts`.

### 2.4 Les formulaires « valident » sans envoyer

- **Symptôme** : le formulaire affiche un succès mais aucune donnée ne part.
- **Cause** : les endpoints `/api/contact` et `/api/projects` n'existent pas ; le code simule un succès (`console.info("[…] request queued")`).
- **Solution** : implémenter les endpoints ou brancher un service tiers (voir `11_FORMS`, `14_03`).

### 2.5 Image ou police qui ne charge pas

- **Cause** : dépendance aux domaines externes (`images.unsplash.com`, `fonts.googleapis.com/gstatic.com`).
- **Vérifier** : accès réseau, pare-feu, DNS.
- **Solution** : passer en local/hébergé si l'environnement bloque ces domaines.

### 2.6 Oups, une image OG manque

- **Symptôme** : les partages sociaux n'affichent pas d'aperçu.
- **Cause** : `og-image.jpg` référencé (`src/components/Seo.tsx:37`) mais absent de `public/`.
- **Solution** : ajouter `public/og-image.jpg`.

### 2.7 Route inconnue → 404

- **Comportement attendu** : toute URL non déclarée affiche la page 404 (`src/App.tsx:51`).
- **Vérifier** : que le préfixe de langue (`/fr`, `/en`, `/pt`) est correct - un préfixe inconnu provoque la 404.

### 2.8 Relancer l'environnement de développement

- **Solution** : `Ctrl+C` puis `npm run dev`. Le serveur écoute sur le port 4322 (voir log `dev.log`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : la plupart des incidents sont liés à la phase de contenu (publication, configuration) plutôt qu'au code lui-même.

Recommandations (interprétation) :
1. Documenter tout nouvel incident dans ce fichier.
2. En cas de changement de comportement, vérifier d'abord `npm run typecheck` et `npm run build`.
3. Tenir à jour le fichier de logs (`dev.log`, `preview.log`) pour diagnostiquer.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Des erreurs d'exécution spécifiques (aucune exécution exhaustive en production).
- Un système de logs d'application (aucune télémétrie dans le code).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Publication | `src/data/*.ts`, filtres `src/pages/*.tsx` |
| Endpoints | `src/config/site.ts:57-58` |
| i18n | `src/i18n/` |
| Ports / logs | `dev.log`, `preview.log` |
