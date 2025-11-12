import React, { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "ru";

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void; 
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {}, 
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedLang = localStorage.getItem("lang") as Lang | null;
      if (savedLang) {
        setLangState(savedLang);
      } else {
        const browserLang = navigator.language.startsWith("ru") ? "ru" : "en";
        setLangState(browserLang);
        localStorage.setItem("lang", browserLang);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleLang = () => {
    const newLang = lang === "en" ? "ru" : "en";
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
