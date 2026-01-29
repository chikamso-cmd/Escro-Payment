import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/Hero";
import HowitWorks from "../components/HowitWorks";
import WhyChooseUss from "../components/WhyChooseUss";
import FeaturedCategories from "../components/FeaturedCategories";
import Pricing from "../components/Pricing";

export default function LandingPage() {
  return (
    <section className="min-w-screen min-h-screen bg-[#CFF8F526] mx-auto">
      {/* navigation */}
      <Nav />
      {/* hero section */}
      <div className="">
        <HeroSection />
      </div>
      {/* how it works section */}
      <HowitWorks />
      <div className="w-full bg-gray-100">
        {/* why choose us section */}
        <WhyChooseUss />
      </div>
      <div className="w-full">
        <FeaturedCategories />
        <Pricing />
      </div>
    </section>
  );
}
