"use client";

import LandingImg from "@/assets/ybme-home.png";
import KitchenImg from "@/assets/ybme-kitchen.png";
import FacadeImg from "@/assets/ybme-fullfacade.png";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Landing from "@/components/sections/Landing";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center h-screen no-scrollbar scroll-smooth overflow-y-scroll snap-y snap-mandatory">
      <Landing image={LandingImg} />
      <About image={KitchenImg} />
      <Contact backgroundImage={FacadeImg.src} />
    </div>
  );
}
