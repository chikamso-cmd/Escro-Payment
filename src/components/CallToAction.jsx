import React from "react";

export default function CallToAction() {
  return (
    <section className="linear-bg  w-full mx-auto py-10 text-center  text-white">
      <h1 className="py-10 font-medium md:text-[32px] text-[16px]">
        Ready to Secure Your Next Transaction?
      </h1>
      <p className="mb-4">
        Join thousands of users who trust us to protect their payments. Get{" "}
        <br />
        started in minutes with no setup fees.
      </p>
      <div className="flex items-center gap-10 justify-center py-10">
        <button className="border border-white rounded-lg font-medium text-[16px] bg-white text-[#02534D] hover:scale-110 transition-all duration-500 px-5 py-2 cursor-pointer">
          Create Free Account
        </button>
        <button className="border border-white rounded-lg font-medium text-[16px] hover:scale-110 transition-all duration-500 px-5 py-2 text-white cursor-pointer">
          {" "}
          Contact Sales
        </button>
      </div>
      <p>No credit card required *Free to get started * Cancel anytime.</p>
    </section>
  );
}
