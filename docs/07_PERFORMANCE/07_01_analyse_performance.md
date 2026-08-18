# 07.01 - Analyse performance

> **Document** : 07.01 - Analyse performance
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `vite.config.ts`, `src/App.tsx`, `src/components/Media.tsx`, `index.html`, `dist/`

## 1. Objectif

Documenter les mesures de performance déjà en place et les pistes d'amélioration.

## 2. Faits observés

### 2.1 Optimisations déjà en place

- **Code splitting** : pages chargées via `React.lazy` (`src/App.tsx:9-31`) + `Suspense` → un chunk JS par page.
- **Vendor chunk** : `manualChunks.vendor` regroupe react/react-dom/react-router-dom dans un seul fichier (`vite.config.ts:19-22`) → meilleure mise en cache.
- **Sourcemaps désactivées** en production (`vite.config.ts:17`) → fichiers plus légers.
- **Target es2020** (`vite.config.ts:16`) → code moderne compact.
- **Images** : `loading="lazy"` sur les images non prioritaires (`Media.tsx`) ; `eager` pour le hero.
- **Fonts** : `preconnect` + `display=swap` (`index.html:13-18`) → pas de blocage du rendu texte.
- **Build** : sortie observée avec chunks pages séparés (ex. `dist/assets/*-*.js`) - confirme le découpage.

### 2.2 Points de vigilance

- **Chargement Google Fonts** : synchrone via `<link>` dans `index.html` (bien que `preconnect` et `swap` soient présents). Alternative possible : `font-display` + chargement auto-hébergé.
- **Images hébergées à distance** (Unsplash) : dépendance réseau externe ; les dimensions/heuristiques sont contrôlées (`?w=…&q=80`) mais pas d'images au format moderne (AVIF/WebP explicitement géré côté code).
- **Poids du vendor chunk** : react + router réunis dans un chunk unique potentiellement volumineux.
- **Génération du sitemap** : statique, aucune incursion de build.

### 2.3 Métriques observées (constats de dev)

- Temps de démarrage dev (Vite 5.4.21) : ~1 200 ms (préchauffage) ; serveur sur port 4322 (log dev).
- Le build de production s'exécute sans erreur (1640 modules analysés au build).

## 3. Interprétations & recommandations

Hypothèse / interprétation : la base est déjà performante pour un site vitrine statique ; les principaux leviers restants sont les images et les en-têtes réseau.

Recommandations (interprétation) :

1. **Priorité haute**
   - Passer les images à un format moderne (AVIF/WebP) et servir via un CDN d'images (ex. image optimization Vercel) si les URLs Unsplash deviennent de vraies images de marque.
   - Configurer un cache long (immutable) pour les assets hashés (Vercel/Netlify le font par défaut).
2. **Priorité moyenne**
   - Auto-héberger les polices pour supprimer la dépendance Google Fonts et améliorer le First Paint.
   - Analyser le poids du vendor chunk et envisager de le scinder davantage si nécessaire.
3. **Priorité basse**
   - Ajouter un score Lighthouse au processus (avec budgets de performance) en CI.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un service worker / PWA (hors périmètre).
- Des mesures Lighthouse enregistrées (pas de rapports dans le dépôt).
- Une stratégie de préchargement (`<link rel="preload">`) des chunks critiques.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Build config | `vite.config.ts` |
| Lazy loading | `src/App.tsx:9-31` |
| Chargement images | `src/components/Media.tsx` |
| Fonts | `index.html:13-18` |
| Sortie dist | `dist/` |
