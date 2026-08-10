# 04.01 - Design system et identité visuelle

> **Document** : 04.01 - Design system et identité visuelle
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `tailwind.config.js`, `src/index.css`, `src/components/Button.tsx`, `src/components/SectionHeading.tsx`, `index.html`

## 1. Objectif

Documenter le design system : tokens, palette, typographie, composants UI, effets.

## 2. Faits observés

### 2.1 Palette de couleurs (Tailwind)

| Nom | Nuances | Usage dominant |
| --- | --- | --- |
| `ink` | 500 → 950 | fonds sombres, textes (bleu marine `#0a1b33` / navy) |
| `gold` | 300 → 700 | accents, CTA, surlignages (autour de `#c9a35c`) |
| `mist` | 50 → 800 | fonds clairs, textes sur fond sombre |

- Définition dans `tailwind.config.js` (palette `colors.ink`, `colors.gold`, `colors.mist`).

### 2.2 Typographie

- **Police display** : `Manrope` (400–800), utilisée pour les titres (`--font-display`).
- **Police texte** : `Inter` (400–600), utilisée pour le corps (`--font-sans`).
- Chargées via Google Fonts avec `display=swap` (`index.html:13-18`).
- Classes typographiques globales dans `src/index.css` : `t-display`, `t-h1`, `t-h2`, `t-h3`, `t-body-lg`, `t-body`, `t-small`, `t-caption`, avec échelles fluides (`clamp()`).

### 2.3 Espacements et conteneurs

- Conteneur maximum : `80rem` (`maxWidth.container`, `tailwind.config.js`).
- Grille et espacements standardisés via classes utilitaires Tailwind.

### 2.4 Boutons (composant `Button`)

- Variants : `primary`, `outline-light`, `outline-dark`, `ghost-gold`, `dark`.
- Tailles : `sm`, `md`, `lg`.
- Exporte `ButtonLink` (React Router `Link`) et `ButtonNative` (`<button>`).

### 2.5 Titres de section (`SectionHeading`)

- Overline en petites capitales espacées (`letterSpacing.overline: 0.22em`), titre, option description alignée.

### 2.6 Effets et ombres

- Ombres : `card`, `cardhover`, `panel` (`boxShadow`, `tailwind.config.js`).
- Courbe d'animation premium : `cubic-bezier(0.22, 1, 0.36, 1)` (`transitionTimingFunction.premium`).
- Effets : `bg-grid-dark` (grille de fond), `reveal` (apparition au scroll), `hero-anim`.

### 2.7 Divers

- `::selection` en doré (`src/index.css`).
- `:focus-visible` avec contour doré (accessibilité).
- Sélection de texte : fond `#c9a35c`.

## 3. Interprétations & recommandations

Hypothèse / interprétation : le design system est cohérent : palette « navy + or » pour un positionnement institutionnel/financier premium, typographie sobre, hiérarchie claire.

Recommandations (interprétation) :
- Les tokens (couleurs, fonts, ombres) étant centralisés dans `tailwind.config.js` et `index.css`, toute évolution de marque est facilement appliquée.
- Documenter les usages (quand utiliser `gold` vs `mist` vs `ink`) pour éviter les divergences entre contributeurs.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Une charte graphique documentée (guide de marque) en dehors du code.
- Des breakpoints personnalisés (Tailwind par défaut : `sm/md/lg/xl/2xl`).

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Tokens Tailwind | `tailwind.config.js` |
| Typographie / effets | `src/index.css` |
| Boutons | `src/components/Button.tsx` |
| Titres de section | `src/components/SectionHeading.tsx` |
| Fonts | `index.html:13-18` |
