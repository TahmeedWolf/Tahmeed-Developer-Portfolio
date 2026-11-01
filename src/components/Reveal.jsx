import { useReveal } from "@/hooks/useReveal";

/**
 * Small wrapper that fades + lifts its children into view on scroll.
 * `delay` is in milliseconds and is staggered by the caller.
 */
export const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
