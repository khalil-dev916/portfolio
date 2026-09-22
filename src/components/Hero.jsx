import { useApp } from "../context/AppContext";
import Typewriter from "./Typewriter";
import ScrollReveal from "./ScrollReveal";
import LetterReveal from "./LetterReveal";

function Arrow() {
  return (
    <svg className="arrow" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useApp();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="relative z-10 text-center px-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 bg-card/80 backdrop-blur border border-border rounded-full px-4 py-1.5 mb-7">
            <span className="pulse-ring w-2 h-2 bg-green-400 text-green-400 rounded-full" />
            <span className="text-xs text-txt2 font-medium tracking-wide">{t.hero.available}</span>
          </div>
        </ScrollReveal>

        <div className="text-sm md:text-base text-txt2 mb-5 h-6 font-medium">
          <Typewriter
            phrases={[
              "Full-Stack Developer",
              "Software Engineering Student",
              "AI & Web Enthusiast",
              "Seeking PFE Internship",
            ]}
          />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-txt mb-5 leading-[1.05] tracking-tight">
          <LetterReveal text={t.hero.firstName} startDelay={0.15} />
          <span className="block">
            <LetterReveal text={t.hero.lastName} startDelay={0.45} />
          </span>
        </h1>

        <ScrollReveal>
          <p className="text-lg md:text-xl text-txt2 max-w-2xl mx-auto mb-9 leading-relaxed">
            {t.hero.tagline}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewWork}
              <Arrow />
            </a>
            <a href="#contact" className="btn btn-secondary">
              {t.hero.getInTouch}
            </a>
            <a
              href="/CV-Khalil-Ben-Maatoug.pdf"
              download="CV-Khalil-Ben-Maatoug.pdf"
              className="btn btn-ghost"
            >
              {t.hero.downloadCV}
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 4v12M6 12l6 6 6-6M4 20h16" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="social-row flex items-center justify-center gap-4 mt-12">
            <a
              href="https://github.com/khalil-dev916"
              target="_blank"
              rel="noreferrer"
              className="icon-btn w-11 h-11 border border-border rounded-full flex items-center justify-center text-muted"
              aria-label="GitHub"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/khalil-ben-maatoug/"
              target="_blank"
              rel="noreferrer"
              className="icon-btn w-11 h-11 border border-border rounded-full flex items-center justify-center text-muted"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:khalilbenmaatoug@gmail.com"
              className="icon-btn w-11 h-11 border border-border rounded-full flex items-center justify-center text-muted"
              aria-label="Email"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 4l-10 8L2 4"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
