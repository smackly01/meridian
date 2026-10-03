# Charte graphique — Fil Investment Group

> **Version :** 2.0, 3 octobre 2026
> **Périmètre :** site web `filinvestmentgroup.com` (FR, EN, PT)
> **Source de vérité :** `tailwind.config.js`, `src/styles/index.css`, `src/components/Button.tsx`
> **Remplace :** la partie identité visuelle de `docs/04_EXPERIENCE_UTILISATEUR/04_01_design_system.md`, qui décrit encore les polices Manrope et Inter, abandonnées depuis.

---

## 1. Principes

L'identité est celle d'un développeur de projets d'infrastructures qui parle à des ministères et à des banques. Elle doit inspirer la confiance par la retenue.

1. **Sobriété.** Un fond, une typographie, un accent. Pas d'effet décoratif sans fonction.
2. **Éditorial plutôt que commercial.** Les grands titres en serif, beaucoup d'espace, des filets fins plutôt que des cadres.
3. **L'or est rare.** Il signale une action ou un détail précieux, jamais un décor de fond.
4. **Le contenu porte le design.** Une vraie photo de chantier vaut plus que n'importe quel motif graphique.

---

## 2. Logo

### 2.1 Fichiers actuels

| Fichier | Format | Dimensions | Usage |
| --- | --- | --- | --- |
| `public/logo.png` | PNG transparent, or | 977 × 337 px | En-tête, affiché à 56 px de haut. Données structurées SEO. |
| `public/logo-white.png` | PNG transparent, blanc | 980 × 302 px | Pied de page, affiché à 56 px de haut |
| `public/favicon.ico` | ICO 16, 32, 48 px | | Onglet du navigateur |
| `public/favicon-32.png` | PNG transparent | 32 × 32 px | Onglet du navigateur, écrans haute densité |
| `public/apple-touch-icon.png` | PNG sur fond `ink-900` | 180 × 180 px | Raccourci sur l'écran d'accueil iOS |
| `public/og-image.jpg` | JPEG | 1200 × 630 px | Aperçu lors d'un partage sur les réseaux |

Fichiers sources fournis : `public/Logo Meridian/` (`couleur.png`, `blanc.png`, `Favicon.png`). Les fichiers du site en sont tirés, recadrés au plus près du dessin.

Le logo se compose d'un anneau ouvert en bas à gauche, de trois immeubles en barres montantes qui sortent de l'anneau, et d'une silhouette de l'Afrique en haut à gauche de l'intérieur. Le nom est posé à droite sur deux lignes, en capitales serif.

### 2.2 Points à corriger

- **Le nom est écrit « FILL INVESTMENT » avec deux L** dans `couleur.png` et `blanc.png`. La société s'appelle Fil Investment Group.
- **L'emblème est en dégradé** du beige clair à l'or. La règle de la charte est l'aplat de couleur unie.
- **Pas de version vectorielle.** Les fichiers sont des PNG. Il faut un SVG pour le web et un PDF pour l'impression.
- **Pas de version marine** pour les fonds clairs.
- **Le nom devient petit dans l'en-tête :** à 56 px de haut, les capitales mesurent environ 8 px. Une version horizontale sur une seule ligne serait plus lisible.

### 2.3 Déclinaisons à produire

| Déclinaison | Contenu | Usage |
| --- | --- | --- |
| Logo horizontal | Emblème à gauche, nom sur une ligne à droite | En-tête du site |
| Logo complet | Emblème + nom sur deux lignes | Documents, supports imprimés |
| Emblème seul | Anneau + immeubles + Afrique | Favicon, réseaux sociaux, petits formats (déjà fourni) |

Chaque déclinaison en trois couleurs : or `#C9A35C`, blanc et marine `#081426`, sur fond transparent. Formats SVG et PDF vectoriel.

### 2.4 Règles d'usage

