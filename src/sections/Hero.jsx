import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useCountUp } from "@/hooks/useCountUp";
import { SocialIcon } from "@/components/SocialIcon";
import { socialLinks } from "@/data/social";

// Built once at module load rather than on every render — otherwise the dots
// jump to new positions whenever anything in the tree re-renders.
const dots = Array.from({ length: 40 }, (_, id) => ({
  id,
  size: 1.6 + Math.random() * 3.5,
  opacity: 0.3 + Math.random() * 0.4,
  delay: Math.random() * 8,
  duration: 18 + Math.random() * 25,
  x: 5 + Math.random() * 90,
  y: 5 + Math.random() * 90,
}));

const stats = [
  { target: 4, suffix: "", label: "Live products in stores" },
  { target: 6, suffix: "", label: "Live website templates" },
  { target: 2, suffix: "+ yrs", label: "Professional experience" },
];

const Stat = ({ target, suffix, label }) => {
  const [ref, value] = useCountUp(target);
  return (
    <div
      ref={ref}
      className="glass rounded-xl px-4 py-3 min-w-[9.5rem] transition-colors duration-300 hover:border-primary/40"
    >
      <div className="text-xl font-bold text-primary tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
              boxShadow: `0 0 ${dot.size * 2}px rgba(32, 178, 166, 0.6)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">
                  digital experiences
                </span>
                <span className="block md:inline"> with </span>
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Tahmeed Rahman, a Software Engineer with a Bachelor
                of Technology degree from the Institute of Engineering and
                Management in India and a Master's degree in Information
                Technology from Swinburne University (an Australian university)
                in Malaysia. I bring extensive experience in designing and
                implementing software solutions, supported by a strong
                foundation in programming and software development. Beyond
                client and company work, I design, build and publish my own
                software: products that are live in app stores and on the web
                today, used by people around the world, and maintained by me.
                My passion for leveraging technology to solve real-world
                challenges drives me to seek innovative solutions and
                contribute meaningfully to organizational objectives. With a
                strong focus on collaboration and problem-solving, I thrive in
                dynamic environments where I can apply my technical skills to
                deliver impactful results.
              </p>
            </div>

            {/* Proof strip */}
            <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-300">
              {stats.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              {/* <Button size="lg" asChild>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button> */}

              <Button
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton
                href="/data/TahmeedRahman_CV_Resume.pdf"
                download="TahmeedRahman_Resume.pdf"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2.5 rounded-full glass text-muted-foreground hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <SocialIcon path={social.path} label={social.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/tahmeed-removedbg.png"
                  alt="Tahmeed Rahman, Software Engineer"
                  loading="lazy"
                  className="w-full h-auto aspect-[4/5] object-cover rounded-2xl"
                  width={400}
                  height={500}
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-6 py-4 animate-float animation-delay-500 shadow-xl border border-primary/30">
                  <div className="text-md font-bold text-primary">
                    Intelligent Systems
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Full-Stack • Scalable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
