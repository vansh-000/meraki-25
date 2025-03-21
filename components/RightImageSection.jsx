"use client";

import { Button } from "@/components/ui/button";
import { TeamData } from "@/constants/data";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function RightImageSection({ data, currentIndex, setCurrentIndex }) {
  const router = useRouter();
  return (
    <div className="w-full md:w-3/5 flex flex-col items-center gap-10 md:gap-24 opacity-90">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "circIn" }}
        className="flex flex-col justify-center items-center gap-y-4 sm:gap-y-6 min-h-screen w-full h-auto md:h-[700px] bg-transparent rounded-xl p-4 sm:p-6"
      >
        {/* Name Section */}

        <motion.div
          className="text-white text-3xl md:text-5xl lg:text-6xl drop-shadow-lg font-extralight text-center mt-20 lg:-mt-14"
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
        {currentIndex != 1 && currentIndex != 0 && <div
          id="socialMedia"
          className="flex flex-row gap-2 justify-end items-end"
        >
          <div className="flex space-x-6 sm:space-x-8 mt-0">
            {TeamData[currentIndex].Linkedin && (
              <a
                href={TeamData[currentIndex].Linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125"
              >
                <FaLinkedin className="text-3xl sm:text-4xl md:text-4xl" />
              </a>
            )}
            {TeamData[currentIndex].insta && (
              <a
                href={TeamData[currentIndex].insta}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-600 transition-transform transform hover:scale-125"
              >
                <FaInstagram className="text-3xl sm:text-4xl md:text-4xl" />
              </a>
            )}
            {TeamData[currentIndex].github && (
              <a
                href={TeamData[currentIndex].github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
              >
                <FaGithub className="text-3xl sm:text-4xl md:text-4xl" />
              </a>
            )}
          </div>
        </div>}
      </motion.div>
    </div>
  );
}