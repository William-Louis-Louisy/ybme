"use client";
import { useState, useContext, createContext, useEffect } from "react";

interface ILangContext {
  lang: string;
  loadLangFromStorage: () => void;
  setLang: (lang: string) => void;
  storeLang: (lang: string) => void;
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
  const [lang, setLang] = useState<string>("nl");

  // GET LANG FROM LOCAL STORAGE
  const loadLangFromStorage = () => {
    if (typeof window !== "undefined") {
      try {
        const savedLang = localStorage.getItem("lang");
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
  const storeLang = (lang: string) => {
    try {
      localStorage.setItem("lang", lang);
      setLang(lang);
    } catch (error) {
      console.error("An error occured during the language fetching :", error);
    }
  };

  return (
    <LangContext.Provider
      value={{ lang, loadLangFromStorage, setLang, storeLang }}
    >
      {children}
    </LangContext.Provider>
  );
};
