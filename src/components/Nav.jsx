import React from "react";
import logo from "../assets/logoframe.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full bg-white border-b border-b-gray-400 shadow-sm px-4 md:px-10 py-8">
      <div className="md:w-[80%] w-full flex items-center justify-between mx-auto">
        <img src={logo} alt="Logo" className="h-8 md:h-10" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-gray-700 block"></span>
          <span className="w-6 h-0.5 bg-gray-700 block"></span>
          <span className="w-6 h-0.5 bg-gray-700 block"></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
          <ul className="flex flex-col gap-4 font-medium text-base">
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
      )}
    </div>
  );
}
