# Audit & Refonte Éditoriale du Site — Fil Investment Group

> Document de travail. **Aucune modification du code, du design ou de la structure du site à ce stade.**
> Objectif : produire des textes relus, validés et ajustables avant intégration dans `src/i18n/*.ts` et `src/data/*.ts`.
>
> **Date :** 29 août 2026
> **Langues concernées :** FR (référence), puis report sur EN et PT
> **Convention :** `[À CONFIRMER]` = information plausible mais non vérifiable dans le projet · `[INFORMATION À FOURNIR]` = donnée absente, nécessaire avant publication · `[DÉMO]` = contenu fictif actuellement présenté comme réel, à remplacer.

---

## Rappel de contexte (état des lieux)

Le site est livré comme un **gabarit rempli de contenu de démonstration**. Les fichiers `src/data/*.ts` portent le commentaire « Demo content — replace with the company's real data ». Sont fictifs aujourd'hui :

- les 5 indicateurs de la page d'accueil (12 projets, 9 pays, 3,2 Md€, +30 partenaires, 15 ans) ;
- les 8 projets nommés (Dakar–Saint-Louis, Dosso, Bouaké, Kigali, Ouagadougou, Mozambique…) ;
- les 4 membres d'équipe ;
- les 10 partenaires ;
- les 5 actualités (dont de faux communiqués) ;
- les 6 photos de la galerie ;
- le récit « fondé en 2011 à Brazzaville par Surya Aniel MACKLYMAN » ;
- les coordonnées, l'hébergeur, le numéro RCCM, le capital.

Ce document propose donc **deux natures de contenu** :
1. des textes de fond réécrits, utilisables immédiatement (hero, rôle, approche, expertise, secteurs, contact, CTA, microcopies) ;
2. des trames avec marqueurs `[À CONFIRMER]` là où l'information réelle manque (histoire, chiffres, projets, équipe, partenaires).

---

## 1. Analyse générale

### Positionnement actuel

Fil Investment Group se présente comme un **développeur de projets d'infrastructures publiques en Afrique**. L'entreprise ne construit pas et ne prête pas : elle prend un besoin public (route, centrale, réseau d'eau, réseau de données) et le transforme en un dossier qu'une banque, un fonds ou une institution de développement accepte de financer. C'est le métier du *project finance* appliqué à la commande publique.

Le positionnement est porté par un fil conducteur déjà présent dans le contenu : **Besoin → Projet → Structure → Financement → Partenaires → Réalisation → Impact**. Quatre métiers (développement, structuration, financement, mobilisation de partenaires), quatre secteurs (transport, énergie, eau, numérique & télécommunications).

Le créneau est précis et peu encombré. Ce qui fragilise le positionnement :

- le **modèle économique** n'est jamais expliqué (qui paie Fil Investment Group : l'État, les bailleurs, une commission au bouclage, une participation ?) — `[À CONFIRMER]` ;
- la frontière « ce que nous faisons / ce que nous ne faisons pas » est sous-exploitée alors qu'elle est le meilleur argument de clarté ;
- le site oscille entre trois registres — cabinet de conseil, agence de développement, arrangeur financier — sans trancher.

### Cible

Trois publics, par ordre de priorité pour la prise de contact :

1. **Décideurs publics** — ministères, agences d'infrastructures, sociétés d'État, collectivités. Ils évaluent si Fil Investment Group est un partenaire sérieux à qui confier un dossier sensible. Ils lisent vite, se méfient des promesses, veulent savoir : qui êtes-vous, qu'avez-vous mené à terme, que se passe-t-il si je vous écris.
2. **Bailleurs et investisseurs** — banques de développement, fonds d'infrastructures, prêteurs commerciaux. Ils veulent comprendre la méthode de structuration et la qualité des dossiers.
3. **Partenaires techniques** — bureaux d'études, ensembliers, exploitants — qui veulent être associés aux consortiums.

Le contenu actuel s'adresse surtout au public 1, mais sur un ton institutionnel large qui pourrait viser n'importe quelle organisation. Les publics 2 et 3 sont mal servis (projets et partenaires fictifs, page Partenaires vide).

**Objections réelles à traiter dans le contenu :** « encore une société qui va faire des études et disparaître » · « combien de temps avant un financement ? » · « le pays garde-t-il la main sur le projet ? » · « mes documents restent-ils confidentiels ? » · « qui a déjà travaillé avec eux ? »

### Proposition de valeur

> Nous faisons passer un projet d'infrastructure publique du besoin exprimé au financement signé.
> Concrètement : un dossier bancable, des engagements de financement fermes, un consortium prêt à démarrer — sans que le pays perde la maîtrise du projet.

### Ton actuel

Sobre, institutionnel, sans faute de goût. Le vocabulaire métier est juste (« bancable », « montage », « corridor », « désenclavement », « structuration contractuelle »). Pas de superlatifs criards, pas d'emphase publicitaire. Bonne base.

Mais le ton reste **désincarné et interchangeable** :

- aucune voix, aucun visage : jamais de « je », jamais un nom, jamais une anecdote de dossier ;
- des phrases qui iraient sur le site de n'importe quel cabinet : « une organisation internationale au service des territoires », « au cœur des marchés qui façonnent l'Afrique de demain » ;
- répétitions lourdes : « structuré, financé et réalisable » ~15 fois ; « stratégique » ~40 fois ; « besoins des territoires » en boucle ;
- « accompagner » sert de béquille à tout.

### Forces

- **Le fil conducteur Besoin → Impact.** Vraie idée éditoriale, pédagogique. À garder, à rendre plus concrète.
- **La grille de la page Expertise** (Problème → Approche → Expertise → Résultat) : elle part du problème du client, pas de l'offre. À généraliser aux pages secteurs.
- **La retenue générale.** Pas de « leader », pas d'« acteur incontournable », pas d'« excellence ». Rare dans ce secteur.
- **Le vocabulaire technique employé correctement**, qui crédibilise auprès des financiers.
- **La microcopie de confidentialité des projets**, juste de ton et bien placée.
- **Le trilinguisme propre** (FR/EN/PT), cohérent d'une langue à l'autre.

### Faiblesses

- **Le site ne dit pas qui est derrière.** Pas d'histoire réelle, pas d'équipe publiée, pas de mot signé. Pour un métier de confiance, c'est le manque le plus coûteux.
- **Fausse précision.** La note « Indicateurs consolidés au 31 décembre 2025 » habille de rigueur des chiffres inventés.
- **Aucune preuve.** Projets, actualités et partenaires fictifs : la promesse reste au conditionnel.
- **Page Partenaires vide** (« Page en préparation ») : mauvais signal pour un visiteur institutionnel.
- **Hero sans accroche.** « Construire aujourd'hui les infrastructures de demain » ne dit ni le métier réel, ni la cible, ni le facteur distinctif.
- **Valeurs = liste morte** : Intégrité, Excellence, Impact, Partenariat, Innovation, Responsabilité. Six mots sans preuve, dont deux à éviter par principe.
- **Questions concrètes sans réponse** : délai, rémunération, étapes après un premier contact, propriété du projet.
- **CTA uniformes** : « Nous contacter » partout.
- **Méta-descriptions passe-partout** : sans bénéfice, sans lieu, sans verbe d'action.
- **Galerie « Sur le terrain » en photos de banque d'images** avec légendes génériques : affaiblit au lieu de rassurer.

### Problèmes identifiés (synthèse priorisée)

