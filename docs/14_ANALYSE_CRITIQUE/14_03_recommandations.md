# 14.03 - Recommandations

> **Document** : 14.03 - Recommandations
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : ensemble du dépôt (synthèse de `14_01`/`14_02`)

## 1. Objectif

Formuler un plan d'action priorisé issu de l'analyse.

## 2. Plan d'action

### 2.1 Priorité haute (avant mise en ligne)

| # | Action | Référence |
| --- | --- | --- |
| 1 | Implémenter les endpoints `/api/contact` et `/api/projects` (ou service tiers) et remplacer le succès simulé par une vraie gestion d'erreur | `src/config/site.ts:57-58`, `src/components/form/*.tsx` |
| 2 | Fournir `public/og-image.jpg` (image Open Graph) | `src/components/Seo.tsx:37` |
| 3 | Remplacer les coordonnées placeholder et contenus démo par les données réelles ; activer les flags de publication | `src/config/site.ts:7-18`, `src/data/*.ts` |
| 4 | Ajouter les en-têtes de sécurité (CSP, `X-Content-Type-Options`, `Referrer-Policy`) | `vercel.json`, `public/_redirects` |
| 5 | Décider du sort du flag `gdpr.enabled` : implémenter le consentement ou le retirer | `src/config/site.ts:44-46` |

### 2.2 Priorité moyenne (solidification)

| # | Action | Référence |
| --- | --- | --- |
| 6 | Générer le sitemap depuis les données (post-build) et inclure projets/articles | `public/sitemap.xml` |
| 7 | Ajouter des tests unitaires/E2E et un script `lint` | `package.json` |
| 8 | Configurer une CI (typecheck + build + deploy) | dépôt |
| 9 | Vérifier la validation serveur des uploads (taille, types) et le honeypot côté serveur | `SubmitProjectForm.tsx` |
| 10 | Rédiger un README et documenter la procédure de contenu | racine, `15_MAINTENANCE` |
| 11 | Auto-héberger les polices pour réduire les dépendances réseau | `index.html:13-18` |
| 12 | Ajouter un `x-default` au balisage hreflang | `src/components/Seo.tsx` |

### 2.3 Priorité basse (polissage)

| # | Action | Référence |
| --- | --- | --- |
| 13 | Nettoyer le doublon d'import `cn` | `SubmitProjectForm.tsx` |
| 14 | Harmoniser les seuils d'`IntersectionObserver` | `ScrollReveal.tsx`, `useInView.ts` |
| 15 | Enrichir le JSON-LD (BreadcrumbList, coordonnées) | `src/components/Seo.tsx` |
| 16 | Vérifier le rendu mobile réel (iOS/Android) et le menu hamburger | `Header.tsx` |

## 3. Interprétations

Hypothèse / interprétation : le projet est proche d'un état « prêt à produire » sur le plan technique ; les actions bloquantes sont l'implémentation du backend de formulaires et la fourniture des contenus réels. Les actions 6 à 16 améliorent la robustesse et la maintenabilité sans changer l'architecture.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un budget/calendrier pour ces évolutions (hors code).
- Une maquette ou spécification fonctionnelle de référence (à établir si nécessaire).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Plan détaillé des faiblesses | `14_02_points_faibles_et_risques.md` |
| Procédures de maintenance | `15_MAINTENANCE/*.md` |
