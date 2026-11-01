import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Image slideshow used on every product and project card.
 *
 * - Advances on its own, pauses on hover/focus and while off-screen
 * - Arrow keys work once the strip has focus
 * - Swipe works on touch
 * - Honours prefers-reduced-motion (no autoplay, no cross-fade)
 * - Only the current frame, plus its neighbours, are decoded
 */
export const Carousel = ({
  images = [],
  alt = "",
  interval = 3800,
  aspect = "aspect-[16/10]",
  objectClass = "object-cover object-center",
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(
    () => typeof IntersectionObserver === "undefined"
  );
  const wrapRef = useRef(null);
  const touchX = useRef(null);

  const count = images.length;
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const go = useCallback((next) => setIndex(((next % count) + count) % count), [count]);

  // Only run the timer while the card is actually visible on screen.
  useEffect(() => {
    const node = wrapRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || !onScreen || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [reduced, paused, onScreen, count, interval]);

  if (!count) return null;

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <div
      ref={wrapRef}
      className={`relative ${aspect} overflow-hidden bg-[#0b1014] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={count > 1 ? 0 : -1}
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
    >
      {images.map((src, i) => {
        return (
          <img
            key={src}
            src={src}
            alt={`${alt} — view ${i + 1} of ${count}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
            aria-hidden={i !== index}
            className={`absolute inset-0 w-full h-full ${objectClass} transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}

      {/* Readability wash at the bottom so dots stay legible */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {count > 1 && (
        <>
          {/* Arrows — appear on card hover */}
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full badge-solid text-foreground/90 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full badge-solid text-foreground/90 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Frame counter */}
          <span className="absolute bottom-3 right-3 text-[11px] font-medium text-white/60 tabular-nums">
            {index + 1}/{count}
          </span>
        </>
      )}
    </div>
  );
};
