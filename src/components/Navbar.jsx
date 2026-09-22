import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.achievements, href: "#achievements" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 border border-border rounded-lg flex items-center justify-center text-txt font-semibold text-sm group-hover:border-txt transition-colors">
            K
          </span>
          <span className="text-sm font-medium text-txt hidden sm:inline">
            Khalil Ben Maatoug
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm text-muted hover:text-txt transition-colors">
              {l.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="text-xs font-mono border border-border rounded px-2 py-1 text-muted hover:text-txt hover:border-txt transition-colors"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="text-muted hover:text-txt transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* CV Download */}
          <a
            href="/CV-Khalil-Ben-Maatoug.pdf"
            download="CV-Khalil-Ben-Maatoug.pdf"
            className="btn btn-primary !py-2 !px-5 !text-sm whitespace-nowrap"
          >
            {t.nav.hireMe}
          </a>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleLang} className="text-xs font-mono border border-border rounded px-2 py-1 text-muted">
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button onClick={toggleTheme} className="text-muted" aria-label="Toggle theme">
            {theme === "dark" ? (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
          <button className="text-txt" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-txt transition-colors" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="/CV-Khalil-Ben-Maatoug.pdf"
            download="CV-Khalil-Ben-Maatoug.pdf"
            className="btn btn-primary !py-2 !px-5 !text-sm w-full"
            onClick={() => setOpen(false)}
          >
            {t.nav.hireMe}
          </a>
        </div>
      )}
    </nav>
  );
}
