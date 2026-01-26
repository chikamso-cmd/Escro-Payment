import React from 'react'
import { steps } from '../Constants.jsx';

export default function HowitWorks() {

  return (
    <div className="w-full h-auto text-center py-20 px-4 bg-white">
      <h1 className="font-bold text-[32px]">How it Works</h1>
      <p className="text-[16px] font-medium">
        Our simple 4-step process ensures safe and secured transactions for
        everyone
      </p>
      {/* icons */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 mt-10">
        {steps.map((step) => (
          <div key={step.id} className="bg-white shadow-md rounded-lg p-6 hover:scale-105 duration-300">
            <div className=" bg-[#CFF8F5] rounded-full p-4 w-fit mx-auto relative">
              <span className="absolute z-50 bg-[#02534D] text-white rounded-full w-6 h-6 flex items-center justify-center top-0 -right-2">
                {step.number}
              </span>
              {step.icon}
            </div>
            <h2 className="font-bold text-[24px] mt-4">{step.title}</h2>
            <p className="text-[16px] font-medium mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
