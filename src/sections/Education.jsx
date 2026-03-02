const education = [
  {
    period: "2023 — 2024",
    degree: "Master of Technology in Information Technology",
    institution: "Swinburne University of Technology",
    location: "Melbourne, Australia",
    description:
      "Specialized in advanced software engineering, cloud computing, and AI applications. Completed research project on scalable web architectures.",
    // highlights: [
    //   "GPA: 3.8/4.0",
    //   "Thesis: Microservices in Cloud-Native Environments",
    // ],
  },
  {
    period: "2018 — 2022",
    degree: "Bachelor of Technology in Information Technology",
    institution: "Institute of Engineering and Management",
    location: "Kolkata, West Bengal, India",
    description:
      "Core foundation in computer science, software development, databases, and web technologies. Led multiple team projects and hackathons.",
    // highlights: [
    //   "CGPA: 8.9/10",
    //   "Dean’s List (2019–2022)",
    //   "Best Project Award – Smart Campus App",
    // ],
  },
  {
    period: "2016 — 2018",
    degree: "Senior Secondary (Class XII)",
    institution: "GD Goenka Public School",
    location: "Siliguri, India",
    description:
      "Focused on Science stream with Computer Science. Strong academic performance and active participation in tech clubs.",
    // highlights: ["Percentage: 92%", "School Topper in Computer Science"],
  },
  {
    period: "2014 — 2016",
    degree: "Matriculation (Class X)",
    institution: "Mount Hermon School",
    location: "Darjeeling, India",
    description:
      "Built strong fundamentals in mathematics, science, and English. Early interest in programming and technology.",
    // highlights: ["Percentage: 94%", "Outstanding Academic Achievement Award"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background glow orb – same style as experience */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              built the foundation.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A chronological overview of my formal education — from school to
            postgraduate studies — shaping my technical expertise and
            problem-solving mindset.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical glowing line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                {/* Content Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>

                    <p className="text-muted-foreground">
                      {edu.institution} • {edu.location}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {edu.description}
                    </p>

                    {/* Highlights / Achievements */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {edu.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
