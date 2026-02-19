import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  // Load initial language from localStorage (if available)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("language");
      if (stored === "en" || stored === "zh") {
        setLanguage(stored);
      }
    } catch {
      // ignore read errors
    }
  }, []);

  // Persist language and update document lang attribute
  useEffect(() => {
    try {
      window.localStorage.setItem("language", language);
    } catch {
      // ignore write errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};


