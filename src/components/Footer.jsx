import React from "react";
import { Link } from "react-router-dom";
import {Phone, Mail, MapPin, Facebook, LucideTwitter, InstagramIcon, Linkedin} from 'lucide-react'

export default function Footer() {
  return (
    <section className="w-full bg-[#012421] text-white pb-10">
      <div className="md:w-[80%] grid md:grid-cols-4 grid-cols-1 gap-10 px-5 mx-auto pt-10 pb-2 border-b border-b-gray-50 ">
        <div className="w-full">
          <h1 className="font-medium py-3 text-[18px]"> About Escrow</h1>
          <p className="font-normal pb-2 text-[14px] ">
            we're dedicated to making online transactions fafe and secure for
            everyon. Our platform protects clients and freelancers with trusted
            escrow services.
          </p>
          <div className="flex items-center gap-3 py-5">
            <div className="rounded-full bg-green-100 p-3 cursor-pointer hover:scale-110 transition-all duration-500">
              <Facebook className="text-black" />
            </div>
            <div className="rounded-full bg-green-100 p-3 cursor-pointer hover:scale-110 transition-all duration-500">
              <LucideTwitter className="text-black" />
            </div>
            <div className="rounded-full bg-green-100 p-3 cursor-pointer hover:scale-110 transition-all duration-500">
              <InstagramIcon className="text-black" />
            </div>
            <div className="rounded-full bg-green-100 p-3 cursor-pointer hover:scale-110 transition-all duration-500">
              <Linkedin className="text-black" />
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="py-3 font-medium text-[18px]">Company</h1>
          <ul className="flex flex-col space-y-1 text-[14px]">
            <Link to="">About Us</Link>
            <Link to="">How it Works</Link>
            <Link to="">Pricing</Link>
            <Link to="">Blog</Link>
            <Link to="">Careers</Link>
          </ul>
        </div>
        <div className="">
          <h1 className="py-3 font-medium text-[18px]">Legal</h1>
          <ul className="flex flex-col space-y-1 text-[14px]">
            <Link to="">Terms of Service</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Cookies Policy</Link>
            <Link to="">Dispute Resolution</Link>
            <Link to="">Legal Notice</Link>
          </ul>
        </div>
        <div className="">
          <h1 className="py-3 font-medium text-[18px]">Contact</h1>
          <ul className="flex flex-col space-y-1 text-[14px]">
            <Link to="" className="flex gap-2 items-center">
              {" "}
              <Mail size={20} /> support@escrow.com
            </Link>
            <Link to="" className="flex gap-2 items-center">
              <Phone size={20} /> +1[555] 123-4567
            </Link>
            <Link to="" className="flex gap-2 items-center">
              <MapPin size={20} />
              123 Business St, Suite 100 San Fransisco, CA 94105
            </Link>
          </ul>
        </div>
      </div>
      <div className="border-b border-b-gray-50 mx-auto w-[80%] py-5">
<h1 className="text-center font-medium text-[24px] py-4">Get Started Today</h1>
<div className="flex items-center gap-5 justify-center ">
  <button className="bg-[#04534d] px-5 py-2 rounded-lg text-[16px] font-medium cursor-pointer hover:scale-105 transition-all duration-300">Sign Up as a Client</button>
  <button className="bg-[#2d837c] px-5 py-2 rounded-lg text-[16px] font-medium cursor-pointer hover:scale-105 transition-all duration-300">Sign Up as a Client</button>
</div>
      </div>
      <p className="text-center pt-5">
        &copy; {new Date().getFullYear} Escrow all Rights Reserved{" "}
      </p>
    </section>
  );
}
