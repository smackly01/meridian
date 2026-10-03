import {
  gsap,
  ScrollTrigger,
  EASE_PREMIUM,
  EASE_CINEMATIC,
  EASE_NONE,
  prefersReducedMotion,
} from "@/lib/motion";

/* --------------------------------------------------------------------------
 * HomePage scroll experience.
 *
 * Each section owns its own motion (no shared fade-up everywhere):
 *   - Hero          : layered entrance + scroll-out parallax
 *   - Intro         : subtle image scale, scrubbed
 *   - Projects      : clip reveal of cards + inner image parallax
 * Everything is wrapped in a gsap.context so it is fully reverted on unmount.
 * ------------------------------------------------------------------------ */

function heroAnimation(root: HTMLElement): void {
  const hero = root.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;

  const bg = hero.querySelector<HTMLElement>("[data-hero-bg]");
  const title = hero.querySelector<HTMLElement>("[data-hero-title]");
  const subtitle = hero.querySelector<HTMLElement>("[data-hero-subtitle]");
  const ctas = hero.querySelector<HTMLElement>("[data-hero-cta]");
  const content = hero.querySelector<HTMLElement>("[data-hero-content]");

  // Entrance
  const tl = gsap.timeline({ defaults: { ease: EASE_PREMIUM } });
  if (bg) {
    gsap.set(bg, { scale: 1.12 });
    tl.to(bg, { scale: 1, duration: 1.8, ease: "power2.out" }, 0);
  }
  if (title) {
    gsap.set(title, { clipPath: "inset(0 0 100% 0)", y: 28 });
    tl.to(
      title,
      { clipPath: "inset(0 0 0% 0)", y: 0, duration: 1.2, ease: EASE_CINEMATIC },
      0.15,
    );
  }
  if (subtitle) {
    gsap.set(subtitle, { autoAlpha: 0, y: 18 });
    tl.to(subtitle, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.55);
  }
  if (ctas) {
    gsap.set(ctas, { autoAlpha: 0, y: 16 });
    tl.to(ctas, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.75);
  }

  // Scroll-out parallax (translation only; scale belongs to the entrance).
  if (bg) {
    gsap.to(bg, {
      yPercent: 12,
      ease: EASE_NONE,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
  if (content) {
    gsap.to(content, {
      yPercent: -10,
      autoAlpha: 0,
      ease: EASE_NONE,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "85% top",
        scrub: true,
      },
    });
  }
}

function introAnimation(root: HTMLElement): void {
  const section = root.querySelector<HTMLElement>("#intro");
  if (!section) return;

  const media = section.querySelector<HTMLElement>("[data-intro-media]");
  if (media) {
    gsap.fromTo(
      media,
      { scale: 0.94 },
      {
        scale: 1,
        ease: EASE_NONE,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "center 45%",
          scrub: 0.7,
        },
      },
    );
  }
}

function projectsAnimation(root: HTMLElement): void {
  const section = root.querySelector<HTMLElement>("#projets");
  if (!section) return;

  const cards = section.querySelectorAll<HTMLElement>("[data-project-card]");
  if (cards.length) {
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 44, clipPath: "inset(0 0 100% 0)" },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        ease: EASE_PREMIUM,
        stagger: 0.14,
        duration: 1.05,
        scrollTrigger: {
          trigger: section,
          start: "top 64%",
          end: "center 25%",
        },
      },
    );
  }

  cards.forEach((card) => {
    const img = card.querySelector("img");
    if (!img) return;
    gsap.fromTo(
      img,
      { scale: 1.16 },
      {
        scale: 1.02,
        ease: EASE_NONE,
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
}

/**
 * Set up every HomePage scroll animation inside one gsap.context.
 * Returns a cleanup that reverts everything (safe to unmount).
 */
export function setupHomeAnimations(root: HTMLElement | null): () => void {
  if (!root || prefersReducedMotion()) return () => {};

  const ctx = gsap.context(() => {
    heroAnimation(root);
    introAnimation(root);
    projectsAnimation(root);

    // Re-measure once dynamic assets are ready.
    document.fonts?.ready?.then(() => ScrollTrigger.refresh());
  }, root);

  return () => ctx.revert();
}
