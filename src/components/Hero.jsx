import React from 'react'
import hero from "../assets/Hero.svg";
import { RiShieldStarLine } from "react-icons/ri";
import {ReactTyped} from 'react-typed';

export default function HeroSection() {
  return (
    <section>
      <div className="w-[80%]  mx-auto rounded-2xl mt-20 p-10 flex  items-center flex-row-reverse">
        {/* hero image */}
        <div className="w-1/2">
          <img src={hero} alt="Hero" className="w-full h-auto" />
        </div>
        <div className="w-1/2 px-10">
          <span className="bg-[#CFF8F5B2] flex justify-start items-center px-3 py-1 rounded-full text-[#02534D] gap-1 mb-4 w-fit font-medium text-[12px]">
            <RiShieldStarLine /> Secure Escrow Platform
          </span>
          <h1 className="text-[32px] font-medium mb-4 flex flex-col gap-3 text-black">
            Book Trusted Professionals,
            <ReactTyped
              strings={[
                "Pay Securely Via Escrow",
                "Pay Smart, Pay Safe",
                // "Search for brands",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
              className='text-black'
            >
              <input type="text" disabled />
            </ReactTyped>
          </h1>

          <p className="text-[16px] mb-6 font-normal text-gray-700">
            Protect your money with our trusted escrow service. Pay with
            confidence,release funds oy when you’re satisfied.Connecting skilled
            freelancers with clients - Securely, seamlessly and stress-free
          </p>
          <button className="bg-[#02534D] text-white px-6 py-3 rounded-lg hover:bg-[#033633] transition duration-300 cursor-pointer font-medium">
            Get Started Free
          </button>
          {/* satisfied customers */}
          <div className="w-fit mt-5 py-5 flex items-center gap-3">
            <div className=" border-r-2 border-r-gray-600 pr-3">
              <p className="font-semibold text-[16px]">10k+</p>
              <span className="text-[12px]">Transactions</span>
            </div>
            <div className=" px-3 border-r-2 border-r-gray-600">
              <p className="font-semibold text-[16px] text-center">$5M+</p>
              <span className="text-[12px]">Protected</span>
            </div>
            <div clasName="text-center">
              <p className="font-semibold text-[16px] text-center">99.9%</p>
              <span className="text-[12px]">Satisfactions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
