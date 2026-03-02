import {
  Code2,
  Database,
  Cloud,
  Brain,
  Settings,
  Layout,
  Globe,
  Terminal,
  Cpu,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    category: "Programming Languages",
    skills: "Python | JavaScript | JSX | HTML5 | CSS3 | Tailwind CSS | XML",
  },
  {
    icon: Terminal,
    category: "Frameworks & Libraries",
    skills: "React | Node | Express | Flask",
  },
  {
    icon: Layout,
    category: "Web Development",
    skills:
      "Full-Stack Web Development | Responsive Design | RESTful Applications",
  },
  {
    icon: Database,
    category: "Databases",
    skills: "MySQL | PostgreSQL | Microsoft SQL Server | SQLite",
  },
  {
    icon: Cloud,
    category: "Cloud & DevOps",
    skills: "AWS | Azure",
  },
  {
    icon: Brain,
    category: "Artificial Intelligence & ML",
    skills:
      "LLMs | Ollama | AI Application Development | Model Training | Deep Learning",
  },
  {
    icon: Settings,
    category: "Software Engineering Practices",
    skills: "Agile | Scrum | REST APIs | Debugging | Problem Solving",
  },
  {
    icon: Cpu,
    category: "Design & Multimedia",
    skills: "UI/UX Design | Figma | Graphic Design | Adobe Premiere Pro",
  },
  {
    icon: Globe,
    category: "Languages",
    skills: "English | Bengali | Hindi",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              My Toolkit
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills that{" "}
            <span className="font-serif italic font-normal text-white">
              power everything.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A comprehensive overview of the technologies, tools, and practices I
            use daily to build modern, scalable, and user-focused applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <group.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {group.category}
              </h3>

              <p className="text-base text-muted-foreground/90 leading-relaxed">
                {group.skills}
              </p>
            </div>
          ))}
        </div>

        {/* subtle footer note */}
        <div className="mt-16 text-center animate-fade-in animation-delay-800">
          <p className="text-sm text-muted-foreground/70 italic">
            Constantly learning and expanding — currently diving deeper into AI
            tooling and cloud-native architectures.
          </p>
        </div>
      </div>
    </section>
  );
};
