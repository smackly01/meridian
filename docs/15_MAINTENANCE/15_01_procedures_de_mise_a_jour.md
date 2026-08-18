# 15.01 - Procédures de mise à jour

> **Document** : 15.01 - Procédures de mise à jour
> **Version** : 1.0
> **Date** : 2026-08-10
> **Statut** : Validé (issu de l'audit du code source)
> **Fichiers source** : `package.json`, `vite.config.ts`, `tsconfig.json`

## 1. Objectif

Décrire les procédures de mise à jour du projet (dépendances, code, vérifications).

## 2. Faits observés

### 2.1 Commandes disponibles

| Commande | Action | Résultat |
| --- | --- | --- |
| `npm install` | Installation des dépendances | `node_modules/` |
| `npm run dev` | Serveur de développement | http://localhost:4322 (Vite) |
| `npm run typecheck` | Vérification des types | succès attendu |
| `npm run build` | Build de production | `dist/` |
| `npm run preview` | Prévisualisation du build | `vite preview` |

### 2.2 Dépendances

- Dépendances de production : `react`, `react-dom`, `react-router-dom`, `lucide-react`, `clsx`, `tailwind-merge`.
- Dépendances de développement : `typescript`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `@types/react`, `@types/react-dom`.
- Versions installées (package-lock) : react 18.3.1, react-router-dom 6.30.4, typescript 5.9.3, vite 5.4.21, tailwindcss 3.4.19, lucide-react 0.462.0.

### 2.3 Procédure de mise à jour recommandée (interprétation)

1. `git pull` / synchroniser le dépôt.
2. `npm install` pour synchroniser les dépendances.
3. `npm run typecheck` - doit passer sans erreur.
4. `npm run build` - doit réussir.
5. Tester en local (`npm run dev`) les pages modifiées.
6. Déployer (voir `12_02_processus_de_deploiement`).

### 2.4 Mise à jour des dépendances (recommandation)

- Vérifier les versions : `npm outdated`.
- Mettre à jour avec prudence (major → vérifier la compatibilité react-router / vite / tailwind).
- Après mise à jour, relancer `typecheck` + `build` + tests manuels.

## 3. Interprétations & recommandations

Hypothèse / interprétation : aucune dépendance obsolète n'a été identifiée dans les versions installées ; la pile est récente.

Recommandations (interprétation) :
1. Établir une fenêtre de maintenance régulière (mensuelle) pour les dépendances de sécurité.
2. Documenter toute montée de version majeure (react 19, vite 6, tailwind 4) comme projet dédié avec tests.

## 4. Points non identifiés

Non identifié dans le projet analysé :
- Un historique de mises à jour (changelog).
- Un processus de rollback documenté.

## 5. Traçabilité

| Élément | Référence |
| --- | --- |
| Scripts | `package.json:6-11` |
| Dépendances | `package.json:12-29`, `package-lock.json` |
| Config build | `vite.config.ts` |
