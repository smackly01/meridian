import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** Shared premium easing - cubic-bezier(0.22, 1, 0.36, 1) as a named ease. */
export const EASE_PREMIUM = "power3.out";
/** Slower, more cinematic exit for hero / reveals. */
export const EASE_CINEMATIC = "expo.out";
/** Linear for scrubbed, scroll-driven motion. */
export const EASE_NONE = "none";

/** Currently active Lenis instance (set by useLenis). */
let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null): void {
  lenisInstance = instance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

/** Whether the user prefers reduced motion. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Debounced ScrollTrigger refresh after dynamic layout changes (fonts, images). */
export function refreshScrollTriggers(): void {
  ScrollTrigger.refresh();
}
