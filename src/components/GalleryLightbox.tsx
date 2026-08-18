import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { useI18n } from "@/i18n";
import { tx } from "@/lib/utils";
import type { GalleryPhoto } from "@/types";

interface Props {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

const SWIPE_THRESHOLD = 40;

/** Full-screen photo viewer for the gallery - keyboard, swipe and click navigation. */
export function GalleryLightbox({ photos, index, onClose, onChange }: Props) {
  const { t, lang } = useI18n();
  const photo = photos[index];
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(
    () => onChange((index - 1 + photos.length) % photos.length),
    [index, photos.length, onChange],
  );
  const goNext = useCallback(
    () => onChange((index + 1) % photos.length),
    [index, photos.length, onChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta > 0) goPrev();
    else goNext();
  }

  const caption = tx(photo.caption, lang);
  const location = tx(photo.location, lang);
  const context = tx(photo.context, lang);
  const hasCaption = Boolean(caption || location || context);
  const metaLine = [location, context].filter(Boolean).join(" · ");

  return (
    <div
      className="lightbox-backdrop fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink-950/92 px-3 py-6 backdrop-blur-sm sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-label={caption || t("gallery.overline")}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label={t("common.close")}
        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold-400 hover:text-gold-400 sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label={t("common.previous")}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold-400 hover:text-gold-400 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label={t("common.next")}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold-400 hover:text-gold-400 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </>
      )}

      <img
        key={photo.id}
        src={photo.image}
        alt={caption}
        className="lightbox-image max-h-[70vh] w-auto max-w-full rounded-[3px] object-contain shadow-panel sm:max-h-[78vh]"
        onClick={(e) => e.stopPropagation()}
      />

      {hasCaption && (
        <div
          key={`caption-${photo.id}`}
          className="lightbox-caption relative mt-4 w-full max-w-3xl rounded-[3px] bg-ink-950/70 px-5 py-4 text-center text-white sm:mt-6"
          onClick={(e) => e.stopPropagation()}
        >
          {caption && (
            <p className="font-display text-sm font-semibold leading-relaxed sm:text-base">{caption}</p>
          )}
          {metaLine && (
            <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-white/60">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-400" aria-hidden="true" />
              {metaLine}
            </p>
          )}
        </div>
      )}

      {photos.length > 1 && (
        <p className="mt-3 text-xs text-white/40">
          {index + 1} / {photos.length}
        </p>
      )}
    </div>
  );
}
