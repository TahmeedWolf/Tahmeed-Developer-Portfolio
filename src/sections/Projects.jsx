import { FloatingDots } from "@/components/FloatingDots";
import { useMemo, useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Carousel } from "@/components/Carousel";
import { Reveal } from "@/components/Reveal";
import { projects, categories } from "@/data/projects";

export const Projects = () => {
  const [active, setActive] = useState("All");

  /* Opening a card link spawns a new tab, which takes focus. The original page
     then never receives the mouseleave, so the CSS :hover state freezes and the
     action icons stay on screen after the pointer has gone. Suppressing the
     card that was just clicked, until the pointer genuinely re-enters it,
     restores the behaviour people expect. */
  const [clicked, setClicked] = useState(null);

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const countFor = (cat) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.category === cat).length;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <FloatingDots variant={0} />
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <Reveal className="text-center mx-auto max-w-3xl mb-10">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Premium website templates that are live on the web, plus the AI,
            data and full-stack work behind them.
          </p>
        </Reveal>

        {/* Filter tabs */}
        <Reveal
          delay={100}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "glass border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
                <span
                  className={`ml-2 text-xs ${
                    isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"
                  }`}
                >
                  {countFor(cat)}
                </span>
              </button>
            );
          })}
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((project, idx) => (
            <Reveal
              key={project.title}
              delay={(idx % 3) * 80}
              className="group card-surface rounded-2xl overflow-hidden card-hover flex flex-col"
              onMouseEnter={() => setClicked((c) => (c === project.title ? null : c))}
            >
              {/* Image */}
              <div className="relative">
                <Carousel
                  images={project.images ?? [project.image]}
                  alt={project.title}
                  interval={4000 + (idx % 3) * 500}
                  /* Live sites ship pre-sized 16:10 frames. The older project
                     captures are tall page screenshots, so they get the taller
                     card and fill it from the top, same as the original site. */
                  aspect={project.live ? "aspect-[16/10]" : "aspect-[4/3]"}
                  objectClass={
                    "object-cover object-top"
                  }
                />

                {/* Live badge */}
                {project.live && (
                  <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium badge-solid text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Live site
                  </span>
                )}

                {/* Overlay links sit top-right so they never cover the
                    carousel arrows or dots */}
                <div className={`card-actions absolute top-3 right-3 z-10 flex items-center gap-2 ${
                    clicked === project.title ? "card-actions-off" : ""
                  }`}>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full badge-solid hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label={`Open ${project.title}`}
                      onClick={(e) => {
                        e.currentTarget.blur();
                        setClicked(project.title);
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full badge-solid hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      aria-label={`${project.title} source on GitHub`}
                      onClick={(e) => {
                        e.currentTarget.blur();
                        setClicked(project.title);
                      }}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">
                  <a
                    href={project.link || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-3 group-hover:text-primary transition-colors focus-visible:outline-none focus-visible:text-primary"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </h3>

                <p className="text-muted-foreground text-sm flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All CTA */}
        <Reveal delay={200} className="text-center mt-12">
          <AnimatedBorderButton
            href="https://github.com/TahmeedWolf?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </Reveal>
      </div>
    </section>
  );
};
