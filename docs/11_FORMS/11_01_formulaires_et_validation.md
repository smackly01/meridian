# 11.01 - Formulaires et validation

> **Document** : 11.01 - Formulaires et validation
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/components/form/ContactForm.tsx`, `src/components/form/SubmitProjectForm.tsx`, `src/components/form/fields.tsx`

## 1. Objectif

Documenter en détail les deux formulaires : champs, validation, envoi, gestion d'erreur.

## 2. Faits observés

### 2.1 Formulaire de contact - `ContactForm.tsx`

**Champs (9) :**

| Champ | Nom | Requis | Validation |
| --- | --- | --- | --- |
| Nom | name | oui | - |
| Email | email | oui | regex email |
| Société | company | non | - |
| Fonction | role | non | - |
| Téléphone | phone | non | - |
| Pays | country | non | - |
| Sujet | subject | oui | - |
| Message | message | oui | - |
| Site web (honeypot) | website | non | caché, anti-spam |

**Comportement :**
- Validation client avant envoi (champs requis + format email).
- Envoi : `fetch(POST /api/contact)` au format JSON (`src/config/site.ts:57-58`).
- État d'envoi : bouton désactivé (« Envoi en cours… »), puis succès avec `CheckCircle2`.
- Repli si échec réseau/endpoint absent : succès simulé + `console.info("[contact] request queued")` (aucune donnée réellement envoyée).

### 2.2 Formulaire de soumission de projet - `SubmitProjectForm.tsx`

**5 étapes :**

| Étape | Champs |
| --- | --- |
| 1. Informations | nom, organisation, email, téléphone, pays, type d'organisation, « comment nous avez-vous connus » |
| 2. Projet | titre, secteur (liste depuis `src/data/sectors.ts`), localisation, description, catégorie d'infrastructure |
| 3. Financement | montant estimé, type de financement, phase du projet, échéances |
| 4. Documents | fichiers joints : **max 10 Mo** (`MAX_FILE_MB`), extensions `.pdf .doc .docx .xls .xlsx .ppt .pptx` (`ACCEPTED`) |
| 5. Revue | synthèse + consentement (case à cocher) avant soumission |

**Comportement :**
- Navigation entre étapes ; validation par étape.
- Upload multipart : `fetch(POST /api/projects, FormData)`.
- Repli identique au contact en cas d'endpoint absent : `console.info("[project] request queued")`.
- Honeypot présent.

### 2.3 Champs réutilisables - `fields.tsx`

- `FieldShell` : wrapper label + hint + erreur.
  - Erreurs : `role="alert"`, `aria-invalid`, `aria-describedby`.
  - Style d'erreur : bordure `red-400`.
- `Input`, `Select`, `Textarea` (contrôlés ou non selon usage).

### 2.4 Notes transverses

- Le composant `SubmitProjectForm` importe `cn` deux fois (détail de style, sans impact fonctionnel).
- La validation est uniquement **côté client** ; aucune validation serveur n'existe (pas de backend).
- Les fichiers uploadés ne sont jamais traités côté client en l'absence de serveur.

## 3. Interprétations & recommandations

Hypothèse / interprétation : la validation client est correcte pour l'UX, mais la soumission réelle est suspendue à l'implémentation du backend.

Recommandations (interprétation) :

1. **Priorité haute**
   - Implémenter les endpoints `/api/contact` et `/api/projects` (ou basculer vers un service tiers), sinon remplacer le repli « succès simulé » par un vrai message d'erreur.
   - Rejouer la validation côté serveur (requis, email, taille/types de fichiers, honeypot, rate limiting).
2. **Priorité moyenne**
   - Ajouter des messages d'erreur spécifiques par champ à l'échec de l'API (aujourd'hui un échec est « réussi » visuellement).
   - Prévoir un état de chargement réel du multipart (progression).
3. **Priorité basse**
   - Unifier les imports `cn`.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Le format de réponse attendu de l'API (schéma de validation d'un succès/échec).
- Une gestion de ré-essai (retry) ou de file d'attente de soumissions.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| ContactForm | `src/components/form/ContactForm.tsx` |
| SubmitProjectForm | `src/components/form/SubmitProjectForm.tsx` |
| fields.tsx | `src/components/form/fields.tsx` |
| Endpoints | `src/config/site.ts:57-58` |
| Secteurs (sélecteur) | `src/data/sectors.ts` |
