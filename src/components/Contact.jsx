import { useApp } from "../context/AppContext";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="py-24 px-6 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-txt2 font-mono text-sm">06.</span>
            <h2 className="text-3xl font-bold text-txt">{t.contact.title}</h2>
          </div>
          <div className="section-line mb-8" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ScrollReveal>
            <div>
              <p className="text-txt2 text-lg mb-8">{t.contact.text}</p>

              <div className="card-hover bg-card border border-border rounded-xl p-6 space-y-4 mb-6">
                <a href="tel:+21629382418" className="flex items-center gap-3 text-txt hover:text-txt2 transition-colors">
                  <span className="w-10 h-10 bg-bg2 border border-border rounded-lg flex items-center justify-center">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-txt">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </span>
                  <span className="font-medium">+216 29 382 418</span>
                </a>

                <a href="mailto:khalilbenmaatoug@gmail.com" className="flex items-center gap-3 text-txt hover:text-txt2 transition-colors">
                  <span className="w-10 h-10 bg-bg2 border border-border rounded-lg flex items-center justify-center">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-txt">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 4l-10 8L2 4"/>
                    </svg>
                  </span>
                  <span className="font-medium">khalilbenmaatoug@gmail.com</span>
                </a>
              </div>

              <div className="social-row flex gap-3">
                <a
                  href="https://github.com/khalil-dev916"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn w-11 h-11 border border-border rounded-full flex items-center justify-center text-muted"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
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
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
            </div>
          </ScrollReveal>

          <div className="hidden md:flex items-center justify-center">
            <ScrollReveal>
              <div className="relative">
                <div className="w-52 h-52 border border-border rounded-2xl flex flex-col items-center justify-center rotate-[-5deg] gap-3 bg-card">
                  <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-txt2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                    <path d="M6 8h4M6 11h8" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm text-txt2 font-medium">Let's work together</span>
                </div>
                <div className="absolute -top-4 -right-4 w-6 h-6 border border-border rounded-full" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-border rounded-full" />
                <div className="absolute top-1/2 -right-8 text-muted text-2xl font-bold">+</div>
                <div className="absolute -left-6 top-8 w-3 h-3 bg-border rounded-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">{t.contact.copyright}</p>
        </div>
      </div>
    </section>
  );
}
