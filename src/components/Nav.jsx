import React from 'react'
import logo from "../assets/logoframe.svg"

export default function Nav() {
  return (
    <div className="w-full bg-white border-b border-b-gray-400 shadow-sm px-10 py-8">
      <div className="w-[80%] flex items-center justify-between mx-auto">
        <img src={logo} alt="Logo" className="h-10" />
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 font-medium text-lg">
            <li className="text-gray-700 hover:text-[#02534D] cursor-pointer">
              Home
            </li>
            <li className="text-gray-700 hover:text-[#02534D] cursor-pointer">
              How It Works
            </li>

            <li className="text-gray-700 hover:text-[#02534D] cursor-pointer">
              Categories
            </li>
            <li className="text-gray-700 hover:text-[#02534D] cursor-pointer">
              Pricing
            </li>

            <li className="text-gray-700 hover:text-[#02534D] cursor-pointer">
              About us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

