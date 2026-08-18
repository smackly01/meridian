import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/i18n";
import { Layout } from "@/components/Layout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ExpertisePage = lazy(() => import("@/pages/ExpertisePage"));
const SectorsPage = lazy(() => import("@/pages/SectorsPage"));
const SectorDetailPage = lazy(() => import("@/pages/SectorDetailPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("@/pages/ProjectDetailPage"));
const PartnersPage = lazy(() => import("@/pages/PartnersPage"));
const NewsPage = lazy(() => import("@/pages/NewsPage"));
const ArticlePage = lazy(() => import("@/pages/ArticlePage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const SitemapPage = lazy(() => import("@/pages/SitemapPage"));
const LegalPage = lazy(() => import("@/pages/LegalPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white" aria-hidden="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-mist-200 border-t-gold-500" />
    </div>
  );
}

export function App() {
  return (
    <I18nProvider>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/:lang?" element={<HomePage />} />
            <Route path="/:lang?/a-propos" element={<AboutPage />} />
            <Route path="/:lang?/expertise" element={<ExpertisePage />} />
            <Route path="/:lang?/secteurs" element={<SectorsPage />} />
            <Route path="/:lang?/secteurs/:slug" element={<SectorDetailPage />} />
            <Route path="/:lang?/projets" element={<ProjectsPage />} />
            <Route path="/:lang?/projets/:slug" element={<ProjectDetailPage />} />
            <Route path="/:lang?/partenaires" element={<PartnersPage />} />
            <Route path="/:lang?/actualites" element={<NewsPage />} />
            <Route path="/:lang?/actualites/:slug" element={<ArticlePage />} />
            <Route path="/:lang?/contact" element={<ContactPage />} />
            <Route path="/:lang?/mentions-legales" element={<LegalPage page="legal" />} />
            <Route path="/:lang?/politique-de-confidentialite" element={<LegalPage page="privacy" />} />
            <Route path="/:lang?/plan-du-site" element={<SitemapPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </I18nProvider>
  );
}
