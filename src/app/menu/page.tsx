"use client";

import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper";
import { useLang } from "@/contexts/LangContext";
import { menu } from "@/lib/menu";
import Image from "next/image";
import React from "react";
import Cover from "@/assets/ybme-menu.png";
import trad from "@/locales/trad";
import { Leaf01Icon } from "hugeicons-react";

function Menu() {
  const { lang } = useLang();
  const t = trad[lang];

  return (
    <MaxWidthWrapper className="flex flex-col items-start gap-12 w-full mt-16 pb-24 lg:pb-48 text-text-drk">
      <div
        className="w-full bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${Cover.src})` }}
      >
        <div className="w-full min-h-[208px] md:min-h-[308px] flex items-center justify-center px-4 py-12 lg:px-12 lg:py-16 text-ivory bg-blk/55">
          <h1 className="text-3xl lg:text-6xl font-black w-full text-center whitespace-pre-line font-lexend-giga px-4 lg:px-0">
            {t.menu.title}
          </h1>
        </div>
      </div>

      {menu.map((category) => {
        return (
          <div key={category.category} className="flex flex-col gap-6 w-full">
            <h2 className="menu-category">
              {category.displayedName[lang as "en" | "nl"]}
            </h2>

            <div className="menu-items">
              {category.items.map((item) => {
                return (
                  <div key={item._id} className="menu-item autoScale">
                    <Image
                      height={240}
                      width={240}
                      src={item.picture}
                      alt={item.name}
                      className="item-image autoBlur"
                    />
                    <div className="flex flex-col h-full w-full justify-between">
                      <div className="item-info">
                        <h3 className="item-name">{item.name}</h3>

                        <div className="flex flex-wrap flex-row gap-2">
                          {item.ingredients[lang as "en" | "nl"].map((ing) => {
                            return (
                              <span key={ing} className="ingredient">
                                {ing}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      <div className="item-price">
                        {item.isVeggyfriendly ? (
                          <span className="text-green-700 text-xs lg:text-sm inline-flex items-center gap-1 border border-green-700 rounded-md px-2 py-1">
                            <Leaf01Icon className="size-4" />
                            {t.menu.veggie}
                          </span>
                        ) : (
                          <span></span>
                        )}

                        <span className="price">{item.price}€</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </MaxWidthWrapper>
  );
}

export default Menu;
