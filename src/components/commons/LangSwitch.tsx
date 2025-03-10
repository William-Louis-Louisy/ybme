"use client";

import Image from "next/image";
import React, { Fragment, useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ILangItem, langItems } from "@/lib/langItems";
import { Lang, useLang } from "@/contexts/LangContext";
import { ArrowDown01Icon } from "hugeicons-react";

export default function LangSwitch() {
  const { storeLang } = useLang();
  const [selectedLang, setSelectedLang] = useState<ILangItem | undefined>(
    undefined
  );

  const handleLangChange = (langCode: Lang) => {
    const langFound = langItems.find(
      (item: ILangItem) => item.short === langCode
    );
    if (langFound) {
      setSelectedLang(langFound);
      storeLang(langCode);
    } else {
      console.error("Langue non trouvée pour le code :", langCode);
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      const langFound = langItems.find((item) => item.short === savedLang);
      setSelectedLang(langFound || langItems[0]);
    } else {
      setSelectedLang(langItems[0]);
    }
  }, []);

  if (!selectedLang) {
    return null;
  }

  return (
    <div>
      <Menu as="div" className="relative -mr-px block text-text-drk">
        <MenuButton className="inline-flex items-center gap-2 bg-dark-ivory px-3 py-2 rounded-lg shadow-inner">
          <span className="sr-only">Choose your language</span>
          <ArrowDown01Icon
            className="h-5 w-5 hidden lg:block"
            aria-hidden="true"
          />
          <div className="uppercase flex flex-row items-center gap-2">
            <Image
              src={selectedLang.flagUrl}
              alt={selectedLang.name}
              width={24}
              height={24}
            />
          </div>
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-50 mt-3 -mr-1 w-56 origin-top-right rounded-md shadow-lg bg-dark-ivory max-h-[166px] overflow-y-auto">
            <div className="py-1">
              {langItems.map((item) => (
                <MenuItem key={item.name}>
                  {({ active }) => (
                    <div
                      onClick={() => handleLangChange(item.short)}
                      className={`flex flex-row items-center gap-2 px-4 py-2 text-sm cursor-pointer ${
                        active ? "bg-ivory" : ""
                      }`}
                    >
                      <Image
                        src={item.flagUrl}
                        alt={item.name}
                        width={20}
                        height={20}
                      />
                      <span className="font-lexend-giga">{item.name}</span>
                    </div>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
