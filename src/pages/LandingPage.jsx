import React from 'react'
import Nav from '../components/Nav'
import HeroSection from '../components/Hero';

// let age = prompt("Enter your age:");
// if (age < 18) {
//   alert("You must be at least 18 years old to access this site.");
//   if (age >= 18) {
//     alert("Welcome to the site!");
//   } else {
//     alert("Invalid input. Please enter a valid age.");
//   }
// }


export default function LandingPage() {
  return (
    <section className="w-full min-h-screen bg-[#CFF8F526]">
        {/* navigation */}
      <Nav />
      {/* hero section */}
      <div className="">
        <HeroSection />
      </div>
    </section>
  );
}
