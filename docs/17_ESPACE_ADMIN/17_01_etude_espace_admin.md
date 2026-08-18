# 17.01 - Étude : espace d'administration du contenu

> **Document** : 17.01 - Étude espace admin
> **Version** : 1.0
> **Date** : 2026-08-11
> **Statut** : Étude / à valider
> **Portée** : Projets, Actualités, Galerie (+ section « Sur le terrain » à étudier)
> **Fichiers liés** : `src/data/*.ts`, `src/config/site.ts`, `src/App.tsx`, `docs/15_MAINTENANCE/15_02_gestion_des_contenus.md`, `docs/13_DONNEES/13_02_sources_de_contenu.md`

## 1. Contexte et objectif

Le contenu du site (projets, actualités, galerie) est aujourd'hui codé en dur dans des
fichiers TypeScript (`src/data/projects.ts`, `src/data/news.ts`, `src/data/gallery.ts`).
Chaque mise à jour exige un développeur, un `npm run typecheck` / `npm run build` et un
déploiement (voir `15_02_gestion_des_contenus.md`).

**Besoin exprimé :** un espace dédié pour gérer les projets, les actualités et la galerie,
parce que les contenus les plus récents doivent apparaître **en tête de la page d'accueil**
(section « Sur le terrain » à prévoir), directement « depuis le terrain » — c'est-à-dire par
une personne non-développeuse, sans passer par un déploiement à chaque fois.

### Objectifs

1. Permettre à un éditeur non-technique de créer / modifier / publier / dé-publier des
   **projets**, des **actualités** et des **photos de galerie**.
2. Contrôler la **mise en avant** (« à la une ») des contenus récents sur la page d'accueil
   (section « Sur le terrain » à concevoir).
3. Garantir le **multilingue** (fr / en / pt) déjà utilisé dans le site.
4. Sécuriser l'accès (espace privé, rôles) et protéger le site public.
5. Préserver l'existant : pas de refonte du front, mais une couche de données.

## 2. État actuel (constat)

| Élément | Situation |
| --- | --- |
| Données | Tableaux statiques typés `src/data/{projects,news,gallery}.ts` |
| Publication | Flags `published: true/false` lus par les pages (filtres `published !== false`) |
| Multilingue | Champs `{ fr, en, pt }` partout |
| Images | URLs distantes (Unsplash) référencées dans les données / `src/config/images.ts` |
| Backend | Aucun : les formulaires POSTent vers `/api/contact` et `/api/projects` qui n'existent pas |
| Routes | `src/App.tsx` — aucune route privée `/admin` |
| Auth | Aucune |
| Home | Sections statiques : projets récents (3), galerie, actualités — pilotées par les flags |

Conséquence : aujourd'hui, « mettre en avant le dernier projet » = éditer du code.

## 3. Contenus à gérer (périmètre)

### 3.1 Projets (`Project`)

- titre, pays, secteur (transport/énergie/eau/digital), statut
  (realized/ongoing/development/confidential)
- description, rôle, impact (3 langues)
- 1 image (ou plusieurs), `published`, `confidential`
- **+ « à la une » (featured)** pour la home / section « Sur le terrain »

### 3.2 Actualités (`NewsItem`)

- titre, catégorie (news/press/event/conference/partnership/project/analysis), date ISO
- extrait + corps (3 langues), image, `published`
- **+ « à la une »**

### 3.3 Galerie (`GalleryPhoto`)

- image, légende, ordre d'affichage, `published`
- **+ « à la une »**

### 3.4 Section « Sur le terrain » (à concevoir)

- Concept : bloc d'accueil mettant en avant les contenus les plus récents (projets en cours,
  actualités, photos « terrain »).
- Modèle proposé : un « slot » éditable (titre + sélection des 3-6 contenus à la une, quel que
  soit le type). Piloté par le champ `featured` de chaque entité.

## 4. Modèle de données cible

Même structure que l'existant, complétée par les champs de gestion :

