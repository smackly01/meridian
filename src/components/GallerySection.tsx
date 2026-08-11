import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { gallery } from "@/data/gallery";
import { tx } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { Media } from "./Media";
import { NextSectionArrow } from "./NextSectionArrow";

/**
 * Editorial gallery - client photographs with context, location and caption.
 * Real photos take priority; placeholders are used until they are provided.
 */
export function GallerySection() {
  const { t, lang } = useI18n();
  const [featured, ...rest] = gallery;

  return (
    <section id="galerie" className="section bg-mist-50">
      <div className="container-x">
        <SectionHeading
          align="center"
          overline={t("gallery.overline")}
          title={t("gallery.title")}
          body={t("gallery.subtitle")}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <ScrollReveal className="lg:row-span-2">
            <figure className="group relative h-full min-h-[300px] overflow-hidden rounded-[3px] sm:min-h-[420px]">
              <Media
                src={featured.image}
                alt={tx(featured.caption, lang)}
                label={t("gallery.overline")}
                className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent p-6 pt-16 text-white">
                <p className="font-display text-sm font-semibold leading-relaxed">
                  {tx(featured.caption, lang)}
                </p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-white/60">
                  <MapPin className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                  {tx(featured.location, lang)} · {tx(featured.context, lang)}
                </p>
              </figcaption>
            </figure>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {rest.map((photo, i) => (
              <ScrollReveal key={photo.id} delay={i * 60}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-[3px]">
                  <Media
                    src={photo.image}
                    alt={tx(photo.caption, lang)}
                    label={t("gallery.overline")}
                    className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-display text-sm font-semibold leading-snug">
                      {tx(photo.caption, lang)}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-white/60">
                      <MapPin className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                      {tx(photo.location, lang)}
                    </p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <NextSectionArrow href="#cta" />
      </div>
    </section>
  );
}
