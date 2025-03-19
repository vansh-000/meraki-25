"use client";
import React, { useState } from "react";
import { Iceland } from "next/font/google";
import emailjs from "emailjs-com";

const iceland = Iceland({ subsets: ["latin"], weight: "400" });

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setIsLoading(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setIsLoading(false);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${iceland.className} mt-15 w-screen md:w-full mx-auto px-10 max-w-2xl h-auto flex flex-col gap-6 pt-12 sm:p-6 md:p-8 lg:p-10 text-white`}
    >
      <div className="w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="ENTER YOUR NAME"
          className="bg-transparent text-xl sm:text-xl md:text-2xl lg:text-3xl w-full outline-none placeholder:text-white"
          required
        />
        <div className="w-full h-[1.5px] bg-white"></div>
      </div>
      <div className="w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ENTER YOUR EMAIL"
          className="bg-transparent text-xl sm:text-xl md:text-2xl lg:text-3xl w-full outline-none placeholder:text-white"
          required
        />
        <div className="w-full h-[1.5px] bg-white"></div>
      </div>
      <div className="w-full">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="ENTER YOUR MESSAGE"
          className="bg-transparent text-xl sm:text-xl md:text-2xl lg:text-3xl w-full h-24 sm:h-28 md:h-32 lg:h-40 resize-none outline-none placeholder:text-white"
          required
        />
        <div className="w-full h-[2px] bg-white"></div>
      </div>
      <button
        type="submit"
        className="bg-white cursor-pointer text-black rounded-3xl px-6 py-2 text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide self-end"
        disabled={isLoading}
      >
        {isLoading ? "SENDING..." : isSent ? "SENT!" : "SEND"}
      </button>
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide mt-6 sm:mt-8">
        Reach out at: meraki@iiitu.ac.in
      </div>
    </form>
  );
};
