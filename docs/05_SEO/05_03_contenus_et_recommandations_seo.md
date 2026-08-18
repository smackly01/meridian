# 05.03 - Contenus et recommandations SEO

> **Document** : 05.03 - Contenus et recommandations SEO
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/pages/*.tsx`, `src/i18n/fr.ts`, `src/components/Seo.tsx`, `public/sitemap.xml`

## 1. Objectif

Récapituler les contenus SEO par page et formuler les recommandations d'optimisation.

## 2. Faits observés

### 2.1 Couverture par page

| Page | title/meta | JSON-LD | Contenu riche |
| --- | --- | --- | --- |
| Accueil | Oui (`meta.home.*`) | organisation | stats, secteurs, projets, galerie |
| À propos | Oui (`meta.about.*`) | - | valeurs, équipe |
| Expertise | Oui (`meta.expertise.*`) | - | 4 blocs numérotés |
| Secteurs (liste) | Oui (`meta.sectors.*`) | - | grille secteurs |
| Détail secteur | Oui (dynamique) | - | texte localisé du secteur |
| Projets (liste) | Oui (`meta.projects.*`) | - | filtres + grille |
| Détail projet | Oui (dynamique) | - | statut, données clés |
| Partenaires | Oui (`meta.partners.*`) | - | catégories / « à venir » |
| Actualités (liste) | Oui (`meta.news.*`) | - | filtres catégories |
| Article | Oui (dynamique) | `articleJsonLd` | partage, articles liés |
| Contact | Oui (`meta.contact.*`) | - | coordonnées + formulaire |
| Soumettre un projet | Oui (`meta.submit.*`) | - | formulaire 5 étapes |
| Légales (2) | Oui | - | contenus légaux |
| Plan du site | Oui | - | liens |
| 404 | Oui | - | message d'erreur |

### 2.2 Balises Hn (hiérarchie)

- Les pages utilisent `h1` (titre principal de la page) et une hiérarchie `h2`/`h3` dans les sections (`SectionHeading`, `PageHero`, contenus de détail).

### 2.3 Contenus textuels

- Les textes sont localisés (fr/en/pt) via le dictionnaire i18n et les données (`Localized`), ce qui permet un SEO multilingue cohérent.
- Les contenus « démonstration » (projets/actualités/équipe non publiés) limitent actuellement la quantité d'indexation.

## 3. Interprétations & recommandations

Hypothèse / interprétation : la structure SEO de base est solide (title/meta/canonical/hreflang/JSON-LD) ; les gains restants sont éditoriaux et techniques.

Recommandations (interprétation) :

1. **Priorité haute**
   - Fournir `og-image.jpg` (référencé mais absent) pour un rendu correct des partages.
   - Rédiger les titres/descriptions par langue avec les tailles recommandées.
   - Publier les contenus (projets, actualités, équipe) pour enrichir l'indexation.

2. **Priorité moyenne**
   - Ajouter les détails projets/articles au sitemap dès publication.
   - Vérifier l'indexabilité des URL sans préfixe de langue (redirections) dans la Search Console.
   - Ajouter un `x-default` dans le balisage hreflang.

3. **Priorité basse**
   - Enrichir le JSON-LD (BreadcrumbList sur les pages de détail, FAQPage si pertinent).
   - Étudier un sitemap image.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Des données structurées « LocalBusiness/Organization » avec coordonnées complètes (le JSON-LD organisation est basique).
- Des mesures SEO (Search Console, positionnement) - aucune config dans le code.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Textes meta i18n | `src/i18n/fr.ts` (clés `meta.*`) |
| Balisage dynamique | `src/components/Seo.tsx` |
| Sitemap | `public/sitemap.xml` |
| JSON-LD | `src/pages/HomePage.tsx`, `ArticlePage.tsx` |
