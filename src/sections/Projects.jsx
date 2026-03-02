import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Personalized Healthcare Management System",
    description:
      "Developed a comprehensive platform to manage chronic diseases by integrating patient data from EHRs, CGM devices, and user uploads. The system features a Knowledge Graph for data analysis, AI-driven insights via Natural Language Generation, and a secure, user-friendly interface.",
    image: "/projects/phms.png",
    tags: [
      "Flask",
      "Python",
      "Neo4j",
      "OpenAI",
      "SQLAlchemy",
      "Pandas",
      "Bootstrap-Flask",
      "Openpyxl",
      "Pydantic",
    ],
    link: "https://github.com/TahmeedWolf/PHMS_System_main",
    github: "https://github.com/TahmeedWolf/PHMS_System_main",
  },
  {
    title: "ASA AI Agent",
    description:
      "A natural-language interface for querying ASA’s loan and financial data in microfinance operations. Converts plain-English questions into optimized SQL queries and provides intelligent, instant answers with semantic caching for high performance.",
    image: "/projects/ASAAIAgent.png",
    tags: [
      "Python",
      "Flask",
      "SQLServer",
      "NLP",
      "NL-to-SQL",
      "Semantic Caching",
      "SQL Query Generation",
      "HTML",
      "CSS",
      "Jinja2",
    ],
    link: "https://github.com/TahmeedWolf?tab=repositories",
    github: "https://github.com/TahmeedWolf?tab=repositories",
  },
  {
    title: "ASA Prediction System",
    description:
      "A fully automated hybrid financial forecasting pipeline built to predict ASA's monthly balances. Combines SARIMA for trend and seasonality modeling with XGBoost for capturing nonlinear residuals, featuring automatic SQL data ingestion, preprocessing (including COVID-period exclusion), model evaluation, visualization, and export to CSV/HTML.",
    image: "/projects/asapredicition.png",
    tags: [
      "Python",
      "SARIMA",
      "XGBoost",
      "SQLAlchemy",
      "Statsmodels",
      "Pandas",
      "Financial Forecasting",
      "Time Series",
      "Machine Learning",
      "SQL Server",
      "Data Visualization",
    ],
    link: "https://github.com/TahmeedWolf/ASA_Prediction_System",
    github: "https://github.com/TahmeedWolf/ASA_Prediction_System",
  },
  {
    title: "Personalised Finance System",
    description:
      "The Personalized Finance Management System is a powerful tool designed to help individuals efficiently track and manage their finances.",
    image: "/projects/PFS.png",
    tags: ["React", "JavaScript", "CSS", "Responsive Design"],
    link: "https://github.com/TahmeedWolf/PFS_System_main-",
    github: "https://github.com/TahmeedWolf/PFS_System_main-",
  },
  {
    title: "JARVIS",
    description:
      "Jarvis is a voice-activated assistant using speech recognition and synthesis to perform tasks, deliver real-time information, and boost productivity with seamless, intelligent interaction.",
    image: "/projects/jarvis.png",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Speech Recognition",
      "Real-Time",
      "Virtual Assistant",
    ],
    link: "https://github.com/TahmeedWolf/JARVIS_VirtualAssistant",
    github: "https://github.com/TahmeedWolf/JARVIS_VirtualAssistant",
  },
  {
    title: "CodeFlow",
    description:
      "Codeflow is a completely responsive AI based website, which provides AI based solutions based on development issues.",
    image: "/projects/codeflowai.png",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "AI-Powered",
      "Responsive Design",
    ],
    link: "https://github.com/TahmeedWolf/CodeFlow",
    github: "https://github.com/TahmeedWolf/CodeFlow",
  },
  {
    title: "2D Game",
    description:
      "Created a dynamic 2D game to showcase portfolio skills. The game demonstrates innovative design and functional gameplay using mouse and tap function (if on mobile devices) using modern web technologies.",
    image: "/projects/2dgame.png",
    tags: ["Javascript", "Terser", "Kaboom", "2D game", "HTML", "CSS"],
    link: "https://github.com/TahmeedWolf/2D_Game_Developer_Portfolio",
    github: "https://github.com/TahmeedWolf/2D_Game_Developer_Portfolio",
  },
  {
    title: "Glowing",
    description:
      "A fully responsive e-commerce website designed for accessibility on all devices and to provide an intuitive online shopping experience.",
    image: "/projects/glowingwebsite1.png",
    tags: ["Javascript", "HTML", "CSS", "E-commerce", "Responsive Design"],
    link: "https://github.com/TahmeedWolf/Glowing_Ecommerce_Website_master",
    github: "https://github.com/TahmeedWolf/Glowing_Ecommerce_Website_master",
  },
  {
    title: "Ecommerce Website",
    description:
      "Designed a fully responsive e-commerce website with seamless user experience across devices.",
    image: "/projects/ecomweb.png",
    tags: ["Javascript", "HTML", "CSS", "E-commerce", "Responsive Design"],
    link: "https://github.com/TahmeedWolf",
    github: "https://github.com/TahmeedWolf",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              {/* <div className="relative overflow-hidden aspect-video"> */}
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] bg-surface/30">
                <img
                  src={project.image}
                  alt={project.title}
                  // className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-t-2xl">
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label="View live demo or project page"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label="View source code on GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton asChild>
            <a
              href="https://github.com/TahmeedWolf?tab=repositories"
              target="_blank" // ← opens in new tab
              rel="noopener noreferrer" // ← security best practice
              className="inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </AnimatedBorderButton>
        </div> */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="https://github.com/TahmeedWolf?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
