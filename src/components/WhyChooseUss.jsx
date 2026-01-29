import React from "react";
import { WhyChooseUssData } from "../Constants.jsx";

export default function WhyChooseUss() {
  return (
    <div className="py-10 md:py-16 px-4 w-full md:w-[80%] mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-2xl md:text-[32px] font-medium py-3">
          Why Choose Us
        </h1>
        <p className="text-sm md:text-[14px] font-medium">
          Built with security and trust at core, designed for peace of mind
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WhyChooseUssData.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4 bg-[#CFF8F5] rounded-full p-4 w-fit">
              {item.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{item.title}</h3>
            <p className="text-gray-600 font-medium">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
