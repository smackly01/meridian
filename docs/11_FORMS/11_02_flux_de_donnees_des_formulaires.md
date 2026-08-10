# 11.02 - Flux de données des formulaires

> **Document** : 11.02 - Flux de données des formulaires
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/components/form/ContactForm.tsx`, `src/components/form/SubmitProjectForm.tsx`, `src/config/site.ts`

## 1. Objectif

Décrire le parcours des données saisies dans les formulaires, du clic utilisateur à (l'absence de) l'API.

## 2. Faits observés

### 2.1 Flux actuel (tel qu'implémenté)

```
Utilisateur → saisie → validation client → onSubmit
   ├─ ContactForm : fetch POST /api/contact  (JSON)
   │                    ↓
   │              [endpoint NON implémenté]
   │                    ↓ (catch)
   │         succès simulé + console.info("[contact] request queued")
   └─ SubmitProjectForm : fetch POST /api/projects (FormData multipart)
                    ↓
              [endpoint NON implémenté]
                    ↓ (catch)
         succès simulé + console.info("[project] request queued")
```

### 2.2 Détails du payload

- **Contact** : JSON contenant les champs du formulaire + honeypot (`website`).
- **Projet** : `FormData` incluant les fichiers joints (documents) + champs des 4 premières étapes + consentement.

### 2.3 Points d'ancrage config

- `CONTACT_ENDPOINT = "/api/contact"` (`src/config/site.ts:57`).
- `SUBMIT_ENDPOINT = "/api/projects"` (`src/config/site.ts:58`).

### 2.4 Aucune donnée externe

- Aucun service de formulaire tiers configuré (pas de Formspree/Getform/…).
- Aucune persistance locale des soumissions (pas de `localStorage` pour les formulaires).

## 3. Interprétations & recommandations

Hypothèse / interprétation : le flux est prêt pour une API REST, mais en l'état **aucune donnée n'est réellement transmise** - le repli simule un succès.

Recommandations (interprétation) :

1. **Rendre le flux réel** :
   - Implémenter un backend (`/api/contact`, `/api/projects`) avec validation, stockage et notification (email).
   - Ou brancher un service tiers en remplaçant les constantes d'endpoint.
2. **Fiabiliser l'UX** :
   - Ne pas afficher « succès » si la requête a échoué ; prévoir un vrai état d'erreur (la logique actuelle masque les pannes).
3. **Protéger** :
   - Vérifier le honeypot et ajouter rate limiting côté serveur (cf. `06_SECURITE`).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Le stockage cible des soumissions (base de données, email, CRM).
- Les notifications (email destinataire) et le format des pièces jointes côté réception.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Envoi contact | `src/components/form/ContactForm.tsx` |
| Envoi projet | `src/components/form/SubmitProjectForm.tsx` |
| Endpoints | `src/config/site.ts:57-58` |
