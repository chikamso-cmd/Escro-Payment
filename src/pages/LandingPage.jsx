import React from "react";
import Nav from "../components/Nav";
import HeroSection from "../components/Hero";
import HowitWorks from "../components/HowitWorks";
import WhyChooseUss from "../components/WhyChooseUss";
import FeaturedCategories from "../components/FeaturedCategories";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <section className="min-w-screen min-h-screen bg-[#CFF8F526] mx-auto">
      <Nav />
      <HeroSection />
      <HowitWorks />
      <WhyChooseUss />
      <FeaturedCategories />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </section>
  );
}