```
Project {
  id, slug, title{fr,en,pt}, country{fr,en,pt}, sector,
  status, description{fr,en,pt}, role{fr,en,pt}, impact{fr,en,pt},
  images[], published: bool, confidential: bool,
  featured: bool,            // affichage home / « Sur le terrain »
  featuredOrder: number,     // ordre dans la section
  updatedAt: ISO
}

NewsItem {
  id, slug, title{fr,en,pt}, category, date,
  excerpt{fr,en,pt}, body[{fr,en,pt}], image,
  published: bool, featured: bool, featuredOrder: number, updatedAt
}

GalleryPhoto {
  id, image, caption{fr,en,pt}, order,
  published: bool, featured: bool, featuredOrder: number, updatedAt
}
```

## 5. Options d'architecture

### Option A — Headless CMS hébergé (RECOMMANDÉE)

**Exemples :** Sanity, Strapi (auto-hébergé), Directus, Contentful, Payload.

| + | − |
| --- | --- |
| Interface d'édition prête à l'emploi (formulaires, médias, versions) | Coût / abonnement (sauf Strapi/Directus/Payload open-source) |
| Validation des champs et workflows de publication | Délai de prise en main (schémas, structure) |
| Gestion des médias intégrée | Un service supplémentaire à héberger/opérer |
| Multilingue natif | |
| API HTTP + SDK → brancher le front facilement | |

**Recommandé si :** plusieurs éditeurs, besoin de versions/historique, images à uploader,
pas de contrainte d'hébergement en interne.

### Option B — Backend léger + API maison

**Exemples :** Supabase (Postgres + Auth + Storage), PocketBase, Firebase.

| + | − |
| --- | --- |
| Contrôle total, coût faible, open-source | Interface d'édition à construire (admin React dédié) |
| Auth et stockage d'images inclus (Supabase) | Plus de développement à maintenir |
| Aucun abonnement prohibitif | Risque de « sur-ingénierie » pour 3 collections |

**Recommandé si :** l'équipe technique veut garder la maîtrise et un budget minimal.

### Option C — Admin « dans le site » avec sauvegarde fichier (git)

- Route privée `/admin` dans le SPA + édition des `src/data/*.ts` générés à la volée
  (ex. commit automatique via API Git), sans backend applicatif.

| + | − |
| --- | --- |
| Aucune nouvelle infrastructure | Déploiement requis à chaque édition (ou GitHub Actions) |
| Reste dans la stack actuelle | Pas de vrai workflow multi-éditeur, pas de médias uploadés |

**Recommandé si :** besoin minimal et équipe développeur disponible pour relayer les contenus.

### Option D — Ne rien faire (procédure actuelle documentée)

- Conserver l'édition dans les fichiers + procédure `15_02_gestion_des_contenus.md`.

**Recommandé si :** le volume de mise à jour reste faible (1-2 fois/mois). Le plus simple,
mais ne répond pas au besoin « depuis le terrain ».

### Tableau comparatif

| Critère | A (CMS headless) | B (backend maison) | C (admin + git) | D (statique) |
| --- | --- | --- | --- | --- |
| Édition par un non-développeur | ✅ | ✅ (interface à créer) | ⚠️ (interface à créer) | ❌ |
| Mise en ligne immédiate | ✅ | ✅ | ⚠️ (déploiement) | ❌ |
| Images uploadées | ✅ | ✅ | ⚠️ | ❌ |
| Coût de licence | ⚠️ (selon choix) | Faible | Faible | Nul |
| Effort de dev | Moyen (intégration) | Élevé | Moyen | Nul |

## 6. Sécurité et accès

- **Authentification** : une seule zone privée `/admin` (route React Router dédiée, hors du
  menu public), protégée par login (email + mot de passe, ou SSO institutionnel).
  Avec Supabase : Auth gérée + RLS (Row Level Security). Avec Strapi/Sanity : roles intégrés.
- **Rôles** proposés :
  - `editor` : créer/modifier/publier des contenus ;
  - `admin` : tout + gestion des utilisateurs, secteurs, configuration.
