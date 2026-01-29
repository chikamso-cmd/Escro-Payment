import React from 'react'


export default function PricingCard({children, className = ""}) {
  return (
    <div
      className={` border border-gray-300 rounded-xl p-6 px-10 w-full md:w-1/2 lg:w-1/3 ${className}`}
    >
      {children}
    </div>
  );
}
