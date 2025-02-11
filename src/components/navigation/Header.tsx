"use client";
import Logo from "./Logo";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { useCallback, useEffect, useState } from "react";
import trad from "@/locales/trad";
import { navigation } from "@/lib/navigation";
import LangSwitch from "../commons/LangSwitch";
import { useLang } from "@/contexts/LangContext";
import MaxWidthWrapper from "../commons/MaxWidthWrapper";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLang();
  const t = trad[lang];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Toggle du menu
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-50 w-full bg-ivory backdrop-blur-sm shadow-lg">
      <MaxWidthWrapper className="flex items-center justify-between h-16 px-4 lg:px-0">
        {/* logo */}
        <Logo />

        {/* links */}
        <NavMenu isOpen={isOpen} toogleMenu={toggleMenu} />
      </MaxWidthWrapper>

      {/* mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 h-[calc(100dvh-4rem)] w-full bg-ivory flex flex-col items-center justify-center gap-12">
          <div className="flex flex-col items-center gap-12">
            {navigation.main.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                  onClick={toggleMenu}
                  className="text-text-drk font-semibold text-2xl font-lexend-giga hover:underline hover:text-blk underline-offset-8 decoration-2 duration-200 ease-in"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <span className="h-px bg-text-drk w-4/5"></span>

          <div className="inline-flex items-center text-sm text-text-drk justify-end w-full gap-6 px-8">
            <p className="font-lexend-giga">{t.nav.language}</p>
            <LangSwitch />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
