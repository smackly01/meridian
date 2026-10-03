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
  for (let i = 0; i < 3; i++) {
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
              className="aspect-[4/5] w-full rounded-card"
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

      {/* Vision */}
      <section className="section-dark on-dark">
        <div className="container-x">
          <ScrollReveal className="max-w-4xl">
            <p className="eyebrow">{t("about.vision.overline")}</p>
            <p className="mt-6 text-balance font-serif text-3xl leading-snug text-white md:text-[2.6rem]">
              {t("about.vision.body")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading overline={t("about.values.overline")} title={t("about.values.title")} />
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 60}>
                <h3 className="font-serif text-2xl font-normal leading-snug text-ink-900">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-mist-600">{v.body}</p>
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
                  <div className="group overflow-hidden rounded-card border border-mist-200 bg-white transition-shadow duration-300 hover:border-ink-900/25">
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
                          <span className="font-serif text-4xl tracking-[0.12em] text-ink-900/30">
                            {initialsOf(tx(m.name, lang))}
                          </span>
                          <span className="h-px w-10 bg-gold-500/60" aria-hidden="true" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-semibold text-ink-900">{tx(m.name, lang)}</h3>
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