- **Zone de protection :** un espace libre égal à l'épaisseur de l'anneau tout autour du logo.
- **Taille minimale :** 24 px de haut pour l'emblème seul, 140 px de large pour le logo avec le nom.
- **Fonds autorisés :** marine `ink-900` ou `ink-950` pour la version or ou blanche, blanc ou `mist-50` pour la version marine (à produire).
- **Interdits :** déformer, ajouter une ombre, un contour, un effet métal ou un dégradé, poser le logo sur une photo non assombrie.

---

## 3. Couleurs

### 3.1 Palette

**Marine (`ink`)**, la couleur institutionnelle : fonds sombres, titres, texte fort.

| Jeton | Hex | Usage |
| --- | --- | --- |
| `ink-950` | `#050D1A` | Pied de page, hero d'accueil |
| `ink-900` | `#081426` | Couleur principale : fonds sombres, titres, boutons sombres |
| `ink-800` | `#0A1B33` | Texte des libellés de formulaire |
| `ink-700` | `#0E2440` | Survol des éléments sombres, flèche des selects |
| `ink-600` | `#14304F` | Réserve |
| `ink-500` | `#1B3D63` | Réserve |

**Or (`gold`)**, l'accent : boutons principaux, petits détails.

| Jeton | Hex | Usage |
| --- | --- | --- |
| `gold-300` | `#E6C98A` | Survol de liens sur fond sombre |
| `gold-400` | `#D4AF6A` | Texte or sur fond sombre |
| `gold-500` | `#C9A35C` | Couleur d'accent : bouton principal, sélection de texte, contour de focus |
| `gold-600` | `#B08A45` | Texte or de 24 px et plus sur fond clair, sinon réserve |
| `gold-700` | `#8F6F37` | Seul or autorisé pour du texte courant sur fond blanc |

**Brume (`mist`)**, les gris bleutés : fonds clairs, texte secondaire, filets.

| Jeton | Hex | Usage |
| --- | --- | --- |
| `mist-50` | `#F7F9FB` | Fond des sections claires alternées |
| `mist-100` | `#EEF2F6` | Fond des images en chargement |
| `mist-200` | `#DDE4EC` | Filets et bordures |
| `mist-300` | `#C4CFDC` | Bordures de champs |
| `mist-400` | `#9AA7B8` | Texte d'aide des champs uniquement |
| `mist-500` | `#748296` | Texte tertiaire en taille 14 px minimum |
| `mist-600` | `#556276` | Texte courant |
| `mist-700` | `#3F4A5C` | Réserve |
| `mist-800` | `#2A3342` | Couleur de texte par défaut du `body` |

### 3.2 Proportions

Sur une page type, viser environ **70 % de blanc et de brume, 25 % de marine, 5 % d'or**. Si l'or dépasse un élément par écran hors boutons, il y en a trop.

### 3.3 Contrastes

Seuil WCAG AA : 4,5 pour le texte courant, 3 pour le texte de 24 px et plus ou de 19 px en gras.

| Texte / fond | Contraste | Verdict |
| --- | --- | --- |
| `ink-900` sur blanc | 18,45 | Conforme |
| `mist-600` sur blanc | 6,19 | Conforme |
| `mist-500` sur blanc | 3,91 | Grands textes seulement |
| `mist-400` sur blanc | 2,44 | Non conforme pour du texte |
| `gold-500` sur blanc | 2,37 | Non conforme pour du texte |
| `gold-600` sur blanc | 3,20 | Grands textes seulement |
| `gold-700` sur blanc | 4,67 | Conforme |
| `gold-500` sur `ink-900` | 7,80 | Conforme |
| `ink-900` sur `gold-500` (bouton) | 7,80 | Conforme |
| Blanc à 55 % sur `ink-900` | 6,12 | Conforme |
| Blanc à 40 % sur `ink-900` | 3,80 | Grands textes seulement |

