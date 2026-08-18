import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, Lock } from "lucide-react";
import { useI18n } from "@/i18n";
import { tx } from "@/lib/utils";
import { sectors } from "@/data/sectors";
import type { Project } from "@/types";
import { Media } from "./Media";

export function StatusBadge({ status }: { status: Project["status"] }) {
  const { t } = useI18n();
  return (
    <span className="inline-flex items-center gap-2 rounded-[3px] border border-white/15 bg-ink-950/70 px-2.5 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
      {status === "confidential" && <Lock className="h-3 w-3" aria-hidden="true" />}
      {t(`projectDetail.statuses.${status}`)}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { lang, localize, t } = useI18n();
  const sector = sectors.find((s) => s.id === project.sector);

  return (
    <Link
      to={localize(`/projets/${project.slug}`)}
      className="group relative flex h-full flex-col overflow-hidden rounded-[3px] border border-mist-200 bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-cardhover"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Media
          src={project.images[0]}
          alt={tx(project.title, lang)}
          label={project.confidential ? t("homeProjects.confidentialTitle") : tx(project.title, lang)}
          icon={sector?.icon}
          className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
        />
        <div className="absolute left-4 top-4">
          <StatusBadge status={project.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-mist-400">
          {sector && (
            <>
              <span className="font-display font-semibold text-gold-600">{tx(sector.name, lang)}</span>
              <span aria-hidden="true">·</span>
            </>
          )}
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {tx(project.country, lang)}
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink-900">
          {tx(project.title, lang)}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-mist-500">
          {project.confidential
            ? t("homeProjects.confidentialBody")
            : tx(project.description, lang)}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
          {t("common.learnMore")}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
