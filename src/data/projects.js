// Every project card on the site. `category` drives the filter tabs.
// Categories: "Templates" | "AI & Data" | "Web Apps"

export const categories = ["All", "Templates", "AI & Data", "Web Apps"];

export const projects = [
  /* ───────────── Premium web templates (live) ───────────── */
  {
    title: "TR Dev Studio",
    category: "Templates",
    live: true,
    description:
      "My template studio storefront, a hand-built catalogue of premium, launch-ready website templates with a browsable collection, pricing and a commission enquiry flow.",
    images: [
      "/projects/templates/tr-dev-studio-1.webp",
      "/projects/templates/tr-dev-studio-2.webp",
      "/projects/templates/tr-dev-studio-3.webp",
      "/projects/templates/tr-dev-studio-4.webp",
      "/projects/templates/tr-dev-studio-5.webp",
      "/projects/templates/tr-dev-studio-6.webp",
    ],
    tags: ["React", "Tailwind CSS", "JavaScript", "Vercel", "Responsive Design"],
    link: "https://tr-dev-studio.vercel.app/",
    github: "",
  },
  {
    title: "Hora XII: Luxury Watch Template",
    category: "Templates",
    live: true,
    description:
      "A cinematic landing page for a high-end watch brand, built around a full-bleed hero video, editorial typography and scroll-driven reveals.",
    images: [
      "/projects/templates/hora-xii-1.webp",
      "/projects/templates/hora-xii-2.webp",
      "/projects/templates/hora-xii-3.webp",
      "/projects/templates/hora-xii-4.webp",
      "/projects/templates/hora-xii-5.webp",
      "/projects/templates/hora-xii-6.webp",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Video Hero", "Scroll Animation"],
    link: "https://hora-xii-premium-template.vercel.app/",
    github: "",
  },
  {
    title: "Lumina: Studio Presentation Template",
    category: "Templates",
    live: true,
    description:
      "A high-end minimalist template for product studios and design agencies. Built entirely in vanilla HTML, CSS and JavaScript, with zero frameworks and zero dependencies.",
    images: [
      "/projects/templates/lumina-1.webp",
      "/projects/templates/lumina-2.webp",
      "/projects/templates/lumina-3.webp",
      "/projects/templates/lumina-4.webp",
      "/projects/templates/lumina-5.webp",
      "/projects/templates/lumina-6.webp",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Zero Dependencies", "Minimalist UI"],
    link: "https://tahmeedwolf.github.io/Lumina-template/",
    github: "https://github.com/tahmeedwolf/Lumina-template",
  },
  {
    title: "Zeya: Beauty & Skincare Template",
    category: "Templates",
    live: true,
    description:
      "A soft, product-led storefront template for a skincare brand, with a gradient hero, product grid, routine builder and an FAQ section.",
    images: [
      "/projects/templates/zeya-1.webp",
      "/projects/templates/zeya-2.webp",
      "/projects/templates/zeya-3.webp",
      "/projects/templates/zeya-4.webp",
      "/projects/templates/zeya-5.webp",
      "/projects/templates/zeya-6.webp",
      "/projects/templates/zeya-7.webp",
      "/projects/templates/zeya-8.webp",
    ],
    tags: ["HTML", "CSS", "JavaScript", "E-commerce UI", "Responsive Design"],
    link: "https://zeya-premium-beauty-product-website.vercel.app/",
    github: "",
  },
  {
    title: "Kava: Speciality Coffee Template",
    category: "Templates",
    live: true,
    description:
      "A warm, texture-heavy template for a speciality coffee roaster covering locations, menu, story and gift cards in a single scrolling page.",
    images: [
      "/projects/templates/kava-1.webp",
      "/projects/templates/kava-2.webp",
      "/projects/templates/kava-3.webp",
      "/projects/templates/kava-4.webp",
      "/projects/templates/kava-5.webp",
      "/projects/templates/kava-6.webp",
      "/projects/templates/kava-7.webp",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Landing Page", "Responsive Design"],
    link: "https://kava-speciality-coffee-website-temp.vercel.app/",
    github: "",
  },
  {
    title: "ProjectDoc: Deliverables Studio",
    category: "Templates",
    live: true,
    description:
      "A service-studio landing page for polished documents and deliverables, with a process walkthrough, social proof and a contact-led conversion path.",
    images: [
      "/projects/templates/projectdoc-1.webp",
      "/projects/templates/projectdoc-2.webp",
      "/projects/templates/projectdoc-3.webp",
      "/projects/templates/projectdoc-4.webp",
      "/projects/templates/projectdoc-5.webp",
      "/projects/templates/projectdoc-6.webp",
      "/projects/templates/projectdoc-7.webp",
      "/projects/templates/projectdoc-8.webp",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Landing Page", "Conversion UI"],
    link: "https://project-doc-swart.vercel.app/",
    github: "",
  },

  /* ───────────── AI & data engineering ───────────── */
  {
    title: "ASA Prediction System",
    category: "AI & Data",
    description:
      "A fully automated hybrid financial forecasting pipeline built to predict ASA's monthly balances. Combines SARIMA for trend and seasonality with XGBoost for nonlinear residuals, with automatic SQL ingestion, preprocessing (including COVID-period exclusion), evaluation, visualisation and CSV/HTML export.",
    image: "/projects/asapredicition.png",
    tags: [
      "Python",
      "SARIMA",
      "XGBoost",
      "Statsmodels",
      "Pandas",
      "SQL Server",
      "Time Series",
      "Machine Learning",
    ],
    link: "https://github.com/TahmeedWolf/ASA_Prediction_System",
    github: "https://github.com/TahmeedWolf/ASA_Prediction_System",
  },
  {
    title: "ASA AI Agent",
    category: "AI & Data",
    description:
      "A natural-language interface for querying ASA's loan and financial data. Converts plain-English questions into optimised SQL and returns instant answers, with semantic caching for performance.",
    image: "/projects/ASAAIAgent.png",
    tags: [
      "Python",
      "Flask",
      "SQL Server",
      "NLP",
      "NL-to-SQL",
      "Semantic Caching",
      "Jinja2",
    ],
    link: "https://github.com/TahmeedWolf?tab=repositories",
    github: "https://github.com/TahmeedWolf?tab=repositories",
  },
  {
    title: "Personalized Healthcare Management System",
    category: "AI & Data",
    description:
      "A platform for managing chronic disease by integrating patient data from EHRs, CGM devices and user uploads. Features a knowledge graph for analysis, AI-driven insights via natural language generation, an admin panel, and AWS deployment.",
    image: "/projects/phms.png",
    tags: [
      "Flask",
      "Python",
      "Neo4j",
      "OpenAI",
      "SQLAlchemy",
      "Pandas",
      "AWS",
      "Pydantic",
    ],
    link: "https://github.com/TahmeedWolf/PHMS_System_main",
    github: "https://github.com/TahmeedWolf/PHMS_System_main",
  },
  {
    title: "JARVIS",
    category: "AI & Data",
    description:
      "A voice-activated assistant using speech recognition and synthesis to run tasks and deliver real-time information through a hands-free interface.",
    image: "/projects/jarvis.png",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Speech Recognition",
      "Virtual Assistant",
    ],
    link: "https://github.com/TahmeedWolf/JARVIS_VirtualAssistant",
    github: "https://github.com/TahmeedWolf/JARVIS_VirtualAssistant",
  },
  {
    title: "CodeFlow",
    category: "AI & Data",
    description:
      "A fully responsive AI-powered site that suggests solutions to common development problems.",
    image: "/projects/codeflowai.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "AI-Powered"],
    link: "https://github.com/TahmeedWolf/CodeFlow",
    github: "https://github.com/TahmeedWolf/CodeFlow",
  },

  /* ───────────── Web apps & client work ───────────── */
  {
    title: "Personalised Finance System",
    category: "Web Apps",
    description:
      "A personal finance manager for tracking spending, budgets and balances in one place.",
    image: "/projects/PFS.png",
    tags: ["React", "JavaScript", "CSS", "Responsive Design"],
    link: "https://github.com/TahmeedWolf/PFS_System_main-",
    github: "https://github.com/TahmeedWolf/PFS_System_main-",
  },
  {
    title: "Glowing: E-commerce Site",
    category: "Web Apps",
    description:
      "A fully responsive e-commerce site designed for a smooth shopping experience on every device.",
    image: "/projects/glowingwebsite1.png",
    tags: ["JavaScript", "HTML", "CSS", "E-commerce", "Responsive Design"],
    link: "https://github.com/TahmeedWolf/Glowing_Ecommerce_Website_master",
    github: "https://github.com/TahmeedWolf/Glowing_Ecommerce_Website_master",
  },
  {
    title: "E-commerce Website",
    category: "Web Apps",
    description:
      "A responsive storefront build with a consistent experience across desktop, tablet and mobile.",
    image: "/projects/ecomweb.png",
    tags: ["JavaScript", "HTML", "CSS", "E-commerce", "Responsive Design"],
    link: "https://github.com/TahmeedWolf",
    github: "https://github.com/TahmeedWolf",
  },
  {
    title: "2D Game",
    category: "Web Apps",
    description:
      "A browser-based 2D game with mouse and touch controls, built to show off interactive front-end work.",
    image: "/projects/2dgame.png",
    tags: ["JavaScript", "Kaboom", "Terser", "HTML", "CSS"],
    link: "https://github.com/TahmeedWolf/2D_Game_Developer_Portfolio",
    github: "https://github.com/TahmeedWolf/2D_Game_Developer_Portfolio",
  },
];
