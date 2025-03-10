"use client";
import { useLang } from "@/contexts/LangContext";
import { navigation } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import React from "react";

function Footer() {
  const { lang } = useLang();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname === "/") return null;
  return (
    <footer className="bg-dark-ivory text-text-drk">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 flex justify-center space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name.en} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 hover:text-blk hover:underline underline-offset-4 font-lexend-giga"
              >
                {item.name[lang]}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-blk font-lexend-giga">
          &copy; {currentYear} YBME, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
