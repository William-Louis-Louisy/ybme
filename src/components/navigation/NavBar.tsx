"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Logo from "./Logo";
import { Cancel01Icon, Menu01Icon } from "hugeicons-react";
import Link from "next/link";
import { navigation } from "@/lib/navigation";
import LangSwitch from "../commons/LangSwitch";
import { useLang } from "@/contexts/LangContext";
import trad from "@/locales/trad";
import MaxWidthWrapper from "../commons/MaxWidthWrapper";

function NavBar() {
  const { lang } = useLang();
  const t = trad[lang];
  return (
    <Disclosure
      as="nav"
      className="bg-ivory shadow sticky inset-x-0 top-0 z-50"
    >
      {({ open }) => (
        <>
          <MaxWidthWrapper className="px-4">
            <div className="flex h-16 justify-between gap-12">
              <div className="flex justify-between w-full">
                <div className="flex flex-shrink-0 items-center">
                  <Logo />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-12">
                  {navigation.main.map((item) => {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        passHref
                        className="text-text-drk font-semibold font-lexend-giga hover:underline hover:text-blk underline-offset-8 decoration-2 duration-200 ease-in"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <LangSwitch />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-text-drk">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Cancel01Icon className="block size-8" aria-hidden="true" />
                  ) : (
                    <Menu01Icon className="block size-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </MaxWidthWrapper>

          <DisclosurePanel className="sm:hidden absolute w-full flex flex-col gap-12 items-center justify-center h-[calc(100dvh-4rem)] bg-ivory z-50">
            <div className="flex flex-col items-center gap-12 pt-2 pb-3">
              {navigation.main.map((item) => {
                return (
                  <Link key={item.name} href={item.href}>
                    <DisclosureButton className="text-text-drk font-semibold font-lexend-giga hover:underline hover:text-blk underline-offset-8 decoration-2 duration-200 ease-in">
                      {item.name}
                    </DisclosureButton>
                  </Link>
                );
              })}
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="inline-flex items-center text-sm text-text-drk justify-end w-full gap-6 px-8">
                <p className="font-lexend-giga">{t.nav.language}</p>
                <LangSwitch />
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
