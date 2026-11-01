/**
 * A brand mark, drawn as a filled path.
 *
 * These were previously outlines with a stroke, which is what made them look
 * jagged — a logo shape traced as a thin line renders badly at small sizes.
 * Filled paths stay crisp at any size and any zoom level, and being inline
 * they cost nothing to load: no extra request, no icon font.
 */
export const SocialIcon = ({ path, label }) => (
  <svg
    viewBox="0 0 24 24"
    className="w-[18px] h-[18px]"
    fill="currentColor"
    role="img"
    aria-label={label}
    focusable="false"
  >
    <path d={path} />
  </svg>
);
