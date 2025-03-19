"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LeftImageSection({ data }) {
  console.log(data);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        key={data.img} // Triggers animation on image change
        className="w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src={data.img}
          alt={data.name}
          className="w-48 h-40 sm:w-64 sm:h-56 md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] object-cover border-4 border-white shadow-lg"
        />
      </motion.div>
    </div>
  );
}
