# 01.01 - Contexte et objectifs

> **Document** : 01.01 - Contexte et objectifs
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `package.json`, `index.html`, `src/config/site.ts`, `src/data/*.ts`

## 1. Objectif

Ce document situe le projet dans son contexte métier et technique, tel qu'observable dans le code source. Il est rédigé à partir des faits constatés dans le dépôt, sans information extérieure supposée.

## 2. Faits observés

### 2.1 Identité du projet

- Nom du package : `infrastructure-Méridian`, version `1.0.0`, déclaré `private` (`package.json:2-4`).
- Le site se présente comme celui de la société « Méridian », dont l'activité annoncée dans les textes est le développement, la structuration et le financement de projets d'infrastructures en Afrique (`src/config/site.ts:30-31` ; `index.html:8-12`).
- Nom légal utilisé : `Méridian` ; site public : `https://www.Méridian.africa` (`src/config/site.ts:31-32`).
- Langue de référence du document HTML : `fr` (`index.html:2`).

### 2.2 Activité affichée

- Le slogan d'accueil : « Infrastructure & Finance » (`src/components/Header.tsx:29`).
- Le secteur d'intervention annoncé : identification, développement, structuration et financement de projets d'infrastructures stratégiques (textes `index.html:10-11`, `src/i18n/fr.ts` - clés `hero.*`, `meta.home.description`).
- Ségments d'intervention documentés dans le contenu : Transport, Énergie, Eau, Santé, Infrastructures publiques, Sport, Numérique & Télécommunications (`src/data/sectors.ts:7-461`).

### 2.3 Maturité du projet (états déclarés dans le code)

- Le code source porte des marqueurs explicites « Demo content » pour : les projets (`src/data/projects.ts:6-11`), les partenaires (`src/data/partners.ts:4-9`), l'équipe (`src/data/team.ts:4-8`), les actualités (`src/data/news.ts:4-10`), la galerie (`src/data/gallery.ts:4-7`), les pays de présence (`src/data/countries.ts:4-8`).
- Tous les projets sont déclarés `published: false` (`src/data/projects.ts` - `published` à chaque entrée) ; de même pour l'équipe (`src/data/team.ts`) et les actualités (`src/data/news.ts`). En conséquence, les listes publiques correspondantes sont vides en l'état.
- La section partenaires est désactivée : `site.content.partners = false` (`src/config/site.ts:47-49`) ; la page Partenaires affiche alors un message « à venir » (`src/pages/PartnersPage.tsx:107-121`) et la section Écosystème de l'accueil n'est pas rendue (`src/pages/HomePage.tsx:246`).
- Les coordonnées de contact sont explicitement commentées comme valeurs provisoires : « placeholder values - replace with the company's real data » (`src/config/site.ts:7`).

### 2.4 Objectifs implicitement observables

- Objectif vitrine institutionnelle : contenu structuré (entreprise, expertise, secteurs, projets, actualités, contact).
- Objectif de collecte : un formulaire de contact et un formulaire de soumission de projet multi-étapes (`src/components/form/ContactForm.tsx`, `src/components/form/SubmitProjectForm.tsx`).
- Objectif de rayonnement international : trois langues activées FR / EN / PT (`src/config/site.ts:52-55`).

## 3. Interprétations & recommandations

Hypothèse / interprétation : le projet est un site vitrine institutionnel livré en « modèle de contenu », destiné à être alimenté avec les données réelles de l'entreprise avant mise en production publique. Cette lecture est cohérente avec les commentaires « Replace with the company's real data before any public publishing » présents dans les fichiers de données.

Recommandations (interprétation) :
- Alimenter les fichiers `src/data/*.ts` avec les contenus réels validés, puis passer les champs `published` à `true` pour rendre les contenus visibles.
- Renseigner les vraies coordonnées et réseaux sociaux dans `src/config/site.ts`.
- Décider du statut de la langue portugaise (`PT` est prévu dans l'architecture mais peut être désactivé - `src/components/LanguageSwitcher.tsx:47`, `src/config/site.ts:55`).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- La date de fondation / l'histoire réelle de l'entreprise (le récit « fondé en 2011 à Brazzaville » provient uniquement d'une bio fictive dans `src/data/team.ts:18-19` et de données légales de démonstration dans `src/data/legal.ts:13`).
- La stratégie commerciale ou de communication de l'entreprise.
- Le périmètre juridique exact de l'entité (le capital et le numéro RCCM proviennent de `src/data/legal.ts:13` - contenu démonstratif non vérifiable dans le code).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Nom / version du package | `package.json:2-4` |
| Identité affichée | `src/config/site.ts:29-32` |
| Marqueurs « demo content » | `src/data/projects.ts:6-11`, `partners.ts:4-9`, `team.ts:4-8`, `news.ts:4-10`, `gallery.ts:4-7`, `countries.ts:4-8` |
| Partenaires désactivés | `src/config/site.ts:47-49`, `src/pages/PartnersPage.tsx:107-121` |
| Placeholders contact | `src/config/site.ts:7-18` |
| Langues actives | `src/config/site.ts:52-55` |
| Tous contenus non publiés | `src/data/*.ts` - champs `published: false` |
