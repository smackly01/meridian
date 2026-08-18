# 08.01 - Inventaire des contenus

> **Document** : 08.01 - Inventaire des contenus
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `src/data/*.ts`, `src/i18n/fr.ts`, `src/i18n/en.ts`, `src/i18n/pt.ts`, `src/config/images.ts`

## 1. Objectif

Inventorier l'ensemble des contenus (données structurées et textes) présents dans le projet.

## 2. Faits observés

### 2.1 Dictionnaires i18n

- **3 langues** : `fr.ts`, `en.ts`, `pt.ts` - chacune contient environ **384 clés** (dont `meta.*`, `nav.*`, `hero.*`, `common.*`, …).
- Les clés sont structurées par domaine : `meta`, `nav`, `home`, `about`, `expertise`, `sectors`, `projects`, `partners`, `news`, `contact`, `submit`, `legal`, `privacy`, `notFound`, `common`, `footer`, etc.
- Le français (`fr`) est la langue de référence (`DEFAULT_LANG`, `src/i18n/index.tsx:16`).

### 2.2 Données structurées (`src/data/`)

| Fichier | Contenu | Statut actuel |
| --- | --- | --- |
| `sectors.ts` | 7 secteurs (slug, icône, localisé) | Publié (les secteurs s'affichent) |
| `projects.ts` | Projets de démonstration | Tous `published: false` |
| `partners.ts` | Partenaires de démonstration | `site.content.partners: false` |
| `team.ts` | Membres de l'équipe | Tous `published: false` |
| `news.ts` | Actualités de démonstration | Toutes `published: false` |
| `countries.ts` | Pays de présence (carte) | Affichés |
| `gallery.ts` | Photos de galerie | Affichées |
| `legal.ts` | Mentions légales + politique de confidentialité | Affichées |

### 2.3 Catalogue d'images (`src/config/images.ts`)

- URLs Unsplash centralisées : hero, about, expertise, projects, partners, news, africa, contact, ogImage.
- Helper `u(id, width=1600)` générant des URLs avec paramètres de redimensionnement (`?w=…&q=80`).

### 2.4 Contenu par type

- **Secteurs** (7) : transport, energy, water, health, infrastructures-publiques, sport, numerique-telecommunications - chaque entrée comprend titre, description courte, description longue, enjeux, sous-domaines, image.
- **Projets** (démo) : ex. « Corridor autoroutier Dakar – Saint-Louis » (Sénégal, transport, `development`, 190 km, PPP).
- **Actualités** (démo) : ex. « Accord-cadre de partenariat Afrique de l'Ouest » (catégorie `partnership`, date 2026-06-15).
- **Équipe** (démo) : fondateur « Surya Aniel MACKLYMAN » (Président & DG), « Gloire Loemba » (Directeur structuration financière).
- **Pays** : Sénégal, Côte d'Ivoire, Burkina Faso, Niger, Nigeria, Cameroun, Gabon, etc.
- **Galerie** : Dakar (réunion institutionnelle), Ouagadougou (signature).
- **Légal** : éditeur « Fil Investment Group SA », capital 10 000 000 F CFA, RCCM B 2011 B 01452, hébergeur « InfraCloud SAS ».

## 3. Interprétations & recommandations

Hypothèse / interprétation : les contenus « vivants » (secteurs, pays, galerie, textes) sont prêts, tandis que les contenus « références » (projets, partenaires, équipe, actualités) sont en attente de données réelles (flags `published`/`partners`).

Recommandations (interprétation) :
1. Remplacer les contenus démo par les contenus réels (projets, partenaires, équipe, actualités) dans `src/data/`.
2. Passer les flags de publication à `true` quand les contenus sont validés.
3. Vérifier les traductions EN/PT : l'ajout de clés dans `fr.ts` doit se répercuter dans `en.ts` et `pt.ts` (la structure est typée, cf. `Dict`).

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Les contenus réels de l'entreprise (le code ne contient que des démonstrations et des textes génériques).
- Des fichiers médias locaux (toutes les images sont des URLs externes).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Dictionnaires | `src/i18n/{fr,en,pt}.ts` |
| Données structurées | `src/data/*.ts` |
| Images | `src/config/images.ts` |
| Types | `src/types.ts` |
