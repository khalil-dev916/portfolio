import { useApp } from "../context/AppContext";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const { t } = useApp();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-txt2 font-mono text-sm">05.</span>
            <h2 className="text-3xl font-bold text-txt">{t.education.title}</h2>
          </div>
          <div className="section-line mb-10" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="card-hover bg-card border border-border rounded-xl p-8 max-w-3xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-txt mb-1">{t.education.degree}</h3>
                <p className="text-txt2 font-medium mb-2">{t.education.specialty}</p>
                <p className="text-muted">{t.education.university}</p>
              </div>
              <div className="bg-bg2 border border-border rounded-lg px-4 py-2 self-start">
                <span className="text-txt font-mono text-sm">{t.education.years}</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted">{t.education.coursework}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
