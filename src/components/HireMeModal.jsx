import { useEffect } from "react";
import { useApp } from "../context/AppContext";

export default function HireMeModal({ open, onClose }) {
  const { t } = useApp();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const actions = [
    {
      label: t.hire.email,
      value: t.contact.email,
      href: `mailto:${t.contact.email}?subject=${encodeURIComponent(t.hire.emailSubject)}`,
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4l-10 8L2 4" />
        </svg>
      ),
    },
    {
      label: t.hire.phone,
      value: t.contact.phone,
      href: `tel:${t.contact.phone.replace(/\s/g, "")}`,
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.07 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "khalil-ben-maatoug",
      href: "https://www.linkedin.com/in/khalil-ben-maatoug/",
      icon: (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: t.hire.viewCV,
      value: "CV-Khalil-Ben-Maatoug.pdf",
      href: `${import.meta.env.BASE_URL}CV-Khalil-Ben-Maatoug.pdf`,
      icon: (
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.nav.hireMe}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative w-full max-w-md my-auto bg-card border border-border rounded-2xl p-7 pt-10 shadow-2xl modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-bg2 text-muted hover:text-txt hover:border-txt transition-colors"
          aria-label="Close"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-10 h-10 border border-border rounded-xl flex items-center justify-center text-txt font-semibold">
            K
          </span>
          <div>
            <h3 className="text-lg font-bold text-txt">{t.nav.hireMe}</h3>
            <div className="flex items-center gap-2">
              <span className="pulse-ring w-2 h-2 bg-green-400 text-green-400 rounded-full" />
              <span className="text-xs text-txt2">{t.hire.available}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-txt2 leading-relaxed mb-5 mt-3">{t.hire.blurb}</p>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target={a.href.startsWith("http") ? "_blank" : undefined}
              rel={a.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex flex-col gap-1.5 bg-bg2 border border-border rounded-xl p-3.5 text-left hover:border-txt transition-all duration-300 group"
            >
              <span className="text-muted group-hover:text-txt transition-colors">{a.icon}</span>
              <span className="text-xs font-medium text-txt">{a.label}</span>
              <span className="text-[11px] text-muted truncate">{a.value}</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`mailto:${t.contact.email}?subject=${encodeURIComponent(t.hire.emailSubject)}`}
          className="btn btn-primary w-full mt-5"
        >
          {t.hire.cta}
        </a>
      </div>
    </div>
  );
}
