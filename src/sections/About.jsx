import { Brain, Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI That Thinks Ahead",
    description:
      "Built intelligent agents, chatbots, and forecasting systems that turn raw data into real decisions — across industries.",
  },
  {
    icon: Code2,
    title: "Full-Stack Precision",
    description:
      "Mastering React, Next.js, Python/Flask, databases, and scalable architecture to ship clean, performant code that lasts.",
  },
  {
    icon: Rocket,
    title: "Impact That Matters",
    description:
      "Delivered production-ready tools that simplify lives and empower better choices — from finance to healthcare and beyond.",
  },
  {
    icon: Users,
    title: "Collaboration at Heart",
    description:
      "Thrive in cross-cultural teams — remote and on-site — turning ideas into shared success.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column – Empowering Story */}
          <div className="space-y-10">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              I build technology
              <span className="font-serif italic font-normal text-white">
                {" "}
                that solves real problems.
              </span>
            </h2>

            <div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200 text-lg leading-relaxed">
              <p>
                What drives me is the moment when code becomes more than logic —
                when it becomes a tool that saves time, reduces stress, or opens
                new possibilities. Whether it’s making information accessible in
                seconds or turning data into smarter decisions, I love creating
                intelligent systems that feel truly human.
              </p>

              <p>
                My path has taken me from hospital internships to leading AI
                projects in microfinance and beyond — across Bangladesh,
                Malaysia, and more. Each step sharpened my ability to ship fast,
                listen to real users, and turn complex challenges into elegant,
                impactful solutions.
              </p>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "I don’t just write software. I create understanding — tools
                  that listen, think, and make life better."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column – 4 Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
