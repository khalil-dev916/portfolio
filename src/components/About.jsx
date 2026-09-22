import { useApp } from "../context/AppContext";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t } = useApp();

  const facts = [
    { label: t.about.universityLabel, value: t.about.universityValue },
    { label: t.about.focusLabel, value: t.about.focusValue },
    { label: t.about.locationLabel, value: t.about.locationValue },
    { label: t.about.statusLabel, value: t.about.statusValue },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-txt2 font-mono text-sm">01.</span>
            <h2 className="text-3xl font-bold text-txt">{t.about.title}</h2>
          </div>
          <div className="section-line mb-10" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="space-y-5 text-txt2 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <ScrollReveal key={f.label}>
                <div className="card-hover bg-card border border-border rounded-xl p-5 h-full">
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">{f.label}</p>
                  <p className="text-txt font-medium">{f.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
