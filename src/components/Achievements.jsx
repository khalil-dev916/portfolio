import { useApp } from "../context/AppContext";
import ScrollReveal from "./ScrollReveal";

export default function Achievements() {
  const { t } = useApp();

  return (
    <section id="achievements" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-txt2 font-mono text-sm">04.</span>
            <h2 className="text-3xl font-bold text-txt">{t.achievements.title}</h2>
          </div>
          <div className="section-line mb-10" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {t.achievements.items.map((a, i) => (
            <ScrollReveal key={i}>
              <div className="card-hover bg-card border border-border rounded-xl p-6 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-txt">{a.place}</span>
                  <span className="text-xs text-muted">{a.date}</span>
                </div>
                <h3 className="text-txt font-semibold mb-2">{a.event}</h3>
                <p className="text-sm text-txt2">{a.project}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
