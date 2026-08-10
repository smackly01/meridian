# 03.04 - Formulaires

> **Document** : 03.04 - Formulaires
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/components/form/ContactForm.tsx`, `src/components/form/SubmitProjectForm.tsx`, `src/components/form/fields.tsx`

> Note : une documentation complète et dédiée est fournie dans `11_FORMS`. Ce document en donne la synthèse fonctionnelle.

## 1. Objectif

Résumer le fonctionnement fonctionnel des deux formulaires du site.

## 2. Faits observés

### 2.1 Formulaire de contact - `ContactForm.tsx`

- Champs : nom, email, société, fonction, téléphone, pays, sujet, message, + champ « anti-robot » caché (`website`).
- Validation : requis sur nom/email/sujet/message ; format email contrôlé par regex.
- Envoi : `fetch POST` vers `CONTACT_ENDPOINT` (`/api/contact`) au format JSON (`src/config/site.ts:57-58`, `src/components/form/ContactForm.tsx`).
- Gestion d'échec : en cas d'absence de backend, message de confirmation simulé + `console.info("[contact] request queued")` - comportement de repli.
- Retour visuel : état de succès avec icône `CheckCircle2`, bouton désactivé pendant l'envoi.

### 2.2 Formulaire de soumission de projet - `SubmitProjectForm.tsx`

- **5 étapes** :
  1. Informations (nom, organisation, email, téléphone, pays, type d'organisation, comment vous nous avez connus).
  2. Projet (titre, secteur, localisation, description, catégorie d'infrastructure).
  3. Financement (montant, type de financement, phase, échéances).
  4. Documents (fichiers, limites : 10 Mo, extensions `.pdf .doc .docx .xls .xlsx .ppt .pptx`).
  5. Revue / consentement (case à cocher) avant soumission.
- Envoi : `fetch POST` multipart vers `SUBMIT_ENDPOINT` (`/api/projects`).
- Gestion d'échec : repli simulé identique au contact (`console.info("[project] request queued")`).
- **Bannière de confidentialité** sur la page (`src/pages/SubmitProjectPage.tsx`).

### 2.3 Champs réutilisables - `fields.tsx`

- `FieldShell` : label, indication, message d'erreur avec `role="alert"`, styles `aria-invalid`/`aria-describedby`.
- Composants : `Input`, `Select`, `Textarea` avec styles d'erreur (bordure `red-400`).

### 2.4 Comportement d'envoi (constaté)

- Les endpoints `/api/contact` et `/api/projects` **n'existent pas** dans le dépôt (aucun backend). Le code gère l'échec de manière « silencieuse » : affichage d'un succès simulé.
- En environnement de production sans backend, aucune donnée n'est réellement transmise.

## 3. Interprétations & recommandations

Hypothèse / interprétation : les formulaires ont été câblés en prévision d'une API REST dont l'implémentation n'est pas livrée. Le repli « succès simulé » évite une erreur visible mais donne une fausse impression d'envoi à l'utilisateur.

Recommandations (interprétation) :
- Implémenter le backend (ou un service tiers comme Formspree/Getform) avant toute mise en production.
- A minima, masquer le formulaire ou afficher un vrai message d'erreur si l'endpoint est absent.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Le format de réponse attendu du serveur (schéma de réponse d'API).
- La gestion d'un token CSRF côté client (les formulaires sont des SPA statiques).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| ContactForm | `src/components/form/ContactForm.tsx` |
| SubmitProjectForm | `src/components/form/SubmitProjectForm.tsx` |
| fields.tsx | `src/components/form/fields.tsx` |
| Endpoints | `src/config/site.ts:57-58` |
