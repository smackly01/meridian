import type { ReactNode } from "react";
import { useI18n } from "@/i18n";
import { Seo } from "./Seo";
import { Media } from "./Media";

interface PageHeroProps {
  overline: string;
  title: ReactNode;
  body?: string;
  children?: ReactNode;
  /** page path without lang prefix, for SEO */
  seoPath: string;
  /** canonical path, defaults to `/${seoPath}` */
  path?: string;
  /** optional background image (stock or real photo) */
  image?: string;
}

/** Dark institutional hero used on all inner pages. */
export function PageHero({ overline, title, body, children, seoPath, path, image }: PageHeroProps) {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-20 pt-36 md:pb-28 md:pt-44">
      <Seo title={t(`meta.${seoPath}.title`)} description={t(`meta.${seoPath}.description`)} path={path ?? `/${seoPath}`} />
      {image ? (
        <div className="absolute inset-0">
          <Media src={image} alt="" className="h-full w-full" eager />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950/90" />
        </div>
      ) : null}
      <div className="container-x relative">
        <p className="eyebrow hero-anim flex items-center gap-3" style={{ animationDelay: "0.05s" }}>
          {overline}
        </p>
        <h1
          className="t-h1 on-dark mt-5 max-w-4xl text-balance hero-anim"
          style={{ animationDelay: "0.15s" }}
        >
          {title}
        </h1>
        {body && (
          <p
            className="on-dark mt-6 max-w-2xl text-lg leading-relaxed text-white/75 hero-anim"
            style={{ animationDelay: "0.25s" }}
          >
            {body}
          </p>
        )}
        {children && (
          <div className="hero-anim mt-8" style={{ animationDelay: "0.35s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