**Écarts actuels dans le code, à corriger :**
- Les sur-titres utilisent `mist-500` en 11 px. Passer en `mist-600`.
- Le nom du secteur sur les cartes projet, le rôle des membres de l'équipe et les numéros d'étapes de la page Expertise utilisent `gold-600` en petit corps. Passer en `gold-700`.
- Les notes de bas de section, comme la date des indicateurs, utilisent `mist-400`. Passer en `mist-500` à 14 px minimum.

---

## 4. Typographie

### 4.1 Polices

| Rôle | Police | Graisses | Fichier |
| --- | --- | --- | --- |
| Titres (serif) | **Newsreader** | 400, 500 | `public/fonts/newsreader-latin.woff2` |
| Texte et interface | **Instrument Sans** | 400, 500, 600 | `public/fonts/instrument-sans-latin.woff2` |

Les deux polices sont sous licence SIL Open Font, hébergées sur le site, sous-ensemble latin couvrant le français, l'anglais et le portugais. Polices de repli : Georgia pour la serif, police système pour la sans.

### 4.2 Échelle

Les tailles sont fluides entre mobile et grand écran.

| Classe | Police | Taille (min → max) | Interligne | Approche | Usage |
| --- | --- | --- | --- | --- | --- |
| `t-display` | Newsreader 400 | 40 → 68 px | 1,04 | −0,02 em | Titre du hero d'accueil, une seule fois sur le site |
| `t-h1` | Newsreader 400 | 34 → 54 px | 1,08 | −0,015 em | Titre de page, bannière de fin |
| `t-h2` | Newsreader 400 | 28 → 42 px | 1,12 | −0,01 em | Titre de section |
| Titre d'élément | Newsreader 400 | 20 → 30 px | 1,3 | 0 | Étapes, principes, cartes secteurs, résultats |
| `t-h3` | Instrument Sans 600 | 19 → 23 px | 1,3 | 0 | Sous-titres d'interface |
| `t-body-lg` | Instrument Sans 400 | 18 px | 1,625 | 0 | Chapeau sous un titre |
| `t-body` | Instrument Sans 400 | 16 px | 1,625 | 0 | Texte courant |
| `t-small` | Instrument Sans 400 | 14 px | 1,625 | 0 | Texte de carte |
| `eyebrow` | Instrument Sans 500, capitales | 11 px | 1,5 | +0,18 em | Sur-titre de section |

### 4.3 Règles

- **Les titres en serif ne sont jamais en gras.** Newsreader s'utilise en 400, exceptionnellement en 500.
- **La serif est réservée aux titres et aux chiffres clés.** Les boutons, la navigation, les libellés et les formulaires restent en Instrument Sans.
- **Longueur de ligne :** 60 à 75 caractères pour le texte courant (`max-w-xl` à `max-w-2xl`).
- **Alignement :** à gauche par défaut. Le centrage est réservé aux bannières de fin et aux en-têtes de section isolés.
- **Ponctuation :** les titres se terminent par un point lorsqu'ils forment une phrase. Pas de point d'exclamation. Pas de tiret cadratin dans les textes du site.
- **Capitales :** uniquement pour les sur-titres et les badges de statut, jamais pour un titre.

---

## 5. Mise en page

| Élément | Valeur |
| --- | --- |
| Largeur maximale du contenu | 1280 px (`max-w-container`) |
| Marges latérales | 20 px mobile, 32 px tablette, 48 px bureau |
| Espacement vertical des sections | 80 px mobile, 112 px bureau (`section`) |
| Grille | 12 colonnes sur bureau. Contenus en 2, 3 ou 4 colonnes, gouttière de 24 px |
| Écart sur-titre → titre | 16 px |
| Écart titre → chapeau | 20 px |
| Écart en-tête de section → contenu | 56 px |

**Rythme des fonds :** alterner blanc, `mist-50` et marine `ink-900`. Jamais deux sections sombres consécutives, sauf le hero.

**Rayons :** 10 px pour les cartes, panneaux et images (`rounded-card`, réglable par la variable `--radius-card` de `src/styles/index.css`). 3 px pour les boutons, badges et pastilles. 2 px pour les champs. 6 px pour les vignettes de 64 px du menu. Le cercle n'est utilisé que pour les points de la carte.

