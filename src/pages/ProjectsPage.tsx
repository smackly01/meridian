import { useMemo, useState } from "react";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBanner } from "@/components/CtaBanner";
import { projects } from "@/data/projects";
import { sectors } from "@/data/sectors";
import { images } from "@/config/images";
import { tx, cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

const STATUSES: ProjectStatus[] = ["realized", "ongoing", "development", "confidential"];

export default function ProjectsPage() {
  const { t, lang } = useI18n();
  const [sectorFilter, setSectorFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const published = projects.filter((p) => p.published !== false);

  const filtered = useMemo(
    () =>
      published.filter(
        (p) =>
          (!sectorFilter || p.sector === sectorFilter) &&
          (!statusFilter || p.status === statusFilter),
      ),
    [published, sectorFilter, statusFilter],
  );

  return (
    <>
      <PageHero
        seoPath="projects"
        overline={t("projectsPage.hero.overline")}
        title={t("projectsPage.hero.title")}
        body={t("projectsPage.hero.body")}
        image={images.projects}
      />

      <section className="section bg-white">
        <div className="container-x">
          {/* Filters */}
          <div className="flex flex-col gap-4 border-b border-mist-200 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-display text-sm font-semibold text-ink-900">
              {filtered.length} {t("projectsPage.resultCount")}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <select
                aria-label={t("projectsPage.filterSector")}
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="field w-full sm:w-auto"
              >
                <option value="">{t("projectsPage.filterAll")} - {t("projectsPage.filterSector")}</option>
                {sectors.map((s) => (
                  <option key={s.id} value={s.id}>
                    {tx(s.name, lang)}
                  </option>
                ))}
              </select>
              <select
                aria-label={t("projectsPage.filterStatus")}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="field w-full sm:w-auto"
              >
                <option value="">{t("projectsPage.filterAll")} - {t("projectsPage.filterStatus")}</option>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {t(`projectDetail.statuses.${s}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-mist-500">{t("projectsPage.empty")}</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ScrollReveal key={project.id} delay={(i % 3) * 60} className="h-full">
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-2">
            {["", ...STATUSES].map((s) => (
              <button
                key={s || "all"}
                type="button"
                onClick={() => setStatusFilter(s)}
                className={cn(
                  "rounded-[3px] border px-3 py-1.5 font-display text-xs font-semibold transition-colors",
                  statusFilter === s
                    ? "border-ink-900 bg-ink-900 text-white"
                    : "border-mist-300 text-mist-500 hover:border-ink-900/40 hover:text-ink-900",
                )}
              >
                {s ? t(`projectDetail.statuses.${s}`) : t("projectsPage.filterAll")}
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
