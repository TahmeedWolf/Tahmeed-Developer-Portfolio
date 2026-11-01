// Live, publicly published products — real users, real stores.
// Keep this list honest: only things that are actually live.

export const products = [
  {
    title: "Habitlee: Habit Tracker",
    summary:
      "Offline-first Android habit tracker with streaks, reminders and a clean daily view. React and Vite, shipped native through Capacitor.",
    platform: "Google Play",
    status: "Live",
    version: "v1.0.3",
    released: "October 2026",
    description:
      "An offline-first habit tracker for Android. Streaks, reminders, and a clean daily view, built as a React web app and shipped to the Play Store as a native Android package through Capacitor.",
    highlights: [
      "Published on Google Play under my own verified developer account",
      "Offline-first: all data stays on the device",
      "React + Vite codebase wrapped with Capacitor for native Android",
    ],
    images: [
      "/projects/products/habitlee-1.webp",
      "/projects/products/habitlee-2.webp",
      "/projects/products/habitlee-3.webp",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Capacitor", "Android", "Play Store"],
    link: "https://play.google.com/store/apps/details?id=com.habitlee.habittracker",
    linkLabel: "View on Google Play",
    accent: "#34d399",
  },
  {
    title: "Word & Character Counter",
    summary:
      "Live word, character, sentence and reading-time counts from the toolbar, with a one-click grab of any page selection.",
    platform: "Chrome Web Store",
    status: "Live",
    version: "v1.0.0",
    released: "October 2026",
    description:
      "Instant word, character, sentence and paragraph counts from the browser toolbar, with reading-time estimates and a one-click 'use page selection' action. No account, no tracking, nothing leaves the device.",
    highlights: [
      "Live word, character, sentence and paragraph counts",
      "Pulls highlighted text straight off any webpage",
      "Optional one-time Pro upgrade with a live toolbar badge",
    ],
    images: [
      "/projects/products/word-counter-1.webp",
      "/projects/products/word-counter-2.webp",
    ],
    tags: ["Chrome Extension", "Manifest V3", "JavaScript", "Chrome Storage API"],
    link: "https://chromewebstore.google.com/detail/dkfdbfmpiofdeaoohkgmeafnafnfdigi",
    linkLabel: "View on Chrome Web Store",
    accent: "#fbbf24",
  },
  {
    title: "Volume Booster + EQ",
    summary:
      "Boosts any tab past 100% with a live 3-band EQ and five presets, plus a limiter that stops high boost distorting.",
    platform: "Chrome Web Store",
    status: "Live",
    version: "v1.0.0",
    released: "September 2026",
    description:
      "Boosts any tab's audio well past 100% and adds a live 3-band equaliser with five presets. A built-in limiter keeps high boost from clipping into distortion.",
    highlights: [
      "Web Audio API gain chain with a safety limiter",
      "Live 3-band EQ (bass / mid / treble) with five presets",
      "Premium tier saves a mix per site and re-applies it automatically",
    ],
    images: [
      "/projects/products/volume-booster-1.webp",
      "/projects/products/volume-booster-2.webp",
      "/projects/products/volume-booster-3.webp",
      "/projects/products/volume-booster-4.webp",
      "/projects/products/volume-booster-5.webp",
    ],
    tags: ["Chrome Extension", "Manifest V3", "Web Audio API", "JavaScript"],
    link: "https://chromewebstore.google.com/detail/gaahlagepjkognidigdnlninglimaoii",
    linkLabel: "View on Chrome Web Store",
    accent: "#f97316",
  },
  {
    title: "Link Copier: URL as Text or Markdown",
    summary:
      "Copies the current tab as a plain URL or a formatted Markdown link in one click, and keeps a short copy history.",
    platform: "Chrome Web Store",
    status: "Live",
    version: "v1.0.0",
    released: "August 2026",
    description:
      "Turns the current tab into a clean, shareable link in one click, either a plain URL or formatted Markdown, and keeps a short copy history for quick re-use.",
    highlights: [
      "One-click copy as plain URL or Markdown link",
      "Copy history with a free/premium tier split",
      "Custom Markdown link formatting",
    ],
    images: [
      "/projects/products/link-copier-1.webp",
      "/projects/products/link-copier-2.webp",
    ],
    tags: ["Chrome Extension", "Manifest V3", "Clipboard API", "JavaScript"],
    link: "https://chromewebstore.google.com/detail/eaplfblkakcnfpkdlfoaiigbehamclgm",
    linkLabel: "View on Chrome Web Store",
    accent: "#818cf8",
  },
];