**Filets et ombres :**
- Les séparations se font par filets de 1 px en `mist-200`, ou en blanc à 10–15 % sur fond sombre.
- Les ombres sont réservées aux éléments flottants : menu déroulant, en-tête au défilement (`shadow-panel`). Les cartes n'ont pas d'ombre.
- Pas de trait décoratif au-dessus des titres, pas de trait de part et d'autre des sur-titres.

---

## 6. Composants

### 6.1 Boutons

| Variante | Repos | Survol | Fond conseillé |
| --- | --- | --- | --- |
| `primary` | Fond `gold-500`, texte `ink-900` | Aplat blanc qui balaie de gauche à droite | Sombre |
| `dark` | Fond `ink-900`, texte blanc | Aplat `gold-500`, texte `ink-900` | Clair |
| `outline-light` | Filet blanc à 30 %, texte blanc | Aplat blanc, texte `ink-900` | Sombre |
| `outline-dark` | Filet `ink-900` à 25 %, texte `ink-900` | Aplat `ink-900`, texte blanc | Clair |
| `ghost-gold` | Texte `gold-600`, sans fond | Texte `gold-700` | Clair |

| Taille | Espacement intérieur | Corps |
| --- | --- | --- |
| `sm` | 16 × 8 px | 12 px |
| `md` | 24 × 12 px | 14 px |
| `lg` | 28 × 16 px | 15 px |

- Police Instrument Sans 600, rayon 3 px.
- L'icône éventuelle est une flèche à droite, qui avance de 4 px au survol.
- Le balayage dure 500 ms. Il est désactivé si le visiteur a demandé moins d'animations.
- **Un seul bouton plein par zone.** L'action secondaire prend la forme d'un lien souligné, comme dans le hero d'accueil.

### 6.2 Champs de formulaire

- Fond blanc, filet `mist-300`, rayon 2 px, 16 × 12 px d'espacement intérieur, corps 14 px.
- Focus : filet `ink-700` et halo `ink-700` à 10 %.
- Les selects (`field-select`) ont une flèche marine dessinée par le site et passent en Instrument Sans 500. Survol : filet `ink-900` à 40 %.
- Libellé au-dessus du champ, Instrument Sans 600, 14 px, `ink-800`.

### 6.3 Sur-titre (`eyebrow`)

Une ligne en capitales espacées, sans trait ni puce, posée au-dessus d'un titre de section. Couleur `mist-600` sur fond clair, blanc à 55 % sur fond sombre. Il nomme la rubrique, il ne répète pas le titre.

### 6.4 Cartes

- Fond blanc, filet `mist-200`, rayon 10 px, pas d'ombre.
- Survol : le filet fonce vers `ink-900` à 25 % et l'image zoome de 4 % en 700 ms. La carte ne se soulève pas.
- Titre de carte secteur en Newsreader 24 px, titre de carte projet ou actualité en Instrument Sans 600.

### 6.5 Listes et étapes

- Listes de contenu séparées par des filets `mist-200`, sans puce ni coche.
- Étapes numérotées par un chiffre serif suivi d'un point (« 1. »), en `gold-400` sur fond sombre ou `gold-700` sur fond clair. Pas de « 01 » ni de numéro dans un cercle.

### 6.6 Chiffres clés

Chiffre en Newsreader 36 → 48 px, libellé en Instrument Sans 14 px `mist-500` dessous. Affichage statique, sans compteur animé. N'afficher que des chiffres réels, datés.

---

## 7. Iconographie

- Bibliothèque **Lucide**, trait de 1,5 px, couleur héritée du texte.
- Les icônes servent l'interface : flèches, menu, fermer, cadenas d'un projet confidentiel, réseaux sociaux.
- **Pas d'icône décorative** : pas d'icône dans un carré ou un cercle coloré au-dessus d'un titre, pas de pictogramme pour illustrer un secteur ou une valeur.

