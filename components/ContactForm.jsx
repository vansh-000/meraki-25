import React from "react";
import { Iceland } from "next/font/google";

const iceland = Iceland({ subsets: ["latin"], weight: "400" });

export const ContactForm = () => {
  return (
    <div
      className={`${iceland.className} mt-12 w-screen md:w-full mx-auto px-10 max-w-2xl h-auto flex flex-col gap-6 pt-12 sm:p-6 md:p-8 lg:p-10 text-white`}
    >
      <div className="w-full">
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          className="bg-transparent text-xl sm:text-xl md:text-2xl lg:text-3xl w-full outline-none placeholder:text-white"
        />
        <div className="w-full h-[1.5px] bg-white"></div>
      </div>
      <div className="w-full">
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="bg-transparent text-xl sm:text-xl md:text-2xl lg:text-3xl w-full outline-none placeholder:text-white"
        />
        <div className="w-full h-[1.5px] bg-white"></div>
      </div>
      <div className="w-full">
        <textarea
          placeholder="ENTER YOUR MESSAGE"
          className="bg-transparent text-xl sm:text-xl md:text-2xl lg:text-3xl w-full h-24 sm:h-28 md:h-32 lg:h-40 resize-none outline-none placeholder:text-white"
        />
        <div className="w-full h-[2px] bg-white"></div>
      </div>
      <button className="bg-white text-black rounded-3xl px-6 py-2 text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide self-end">
        SEND
      </button>
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide mt-6 sm:mt-8">
        Reach out at: meraki@iiitu.ac.in
      </div>
      <div className="text-lg sm:text-base md:text-lg lg:text-xl tracking-wide max-w-lg">
        Based in: IIIT Una, Saloh - 177209, Tehsil Haroli, Distt. Una, Himachal Pradesh
      </div>
    </div>
  );
};
