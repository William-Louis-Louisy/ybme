import Image, { StaticImageData } from "next/image";
import React from "react";
import Logo from "@/assets/ybme-logo-home.png";
import Link from "next/link";
interface LandingProps {
  image: StaticImageData;
}

function Landing({ image }: LandingProps) {
  return (
    <section
      className="flex justify-center w-full snap-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="h-[calc(100dvh-4rem)] flex flex-col gap-16 items-center justify-center w-full bg-gradient-to-t from-blk/85 to-blk/55">
        <div className="w-full md:w-2xl px-4">
          <Image className="object-contain" src={Logo} alt="logo" />
        </div>
        <h2 className="uppercase font-lexend-giga font-bold text-ivory text-lg md:text-2xl text-center">
          your best meal ever
        </h2>

        <Link
          className="block lg:hidden bg-gradient-to-br from-65% to-35% from-ivory to-dark-ivory px-12 py-3 rounded-md text-text-drk font-semibold font-lexend-giga text-center uppercase"
          href={"/menu"}
        >
          menu
        </Link>
      </div>
    </section>
  );
}

export default Landing;