---

## 8. Photographie

- **Sujets :** chantiers, ouvrages livrés, équipes sur le terrain, réunions institutionnelles réelles. Les photos de la société priment toujours sur la banque d'images.
- **Style :** lumière naturelle, couleurs fidèles, cadrage large. Pas de poignée de main posée, pas de personnes devant un écran, pas d'image générée par IA.
- **Traitement :** sur les héros et bannières, voile dégradé marine de 50 à 90 % pour garantir la lisibilité du texte. Aucun filtre de couleur.
- **Formats et nombre par page :** voir `docs/08_CONTENU/08_06_cartographie_images.md`.

Quand une image manque, le site affiche un fond marine uni avec le nom de l'emplacement. Il n'affiche jamais d'image cassée.

---

## 9. Mouvement

| Paramètre | Valeur |
| --- | --- |
| Courbe | `cubic-bezier(0.22, 1, 0.36, 1)` (`ease-premium`) |
| Survols | 300 à 500 ms |
| Apparition au défilement | Fondu et montée de 24 px en 800 ms, décalage de 60 ms entre éléments |
| Hero d'accueil | Titre dévoilé de bas en haut, image en léger zoom arrière, parallaxe au défilement |

- Défilement fluide assuré par Lenis, animations de défilement par GSAP.
- **Loader de premier chargement :** l'emblème doré de 72 px sur fond `ink-950` apparaît en fondu puis respire doucement. L'écran reste affiché 2 s au minimum (`MIN_SPLASH_MS` dans `src/lib/loader.ts`), puis disparaît en fondu de 600 ms. C'est la seule animation en boucle autorisée.
- **Tout mouvement est coupé** si le visiteur a activé la réduction des animations dans son système.
- **Interdits :** éléments qui rebondissent ou pulsent en boucle, compteurs animés, cartes qui se soulèvent, halos lumineux flous.

---

## 10. Ton éditorial

Le détail figure dans `CONTENT_AUDIT_AND_REWRITE.md`, section 2. L'essentiel :

- **Vouvoiement du lecteur, « nous » pour l'entreprise.** Jamais « on ».
- **Phrases courtes, verbes précis :** identifier, structurer, financer, mobiliser.
- **À bannir :** « au service de », « solutions », « excellence », « innovation », « stratégique » à chaque ligne, toute formule du type « construire aujourd'hui le monde de demain ».
- **Ne jamais inventer** un chiffre, un projet ou un partenaire.

---

## 11. À ne pas faire

Ces éléments donnent au site un air de modèle générique ou de site produit par IA. Ils ont été retirés et ne doivent pas revenir :

- Fond quadrillé ou à points derrière les sections.
- Halo doré flou dans un coin.
- Traits dorés de part et d'autre des sur-titres, ou au-dessus des titres.
- Flèche « défiler vers le bas » qui rebondit dans chaque section.
- Numérotation « 01, 02, 03 » sur des éléments qui ne sont pas des étapes.
- Icône dans un carré coloré au-dessus de chaque titre de carte.
- Puces en forme de coche dans un cercle.
- Barre en dégradé or vers marine en haut d'une carte.
- Le même processus présenté plusieurs fois sur une page, en étapes, puis en frise fléchée, puis en schéma.
- Texte en gras extra-épais pour les titres.

---

## 12. Fichiers de référence

| Sujet | Fichier |
| --- | --- |
| Couleurs, polices, largeur, ombres, courbe d'animation | `tailwind.config.js` |
| Échelle typographique, sur-titres, champs, déclaration des polices | `src/styles/index.css` |
| Boutons | `src/components/Button.tsx` |
| En-tête de section | `src/components/SectionHeading.tsx` |
| Hero des pages intérieures | `src/components/PageHero.tsx` |
| Logo et favicon | `public/logo.png`, `public/logo-white.png`, `public/favicon.ico`, `public/favicon-32.png`, `public/apple-touch-icon.png` |
| Polices | `public/fonts/` |
