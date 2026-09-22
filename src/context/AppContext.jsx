import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const t = translations[lang];
  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, theme, setTheme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
