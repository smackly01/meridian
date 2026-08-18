import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "@/i18n";
import { useLenis } from "@/hooks/useLenis";
import { getLenis } from "@/lib/motion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { t } = useI18n();

  // Smooth scrolling (skipped automatically when reduced motion is active).
  useLenis();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-bold focus:text-ink-900"
      >
        {t("nav.skipToContent")}
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