| # | Problème | Gravité | Action |
|---|----------|---------|--------|
| P1 | Chiffres d'accueil fictifs + fausse date de consolidation | Haute | Remplacer par des chiffres réels datés, ou par 3 phrases qualitatives |
| P2 | Projets, équipe, partenaires, actualités fictifs | Haute | Fournir du réel ou masquer les sections |
| P3 | Modèle économique jamais expliqué | Haute | Ajouter une phrase claire (`[À CONFIRMER]`) |
| P4 | Marque désincarnée (pas d'histoire, pas de visage) | Haute | Page À propos réécrite + mot signé |
| P5 | Hero interchangeable | Moyenne | Nouveau H1 orienté métier réel |
| P6 | Valeurs génériques | Moyenne | Transformer en 3 façons de travailler observables |
| P7 | CTA identiques partout | Moyenne | Système de CTA par intention (§16) |
| P8 | Coordonnées / mentions légales placeholder | Haute | Renseigner le réel avant mise en ligne |
| P9 | Répétitions et jargon (« stratégique », « accompagner ») | Basse | Passe de nettoyage lexical (§2) |

---

## 2. Direction éditoriale recommandée

### Ton de marque

La voix d'un **développeur de projets qui a déjà mené des dossiers jusqu'au bouclage financier**. Sûr de son métier, sans se vanter. Il parle « montage », « bancabilité », « bouclage » naturellement, mais explique chaque terme une fois.

Formule de référence : **humain + direct + professionnel + confiant.**
La chaleur passe par la clarté et le respect du temps du lecteur, pas par des exclamations.

### Style rédactionnel

- **Vouvoiement** du visiteur (État, bailleur, partenaire). **« nous »** pour l'entreprise, assumé ; **jamais « on »**.
- Phrases **courtes à moyennes**, une idée par phrase.
- **Peu d'adjectifs**, beaucoup de **verbes d'action précis** : identifier, cadrer, structurer, arranger, mobiliser, sécuriser, coordonner.
- **Chiffres** seulement s'ils sont réels et vérifiables, toujours datés. Sinon, formulation qualitative honnête.
- Chaque page hors pages de détail se lit en **40 à 90 secondes**.
- Structure de section : **titre → explication courte → information utile → preuve ou détail → CTA**.

### Vocabulaire à privilégier

- « infrastructures **publiques** » (pas « stratégiques » en boucle)
- « **maître d'ouvrage public** » quand on désigne le client
- « **bancable / bancabilité** » (expliqué une fois, puis assumé)
- « **montage** » = structuration juridique et financière
- « **bouclage financier** » en français ; « closing » réservé à la version EN
- « développer », « structurer », « arranger le financement », « coordonner le consortium »
- « **partenariat public-privé (PPP)** », « contrat d'achat d'électricité », « société de projet »

### Vocabulaire à éviter

- « au service de », « accompagner » en béquille, « solutions », « acteur », « acteur incontournable »
- « stratégique » à toutes les lignes (garder pour un sens précis)
- « écosystème » (à réserver à la page Partenaires)
- « excellence », « innovation », « passion »
- « dans un monde en constante évolution », « donner vie à vos projets », « repousser les limites »
- « nous mettons notre savoir-faire à votre service », « une expérience unique »
- « construire aujourd'hui les infrastructures de demain » et toute rhétorique « aujourd'hui / demain »

### Principes éditoriaux

1. **Partir du problème du lecteur**, pas de l'offre.
2. **Une phrase = une information vérifiable.** Si elle n'apporte rien, la couper.
3. **Ne jamais inventer** : un chiffre, un projet, un témoignage, une certification manquants → `[À CONFIRMER]` ou `[INFORMATION À FOURNIR]`.
4. **Montrer la frontière** : ce que nous faisons / ce que nous ne faisons pas.
5. **Répondre aux questions réelles** : qui, pour qui, pourquoi vous, comment, combien de temps, et après ?
6. **Deux tests sur chaque phrase :**
   - « pourrait-elle être copiée telle quelle sur 500 autres sites ? » → si oui, réécrire ;
   - « un salarié la dirait-il à un client, à voix haute ? » → si non, réécrire.

---

## 3. Page d'accueil

### Analyse du contenu actuel

Le hero est un slogan interchangeable. L'intro (« Notre raison d'être ») reste abstraite. La bande de statistiques donne une fausse autorité à des chiffres fictifs. Le parcours en 6 étapes est bon mais ses libellés sont un peu jargonneux. Les sections Secteurs / Financement / Projets sont bien pensées structurellement. La carte Afrique parle de « présence opérationnelle confirmée » sans bureaux réels. La galerie utilise des photos de stock. Le bandeau CTA final est correct mais générique.

### Version recommandée

#### Hero

**Surtitre :**
Développement de projets · Structuration · Financement

**H1 :**
Nous transformons un besoin d'infrastructure en projet finançable.

**Sous-titre :**
Fil Investment Group développe et structure des projets d'infrastructures publiques en Afrique — transport, énergie, eau, numérique. Nous montons les dossiers, réunissons les financements et coordonnons les partenaires qui permettent de les réaliser.

**CTA principal :** Présenter un projet → `/contact`

**CTA secondaire :** Voir comment nous travaillons → `/expertise`

#### Section 1 — Notre rôle *(remplace « Notre raison d'être »)*

**Surtitre :** Notre rôle

**Titre :**
Un développeur de projets, pas un constructeur ni un prêteur.

**Contenu :**
Beaucoup de projets utiles ne voient jamais le jour : le besoin est réel, mais le dossier n'est pas assez solide pour convaincre un financeur. C'est ce dossier que nous construisons.

Nous intervenons entre la décision publique et le premier coup de pioche : études de faisabilité, montage juridique et financier, recherche des fonds, choix des partenaires techniques. Nous ne réalisons pas les travaux et ne remplaçons pas les banques — nous faisons en sorte que les uns et les autres puissent s'engager.

**CTA :** Découvrir notre approche → `/expertise`

#### Section 2 — Ce que nous avons mené à terme *(bande d'indicateurs)* `[DÉMO]`

Les cinq chiffres actuels sont fictifs et la note « consolidés au 31 décembre 2025 » leur donne une fausse autorité.

**Recommandation principale (tant que les chiffres réels ne sont pas fournis)** — remplacer la bande de compteurs par trois phrases :

> Nous travaillons sur des dossiers longs : souvent deux à quatre ans entre le premier échange et le financement.
>
> Nos montages associent en général plusieurs financeurs — concessionnels, commerciaux, privés.
>
> Chaque projet est conçu pour rester finançable jusqu'à la signature, pas seulement sur le papier.

**Variante chiffrée (si des chiffres réels et vérifiables sont disponibles)** — garder la bande, titre **« Ce que nous avons mené à terme »**, retirer la fausse date, n'afficher que le vérifiable :

- `[INFORMATION À FOURNIR]` projets menés jusqu'au bouclage financier
- `[INFORMATION À FOURNIR]` pays d'intervention
- `[INFORMATION À FOURNIR]` € de financements mobilisés (cumul)
- `[INFORMATION À FOURNIR]` ans d'expérience de l'équipe
- Note : « Chiffres au `[mois / année]`. »

#### Section 3 — Notre approche *(parcours en 6 étapes)*

**Surtitre :** Notre approche

**Titre :**
Du besoin exprimé au projet réalisé.

**Contenu (introduction) :**
Chaque projet suit le même chemin. Nous intervenons sur tout le parcours, ou seulement sur l'étape où le projet est bloqué.

**Étapes :**

