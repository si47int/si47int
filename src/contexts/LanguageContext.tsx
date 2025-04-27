"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { enTranslations } from "@/translations/en";
import { idTranslations } from "@/translations/id";
import { jaTranslations } from "@/translations/ja";
import { msTranslations } from "@/translations/ms";

type Language = "en" | "id" | "ja" | "ms";
type TranslationType = typeof enTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof TranslationType) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState(enTranslations);

  useEffect(() => {
    // Get language preference from localStorage if available
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && ["en", "id", "ja", "ms"].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase().split("-")[0];
      if (browserLang === "ja") setLanguage("ja");
      else if (browserLang === "id") setLanguage("id");
      else if (browserLang === "ms") setLanguage("ms");
      // Default to English for other languages
    }
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("language", language);

    // Update translations based on selected language
    switch (language) {
      case "id":
        setTranslations(idTranslations);
        break;
      case "ja":
        setTranslations(jaTranslations);
        break;
      case "ms":
        setTranslations(msTranslations);
        break;
      default:
        setTranslations(enTranslations);
    }

    // Update the html lang attribute
    document.documentElement.lang = language;

    // Console log to verify language change (you can remove this in production)
    console.log("Language changed to:", language);
  }, [language]);

  // Translation function
  const t = (key: keyof TranslationType): string => {
    return translations[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
