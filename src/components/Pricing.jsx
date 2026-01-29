import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

import PricingCard from "../ui/PricingCard";

export default function Pricing() {
  return (
    <section className="w-full md:w-[80%] py-10 md:py-0 px-4 md:px-0 min-h-screen mx-auto">
      <div className="text-center">
        <h1 className="text-2xl md:text-[32px] font-medium py-2">
          Simple transparent Pricing
        </h1>
        <p>
          Pay only for what you used. No hidden fees, no monthly subscriptions.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mt-10 md:mt-20 ">
        <PricingCard className="py-10 ">
          <h2 className="text-3xl font-medium mb-4 text-center">For Clients</h2>
          <p className="text-[12px] font-bold mb-4 text-center">
            Perfect for clients hiring talent
          </p>
          <p className="text-[32px] font-bold text-center">2.5%</p>
          <p className="text-[12px] text-center">per transaction</p>
          <ul className="mb-6 space-y-6 text-[16px] pt-10 font-medium ">
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Secure
              payment protection
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Release funds
              only when satisfied
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Up to $50,000
              per transaction
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" />{" "}
              Milestone-based payments
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> 24/7 email
              support
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Dispute
              resolution support
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Transaction
              history & reciepts
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Refund
              protection
            </li>
          </ul>
          <button className="bg-white text-black border border-[#D1D1D1] px-4 py-2 rounded-lg w-full mt-5 text-[16px] font-medium cursor-pointer hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </PricingCard>

        <PricingCard className="mt-8 md:mt-0 border-2 border-[#02534D] py-10 hover:border-[#02534D] transition-all duration-500 relative">
          <div className="bg-[#02534D] text-white rounded-full w-fit px-6 md:px-9 py-2 mx-auto absolute -top-5 left-1/2 -translate-x-1/2 md:left-40 md:translate-x-0 font-medium ">
            <p>Recomended</p>
          </div>
          <h2 className="text-3xl font-medium mb-4 text-center">
            For freelancers
          </h2>
          <p className="text-[12px] font-bold mb-4 text-center">
            Ideal for service providers and
          </p>
          <p className="text-[32px] font-bold text-center">1.9%</p>
          <p className="text-[12px] text-center">per transaction</p>
          <ul className="mb-6 space-y-6 text-[16px] pt-10 font-medium ">
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Guaranteed
              payment security
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Get paid when
              work is approved
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Up to $50,000
              per transaction
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Custom
              milestone creation
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Priority
              dispute resolution
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> 24/7 chat
              support
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Advanced
              analytics dashboard
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Fast fund
              withdrawal
            </li>
            <li className="flex items-center">
              <IoCheckmarkSharp className="text-green-500 mr-2" /> Portfolio
              showcasing
            </li>
          </ul>
          <button className="bg-[#02534D] text-white  px-4 py-2 rounded-lg w-full mt-5 text-[16px] font-medium cursor-pointer">
            Get Started
          </button>
        </PricingCard>
      </div>
      <div className="w-[80%]">
        <p>
          All plans include SSL encryption, PCI compliance, and fraud
          protection. Need a custom solution? Contact our sales team{" "}
        </p>
      </div>
    </section>
  );
}
