"use client";
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper";
import { useLang } from "@/contexts/LangContext";
import { partners } from "@/lib/partners";
import trad from "@/locales/trad";
import Image from "next/image";
import React from "react";
import Cover from "@/assets/ybme-approach.png";

function OurApproach() {
  const { lang } = useLang();
  const t = trad[lang];
  return (
    <MaxWidthWrapper className="flex flex-col items-start gap-12 w-full mt-16 pb-48 text-text-drk">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Cover.src})` }}
      >
        <div className="w-full h-60 md:h-92 flex items-center justify-center px-4 py-12 lg:px-12 lg:py-16 text-ivory bg-blk/55">
          <h1 className="text-2xl lg:text-6xl font-black w-full text-center whitespace-pre-line font-lexend-giga px-4">
            {t.approach.title}
          </h1>
        </div>
      </div>

      <p className="lg:text-xl text-center font-lexend-giga px-4">
        {t.approach.intro}
      </p>

      <div className="flex flex-col items-start w-full gap-12 md:gap-0 bg-blk md:bg-transparent">
        {partners.map((partner, index) => {
          return (
            <div
              key={partner.title.en}
              className="text-ivory md:text-text-drk flex flex-col odd:md:flex-row even:md:flex-row-reverse items-start pb-12 gap-4 md:gap-4 lg:gap-12 md:px-4"
            >
              <div
                className={`relative w-full h-svw md:w-2/5 md:h-96 md:rounded-xl overflow-hidden ${
                  index % 2 === 0 ? "leftSlideIn" : "rightSlideIn"
                }`}
              >
                <Image
                  src={partner.image}
                  alt={partner.title[lang]}
                  className="object-cover z-0"
                  fill
                />
              </div>

              <div
                className={`flex flex-col gap-4 md:py-12 max-w-full md:max-w-3/5 px-4 ${
                  index % 2 === 0 ? "rightSlideIn" : "leftSlideIn"
                }`}
              >
                <h2 className="text-xl lg:text-2xl flex flex-col lg:flex-row gap-1 lg:gap-4">
                  <span className=" font-semibold font-lexend-giga">
                    {partner.name}
                  </span>
                  <span className=" font-black font-lexend-giga">
                    {partner.title[lang]}
                  </span>
                </h2>
                <p className="lg:text-lg font-lexend-giga">
                  {partner.description[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="lg:text-xl text-center font-lexend-giga px-4">
        {t.approach.outro}
      </p>
    </MaxWidthWrapper>
  );
}

export default OurApproach;
