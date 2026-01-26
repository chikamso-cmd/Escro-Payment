import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/Hero";
import HowitWorks from "../components/HowitWorks";

export default function LandingPage() {
  return (
    <section className="w-full min-h-screen bg-[#CFF8F526]">
      {/* navigation */}
      <Nav />
      {/* hero section */}
      <div className="">
        <HeroSection />
      </div>
      {/* how it works section */}
      <HowitWorks />
    </section>
  );
}