- **Bonnes pratiques** :
  - secrets en variables d'environnement (jamais dans `site.ts`) ;
  - rate-limiting sur le login, sessions expirantes ;
  - API publique en lecture seule (tokens de lecture pour le front), écriture réservée à l'admin ;
  - désactiver le CORS public sur les opérations d'écriture.
- **Note sécurité actuelle** : le site n'expose aucun backend ; le point le plus critique sera
  le nouvel endpoint d'écriture (cf. `docs/06_SECURITE/06_01_analyse_securite.md`).

## 7. Intégration dans le code actuel

1. **Couche de données** : remplacer l'import direct `import { projects } from "@/data/projects"` par
   un fetch (ex. `getProjects()`, `getNews()`, `getGallery()`) vers l'API/le CMS, avec un cache court.
   Garder `src/data/*.ts` comme **fallback hors-ligne / pré-chargé** (première peinture rapide).
2. **Point d'accès unique** : `src/lib/content.ts` — résout projets/actualités/galerie + ordre +
   flags (`published`, `featured`).
3. **Page d'accueil** : la section « Sur le terrain » lit les entités `featured = true` triées par
   `featuredOrder` / date, tous types confondus.
4. **`sitemap.xml`** : à régénérer dynamiquement ou à l'édition des contenus publiés (cf. `05_02`).
5. **i18n** : les libellés d'interface restent dans `src/i18n` ; seuls les contenus viennent du CMS.

## 8. Évolutions envisagées

- **Section « Sur le terrain »** : bloc d'accueil dédié (projets récents, actualités, photos),
  piloté par `featured` / `featuredOrder`.
- **Médias** : upload d'images réelles (priorité sur les photos « terrain » du client) avec
  retraitement automatique (formats, dimensions conformes à `08_03_inventaire_des_images.md`).
- **Brouillons + validation** : workflow auteur → relecture → publication.
- **Notifications** : alerte à l'équipe à chaque nouvelle soumission/édition.

## 9. Étapes proposées (feuille de route)

| Phase | Contenu | Livrable |
| --- | --- | --- |
| 1. Décision | Choisir l'option (A, B, C ou D) | Validation du choix + stack |
| 2. Spécification | Schémas des 3 collections + section « Sur le terrain » | Modèle de données validé |
| 3. Infrastructure | Provisionner CMS/backend, auth, stockage d'images | Environnement admin |
| 4. Intégration front | `src/lib/content.ts`, remplacement des imports, cache | Site public branché |
| 5. Admin | Écrans CRUD projets/actualités/galerie (+ featured) | Espace admin utilisable |
| 6. Home « Sur le terrain » | Section d'accueil mettant en avant les contenus à la une | Section livrée |
| 7. Recette & formation | Tests, doc utilisateur (`docs/15_MAINTENANCE/15_02`) | Docs + formation |

## 10. Questions à trancher

1. **Quelle option ?** A (CMS headless), B (backend maison), C (admin + git) ou D (procédure actuelle) ?
2. Qui sont les éditeurs (nombre, compétences) ? → oriente A vs B.
3. Y a-t-il une contrainte d'hébergement (données sensibles, pays, coût) ?
4. Les images réelles « terrain » sont-elles disponibles ? Sous quel format ?
5. Faut-il un historique / workflow de validation, ou une simple publication ?
6. La section « Sur le terrain » est-elle un bloc unique pour les 3 types de contenus, ou un onglet par type ?

## 11. Traçabilité

| Élément | Référence |
| --- | --- |
| Données statiques actuelles | `src/data/{projects,news,gallery}.ts` |
| Filtres de publication | `src/pages/{ProjectsPage,NewsPage,HomePage}.tsx` |
| Config site | `src/config/site.ts` |
| Procédure actuelle de contenu | `docs/15_MAINTENANCE/15_02_gestion_des_contenus.md` |
| Sources de contenu | `docs/13_DONNEES/13_02_sources_de_contenu.md` |
| Routes | `src/App.tsx` |
