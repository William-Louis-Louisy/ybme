import { navigation } from "@/lib/navigation";
import React from "react";

function Footer() {
  return (
    <footer className="bg-dark-ivory text-text-drk">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 hover:text-blk hover:underline underline-offset-4 font-lexend-giga"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        {/* <div className="mt-10 flex justify-center space-x-10">
      {navigation.social.map((item) => (
        <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div> */}
        <p className="mt-10 text-center text-xs leading-5 text-blk font-lexend-giga">
          &copy; 2025 YBME, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
