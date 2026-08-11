# 16.01 - Retours client

> **Document** : 16.01 - Retours client
> **Version** : 1.0
> **Date** : 2026-08-11
> **Statut** : En cours d'implémentation
> **Source** : Message du client transmis le 11/08/2026

## 1. Points relevés par le client

### 1.1 Bouton « Accueil »

Nos clients potentiels sont généralement âgés et ne savent pas nécessairement qu'il faut cliquer
sur le logo pour revenir à la page d'accueil.

- Ajouter un bouton / lien **Accueil** visible dans la navigation principale (desktop et mobile).
- Ajouter également « Accueil » dans la navigation du pied de page pour la cohérence.

**Statut :** implémenté.

### 1.2 Supprimer « Soumettre un projet »

Ce type de projet ne se soumet pas en ligne : retirer tous les boutons « Soumettre un projet »
du site.

Points de retrait identifiés :
- Bouton doré du header (desktop) et du menu mobile ;
- Entrée « Soumettre un projet » du pied de page ;
- CTA principal de la bannière bas de page (`CtaBanner`) → remplacé par « Nous contacter » ;
- CTA principal du hero de la page d'accueil → remplacé par « Nous contacter » ;
- CTA bas de page d'Expertise → remplacé par « Nous contacter » ;
- CTA « Soumettre un projet dans ce secteur » (page secteur détaillée) → remplacé par
  « Nous contacter » ;
- Entrée du plan du site (`SitemapPage`).

**Suppression définitive (confirmée) :** la route `/soumettre-un-projet`, la page
`SubmitProjectPage.tsx` et le formulaire `SubmitProjectForm.tsx` ont été supprimés du code.
Les clés i18n associées (`meta.submit`, `nav.submit`, `common.submitProject`,
`hero.ctaPrimary`, `ctaBanner.action`, `secteursPage.cta`/`sectorDetail.cta`, bloc
`submitPage`) ont été retirées de `fr.ts`, `en.ts`, `pt.ts`. Les URL `/soumettre-un-projet`
ont été retirées du `public/sitemap.xml`.

**Statut :** implémenté.

### 1.3 Page Secteurs

1. Retirer l'onglet / l'encadré « Infrastructure publique » : toutes les réalisations sont des
   infrastructures publiques.
2. Présenter un sous-titre **« Infrastructure publique »** en tête de page.
3. Sous ce sous-titre, reprendre les encadrés en retirant :
   - **Sport** ;
   - **Infrastructures publiques** ;
   - **Santé**.
4. Secteurs conservés : **Transport, Énergie, Eau, Numérique & Télécommunications**.

**À venir (travail en cours côté client / contenus) :** présentation plus détaillée de chaque
rubrique. Exemple demandé pour le Transport : faire comprendre que nous finançons le transport
ferroviaire, terrestre, aérien, etc. Ce travail est en attente de validation des contenus.

Conséquences de la réduction du périmètre (vérifiées) :
- Page d'accueil (grille des secteurs) ;
- Pied de page (liste des secteurs) ;
- Plan du site (liste des secteurs) ;
- Filtre des projets par secteur ;
- Pages détaillées `/secteurs/:slug` (les anciens slugs santé / infrastructures-publiques /
  sport redirigent désormais vers la liste des secteurs).

**Statut :** implémenté (contenus détaillés par secteur en attente).

## 2. Suivi

| Point | Statut |
| --- | --- |
| Bouton Accueil | Fait |
| Suppression des boutons « Soumettre un projet » | Fait |
| Suppression définitive de la page /soumettre-un-projet | Fait |
| Sous-titre « Infrastructure publique » + encadrés restreints | Fait |
| Présentation détaillée des secteurs (ex. Transport) | À travailler avec le client |
| Projets démo p4 (santé) et p6 (infrastructure publique) référençant des secteurs supprimés | Fait (retirés de `src/data/projects.ts`) |

## 3. Traçabilité

| Élément | Référence |
| --- | --- |
| Header | `src/components/Header.tsx` |
| Pied de page | `src/components/Footer.tsx` |
| Bannière CTA | `src/components/CtaBanner.tsx` |
| Page Secteurs | `src/pages/SectorsPage.tsx` |
| Données des secteurs | `src/data/sectors.ts` |
| Traductions | `src/i18n/fr.ts`, `src/i18n/en.ts`, `src/i18n/pt.ts` |
