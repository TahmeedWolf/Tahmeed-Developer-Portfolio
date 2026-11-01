/**
 * The same slow-drifting teal specks the hero uses, for the sections further
 * down the page so they don't sit completely still.
 *
 * Positions are generated once per section at module load, not on render,
 * so nothing jumps when the page re-renders.
 */
const make = (count, seedOffset) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${seedOffset}-${i}`,
    size: 1.4 + Math.random() * 3,
    opacity: 0.18 + Math.random() * 0.28,
    delay: Math.random() * 10,
    duration: 22 + Math.random() * 26,
    x: 3 + Math.random() * 94,
    y: 3 + Math.random() * 94,
  }));

// A few prebuilt fields so neighbouring sections aren't identical.
const fields = [make(18, 0), make(18, 1), make(18, 2), make(18, 3)];

export const FloatingDots = ({ variant = 0, className = "" }) => {
  const dots = fields[variant % fields.length];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full animate-slow-drift"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: "#20B2A6",
            opacity: dot.opacity,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
            boxShadow: `0 0 ${dot.size * 2}px rgba(32, 178, 166, 0.45)`,
          }}
        />
      ))}
    </div>
  );
};
