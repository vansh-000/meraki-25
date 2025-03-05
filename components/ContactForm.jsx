import React from "react";
import { Iceland } from "next/font/google";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });
export const ContactForm = () => {
  return (
    <div className={`${iceland.className} xl:w-[700px] lg:[650px] md:[600px] h-auto font-iceland flex flex-col gap-6 p-6 md:p-8 lg:p-10 text-white`}>
      
      <div className="w-full max-w-lg">
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          className="bg-transparent text-2xl lg:text-3xl w-full outline-none placeholder:text-white"
        />
        <div className="xl:w-[531px] lg:w-[431px] md:w-[330px] h-[1px] bg-white"></div>
      </div>

      
      <div className="w-full max-w-lg">
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="bg-transparent text-2xl lg:text-3xl w-full outline-none placeholder:text-white"
        />
        <div className="xl:w-[531px] lg:w-[431px] md:w-[330px] h-[1px] bg-white"></div>
      </div>

      
      <div className="w-full max-w-lg">
        <textarea
          placeholder="ENTER YOUR MESSAGE"
          className="bg-transparent text-2xl lg:text-3xl w-full h-[120px]  lg:h-[165px] p-2 resize-none outline-none placeholder:text-white"
        />
        <div className="xl:w-[531px] lg:w-[431px] md:w-[330px] h-[1px] bg-white"></div>
      </div>

      
      <button className="font-iceland bg-white text-black rounded-3xl px-6 py-2 text-2xl lg:text-3xl tracking-wide self-end xl:mr-20 lg:mr-32 md:mr-48">
        SEND
      </button>

      
      <div className="font-iceland text-2xl lg:text-3xl tracking-wide mt-8">
        Reach out at: meraki@iiitu.ac.in
      </div>
      <div className="font-iceland text-lg lg:text-xl tracking-wide xl:max-w-lg lg:max-w-md md:max-w-sm">
        Based in: IIIT Una, Saloh - 177209, Tehsil Haroli, Distt. Una, Himachal Pradesh
      </div>
    </div>
  );
};
