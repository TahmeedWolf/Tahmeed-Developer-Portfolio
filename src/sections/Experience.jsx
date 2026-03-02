const experiences = [
  {
    period: "April 2025 – November 2025",
    role: "Software Engineer",
    company: "ASA Bangladesh",
    location: "Dhaka, Bangladesh · On-site",
    type: "Full-time",
    description: (
      <>
        Developed an AI-powered virtual agent chatbot for ASA, a leading
        microfinance institution, to enhance customer engagement and automate
        customer support workflows.
        <br />
        <br />
        Integrated NLP-driven conversational interfaces to intelligently handle
        client inquiries, including loan application status, account services,
        and general support requests.
        <br />
        <br />
        Designed and implemented the ASA Prediction System — a fully automated,
        data-driven forecasting pipeline for predicting monthly financial
        balances.
        <br />
        <br />
        Combined SARIMA models for trend and seasonality analysis with XGBoost
        for nonlinear residual learning, improving forecast accuracy and
        interpretability.
      </>
    ),
    technologies: [
      "AI Chatbot",
      "NLP",
      "SARIMA",
      "XGBoost",
      "Python",
      "Machine Learning",
    ],
    current: true,
  },
  {
    period: "February 2024 – September 2024",
    role: "Software Developer",
    company: "Still Waters Fiduciaries (SWF)",
    location: "Kuching, Sarawak, Malaysia · Remote",
    type: "Contract",
    description: (
      <>
        Designed and developed the Sales Workflow Information System (SWIS) to
        streamline sales record management and operational reporting.
        <br />
        <br />
        Built a user-friendly web interface for both clients and administrators
        to manage sales data and user accounts efficiently.
        <br />
        <br />
        Integrated an AI-driven chatbot to automate structured data entry from
        WhatsApp messages, significantly reducing manual workload.
        <br />
        <br />
        Architected and optimized a secure, scalable database system to support
        long-term data growth and reliability.
      </>
    ),
    technologies: [
      "React",
      "Node.js",
      "AI Chatbot",
      "Database Design",
      "WhatsApp API",
    ],
    current: false,
  },
  {
    period: "May 2023 – October 2023",
    role: "Intern Software Engineer",
    company: "Square Hospitals Ltd",
    location: "Dhaka, Bangladesh · On-site",
    description: (
      <>
        Gained hands-on experience with the full software development lifecycle,
        including requirements analysis, development, testing, and deployment.
        <br />
        <br />
        Assisted senior engineers with coding, debugging, and testing across
        multiple internal projects.
        <br />
        <br />
        Maintained technical documentation, including project plans, design
        specifications, and user manuals.
      </>
    ),
    technologies: ["SDLC", "Testing", "Documentation", "Team Collaboration"],
    current: false,
  },
  {
    period: "June 2022 – September 2022",
    role: "Intern Developer",
    company: "Anwer Khan Modern Medical College Hospital",
    location: "Dhaka, Bangladesh · On-site",
    description: (
      <>
        Developed a foundational understanding of software development tools,
        workflows, and engineering best practices.
        <br />
        <br />
        Created and maintained detailed technical documentation, including
        project plans, system designs, and user guides.
      </>
    ),
    technologies: ["Software Tools", "Best Practices", "Documentation"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from internships to leading
            AI-driven projects in fintech and healthcare.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-primary">
                        {exp.period}
                      </span>
                      {exp.type && (
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          {exp.type}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">
                      {exp.company} · {exp.location}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-5 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
