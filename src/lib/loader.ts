/** Minimum time the first-load splash stays on screen, counted from the start of page load. */
const MIN_SPLASH_MS = 2000;

/**
 * Fade out and remove the first-load splash defined in index.html.
 * Waits until MIN_SPLASH_MS has elapsed since navigation start. Safe to call more than once.
 */
export function hideLoader(): void {
  const loader = document.getElementById("loader");
  if (!loader || loader.dataset.hiding) return;
  loader.dataset.hiding = "1";
  const wait = Math.max(0, MIN_SPLASH_MS - performance.now());
  setTimeout(() => {
    loader.classList.add("is-done");
    loader.addEventListener("transitionend", () => loader.remove(), { once: true });
  }, wait);
}
