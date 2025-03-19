"use client";
import { Button } from "@/components/ui/button";
import { TeamData } from "@/constants/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RightImageSection({ data, currentIndex, setCurrentIndex }) {
  return (
    <div className="w-full md:w-2/5 flex flex-col items-center gap-10 md:gap-24 opacity-90">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "circIn" }}
        className="flex flex-col justify-center items-center gap-y-4 sm:gap-y-6 min-h-screen w-full h-auto md:h-[700px] bg-transparent rounded-xl p-4 sm:p-6"
      >
        {/* Name Section */}
        
        <motion.div
          className="text-white  text-3xl md:text-5xl lg:text-6xl tracking-wide drop-shadow-lg font-extralight text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "circIn" }}
        >
          {data.name}
        </motion.div>

        {/* Buttons */}
        <div className="flex lg:gap-4 gap-1 mt-2 sm:mt-4">
          <Link href="#">
            <Button className="bg-white text-black px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-lg font-semibold shadow-md transition-transform hover:scale-105 text-wrap">
              {data.club}
            </Button>
          </Link>
          <Button className="bg-white text-black lg:px-4 px-1 sm:px-5 py-2 sm:py-3 text-xs sm:text-lg font-semibold shadow-md transition-transform hover:scale-105 text-wrap sm:mr-1.5">
            {data.team}
          </Button>
        </div>
      
        {/* Navigation Section */}
        <div className="text-sm sm:text-lg md:text-2xl text-gray-300 tracking-wider font-semibold mt-6 sm:mt-10 -mb-4 md:-mb-4 lg:mt-36">
          Navigate
        </div>

        {/* Prev & Next Buttons */}
        <div className="flex justify-between gap-3 mt-4">
          <Button
            variant="ghost"
            className="text-white lg:text-xl text-xs sm:text-base hover:bg-white/10"
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
          >
            Prev
          </Button>
          <Button
            variant="ghost"
            className="text-white lg:text-xl text-xs sm:text-base hover:bg-white/10"
            onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, 7))}
            disabled={currentIndex === data.length - 1}
          >
            Next
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
