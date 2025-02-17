import { useLang } from "@/contexts/LangContext";
import trad from "@/locales/trad";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface AboutProps {
  image: StaticImageData;
}

function About({ image }: AboutProps) {
  const { lang } = useLang();
  const t = trad[lang];

  return (
    <section className="relative flex flex-col-reverse pt-16 md:pt-0 md:flex-row justify-between w-full max-w-screen-2xl text-text-drk snap-center h-screen">
      {/* Left panel */}
      <div className="h-screen md:max-w-3/7 flex flex-col items-center justify-center gap-4 px-4 py-6">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-sm lg:text-lg font-lexend-giga">
            {t.home.welcomeT}
          </span>
          <p className="font-lexend-giga text-xs lg:text-sm">
            {t.home.welcome}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-sm lg:text-lg font-lexend-giga">
            {t.home.qualityT}
          </span>
          <p className="font-lexend-giga text-xs lg:text-sm">
            {t.home.quality}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-sm lg:text-lg font-lexend-giga">
            {t.home.sustainabilityT}
          </span>
          <p className="font-lexend-giga text-xs lg:text-sm">
            {t.home.sustainability}
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="relative hidden md:block md:w-1/2 md:h-screen">
        <Image
          className="object-cover"
          src={image}
          alt="Kitchen picture"
          fill
        />
      </div>
    </section>
  );
}

export default About;