1. **Identifier** — Repérer les besoins déjà inscrits dans les plans publics et les opportunités qui peuvent devenir des projets.
2. **Étudier** — Vérifier la faisabilité technique, juridique, économique et financière avant d'aller plus loin.
3. **Structurer** — Choisir le montage, bâtir le modèle financier, répartir les risques entre les parties.
4. **Financer** — Construire le plan de financement et obtenir des engagements fermes des banques, fonds et institutions.
5. **Mobiliser** — Réunir les partenaires techniques : bureau d'études, ensemblier, exploitant.
6. **Réaliser** — Suivre le projet jusqu'à la mise en service, puis passer le relais au maître d'ouvrage.

**Frise (journey) :**
Besoin → Projet → Montage → Financement → Partenaires → Réalisation → Service rendu

#### Section 4 — Secteurs

**Surtitre :** Secteurs d'intervention

**Titre :**
Quatre secteurs, une même méthode.

**Contenu :**
Transport, énergie, eau, numérique : les réseaux et les équipements publics dont dépend l'activité d'un pays.

**CTA :** Voir les quatre secteurs → `/secteurs`

#### Section 5 — Financement de projet

**Surtitre :** Financement de projet

**Titre :**
Le financement est l'étape où la plupart des projets s'arrêtent.

**Contenu :**
Nous préparons le projet pour qu'une banque, un fonds ou une institution de développement puisse dire oui : demande documentée, risques répartis, modèle économique tenable.

**Acteurs mobilisés :** Banques · Fonds d'investissement · Investisseurs privés · Institutions financières de développement · Partenaires publics

**Chaîne de financement :** Projet → Structuration → Analyse des risques → Financement → Réalisation

**CTA :** Parler d'un projet à financer → `/contact`

#### Section 6 — Projets `[DÉMO]`

**Titre :**
Des projets que nous avons portés.

**Contenu :**
À chaque étape, notre rôle est écrit : ce que nous avons fait, avec qui, et ce que le projet a permis.

**CTA :** Voir les projets → `/projets`

> À n'afficher qu'avec des projets réels (voir §8). Sinon, masquer la section sur l'accueil.

#### Section 7 — Où nous travaillons *(carte Afrique)*

**Surtitre :** Présence

**Titre :**
Où nous travaillons.

**Contenu :**
Nous concentrons nos moyens sur un nombre limité de pays, là où nous connaissons les interlocuteurs publics et les bailleurs actifs.

**Légende / note :** Pays où nous développons ou suivons des projets. `[À CONFIRMER : liste réelle des pays]`

> Retirer « présence opérationnelle confirmée » tant qu'il n'y a pas de bureaux locaux réels.

#### Section 8 — Galerie « Sur le terrain » `[DÉMO]`

Photos de banque d'images + légendes génériques.

**Recommandation :** n'activer cette section qu'avec de vraies photos (rencontres institutionnelles, signatures, visites de site). Sinon, la retirer. Ne pas conserver de légende générique type « Rencontre institutionnelle autour du développement d'infrastructures stratégiques ».

#### Bandeau CTA (bas de page, transverse)

**Titre :**
Un projet à développer ou à financer ?

**Contenu :**
Envoyez-nous une note de quelques lignes : le pays, le secteur, où en est le projet. Nous répondons sous `[À CONFIRMER : X jours ouvrés]` et nous vous disons franchement si nous pouvons être utiles.

**CTA :** Présenter un projet → `/contact`

#### SEO — page d'accueil

**Meta title :** Fil Investment Group — développement et financement de projets d'infrastructures en Afrique

**Meta description :** Nous développons, structurons et finançons des projets d'infrastructures publiques en Afrique : transport, énergie, eau, numérique. Présentez-nous votre projet.

**H1 :** Nous transformons un besoin d'infrastructure en projet finançable.
**H2 :** Un développeur de projets, pas un constructeur ni un prêteur · Du besoin exprimé au projet réalisé · Quatre secteurs, une même méthode · Le financement est l'étape où la plupart des projets s'arrêtent · Des projets que nous avons portés · Où nous travaillons

---

## 4. Page À propos

### Analyse

Le hero (« Une organisation internationale au service des territoires ») est vague et repose sur « au service de ». L'histoire est fictive. Vision / Mission / Valeurs forment trois blocs institutionnels qui se répètent et n'apportent pas d'information vérifiable. L'équipe n'est pas publiée et porte un libellé placeholder. C'est la page qui perd le plus à rester générique, car c'est celle qui doit créer la confiance.

### Contenu recommandé

#### Hero

**Surtitre :** À propos

**H1 :**
Pourquoi Fil Investment Group existe.

**Sous-titre :**
Nous portons des dossiers d'infrastructures publiques jusqu'au financement — le travail long et technique qui sépare une décision d'un chantier.

#### Section — Notre histoire `[À CONFIRMER]` `[INFORMATION À FOURNIR]`

