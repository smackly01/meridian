import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { countries } from "@/data/countries";
import { projects } from "@/data/projects";
import { cn, tx } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

/** Coarse Africa outline (lon, lat) - used to build the dotted silhouette. */
const AFRICA_RING: [number, number][] = [
  [-17.5, 14.8], [-17.1, 20], [-13.3, 26], [-10, 30], [-5.5, 33.5],
  [-1, 35.5], [3, 37], [7, 36], [11, 34.5], [14, 32], [17, 32.5], [21, 32],
  [25, 32.5], [30, 31.5], [33.5, 30], [35, 27], [37, 22], [39.5, 20.5], [43, 17],
  [46, 14], [48.5, 12], [50.5, 11], [51, 8], [50, 4], [48, 2.5], [44, 1],
  [41, -1], [38.5, -4], [36, -8], [33.5, -12], [32, -16], [30, -20], [28, -24],
  [26.5, -28], [25, -31.5], [23.5, -34], [20.5, -35], [18, -33], [16, -30],
  [13.5, -26], [12, -22], [11, -18], [12, -14], [13, -11], [12, -8], [10.5, -5],
  [8, -3], [6, -1], [4.5, 1], [5, 3.5], [4, 4.5], [2, 5], [-2, 5], [-5, 4],
  [-9, 5], [-12, 4], [-15, 5], [-16, 8], [-16.5, 12], [-17.5, 14.8],
];

const MADAGASCAR_RING: [number, number][] = [
  [46, -15], [49, -14], [50, -18], [49.5, -22], [48, -25], [46.5, -23], [46, -20],
];

const LON_MIN = -18;
const LON_MAX = 52;
const LAT_MAX = 37;
const LAT_MIN = -35;

function project(lon: number, lat: number): { x: number; y: number } {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * 100;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100;
  return { x, y };
}

function inRing(px: number, py: number, ring: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const { x: xi, y: yi } = project(ring[i][0], ring[i][1]);
    const { x: xj, y: yj } = project(ring[j][0], ring[j][1]);
    const intersect =
      yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function useDots(step: number): { x: number; y: number; mad: boolean }[] {
  return useMemo(() => {
    const pts: { x: number; y: number; mad: boolean }[] = [];
    const inMad = (x: number, y: number) => inRing(x, y, MADAGASCAR_RING);
    for (let x = step / 2; x < 100; x += step) {
      for (let y = step / 2; y < 100; y += step) {
        if (inRing(x, y, AFRICA_RING)) {
          pts.push({ x, y, mad: inMad(x, y) });
        }
      }
    }
    return pts;
  }, [step]);
}

export function AfricaMap() {
  const { t, lang, localize } = useI18n();
  const dots = useDots(2.6);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = countries.find((c) => c.id === selectedId) ?? null;
  const selectedName = selected ? tx(selected.name, lang) : "";
  const selectedProjects = selected
    ? projects.filter((p) => p.published !== false && tx(p.country, lang) === selectedName)
    : [];

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId]);

  function toggle(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="section-dark on-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,163,92,0.12) 0%, rgba(201,163,92,0) 70%)" }}
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            dark
            overline={t("africa.overline")}
            title={t("africa.title")}
            body={t("africa.subtitle")}
          />
          <ScrollReveal className="mt-10">
            <div className="inline-flex items-center gap-3 rounded-[3px] border border-white/15 px-4 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-gold-500" />
              </span>
              <span className="font-display text-sm font-semibold text-white/85">
                {t("africa.legend")}
              </span>
            </div>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-white/40">{t("africa.note")}</p>
          </ScrollReveal>
        </div>

        {/* Dot-map */}
        <ScrollReveal>
          <div className="relative mx-auto w-full max-w-xl">
            <svg
              viewBox="-4 -4 108 108"
              className="h-auto w-full"
              role="img"
              aria-label={t("africa.title")}
            >
              {dots.map((d, i) => (
                <circle
                  key={i}
                  className="map-dot"
                  cx={d.x}
                  cy={d.y}
                  r={d.mad ? 0.55 : 0.85}
                  fill={d.mad ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.55)"}
                  style={{ animationDelay: `${(d.x / 100) * 1.4}s` }}
                />
              ))}
              {countries.map((c) => {
                const name = tx(c.name, lang);
                return (
                  <g
                    key={c.id}
                    role="button"
                    tabIndex={0}
                    aria-label={name}
                    className="cursor-pointer"
                    onClick={() => toggle(c.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(c.id);
                      }
                    }}
                  >
                    <circle cx={c.position.x} cy={c.position.y} r="4.2" fill="rgba(201,163,92,0.2)">
                      <title>{name}</title>
                    </circle>
                    <circle
                      cx={c.position.x}
                      cy={c.position.y}
                      r={c.hasData ? 2.4 : 1.6}
                      fill="#C9A35C"
                    >
                      <title>{name}</title>
                    </circle>
                    {c.hasData && (
                      <circle
                        className="map-halo"
                        cx={c.position.x}
                        cy={c.position.y}
                        r="2.6"
                        fill="none"
                        stroke="#C9A35C"
                        strokeWidth="0.35"
                        style={{ animationDelay: `${((c.position.x + c.position.y) * 0.02).toFixed(2)}s` }}
                      >
                        <title>{name}</title>
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            <p className="mt-6 text-xs text-white/40">{t("africa.hint")}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {countries.map((c) => {
                const active = c.id === selectedId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => toggle(c.id)}
                    aria-pressed={active}
                    aria-label={tx(c.name, lang)}
                    title={tx(c.name, lang)}
                    className={cn(
                      "grid h-9 w-10 place-items-center overflow-hidden rounded-[3px] border transition-colors",
                      active
                        ? "border-gold-500 bg-gold-500/10"
                        : "border-white/10 bg-white/5 hover:border-white/25",
                    )}
                  >
                    <img
                      src={c.flag}
                      alt=""
                      width="40"
                      height="30"
                      loading="lazy"
                      className="h-6 w-full object-cover"
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {selected && (
              <div
                className="map-modal-backdrop absolute inset-0 z-10 flex items-center justify-center rounded-[3px] bg-ink-950/70 backdrop-blur-[2px]"
                onClick={() => setSelectedId(null)}
              >
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-label={selectedName}
                  className="map-modal w-[280px] max-w-[85%] rounded-[3px] border border-gold-500/40 bg-ink-900 p-6 shadow-panel"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-white">{selectedName}</h3>
                    <button
                      type="button"
                      onClick={() => setSelectedId(null)}
                      aria-label={t("africa.close")}
                      className="rounded-[3px] border border-white/10 p-1.5 text-white/60 transition-colors hover:border-white/25 hover:text-white"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  {selectedProjects.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {selectedProjects.map((p) => (
                        <li key={p.id}>
                          <Link
                            to={localize(`/projets/${p.slug}`)}
                            className="group flex items-start justify-between gap-3 rounded-[3px] border border-white/10 bg-white/5 px-3.5 py-2.5 transition-colors hover:border-gold-500/50 hover:bg-gold-500/5"
                          >
                            <span className="text-sm font-medium leading-snug text-white/85 transition-colors group-hover:text-white">
                              {tx(p.title, lang)}
                            </span>
                            <ArrowUpRight
                              className="h-4 w-4 shrink-0 text-gold-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-white/50">{t("africa.noProjects")}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
