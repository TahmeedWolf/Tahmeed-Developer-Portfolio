import { useEffect, useState } from "react";

/**
 * Cycles through a list of words with a soft slide-and-fade.
 * Width is reserved by the longest word so the line never jumps.
 */
export const RotatingText = ({ words = [], interval = 2600, className = "" }) => {
  const [i, setI] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setI((n) => (n + 1) % words.length);
        setLeaving(false);
      }, 320);
    }, interval);
    return () => clearInterval(id);
  }, [reduced, words.length, interval]);

  if (!words.length) return null;

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className={`relative inline-grid align-bottom ${className}`}>
      {/* Invisible spacer keeps the line a fixed width */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {longest}
      </span>
      <span
        className={`col-start-1 row-start-1 text-left transition-all duration-300 ease-out ${
          leaving
            ? "opacity-0 -translate-y-1.5 blur-[3px]"
            : "opacity-100 translate-y-0 blur-0"
        }`}
      >
        {words[i]}
      </span>
    </span>
  );
};
