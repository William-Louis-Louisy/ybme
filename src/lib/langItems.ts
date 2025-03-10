import { Lang } from "@/contexts/LangContext";

export interface ILangItem {
  name: string;
  short: Lang;
  flagUrl: string;
}

export const langItems: ILangItem[] = [
  {
    name: "Nederlands",
    short: "nl",
    flagUrl: "https://flagpedia.net/data/flags/small/nl.png",
  },
  {
    name: "English",
    short: "en",
    flagUrl: "https://flagpedia.net/data/flags/small/gb.png",
  },
];
