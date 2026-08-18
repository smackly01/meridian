# 06.01 - Analyse sécurité

> **Document** : 06.01 - Analyse sécurité
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/config/site.ts`, `src/components/form/*.tsx`, `src/components/Header.tsx`, `index.html`, `public/robots.txt`

## 1. Objectif

Documenter les aspects sécurité observés dans le code : absence de secrets, protections des formulaires, en-têtes, pratiques.

## 2. Faits observés

### 2.1 Secrets et données sensibles

- **Aucun secret détecté** : recherche `api_key|secret|token|password|Bearer|AKIA|sk-` dans `src/` et `public/` → aucun résultat.
- **Aucune variable d'environnement** utilisée : aucun `import.meta.env`, `process.env`, ni `VITE_*` dans `src/` → le front ne contient pas de clé exposée.
- **Aucun fichier `.env`** dans le dépôt ; `.gitignore` exclut `.env`/`.env.*` (sauf `.env.example`).
- La configuration (identité, coordonnées, endpoints) est en dur dans `src/config/site.ts`, sans secret.

### 2.2 Protection anti-spam des formulaires

- Champ **honeypot** `website` caché dans `ContactForm` et `SubmitProjectForm` (détecte les robots).
- Le honeypot est ignoré côté serveur (aucun backend présent) mais le champ reste envoyé (un serveur tiers devra le vérifier).
- **Pas de CAPTCHA** visible (reCAPTCHA/hCaptcha) dans le code.

### 2.3 Validation et échappement

- Validation côté client : regex email, champs requis, limites de fichiers (10 Mo, extensions `.pdf .doc .docx .xls .xlsx .ppt .pptx`) (`SubmitProjectForm.tsx`).
- React échappe le contenu par défaut (pas de `dangerouslySetInnerHTML` observé) → protection XSS de base.
- Aucune injection de HTML via les données locales (contenus statiques TypeScript).

### 2.4 En-têtes et politique de sécurité

- **Aucun en-tête CSP** (Content-Security-Policy) défini dans `index.html` ni dans les configs Vercel/Netlify.
- **Aucun en-tête de sécurité** (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, HSTS) configuré dans `vercel.json` ou `public/_redirects`.
- `robots.txt` bloque `/admin` (`public/robots.txt`) mais aucune route admin n'existe dans le routage.

### 2.5 Liens et contenus externes

- Liens externes avec `rel="noopener noreferrer"` (`Footer`) → protection contre le tabnabbing.
- Images externes Unsplash : aucun risque particulier (contenu visuel).

### 2.6 RGPD / confidentialité

- `site.gdpr.enabled = true` (`src/config/site.ts:44-46`) - signalétique placeholder ; **aucun mécanisme de consentement cookie observé**, aucune mention de cookies dans la politique de confidentialité (à vérifier).
- Seule persistance : `localStorage` pour la langue (`src/i18n/index.tsx:77-81`) - aucune donnée personnelle collectée côté client.

## 3. Interprétations & recommandations

Hypothèse / interprétation : en l'absence de backend, la surface d'attaque est limitée à l'exécution du JavaScript côté client et aux formulaires (qui ne transmettent rien actuellement).

Recommandations (interprétation) :

1. **Priorité haute**
   - Ajouter des en-têtes de sécurité (CSP, `X-Content-Type-Options`, `Referrer-Policy`) via la config d'hébergement (Vercel `headers` / `_headers` Netlify).
   - Mettre en place la vérification du honeypot et des protections anti-spam (rate limiting, CAPTCHA) côté serveur lors de l'implémentation du backend.
   - Limiter côté serveur la taille et les types des fichiers uploadés (ne jamais se fier à la validation client).
2. **Priorité moyenne**
   - Implémenter le bandeau de consentement RGPD annoncé par `gdpr.enabled`, ou retirer le flag.
   - Préciser la politique de confidentialité sur les cookies et la transmission de données (les formulaires enverront des données personnelles).
3. **Priorité basse**
   - Supprimer `Disallow: /admin` ou créer réellement une zone admin protégée.
   - Vérifier la conformité des transferts de données (hébergeurs hors UE éventuels).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un Content-Security-Policy, des en-têtes HSTS/CSRF, un certificat (géré par l'hébergeur).
- Une gestion de sessions/authentification (aucune route privée).
- Des mécanismes anti-brute-force, rate limiting ou captcha.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Endpoints formulaires | `src/config/site.ts:57-58` |
| Honeypot | `src/components/form/ContactForm.tsx`, `SubmitProjectForm.tsx` |
| Limites fichiers | `src/components/form/SubmitProjectForm.tsx` |
| Flag RGPD | `src/config/site.ts:44-46` |
| Persistance langue | `src/i18n/index.tsx:77-81` |
| Robots | `public/robots.txt` |
