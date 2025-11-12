import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "en" | "ru";

interface LangContextProps {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LangContextProps>({
  lang: "en",
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored) setLang(stored);
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "ru" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
