import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

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
        {[...Array(40)].map((_, i) => {
          // increased to 40 for better coverage
          const size = 1.6 + Math.random() * 3.5; // vary size between 1–3.5px
          const opacity = 0.3 + Math.random() * 0.4; // 0.3–0.7 range
          const delay = Math.random() * 8; // 0–8s delay
          const duration = 18 + Math.random() * 25; // 18–43s for slower, dreamy motion
          const x = 5 + Math.random() * 90; // avoid extreme edges
          const y = 5 + Math.random() * 90;

          return (
            <div
              key={i}
              className="absolute rounded-full animate-slow-drift"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: "#20B2A6",
                opacity,
                left: `${x}%`,
                top: `${y}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                boxShadow: `0 0 ${size * 2}px rgba(32, 178, 166, 0.6)`, // soft glow
              }}
            />
          );
        })}
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
                Hi, I'm Tahmeed Rahman — Proficient Software Engineer with a
                Bachelor of Technology degree from the Institute of Engineering
                and Management in India and a Master's degree in Information
                Technology from Swinburne University (an Australian university)
                in Malaysia. I bring extensive experience in designing and
                implementing software solutions, supported by a strong
                foundation in programming and software development. I have
                successfully contributed to numerous projects, demonstrating
                expertise in application development, database management, and
                system architecture. My passion for leveraging technology to
                solve real-world challenges drives me to seek innovative
                solutions and contribute meaningfully to organizational
                objectives. With a strong focus on collaboration and
                problem-solving, I thrive in dynamic environments where I can
                apply my technical skills to deliver impactful results.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
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
                href="/src/data/TahmeedRahman_CV_Resume.pdf"
                download="TahmeedRahman_Resume.pdf"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/TahmeedWolf" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/tahmeed-rahman-365863184/",
                },
                {
                  // Custom WhatsApp icon – thinner stroke
                  CustomIcon: () => (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6" // thinner than Lucide's default 2
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  ),
                  href: "https://wa.me/+8801312291297", // ← Replace with your real number
                  label: "WhatsApp",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.CustomIcon ? (
                    <social.CustomIcon />
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
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
                  alt="Tahmeed Rahman – Software Engineer"
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
