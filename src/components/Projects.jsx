import { useApp } from "../context/AppContext";
import ScrollReveal from "./ScrollReveal";
import SpotlightCard from "./SpotlightCard";

const projectData = [
  {
    title: "STEG Internship Platform",
    tech: ["PHP", "SQL", "JavaScript", "Chart.js", "HTML/CSS"],
    link: "https://github.com/khalil-dev916/Steg-Internship-Platform-Official-",
    demo: "https://steg-platform.onrender.com",
  },
  {
    title: "CarDoc AI",
    tech: ["React", "Node.js", "Express", "OpenRouter", "JavaScript"],
    link: "https://github.com/khalil-dev916/CarDoc-AI",
    demo: "https://cardoc-ai-frontend.vercel.app",
  },
  {
    title: "Tunisian Law AI Assistant",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Groq API", "Mammoth"],
    link: "https://github.com/khalil-dev916/Tunisian-Law-AI-Assistant",
    demo: "https://tunisian-law-ai.vercel.app/chat",
  },
];

export default function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-txt2 font-mono text-sm">02.</span>
            <h2 className="text-3xl font-bold text-txt">{t.projects.title}</h2>
          </div>
          <div className="section-line mb-10" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projectData.map((p, i) => (
            <ScrollReveal key={p.title}>
              <SpotlightCard className="group card-hover h-full bg-card border border-border rounded-xl p-6">
                <span className="inline-block text-xs bg-bg2 text-txt2 border border-border px-3 py-1 rounded-full mb-4">
                  {t.projects.items[i].tag}
                </span>
                <h3 className="text-xl font-bold text-txt mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-txt2 leading-relaxed mb-5">
                  {t.projects.items[i].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-bg2 border border-border px-2.5 py-1 rounded text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-txt hover:gap-3 text-sm font-medium transition-all duration-300">
                      {t.projects.liveDemo}
                    </a>
                  )}
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-txt hover:gap-3 text-sm font-medium transition-all duration-300">
                    {t.projects.viewRepo}
                  </a>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
