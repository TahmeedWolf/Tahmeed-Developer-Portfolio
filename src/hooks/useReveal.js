import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element the first time it scrolls into view.
 *
 * Fail-safe by design: content must never be left invisible. Zooming the page
 * re-runs layout in ways that can stop an IntersectionObserver callback from
 * arriving, which previously left whole cards stuck at opacity 0. So this hook
 * reveals on ANY of four signals, whichever happens first:
 *
 *   1. the element is already within the viewport at mount (measured directly)
 *   2. the observer reports it intersecting
 *   3. a scroll or resize happens and it measures as visible
 *   4. a timeout elapses — the animation is decoration, the content is not
 *
 * Returns [ref, isVisible]. Attach the ref to the wrapper element.
 */
const SAFETY_MS = 1600;

export function useReveal({ threshold = 0.12, rootMargin = "0px 0px -40px 0px" } = {}) {
  const ref = useRef(null);

  // Reduced motion or no observer support → visible from the very first paint.
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    if (typeof IntersectionObserver === "undefined") return true;
    return Boolean(
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    );
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setIsVisible(true);
    };

    const inViewport = () => {
      const r = node.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight;
      return r.top < h && r.bottom > 0;
    };

    // 1. Already on screen when mounted (common after a zoom or a filter change).
    if (inViewport()) {
      reveal();
      return;
    }

    // 2. The normal path.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal();
      },
      { threshold, rootMargin }
    );
    observer.observe(node);

    // 3. Backstop that does not rely on the observer firing.
    const check = () => {
      if (inViewport()) reveal();
    };
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);

    // 4. Last resort — never leave content hidden.
    const timer = setTimeout(reveal, SAFETY_MS);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(timer);
    };
  }, [threshold, rootMargin, isVisible]);

  return [ref, isVisible];
}
