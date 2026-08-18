import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Lock } from "lucide-react";
import { useI18n } from "@/i18n";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { StatusBadge } from "@/components/ProjectCard";
import { Media } from "@/components/Media";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { projects } from "@/data/projects";
import { sectors } from "@/data/sectors";
import { tx } from "@/lib/utils";
import { getIcon } from "@/lib/icons";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t, lang, localize } = useI18n();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : undefined;

  if (!project || project.published === false) {
    return <Navigate to={localize("/projets")} replace />;
  }

  const sector = sectors.find((s) => s.id === project.sector);
  const Icon = sector ? getIcon(sector.icon) : null;
  const next = projects[(index + 1) % projects.length];
  const title = tx(project.title, lang);

  const meta = [
    { label: t("projectDetail.country"), value: tx(project.country, lang) },
    { label: t("projectDetail.sector"), value: sector ? tx(sector.name, lang) : "" },
  ];

  return (
    <>
      <Seo
        title={`${title} - ${t("meta.projects.title")}`}
        description={tx(project.description, lang)}
        path={`/projets/${project.slug}`}
        jsonLd={[
          breadcrumbJsonLd(lang, [
            [t("nav.home"), "/"],
            [t("nav.projects"), "/projets"],
            [title, `/projets/${project.slug}`],
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative">
          <Link
            to={localize("/projets")}
            className="overline on-dark inline-flex items-center gap-2 hero-anim hover:text-gold-300"
            style={{ animationDelay: "0.05s" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {t("projectDetail.backToProjects")}
          </Link>
          <div className="mt-6 flex items-center gap-4 hero-anim" style={{ animationDelay: "0.1s" }}>
            <StatusBadge status={project.status} />
            {project.confidential && (
              <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                {t("projectDetail.confidentialNotice")}
              </span>
            )}
          </div>
          <h1
            className="t-h1 on-dark mt-5 max-w-4xl text-balance hero-anim"
            style={{ animationDelay: "0.15s" }}
          >
            {title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 hero-anim" style={{ animationDelay: "0.2s" }}>
            {meta.map((m) => (
              <span key={m.label} className="flex items-center gap-2 text-sm text-white/65">
                <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" />
                <span className="font-display text-xs font-bold uppercase tracking-wider text-white/40">
                  {m.label}
                </span>
                <span className="font-display font-semibold text-white">{m.value}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main image */}
      <section className="bg-ink-900 pb-16">
        <div className="container-x">
          <ScrollReveal>
            <Media
              src={project.images[0]}
              alt={title}
              label={project.confidential ? t("homeProjects.confidentialTitle") : title}
              icon={sector?.icon}
              className="aspect-[21/9] w-full rounded-[3px]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <section className="section bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="t-h3">{t("projectDetail.description")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-mist-600">
              {project.confidential ? t("homeProjects.confidentialBody") : tx(project.description, lang)}
            </p>

            <h2 className="t-h3 mt-12">{t("projectDetail.role")}</h2>
            <p className="mt-4 text-base leading-relaxed text-mist-600">{tx(project.role, lang)}</p>

            {project.images.length > 1 && (
              <>
                <h2 className="t-h3 mt-12">{t("projectDetail.galleryTitle")}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.images.map((img, i) => (
                    <Media
                      key={i}
                      src={img}
                      alt={`${title} ${i + 1}`}
                      className="aspect-[16/10] w-full rounded-[3px]"
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-[3px] border border-mist-200 bg-mist-50 p-6">
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="h-6 w-6 text-gold-600" strokeWidth={1.5} aria-hidden="true" />}
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {t("projectDetail.impact")}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-mist-600">
                  {tx(project.impact, lang)}
                </p>
              </div>
              <Link
                to={localize(`/projets/${next.slug}`)}
                className="group flex items-center justify-between rounded-[3px] border border-mist-200 bg-white p-5 transition-colors hover:border-gold-500/50"
              >
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-mist-400">
                    {t("projectDetail.nextProject")}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-ink-900">
                    {tx(next.title, lang)}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gold-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
