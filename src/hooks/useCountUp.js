import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 up to `target` once the element is on screen.
 * Returns [ref, value]. Respects prefers-reduced-motion by jumping
 * straight to the final number.
 */
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const reducedOrNoIO =
    typeof window === "undefined" ||
    typeof IntersectionObserver === "undefined" ||
    Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);

  const [value, setValue] = useState(() => (reducedOrNoIO ? target : 0));
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedOrNoIO) return;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutExpo — fast then settles
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setValue(Math.round(eased * target));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    io.observe(node);

    // Backstop: never leave a 0 on screen if the observer does not report.
    const safety = setTimeout(() => {
      if (!started.current) {
        started.current = true;
        run();
      }
    }, 1600);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, [target, duration, reducedOrNoIO]);

  return [ref, value];
}
