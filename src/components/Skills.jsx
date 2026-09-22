import { useApp } from "../context/AppContext";
import ScrollReveal from "./ScrollReveal";

const skillData = [
  ["Python", "Java", "JavaScript", "TypeScript", "PHP", "SQL", "C", "C++"],
  ["React", "Next.js", "Express", "Spring Boot", "Tailwind CSS", "Chart.js"],
  ["Node.js", "Vite", "Git", "GitHub", "VS Code", "n8n"],
  ["OpenRouter", "Groq API", "Mammoth", "LLM Integration"],
];

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-txt2 font-mono text-sm">03.</span>
            <h2 className="text-3xl font-bold text-txt">{t.skills.title}</h2>
          </div>
          <div className="section-line mb-10" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillData.map((skills, i) => (
            <ScrollReveal key={i}>
              <div className="card-hover bg-card border border-border rounded-xl p-6 h-full">
                <h3 className="text-txt font-semibold mb-4">{t.skills.categories[i].title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="tag-hover text-xs bg-bg2 border border-border px-3 py-1.5 rounded-lg text-muted cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
