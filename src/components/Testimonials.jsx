import React from "react";
import { testimonials } from "../Constants";

export default function Testimonials() {
  return (
    <section className="w-full mt-20 px-5 mb-10 ">
      <h1 className="text-center font-medium md:text-[32px] text-lg">
        What our users say
      </h1>
      <p className="text-center md:text-[16px] text-[12px]">
        Join thousands of satisfied users who trust us with their transactions.
      </p>
      <div className="mx-auto w-[80%] grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 rounded-lg ">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="hover:shadow-md shadow-gray-300 p-5 border rounded-lg border-gray-300 transition-all duration-500 "
          >
            <p className="flex items-center gap-2 mb-3">
              {testimonial.icon}
              {testimonial.icon}
              {testimonial.icon}
              {testimonial.icon}
              {testimonial.icon}
            </p>
            <p className="mt-8 space-y-2">"{testimonial.description}"</p>
            <div className="flex items-center gap-2 mt-5">
              <div className="w-[50px] h-[50px]  rounded-full overflow-hidden">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.img_description}
                    className=" w-full h-[50px]"
                  />
                )}
              </div>
              <div>
                <p className="text-[24px] font-medium">{testimonial.name}</p>
                <p className="text-sm font-normal">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
