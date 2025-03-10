"use client";
import { useState, useContext, createContext, useEffect } from "react";

export type Lang = "en" | "nl";

interface ILangContext {
  lang: Lang;
  loadLangFromStorage: () => void;
  setLang: (lang: Lang) => void;
  storeLang: (lang: Lang) => void;
}

interface LangProviderProps {
  children: React.ReactNode;
}

export const LangContext = createContext<ILangContext | undefined>(undefined);

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("nl");

  // GET LANG FROM LOCAL STORAGE
  const loadLangFromStorage = () => {
    if (typeof window !== "undefined") {
      try {
        const savedLang = localStorage.getItem("lang") as Lang | null;
        if (savedLang) {
          setLang(savedLang);
        }
      } catch (error) {
        console.error(
          "Error while loading language from local storage : ",
          error
        );
      }
    }
  };

  useEffect(() => {
    loadLangFromStorage();
  }, []);

  // STORE LANG IN LOCAL STORAGE
  const storeLang = (lang: Lang) => {
    try {
      localStorage.setItem("lang", lang);
      setLang(lang);
    } catch (error) {
      console.error("An error occured during the language fetching :", error);
    }
  };

  // Navigator language detection
  useEffect(() => {
    // If no language is stored and the navigator is defined
    if (!localStorage.getItem("lang") && typeof navigator !== "undefined") {
      const browserLang = navigator.language.split("-")[0];
      // If the browser language is not Dutch, we store English
      if (browserLang !== "nl") {
        storeLang("en");
      }
    }
    // Otherwise, we load the language from the storage
    else {
      loadLangFromStorage();
    }
  }, []);

  // Set the lang attribute of the html element
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider
      value={{ lang, loadLangFromStorage, setLang, storeLang }}
    >
      {children}
    </LangContext.Provider>
  );
};