Trame à valider et compléter avec la direction (la date, la ville et le fondateur actuellement affichés viennent d'un contenu de démonstration) :

> Fil Investment Group est né d'un constat simple : ce qui manque en Afrique, ce ne sont pas les projets d'infrastructures, ce sont les dossiers prêts à être financés. Entre le moment où un ministère identifie un besoin et celui où une banque accepte de s'engager, il y a un travail long, technique et ingrat que peu d'acteurs font vraiment.
>
> Nous avons créé l'entreprise en `[année]` à `[ville]` pour faire ce travail : cadrer les projets, bâtir les montages, chercher les financements, réunir les partenaires.
>
> `[Paragraphe à compléter : parcours de l'équipe fondatrice, premiers dossiers, ce qui a changé depuis.]`

#### Section — Comment nous travaillons *(remplace Vision + Mission + Valeurs)*

**Principe 1 — Nous disons non quand le projet n'est pas mûr.**
Un dossier mal préparé coûte du temps et de la crédibilité à tout le monde. Si nous ne voyons pas de chemin vers le financement, nous le disons dès le premier échange.

**Principe 2 — Nous partageons le risque du montage.** `[À CONFIRMER : modèle de rémunération]`
Une partie de notre rémunération dépend du bouclage financier. Notre intérêt est que le projet aboutisse, pas qu'il s'éternise en études.

**Principe 3 — Le projet reste au pays.**
Nous travaillons pour des maîtres d'ouvrage publics. La structure, les contrats et les actifs leur appartiennent ; notre rôle s'arrête quand le projet tient debout seul.

#### Section — Vision *(une phrase, pas un pavé)*

Nous voulons qu'un plus grand nombre de projets publics passent le cap du financement — sans que les pays en perdent la maîtrise.

#### Section — Notre équipe `[DÉMO]` `[INFORMATION À FOURNIR]`

**Recommandation :** publier les vrais membres (nom, fonction, une ligne de parcours, photo). À défaut, une description :

> Nous sommes `[X]` personnes : développement de projets, ingénierie financière, droit des contrats publics, relations institutionnelles.

Retirer le libellé placeholder « Équipe Fil Investment Group ».

#### CTA

Parler à l'équipe → `/contact` · Voir nos secteurs d'intervention → `/secteurs`

#### SEO — À propos

**Meta title :** À propos — Fil Investment Group

**Meta description :** Une équipe de développement de projets d'infrastructures basée en Afrique. Notre histoire, notre façon de travailler et les personnes qui portent les dossiers.

**H1 :** Pourquoi Fil Investment Group existe.
**H2 :** Notre histoire · Comment nous travaillons · Notre équipe

---

## 5. Page Expertise

### Analyse

C'est la page la mieux construite du site : la grille Problème → Approche → Expertise → Résultat part du besoin du lecteur. Le contenu reste toutefois abstrait par endroits et n'explique pas ce qui se passe après un premier contact. Deux renommages d'étiquettes la rendent plus concrète.

### Contenu recommandé

#### Hero

**H1 :**
Ce que nous faisons, étape par étape.

**Sous-titre :**
Un projet d'infrastructure passe par quatre étapes avant d'être réalisé. Nous intervenons sur les quatre, ou sur une seule si le projet est déjà engagé.

**Étiquettes des blocs :** Problème · Notre approche · Ce que nous faisons · Ce que vous obtenez
*(« Notre expertise » → « Ce que nous faisons » ; « Résultat attendu » → « Ce que vous obtenez ».)*

#### Bloc 1 — Développement de projets

- **Problème :** Un besoin inscrit dans un plan national n'est pas encore un projet. Il faut le cadrer, vérifier qu'il tient économiquement et le documenter.
- **Notre approche :** Nous partons des priorités déjà fixées par l'État ou l'opérateur, puis nous cadrons le périmètre, l'ordre de grandeur des coûts et la demande attendue.
- **Ce que nous faisons :** Cadrage, premières études de faisabilité, estimation des coûts et de la demande, dossier de présentation du projet.
- **Ce que vous obtenez :** Un dossier assez clair pour être présenté à un comité d'investissement ou à un bailleur.

#### Bloc 2 — Structuration de projets

- **Problème :** Un financeur ne s'engage pas sur une bonne idée. Il s'engage sur un montage : qui porte quoi, qui paie quoi, qui prend quel risque.
- **Notre approche :** Nous définissons le montage juridique et économique — régie, concession, partenariat public-privé — et nous répartissons les risques de façon tenable pour chaque partie.
- **Ce que nous faisons :** Choix du montage, modèle financier, matrice des risques, projets de contrats, préparation de l'appel d'offres.
- **Ce que vous obtenez :** Un projet bancable : un montage que les banques et les investisseurs reconnaissent et acceptent d'instruire.

#### Bloc 3 — Financement de projets

- **Problème :** Le bon financement se trouve rarement chez un seul acteur. Il faut combiner des sources qui n'ont ni les mêmes règles ni les mêmes horizons.
- **Notre approche :** Nous construisons le plan de financement, nous ciblons les bailleurs et investisseurs adaptés au projet et au pays, et nous menons les discussions jusqu'à l'engagement.
- **Ce que nous faisons :** Plan de financement, mise en relation avec banques de développement, fonds et prêteurs, réponses aux due diligences, appui à la négociation.
- **Ce que vous obtenez :** Des engagements de financement fermes, prêts à être signés.

#### Bloc 4 — Mobilisation de partenaires

- **Problème :** Personne ne réalise seul un projet d'infrastructure : il faut un ensemblier, un ingénieur, parfois un exploitant.
- **Notre approche :** Nous identifions les partenaires techniques crédibles pour ce projet et ce pays, et nous les réunissons autour d'un cahier des charges commun.
- **Ce que nous faisons :** Sélection des partenaires, mise en concurrence, coordination du consortium, suivi jusqu'au démarrage des travaux.
- **Ce que vous obtenez :** Une équipe projet complète, avec des rôles et des responsabilités écrits.

#### Nouveau bloc — Comment se passe un premier échange

1. Vous nous envoyez une note courte : pays, secteur, maître d'ouvrage, stade du projet.
2. Nous vous rappelons sous `[À CONFIRMER : X jours ouvrés]` pour comprendre le contexte.
3. Si le sujet entre dans notre champ, nous vous proposons une première lecture du projet, sans engagement. Les documents que vous nous transmettez restent confidentiels.

#### Nouveau bloc — Mini-glossaire *(optionnel, en aside)*

- **Bancable** — un projet qu'un financeur accepte d'instruire, parce que la demande, les risques et le modèle économique sont documentés.
- **Structuration** — le montage juridique et financier : forme du contrat, répartition des risques, plan de financement.
- **PPP** — partenariat public-privé : un contrat de long terme où un partenaire privé finance, construit et parfois exploite un ouvrage public.
- **Bouclage financier** — le moment où tous les financements sont signés et où le projet peut démarrer.

#### CTA

Présenter un projet → `/contact` · Voir les secteurs → `/secteurs`

#### SEO — Expertise

**Meta title :** Développer, structurer et financer les projets — Fil Investment Group

**Meta description :** Développement, structuration juridique et financière, recherche de financements et mobilisation des partenaires : les quatre étapes qui rendent un projet d'infrastructure réalisable.

**H1 :** Ce que nous faisons, étape par étape.
**H2 :** Développement de projets · Structuration de projets · Financement de projets · Mobilisation de partenaires · Comment se passe un premier échange

---

## 6. Page Secteurs (liste)

### Analyse

Le hero (« Intervenir sur les secteurs qui structurent l'économie ») est acceptable mais un peu creux. Le sous-titre « Infrastructure publique » demandé par le client est une bonne idée ; à reformuler pour dire précisément ce que cela recouvre. Les phrases courtes des cartes gagnent à lister des exemples concrets.

### Contenu recommandé

#### Hero

**Surtitre :** Secteurs d'intervention

**H1 :**
Les secteurs où nous intervenons.

**Sous-titre :**
Des routes aux réseaux de données, nous développons des projets dans quatre secteurs — toujours sur des équipements et des réseaux publics.

#### Sous-titre de page — Infrastructure publique

**Surtitre :** Notre domaine

**Titre :** Infrastructure publique

**Contenu :**
Tous nos projets sont des infrastructures publiques : des réseaux et des équipements financés dans l'intérêt collectif, dont un État ou un opérateur public reste maître d'ouvrage.

#### Cartes (4)

- **Transport** — Routes, rails, ports, aéroports, transport urbain.
- **Énergie** — Production, transport et distribution d'électricité.
- **Eau** — Production d'eau potable, distribution, assainissement.
- **Numérique & Télécommunications** — Réseaux, connectivité, centres de données.

**CTA par carte :** Voir le secteur

#### SEO — Secteurs

**Meta title :** Secteurs : transport, énergie, eau, numérique — Fil Investment Group

**Meta description :** Nous développons des projets d'infrastructures publiques dans quatre secteurs : transport, énergie, eau, numérique et télécommunications.

**H1 :** Les secteurs où nous intervenons.
**H2 :** Infrastructure publique · Transport · Énergie · Eau · Numérique & Télécommunications

---

## 7. Pages Secteur (détail) ×4

### Analyse

Structure commune solide : Hero → Enjeux → Types de projets → Notre rôle → Résultats attendus → Exemples → CTA. Le client a demandé une présentation plus détaillée des sous-domaines (exemple donné : le transport — ferroviaire, routier, aérien, etc.). L'information existe déjà dans `src/data/sectors.ts` (champ `projectTypes`) mais n'est pas mise en avant en texte. Les « exemples d'interventions » sont fictifs.

**Renommage commun :** « Résultats attendus » → **« Ce que le projet apporte »**.

### Contenu recommandé — Transport

**Description :**
Le transport décide du prix de presque tout : ce qu'un pays produit, importe ou exporte passe par une route, un rail, un port ou un aéroport. Quand un maillon manque ou sature, c'est toute une région qui est pénalisée. Nous développons des projets qui rétablissent ces liaisons et les rendent finançables.

**Enjeux du secteur :**
Villes qui grandissent vite, corridors régionaux à fiabiliser, zones de production enclavées, coût et délais du fret. Les besoins sont connus ; ce qui bloque, c'est le passage au financement.

**Sous-domaines :**
Nous travaillons sur l'ensemble des modes : **routier** (autoroutes, ouvrages d'art, ponts), **ferroviaire** (lignes, gares, matériel roulant), **portuaire et fluvial** (terminaux, ports secs), **aéroportuaire**, **transport urbain** (bus en site propre, réseaux structurants) et **plateformes logistiques**.

**Notre rôle :**
Nous identifions le maillon à traiter en priorité, nous vérifions le trafic attendu et la capacité à payer, puis nous montons le financement — souvent en partenariat public-privé. Nous suivons le projet des premières études jusqu'à la mise en service.

**Ce que le projet apporte :**
- Désenclavement des territoires et accès élargi aux marchés
- Baisse des coûts et des temps de transport
- Un cadre juridique et financier qui tient dans la durée

**CTA :** Parler d'un projet de transport → `/contact`

**SEO — Transport**
- Meta title : Infrastructures de transport en Afrique : route, rail, ports, aéroports — Fil Investment Group
- Meta description : Développement et financement de projets de transport publics : routier, ferroviaire, portuaire, aéroportuaire, transport urbain et logistique.
- H1 : Transport

### Contenu recommandé — Énergie

**Description :**
Sans électricité fiable, ni l'industrie ni les services publics ne tiennent. Beaucoup de réseaux produisent trop peu, transportent mal ou coûtent cher. Nous développons des projets de production, de transport et de distribution qui augmentent la capacité disponible et sécurisent le réseau.

**Enjeux du secteur :**
Taux d'accès encore faible, coût du kilowattheure, place des énergies renouvelables, stabilité du réseau, équilibre financier des sociétés d'électricité.

**Sous-domaines :**
Production (hydraulique, solaire, gaz, hybride), stockage, lignes de transport haute tension et postes, réseaux de distribution et raccordements, contrats d'achat d'électricité.

**Notre rôle :**
Nous évaluons la demande et la solvabilité de l'acheteur, nous structurons le contrat d'achat d'électricité et le financement, et nous réunissons les partenaires industriels capables de construire et d'exploiter.

**Ce que le projet apporte :**
- Élargissement de l'accès à l'électricité
- Approvisionnement et réseau plus sûrs
- Intégration réussie des énergies renouvelables

**CTA :** Parler d'un projet d'énergie → `/contact`

**SEO — Énergie**
- Meta title : Projets d'énergie : production, transport et distribution d'électricité — Fil Investment Group
- Meta description : Développement et financement de projets électriques publics : production, renouvelables, stockage, lignes de transport et réseaux de distribution.
- H1 : Énergie

### Contenu recommandé — Eau

**Description :**
L'eau potable et l'assainissement conditionnent la santé publique et la vie des villes. Les réseaux vieillissent, les pertes sont fortes, la ressource se tend. Nous développons des projets qui sécurisent la production et étendent l'accès, avec un modèle qui permet de les entretenir dans la durée.

**Enjeux du secteur :**
Pression sur la ressource, croissance urbaine, pertes en réseau, équilibre tarifaire, adaptation au climat.

**Sous-domaines :**
Captage et production d'eau potable, usines de traitement, réservoirs et adduction, réseaux de distribution, assainissement collectif, réutilisation des eaux usées.

**Notre rôle :**
Nous dimensionnons le besoin, nous choisissons le montage d'exploitation (régie, affermage, concession), nous bâtissons le modèle financier et nous cherchons les financements concessionnels adaptés à un service à tarif encadré.

**Ce que le projet apporte :**
- Accès durable à l'eau potable
- Moins de pertes, réseaux modernisés
- Santé des populations mieux protégée

**CTA :** Parler d'un projet d'eau → `/contact`

**SEO — Eau**
- Meta title : Projets d'eau potable et d'assainissement en Afrique — Fil Investment Group
- Meta description : Développement et financement de projets hydrauliques publics : production d'eau potable, adduction, distribution et assainissement.
- H1 : Eau

### Contenu recommandé — Numérique & Télécommunications

**Description :**
Réseaux, connectivité et centres de données sont devenus des infrastructures de base, au même titre que la route ou l'électricité. Nous développons des projets qui étendent la couverture et donnent aux États une capacité d'hébergement maîtrisée.

**Enjeux du secteur :**
Zones encore non couvertes, dépendance vis-à-vis d'hébergeurs étrangers, coût du transit international, besoin croissant de capacité de calcul et de stockage.

**Sous-domaines :**
Réseaux de collecte et fibre nationale, points d'échange internet, couverture mobile des zones rurales, centres de données, infrastructures de connectivité régionale.

**Notre rôle :**
Nous évaluons les usages et les revenus attendus, nous structurons un modèle souvent partagé entre plusieurs opérateurs, et nous mobilisons les financements et les partenaires techniques.

**Ce que le projet apporte :**
- Couverture étendue aux zones aujourd'hui hors réseau
- Capacité d'hébergement des données publiques maîtrisée par l'État
- Coût du transit international réduit

**CTA :** Parler d'un projet numérique → `/contact`

**SEO — Numérique & Télécommunications**
- Meta title : Infrastructures numériques et télécoms : réseaux et centres de données — Fil Investment Group
- Meta description : Développement et financement de projets numériques publics : fibre nationale, couverture mobile, points d'échange et centres de données.
- H1 : Numérique & Télécommunications

### Exemples d'interventions (bas de chaque page secteur) `[DÉMO]`

Les deux exemples par secteur sont fictifs. À remplacer par des cas réels, même anonymisés, ou à présenter clairement comme des **types d'interventions** (« Ce que nous faisons dans ce secteur »), sans prétendre qu'il s'agit de projets réalisés.

---

## 8. Page Projets (liste)

### Analyse

Les huit projets nommés sont fictifs. **Publier des projets fictifs est le risque de crédibilité le plus direct du site.** La structure de fiche (Pays · Secteur · Statut · Description · Notre rôle · Impact) est bonne.

### Contenu recommandé

**Deux options :**

1. **2 à 4 projets réels, même anonymisés.** Format proposé pour chaque fiche :
   > « Corridor routier, Afrique de l'Ouest — 190 km — notre rôle : structuration du PPP et bouclage financier — statut : financement signé en `[année]` »
2. **Aucun projet communicable pour l'instant.** Remplacer la page liste par **« Nos interventions »** : des cas-types par secteur, présentés explicitement comme représentatifs et non nominatifs.

#### Hero

**H1 :**
Des projets que nous avons portés.

**Sous-titre :**
À chaque étape, notre rôle est écrit : ce que nous avons fait, avec qui, et ce que le projet a permis.

#### Éléments d'interface

- Filtres (secteur / statut) : conservés.
- Libellé « Impact » de la fiche → **« Résultat »** (à n'employer qu'avec des résultats réels, si possible chiffrés et datés).
- Message liste vide : « Aucun projet ne correspond à ces critères. » (conservé)
- Microcopie du projet confidentiel : conservée telle quelle.

#### SEO — Projets

**Meta title :** Projets d'infrastructures développés et financés — Fil Investment Group

**Meta description :** Des projets d'infrastructures publiques que nous avons développés, structurés ou financés, par secteur et par pays.

**H1 :** Des projets que nous avons portés.

---

## 9. Page Projet (détail)

### Analyse

Bonne structure. Manque quelques éléments qui rassurent un lecteur financier (type de montage, types de financeurs, calendrier).

### Contenu recommandé

**Sections conservées :** Description · Notre rôle · Résultat · Galerie · Projet suivant.

**Ajouts, si l'information est communicable** `[À CONFIRMER par projet]` :
- **Montage** — type de contrat (régie, concession, PPP, société de projet).
- **Financeurs** — types d'acteurs mobilisés (banque de développement, fonds, prêteur commercial).
- **Calendrier** — deux ou trois dates clés (lancement des études, bouclage financier, mise en service).

**Microcopie confidentiel (conservée) :** « Ce projet est confidentiel. Les informations communiquées ne révèlent aucune donnée sensible. »

#### SEO — Projet (gabarit)

**Meta title :** {Nom du projet} — {Pays} | Fil Investment Group

**Meta description :** {Secteur} · {Statut}. Notre rôle : {rôle en une ligne}.

**H1 :** {Nom du projet}

---

## 10. Page Partenaires

### Analyse

La page affiche « Page en préparation » (`content.partners = false`). Pour un visiteur institutionnel, une page vide est un mauvais signal. Même sans logos, on peut livrer un contenu utile : les familles d'acteurs et le rôle de chacune dans un montage.

### Contenu recommandé

#### Hero

**Surtitre :** Partenaires

**H1 :**
Avec qui nous montons les projets.

**Sous-titre :**
Un projet d'infrastructure réunit un maître d'ouvrage public, des financeurs et des partenaires techniques. Notre travail est de les faire travailler ensemble.

#### Familles d'acteurs

- **Maîtres d'ouvrage publics** — États, ministères, agences et sociétés d'État. Ils fixent la priorité et restent propriétaires du projet.
- **Banques de développement et institutions financières** — elles apportent les financements longs et concessionnels qui rendent un projet public soutenable.
- **Fonds et investisseurs privés** — ils prennent le risque en capital sur les projets les plus structurés.
- **Partenaires techniques** — bureaux d'études, ensembliers, exploitants : ils garantissent que l'ouvrage se construit et se tient dans le temps.

#### CTA

Travailler avec nous → `/contact`

> Les emplacements de logos restent masqués tant qu'aucun partenaire réel n'est validé. Retirer le bloc « Page en préparation ». Les 10 noms de partenaires dans `src/data/partners.ts` sont fictifs `[DÉMO]`.

#### SEO — Partenaires

**Meta title :** Partenaires publics, financiers et techniques — Fil Investment Group

**Meta description :** Maîtres d'ouvrage publics, banques de développement, fonds, prêteurs et partenaires techniques : les acteurs que nous réunissons autour de chaque projet.

**H1 :** Avec qui nous montons les projets.

---

## 11. Page Actualités + Article

### Analyse

Cinq articles fictifs, dont de faux communiqués (accord-cadre signé, pose de première pierre, clôture de financement). **Publier de faux communiqués est un risque de crédibilité et un risque juridique.** Le format « analyse de fond » (« Du besoin au projet bancable ») est le seul réutilisable, sous réserve d'être réécrit et signé.

### Contenu recommandé

- **Ne publier que des actualités réelles.** En attendant : soit masquer « Actualités » du menu principal, soit n'y laisser qu'**une ou deux analyses de fond** réellement écrites et signées par l'équipe.
- N'afficher que les catégories de filtre réellement utilisées.

#### Hero

**Surtitre :** Actualités

**H1 :**
Actualités et analyses.

**Sous-titre :**
Ce qui avance sur nos dossiers, et notre lecture du financement des infrastructures en Afrique.

#### Page article

Structure conservée : couverture · corps · « À lire également ». Bouton « Partager » conservé.

#### SEO — Actualités

**Meta title :** Actualités et analyses — Fil Investment Group

**Meta description :** Nos communiqués, nos interventions en conférence et nos analyses sur le financement des infrastructures en Afrique.

**H1 :** Actualités et analyses.

---

## 12. Page Contact

### Analyse

Le hero est fonctionnel mais « Notre équipe vous répondra dans les meilleurs délais » ne dit rien. La page doit rassurer sur trois points : le délai, la confidentialité, la propriété du projet. Les placeholders du formulaire peuvent guider un message mieux qualifié.

### Contenu recommandé

#### Hero

**Surtitre :** Contact

**H1 :**
Parlons de votre projet.

**Contenu :**
Dites-nous le pays, le secteur et où en est le projet. Nous répondons sous `[À CONFIRMER : X jours ouvrés]` et nous vous disons franchement si nous pouvons aider. Ce que vous nous transmettez reste confidentiel.

#### Aside — Ce qui nous aide à répondre vite

Trois choses utiles dès le premier message :
- le maître d'ouvrage et le stade du projet (idée, étude en cours, appel d'offres à venir…) ;
- le montant estimé, si vous l'avez ;
- ce que vous attendez de nous : développement, structuration, financement, ou l'ensemble.

