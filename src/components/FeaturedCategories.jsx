import React from "react";
import { featuredCategories } from "../Constants";

export default function FeaturedCategories() {
  return (
    <div className="w-[80%] py-10 px-4 md:px-8 lg:px-16 mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-center font-medium text-[32px]">
          Featured Categories
        </h1>
        <p className="text-[16px] text-center">
          Trusted by professionals across various industries.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Category Item */}
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              className="  border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden mt-5"
            >
              <div className="relative">
                {category.image && (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-auto"
                  />
                )}
                <div className="text-white absolute z-50 bottom-0  left-3 p-3 rounded-full mb-3 flex items-center justify-start gap-3 w-fit">
                  {category.icon} {category.icontext}
                </div>
              </div >
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-1 text-[24px] text-left">
                  {category.name}
                </h2>
                <p className="text-sm text-gray-600 text-left">
                  {category.description}
                </p>
                <p className="text-sm text-[#02534D] font-medium mt-2"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
