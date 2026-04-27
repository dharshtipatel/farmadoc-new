"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "it";
const STORAGE_KEY = "farmadoc-language";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({
  lang: "it",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("it");

  useEffect(() => {
    const savedLang = window.localStorage.getItem(STORAGE_KEY);

    if (savedLang === "en" || savedLang === "it") {
      const frame = window.requestAnimationFrame(() => {
        setLang(savedLang);
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