#### Coordonnées `[À CONFIRMER]`

Adresse, téléphone, e-mail, horaires, réseaux : toutes les valeurs actuelles sont des placeholders. Fuseau de Brazzaville : UTC+1.

#### SEO — Contact

**Meta title :** Contact — présenter un projet à Fil Investment Group

**Meta description :** Présentez-nous un projet d'infrastructure : pays, secteur, stade d'avancement. Réponse sous `[X jours ouvrés]`, en toute confidentialité.

**H1 :** Parlons de votre projet.

---

## 13. Pages annexes

### Plan du site

Descriptions actuelles correctes, à resserrer. H1 conservé : « Toutes les pages du site, au même endroit. » Retirer de la liste des secteurs toute entrée autre que Transport, Énergie, Eau, Numérique & Télécommunications.

**Descriptions recommandées :**
- **Accueil** — Ce que nous faisons, pour qui, et comment nous joindre.
- **À propos** — Pourquoi l'entreprise existe, comment elle travaille, qui la compose.
- **Expertise** — Les quatre étapes : développer, structurer, financer, mobiliser.
- **Secteurs** — Transport, énergie, eau, numérique — toujours des infrastructures publiques.
- **Projets** — Ce que nous avons porté, et notre rôle à chaque étape.
- **Partenaires** — Les acteurs que nous réunissons autour d'un projet.
- **Actualités** — Nos dossiers qui avancent et nos analyses.
- **Contact** — Présenter un projet ou un partenariat.
- **Mentions légales** — Éditeur, hébergeur, responsabilité.
- **Politique de confidentialité** — Ce que deviennent vos données.

