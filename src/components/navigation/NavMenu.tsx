"use client";

import React from "react";
import LangSwitch from "../commons/LangSwitch";
import { navigation } from "@/lib/navigation";
import Link from "next/link";
import { Cancel01Icon, Menu01Icon } from "hugeicons-react";
import { useLang } from "@/contexts/LangContext";

interface NavMenuProps {
  isOpen: boolean;
  toogleMenu: () => void;
}

function NavMenu({ isOpen, toogleMenu }: NavMenuProps) {
  const { lang } = useLang();
  return (
    <>
      <div className="hidden lg:inline-flex items-center gap-24">
        <div className="flex items-center gap-16">
          {navigation.main.map((item) => {
            return (
              <Link
                key={item.name.en}
                href={item.href}
                passHref
                className="text-text-drk font-semibold font-lexend-giga hover:underline hover:text-blk underline-offset-8 decoration-2 duration-200 ease-in"
              >
                {item.name[lang]}
              </Link>
            );
          })}
        </div>
        <LangSwitch />
      </div>

      <div className="lg:hidden flex items-center justify-center text-text-drk">
        <button onClick={toogleMenu}>
          {isOpen ? (
            <Cancel01Icon className="size-8" />
          ) : (
            <Menu01Icon className="size-8" />
          )}
        </button>
      </div>
    </>
  );
}

export default NavMenu;
