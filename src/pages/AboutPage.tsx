import { Compass, Target } from "lucide-react";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Media } from "@/components/Media";
import { CtaBanner } from "@/components/CtaBanner";
import { team } from "@/data/team";
import { images } from "@/config/images";
import { tx } from "@/lib/utils";

function initialsOf(name: string): string {
  return name
    .replace(/[^a-zA-Z\u00C0-\u017F ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  const { t, lang } = useI18n();

  const values: { title: string; body: string }[] = [];
  for (let i = 0; i < 6; i++) {
    values.push({ title: t(`about.values.items.${i}.title`), body: t(`about.values.items.${i}.body`) });
  }

  const publishedTeam = team.filter((m) => m.published !== false);

  return (
    <>
      <PageHero
        seoPath="about"
        overline={t("about.hero.overline")}
        title={t("about.hero.title")}
        body={t("about.hero.body")}
        image={images.about}
      />

      {/* Story */}
      <section className="section bg-white">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <Media
              src={images.about}
              alt={t("about.story.title")}
              label={t("about.story.overline")}
              icon="Building2"
              className="aspect-[4/5] w-full rounded-[3px]"
            />
          </ScrollReveal>
          <div>
            <SectionHeading overline={t("about.story.overline")} title={t("about.story.title")} />
            <ScrollReveal className="mt-6 space-y-5">
              <p className="t-body">{t("about.story.body1")}</p>
              <p className="t-body">{t("about.story.body2")}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section-dark on-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[3px] border border-gold-500/40 bg-gold-500/10">
                  <Target className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-white">{t("about.vision.title")}</h2>
                <p className="mt-4 leading-relaxed text-white/70">{t("about.vision.body")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[3px] border border-gold-500/40 bg-gold-500/10">
                  <Compass className="h-5 w-5 text-gold-400" aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-white">{t("about.mission.title")}</h2>
                <p className="mt-4 leading-relaxed text-white/70">{t("about.mission.body")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            align="center"
            overline={t("about.values.overline")}
            title={t("about.values.title")}
            body={t("about.values.subtitle")}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[3px] border border-mist-200 bg-mist-200 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={(i % 3) * 60}>
                <div className="h-full bg-white p-8">
                  <span className="font-display text-3xl font-extrabold text-mist-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-500">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {publishedTeam.length > 0 && (
        <section className="section bg-mist-50">
          <div className="container-x">
            <SectionHeading
              align="center"
              overline={t("about.team.overline")}
              title={t("about.team.title")}
              body={t("about.team.subtitle")}
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {publishedTeam.map((m, i) => (
                <ScrollReveal key={m.id} delay={(i % 4) * 60}>
                  <div className="group overflow-hidden rounded-[3px] border border-mist-200 bg-white transition-shadow duration-300 hover:shadow-cardhover">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      {m.photo ? (
                        <Media
                          src={m.photo}
                          alt={tx(m.name, lang)}
                          label={t("about.team.memberNote")}
                          className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-mist-100 px-6 text-center">
                          <span className="font-display text-4xl font-extrabold tracking-[0.18em] text-ink-900/25">
                            {initialsOf(tx(m.name, lang))}
                          </span>
                          <span className="h-px w-10 bg-gold-500/60" aria-hidden="true" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-bold text-ink-900">{tx(m.name, lang)}</h3>
                      <p className="mt-1 font-display text-sm font-semibold text-gold-600">{tx(m.role, lang)}</p>
                      <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-mist-500">{tx(m.bio, lang)}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
