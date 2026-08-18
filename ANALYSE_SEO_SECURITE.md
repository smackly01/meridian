# Analyse SEO & Sécurité — FIL Investment Group (Meridian)

**Date :** 18 août 2026
**Statut :** En cours

---

## 1. État des Lieux SEO

### Ce qui est bien implémenté (7/10)

| Élément | Fichier | Statut |
|---|---|---|
| `<title>` + `<meta description>` dynamiques | `src/components/Seo.tsx` | ✅ |
| Canonical URLs | `Seo.tsx` (ligne 59) | ✅ |
| Open Graph (og:title, og:description, og:url, og:type, og:locale, og:image) | `Seo.tsx` (lignes 44-53) | ✅ |
| Twitter Card (summary_large_image) | `Seo.tsx` (lignes 54-57) | ✅ |
| hreflang alternate links (fr/en/pt + x-default) | `Seo.tsx` (lignes 62-82) | ✅ |
| `<html lang>` dynamique | `Seo.tsx` (ligne 41) | ✅ |
| JSON-LD: Organization (homepage) | `Seo.tsx` (lignes 103-129) | ✅ |
| JSON-LD: NewsArticle (articles) | `Seo.tsx` (lignes 131-141) | ✅ |
| JSON-LD: BreadcrumbList (secteurs, projets, articles) | `Seo.tsx` (lignes 163-174) | ✅ |
| robots.txt | `public/robots.txt` | ✅ |
| sitemap.xml (544 lignes, 3 langues) | `public/sitemap.xml` | ✅ |
| HTML meta (charset, viewport, theme-color, favicon) | `index.html` | ✅ |
| i18n meta keys (fr/en/pt) | `src/i18n/fr.ts`, `en.ts`, `pt.ts` | ✅ |
| Sémantique HTML (h1-h3, aria-label, skip-to-content) | Tout le projet | ✅ |

### Ce qui manque — Priorité

| Manque | Priorité | Détail |
|---|---|---|
| **Sitemap non auto-généré** | Haute | Les pages dynamiques (/projets/:slug, /actualites/:slug) ne sont pas dans le sitemap |
| **Pas de vérification Search Console** | Haute | Pas de `google-site-verification` ou Bing |
| **OG image placeholder** | Haute | `public/og-image.jpg` existe mais images Unsplash en stock |
| **Google Fonts chargé externement** | Moyenne | Risque performance ; recommandé : self-hosting |
| **Pas de `meta robots` par page** | Basse | Pas de noindex/nofollow disponible |
| **Pas de sitemap images** | Basse | Uniquement XML standard |
| **Pas de FAQPage structured data** | Basse | Utile pour pages secteurs |
| **Organization JSON-LD basique** | Basse | Manque `areaServed`, `knowsAbout`, adresse complète |

---

## 2. État des Lieux Sécurité

### Ce qui est bien implémenté (6/10)

| Élément | Fichier | Statut |
|---|---|---|
| Content-Security-Policy (CSP) | `vercel.json`, `public/_headers` | ✅ |
| X-Content-Type-Options: nosniff | `vercel.json`, `public/_headers` | ✅ |
| X-Frame-Options: DENY | `vercel.json`, `public/_headers` | ✅ |
| Referrer-Policy: strict-origin-when-cross-origin | `vercel.json`, `public/_headers` | ✅ |
| Permissions-Policy (camera/mic/geo denied) | `vercel.json`, `public/_headers` | ✅ |
| Strict-Transport-Security (HSTS) | `vercel.json`, `public/_headers` | ✅ |
| Aucun secret/clé API dans le code | Tout le projet | ✅ |
| Aucun XSS vector (pas de dangerouslySetInnerHTML, eval, document.write) | Tout le projet | ✅ |
| Honeypot anti-spam | `src/components/form/ContactForm.tsx` | ✅ |
| `rel="noreferrer"` sur liens externes | `src/components/Footer.tsx` | ✅ |
| Validation côté client formulaires | `ContactForm.tsx` | ✅ |
| Skip-to-content link (accessibilité) | `src/components/Layout.tsx` | ✅ |
| prefers-reduced-motion respecté | `src/styles/index.css` | ✅ |
| .gitignore (.env, node_modules, dist) | `.gitignore` | ✅ |

### Ce qui manque — Priorité

| Manque | Priorité | Détail |
|---|---|---|
| **Pas de bannière GDPR** | Haute | `site.gdpr.enabled = true` mais aucun mécanisme implémenté |
| **Pas de CAPTCHA** | Moyenne | Honeypot seul ; pas de reCAPTCHA/hCaptcha |
| **Backend inexistant** | Haute | Formulaires simulés via `console.info` ; pas de `/api/contact` |
| **Pas de rate limiting** | Moyenne | Impossible côté client ; nécessaire côté serveur |
| **Pas de validation upload côté serveur** | Moyenne | Limitation 10MB/extensions uniquement client-side |
| **Disallow: /admin sans route admin** | Basse | Inutile |
| **Pas de SRI (Subresource Integrity)** | Basse | Google Fonts sans SRI hashes |
| **CSP `'unsafe-inline'` pour styles** | Basse | Nécessaire pour Tailwind en dev ; nonce possible en prod |
| **Données placeholder** | Haute | Contact, socials, contenu entreprise = démo |

---

## 3. Architecture Technique

| Aspect | Détail |
|---|---|
| Framework | React 18.3 (SPA, client-side) |
| Language | TypeScript 5.6 (strict) |
| Build | Vite 5.4 |
| Styling | Tailwind CSS 3.4 |
| Routing | React Router DOM 6.28 (`:lang?` prefix) |
| Animations | GSAP 3.15 + Lenis |
| i18n | Système custom (fr/en/pt) |
| Déploiement | Vercel (principal), Netlify/Cloudflare Pages |
| Domaine | `https://www.filinvestmentgroup.com` |

---

## 4. Fichiers Clés

### Configuration
- `meridian/package.json`
- `meridian/vite.config.ts`
- `meridian/vercel.json` (headers sécurité)
- `meridian/src/config/site.ts`
- `meridian/src/config/images.ts`

### SEO
- `src/components/Seo.tsx` — Composant principal SEO
- `public/robots.txt`
- `public/sitemap.xml`
- `index.html`
- `public/og-image.jpg`
- `src/pages/SitemapPage.tsx`

### Sécurité
- `vercel.json` (headers Vercel)
- `public/_headers` (headers Netlify/Cloudflare)
- `public/_redirects` (SPA fallback)
- `src/components/form/ContactForm.tsx` (honeypot)

### Données
- `src/data/sectors.ts`, `projects.ts`, `news.ts`, `team.ts`, `partners.ts`, `countries.ts`, `gallery.ts`

---

## 5. Plan d'Attaque Recommandé

### SEO — Prochaines étapes
1. Ajouter vérification Google Search Console + Bing
2. Auto-générer le sitemap depuis les données (ou script build)
3. Self-hoster Google Fonts (Performance + SEO)
4. Créer un vrai OG image personnalisé
5. Ajouter `x-default` hreflang dans le sitemap statique

### Sécurité — Prochaines étapes
1. **Implémenter la bannière GDPR** (consent cookies)
2. Ajouter CAPTCHA (reCAPTCHA/hCaptcha) sur formulaires
3. Créer un vrai backend pour formulaires (API)
4. Rate limiting côté serveur
5. Validation upload côté serveur
6. Nettoyer robots.txt (supprimer `Disallow: /admin`)

---

*Ce document sera mis à jour au fur et à mesure de l'avancement.*