### Mentions légales `[DÉMO]` `[À CONFIRMER]`

Structure conservée (Éditeur · Hébergement · Propriété intellectuelle · Responsabilité). À corriger avant publication :
- forme juridique, capital, numéro RCCM, directeur de la publication — à faire valider par la direction ;
- hébergeur : « InfraCloud SAS, 75019 Paris » est fictif. À remplacer par l'hébergeur réel (la configuration du dépôt suggère Vercel) — `[À CONFIRMER]`.

### Politique de confidentialité

Contenu globalement bon. La section « Confidentialité des projets » fait référence à une « soumission de projet » alors que la page correspondante a été supprimée : la reformuler pour les pièces jointes du formulaire de contact.

**Reformulation proposée :**
> Les documents que vous nous transmettez par le formulaire de contact sont traités comme des informations confidentielles. Ils ne servent qu'à évaluer votre demande et ne sont partagés avec personne en dehors de l'équipe qui vous répond.

### Page 404

**Titre :** Cette page n'existe pas (ou plus).

**Contenu :** Le lien est peut-être ancien. Voici les pages principales :

**Actions :** Retour à l'accueil · lien vers le plan du site · lien vers Contact

---

## 14. Éléments transverses

### En-tête (navigation)

Entrées conservées : Accueil · À propos · Expertise · Secteurs · Projets · Partenaires · Actualités · Contact. Aucun bouton « Soumettre un projet » (déjà retiré). CTA d'en-tête, s'il existe : **Présenter un projet**.

