# 14.02 - Points faibles et risques

> **Document** : 14.02 - Points faibles et risques
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : ensemble du dépôt

## 1. Objectif

Lister les faiblesses et risques identifiés, avec leur gravité.

## 2. Faits observés

### 2.1 Risques fonctionnels (gravité haute)

| # | Risque | Détail | Référence |
| --- | --- | --- | --- |
| R1 | **Formulaires sans backend** | Les envois vers `/api/contact` et `/api/projects` échouent ; un « succès » est simulé (`console.info`) → fausse promesse à l'utilisateur. | `src/components/form/ContactForm.tsx`, `SubmitProjectForm.tsx`, `src/config/site.ts:57-58` |
| R2 | **Contenu en démonstration** | Projets, actualités, équipe, partenaires sont des démos non publiées ; la section Partenaires est désactivée. | `src/data/*.ts` |
| R3 | **Coordonnées placeholder** | Adresse, téléphone, email, réseaux sociaux = valeurs provisoires en dur. | `src/config/site.ts:7-18` |

### 2.2 Risques SEO / partage (gravité haute)

| # | Risque | Détail | Référence |
| --- | --- | --- | --- |
| R4 | **`og-image.jpg` absent** | L'image Open Graph référencée par le SEO n'est pas livrée dans `public/`. | `src/components/Seo.tsx:37`, `public/` |
| R5 | **Sitemap statique** | Non généré depuis les données ; les détails projets/articles absents dès publication. | `public/sitemap.xml` |

### 2.3 Risques sécurité / confidentialité (gravité moyenne)

| # | Risque | Détail | Référence |
| --- | --- | --- | --- |
| R6 | **Aucun en-tête de sécurité** | Pas de CSP, `X-Content-Type-Options`, `Referrer-Policy` configurés. | `vercel.json`, `public/_redirects` |
| R7 | **Aucun consentement RGPD** | `gdpr.enabled=true` sans implémentation de bandeau/cookies. | `src/config/site.ts:44-46` |
| R8 | **Upload côté serveur non sécurisé** | Les fichiers (10 Mo, extensions) ne sont validés que côté client ; aucun contrôle serveur. | `SubmitProjectForm.tsx` |

### 2.4 Risques qualité (gravité moyenne)

| # | Risque | Détail | Référence |
| --- | --- | --- | --- |
| R9 | **Aucun test automatisé** | Pas de tests unitaires/E2E → aucune protection contre les régressions. | `package.json` |
| R10 | **Aucun linter/formatteur** | Pas de script `lint` ni ESLint/Prettier. | `package.json` |
| R11 | **Pas de CI/CD** | Aucun pipeline dans le dépôt. | dépôt |

### 2.5 Risques techniques mineurs

| # | Risque | Détail | Référence |
| --- | --- | --- | --- |
| R12 | Dépendances externes (images/fonts) | Contenu dépendant d'Unsplash et Google Fonts (disponibilité/réseau). | `src/config/images.ts`, `index.html:13-18` |
| R13 | Doublon d'import `cn` | Import de `cn` dupliqué dans `SubmitProjectForm.tsx` (qualité). | `SubmitProjectForm.tsx` |
| R14 | Pas de README | Aucune documentation d'entrée pour les contributeurs. | racine du dépôt |

## 3. Interprétations & recommandations

Hypothèse / interprétation : les risques majeurs (R1-R5) sont liés à la phase « pré-production » du projet (backend et contenus réels manquants) ; les autres sont des manques d'outillage qualité.

Recommandations (interprétation) - priorisation :
- **Court terme (bloquant)** : implémenter le backend des formulaires (R1) ; fournir `og-image.jpg` (R4) ; remplacer les contenus démo (R2, R3).
- **Moyen terme** : en-têtes de sécurité (R6), sitemap dynamique (R5), RGPD (R7), tests (R9), linter (R10).
- **Détail** : nettoyer le doublon d'import (R13), ajouter un README (R14).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Des bugs de rendu constatés en exécution (aucune exécution exhaustive effectuée ; le build et le typecheck passent).
- Des failles de sécurité exploitées (aucune vérification externe).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Endpoints | `src/config/site.ts:57-58` |
| Contenus démo | `src/data/*.ts` |
| og-image | `src/components/Seo.tsx:37` |
| Sitemap | `public/sitemap.xml` |
| En-têtes | `vercel.json`, `public/_redirects` |
| RGPD | `src/config/site.ts:44-46` |
