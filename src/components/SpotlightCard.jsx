import { useRef, useState } from "react";

export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setStyle({
      "--spot-x": `${e.clientX - rect.left}px`,
      "--spot-y": `${e.clientY - rect.top}px`,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setStyle({})}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 spotlight" />
      {children}
    </div>
  );
}
