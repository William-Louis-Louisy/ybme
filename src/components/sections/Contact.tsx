import { useLang } from "@/contexts/LangContext";
import trad from "@/locales/trad";
import {
  MailAtSign01Icon,
  MapsSearchIcon,
  TelephoneIcon,
} from "hugeicons-react";
import React from "react";

interface ContactProps {
  backgroundImage: string;
}

function Contact({ backgroundImage }: ContactProps) {
  const { lang } = useLang();
  const t = trad[lang];

  return (
    <section
      className="flex flex-col gap-16 w-full text-text-drk snap-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center md:justify-end h-screen pt-16 md:pt-0 md:py-20 bg-gradient-to-b md:bg-gradient-to-t from-blk to-transparent">
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 justify-center md:gap-8 lg:gap-24 text-ivory w-fit">
          <div className="contact-card">
            <div className="font-bold text-lg inline-flex gap-2 uppercase items-center">
              <MapsSearchIcon />{" "}
              <span className="font-lexend-giga">{t.home.address}</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-lexend-giga">Hoogstraat 36 A</p>
              <p className="font-lexend-giga">3011 PR Rotterdam</p>
            </div>
          </div>
          <div className="contact-card">
            <div className="font-bold text-lg inline-flex gap-2 uppercase items-center">
              <TelephoneIcon />{" "}
              <span className="font-lexend-giga">{t.home.phone}</span>
            </div>
            <p className="font-lexend-giga">0615131410</p>
          </div>
          <div className="contact-card">
            <div className="font-bold text-lg inline-flex gap-2 uppercase items-center">
              <MailAtSign01Icon />{" "}
              <span className="font-lexend-giga">{t.home.email}</span>
            </div>
            <p className="font-lexend-giga">contact@ybme.nl</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