### Pied de page

**Tagline — avant :** « Nous développons, structurons et finançons des projets d'infrastructures stratégiques, principalement en Afrique. »
**Tagline — après :** Nous développons, structurons et finançons des projets d'infrastructures publiques en Afrique.

**Slogan — avant :** « Bâtir les infrastructures qui façonnent demain. »
**Slogan — après :** Le travail entre la décision publique et le financement.
*(ou : pas de slogan du tout — c'est une option défendable.)*

Titres de colonnes (Navigation, Secteurs, Contact, Réseaux) et « Tous droits réservés. » : conservés.

### Bandeau CTA

Voir §3 (page d'accueil) — le même bloc est utilisé sur plusieurs pages.

---

## 15. FAQ

À placer sur la page Expertise ou la page Contact. Répond aux objections réelles du public institutionnel.

**Est-ce que Fil Investment Group construit les infrastructures ?**
Non. Nous développons et structurons les projets, puis nous cherchons les financements et les partenaires qui les réalisent. Les travaux sont confiés à des entreprises sélectionnées dans le cadre du projet.

**Comment êtes-vous rémunérés ?**
`[À CONFIRMER]` — préciser le modèle réel : honoraires d'études, part liée au bouclage financier, mandat de l'État ou du bailleur, participation éventuelle. Formulation possible une fois validée : « Une partie de notre rémunération est liée au bouclage financier du projet ; le reste couvre les études et le montage. »

**Combien de temps entre le premier contact et un financement ?**
En général deux à quatre ans pour un projet d'infrastructure, selon le secteur, le pays et le stade auquel le projet nous arrive. `[À CONFIRMER : fourchette à valider avec la direction]`

**Le pays garde-t-il la maîtrise du projet ?**
Oui. Nous travaillons pour des maîtres d'ouvrage publics. La structure de projet, les contrats et les actifs leur appartiennent. Notre rôle s'arrête quand le projet fonctionne seul.

**Que deviennent les documents que je vous envoie ?**
Ils restent confidentiels et ne servent qu'à évaluer le projet. Nous pouvons signer un accord de confidentialité avant tout échange détaillé.

**Sur quels pays travaillez-vous ?**
`[À CONFIRMER : liste réelle]`. Nous concentrons nos moyens sur un nombre limité de pays où nous connaissons les interlocuteurs publics et les bailleurs actifs.

**À quel moment faut-il vous contacter ?**
Le plus tôt est le mieux : un besoin inscrit dans un plan, une étude préliminaire, ou un projet déjà lancé mais bloqué au financement.

---

## 16. Microcopies

### Boutons / CTA — système par intention

| Intention du visiteur | Libellé unique | Destination |
|---|---|---|
| Présenter un dossier pour la première fois | **Présenter un projet** | `/contact` |
| Chercher un financement précis | **Parler d'un projet à financer** | `/contact` |
| Comprendre la méthode | **Voir comment nous travaillons** · **Découvrir notre approche** | `/expertise` |
| Explorer les secteurs | **Voir les secteurs** · **Voir le secteur** | `/secteurs` |
| Voir des preuves | **Voir les projets** | `/projets` |
| Être associé comme partenaire | **Travailler avec nous** | `/contact` |
| Joindre une personne | **Parler à l'équipe** | `/contact` |

À proscrire : « Contactez-nous dès aujourd'hui », « En savoir plus » répété sans objet, « Nous contacter » comme CTA unique sur toutes les pages.

### Formulaire de contact

- **Placeholder « Objet » :** Ex. Financement d'une centrale solaire — `[pays]`
- **Placeholder « Message » :** Le pays, le secteur, le maître d'ouvrage, le stade du projet et ce que vous attendez de nous.
- **Aide sous le champ e-mail :** Utilisez de préférence une adresse professionnelle.
- **Mention de confidentialité :** Ces informations ne servent qu'à traiter votre demande. Nous ne les partageons avec personne en dehors de l'équipe qui vous répond.
- **Bouton d'envoi :** Envoyer la demande

### Messages d'état

- **Erreur champ obligatoire :** Ce champ est obligatoire.
- **Erreur e-mail :** Cette adresse e-mail n'est pas valide.
- **Envoi en cours :** Envoi…
- **Succès (titre) :** Message reçu.
- **Succès (corps) :** Nous revenons vers vous sous `[À CONFIRMER : X jours ouvrés]`.
- **Échec technique :** L'envoi n'a pas abouti. Réessayez, ou écrivez-nous directement à `[e-mail réel]`.

### États vides

- **Projets (aucun résultat de filtre) :** Aucun projet ne correspond à ces critères.
- **Actualités (aucune publication) :** Pas encore de publication. Revenez bientôt.
- **Partenaires (liste non encore publiée) :** La liste de nos partenaires sera publiée ici après validation de nos accords.

### Messages utiles / réassurance

- **Sous le formulaire :** Vous pouvez aussi nous joindre par e-mail ou par téléphone — coordonnées ci-dessus.
- **Bloc confidentialité (pages projet / contact) :** Les informations sensibles ne sont jamais publiées sur le site.
- **Carte Afrique (aide) :** Cliquez sur un point pour afficher les projets du pays.
- **Retour en haut :** Revenir en haut de la page

---

## 17. SEO — récapitulatif

| Page | Meta title | Meta description |
|---|---|---|
| Accueil | Fil Investment Group — développement et financement de projets d'infrastructures en Afrique | Nous développons, structurons et finançons des projets d'infrastructures publiques en Afrique : transport, énergie, eau, numérique. Présentez-nous votre projet. |
| À propos | À propos — Fil Investment Group | Une équipe de développement de projets d'infrastructures basée en Afrique. Notre histoire, notre façon de travailler et les personnes qui portent les dossiers. |
| Expertise | Développer, structurer et financer les projets — Fil Investment Group | Développement, structuration juridique et financière, recherche de financements et mobilisation des partenaires : les quatre étapes qui rendent un projet d'infrastructure réalisable. |
| Secteurs | Secteurs : transport, énergie, eau, numérique — Fil Investment Group | Nous développons des projets d'infrastructures publiques dans quatre secteurs : transport, énergie, eau, numérique et télécommunications. |
| Secteur — Transport | Infrastructures de transport en Afrique : route, rail, ports, aéroports — Fil Investment Group | Développement et financement de projets de transport publics : routier, ferroviaire, portuaire, aéroportuaire, transport urbain et logistique. |
| Secteur — Énergie | Projets d'énergie : production, transport et distribution d'électricité — Fil Investment Group | Développement et financement de projets électriques publics : production, renouvelables, stockage, lignes de transport et réseaux de distribution. |
| Secteur — Eau | Projets d'eau potable et d'assainissement en Afrique — Fil Investment Group | Développement et financement de projets hydrauliques publics : production d'eau potable, adduction, distribution et assainissement. |
| Secteur — Numérique | Infrastructures numériques et télécoms : réseaux et centres de données — Fil Investment Group | Développement et financement de projets numériques publics : fibre nationale, couverture mobile, points d'échange et centres de données. |
| Projets | Projets d'infrastructures développés et financés — Fil Investment Group | Des projets d'infrastructures publiques que nous avons développés, structurés ou financés, par secteur et par pays. |
| Projet (détail) | {Nom du projet} — {Pays} \| Fil Investment Group | {Secteur} · {Statut}. Notre rôle : {rôle en une ligne}. |
| Partenaires | Partenaires publics, financiers et techniques — Fil Investment Group | Maîtres d'ouvrage publics, banques de développement, fonds, prêteurs et partenaires techniques : les acteurs que nous réunissons autour de chaque projet. |
| Actualités | Actualités et analyses — Fil Investment Group | Nos communiqués, nos interventions en conférence et nos analyses sur le financement des infrastructures en Afrique. |
| Article (détail) | {Titre de l'article} — Fil Investment Group | {Chapô de l'article, ~150 caractères}. |
| Contact | Contact — présenter un projet à Fil Investment Group | Présentez-nous un projet d'infrastructure : pays, secteur, stade d'avancement. Réponse sous [X jours ouvrés], en toute confidentialité. |
| Mentions légales | Mentions légales — Fil Investment Group | Éditeur du site, hébergement et responsabilité. |
| Confidentialité | Politique de confidentialité — Fil Investment Group | Comment nous collectons, utilisons et protégeons vos données personnelles. |
| Plan du site | Plan du site — Fil Investment Group | Toutes les pages du site Fil Investment Group, réunies pour une navigation rapide. |

### Hiérarchie de titres — principes

- **Un seul H1 par page**, repris du tableau de chaque section.
- **H2** = titres de sections fonctionnelles (Notre rôle, Notre approche, Financement…).
- **H3** = sous-blocs (étapes de l'approche, blocs d'expertise, familles de partenaires).
- Ne pas utiliser les niveaux de titre pour du style : ils doivent refléter la structure de l'information.
- Mots-clés principaux : *développement de projets d'infrastructures*, *structuration de projets*, *financement de projet (project finance)*, *infrastructures publiques Afrique*, *partenariat public-privé*.
- Mots-clés secondaires par secteur : *financement transport / énergie / eau / numérique*, *bancabilité*, *bouclage financier*, *corridor*, *contrat d'achat d'électricité*.
- Ne jamais bourrer : un mot-clé n'apparaît que si la phrase en a besoin.

---

## 18. Informations à confirmer

### `[À CONFIRMER]` — plausible mais non vérifiable

- Modèle économique / mode de rémunération de Fil Investment Group.
- Année, ville et personne(s) à l'origine de l'entreprise (le « 2011 à Brazzaville / Surya Aniel MACKLYMAN » vient d'un contenu de démonstration).
- Liste réelle des pays d'intervention.
- Fourchette de délai « premier contact → financement » (2–4 ans proposé à titre indicatif).
- Coordonnées : adresse exacte, téléphone, e-mail, horaires, fuseau, page LinkedIn.
- Domaine de production définitif (placeholder actuel : `filinvestmentgroup.com`).
- Hébergeur réel du site (probablement Vercel).
- Forme juridique, capital, numéro RCCM, directeur de la publication.
- Pays lusophones visés — sinon désactiver la langue PT.
- Délai de réponse à afficher sur les CTA et le formulaire (`X jours ouvrés`).

### `[INFORMATION À FOURNIR]` — absente, nécessaire avant publication

- Chiffres réels et datés : projets menés à terme, pays, volume de financements mobilisés, années d'expérience de l'équipe.
- 2 à 4 projets communicables (même anonymisés) : pays, secteur, rôle précis, montant, statut, résultat.
- Types de financeurs déjà mobilisés (noms si autorisés, sinon catégories).
- Équipe réelle : noms, fonctions, une ligne de parcours, photos — ou effectif et disciplines.
- Récit fondateur complet (parcours de l'équipe, premiers dossiers).
- Photos de terrain réelles pour la galerie (ou suppression de la section).
- Éventuelles adhésions, agréments ou mandats publics à mentionner s'ils existent.

### Contenus `[DÉMO]` à remplacer ou masquer

- `src/data/projects.ts` — 8 projets fictifs.
- `src/data/team.ts` — 4 membres fictifs.
- `src/data/partners.ts` — 10 partenaires fictifs.
- `src/data/news.ts` — 5 articles fictifs (dont faux communiqués).
- `src/data/gallery.ts` — 6 photos de banque d'images.
- `src/data/legal.ts` — éditeur, hébergeur, RCCM, capital fictifs.
- `src/i18n/*.ts` clé `stats.items` — 5 indicateurs fictifs + note de consolidation.

---

## 19. Synthèse finale

**Ce qui va bien.** Le site repose sur une vraie idée éditoriale — faire passer un projet du besoin au financement — et sur un vocabulaire métier juste. La structure des pages est solide, en particulier la grille Problème → Approche → Résultat de la page Expertise. Le ton est sobre, sans esbroufe.

**Ce qui bloque la crédibilité.** Deux choses. D'abord, presque tout le contenu concret est fictif et présenté comme réel : chiffres, projets, équipe, partenaires, actualités, histoire. Ensuite, la marque n'a ni voix ni visage — aucune première personne, aucun nom, aucun exemple vécu. Pour un métier de confiance qui vend des dossiers à des États et à des bailleurs, c'est le point le plus coûteux.

**Ce que fait ce document.** Il fournit des textes de fond prêts à intégrer là où c'est possible sans rien inventer (hero, rôle, approche, expertise, secteurs, contact, FAQ, microcopies, CTA, SEO), et des trames balisées `[À CONFIRMER]` / `[INFORMATION À FOURNIR]` partout où l'information réelle manque.

**Direction éditoriale retenue.** Une voix de développeur de projets qui a déjà bouclé des financements : directe, précise, un peu sévère, qui explique ses termes une fois puis les assume. Vouvoiement du visiteur, « nous » assumé, phrases courtes, verbes d'action, zéro superlatif. Chaque phrase doit passer deux tests : *pourrait-elle être copiée sur 500 autres sites ?* et *un salarié la dirait-il à un client à voix haute ?*

**Prochaines étapes.**
1. Faire relire et valider ce document par la direction.
2. Réunir les informations `[À CONFIRMER]` et `[INFORMATION À FOURNIR]`, en priorité : modèle économique, récit fondateur, 2–3 projets réels, équipe, coordonnées.
3. Trancher pour chaque section « démo » : fournir du réel, ou masquer.
4. Intégrer les textes validés dans `src/i18n/fr.ts`, puis reporter sur `en.ts` et `pt.ts` avec le même contrôle anti-formules.
5. Appliquer le système de CTA (§16) sur toutes les pages et composants transverses.

### Vérification finale du livrable

- [x] Toutes les pages du site sont analysées (accueil, à propos, expertise, secteurs, secteur détail ×4, projets, projet détail, partenaires, actualités, article, contact, plan du site, mentions légales, confidentialité, 404) + éléments transverses.
- [x] Chaque page porte un texte réellement recommandé, pas seulement un commentaire.
- [x] Aucune information inventée : tout ce qui n'est pas vérifiable est marqué `[À CONFIRMER]` ou `[INFORMATION À FOURNIR]`, tout contenu fictif existant est marqué `[DÉMO]`.
- [x] Ton cohérent d'une page à l'autre (même voix, même vocabulaire, mêmes CTA).
- [x] Formulations non génériques : les tournures « IA » repérées sont listées et remplacées.
- [x] Contenu spécifique à cette entreprise (métier du *project finance* public, frontière « ni constructeur ni prêteur », maîtrise conservée par le pays).
- [x] Textes tenables à voix haute (phrases courtes, une idée par phrase).
- [x] Chaque section apporte une information ou une valeur réelle ; les blocs redondants (Vision + Mission + Valeurs) sont fusionnés.
