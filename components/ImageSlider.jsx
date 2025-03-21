"use client";
import { useEffect, useState } from "react";
import { TeamData } from "@/constants/data";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TeamData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TeamData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center min-h-[85vh] sm:min-h-screen px-4 py-8 overflow-hidden">
      {/* Slider Container */}
      <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto">
        {/* Left Image (Peeking) */}
        <motion.img
          key={currentIndex - 1}
          src={TeamData[(currentIndex - 1 + TeamData.length) % TeamData.length].img}
          alt="Previous"
          className="hidden md:block absolute left-0 md:-left-20 lg:left-16 w-9/12 max-w-[250px] rounded-2xl opacity-50 transition-opacity duration-300"
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0.2, scale: 0.8 }}
        />

        {/* Main Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center w-full sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-2xl space-y-6 p-6 justify-center"
          >
            <img
              src={TeamData[currentIndex].img}
              alt={TeamData[currentIndex].name}
              className="w-full aspect-square max-w-[300px] object-cover rounded-3xl shadow-xl"
            />
            <h3 className="text-3xl sm:text-4xl -mt-2 font-bold text-white">
              {TeamData[currentIndex].name}
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl -mt-3 text-gray-300">
              {TeamData[currentIndex].club} - {TeamData[currentIndex].team}
            </p>
            <div className="flex space-x-6 sm:space-x-8 mt-0">
              {TeamData[currentIndex].Linkedin && (
                <a
                  href={TeamData[currentIndex].Linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125"
                >
                  <FaLinkedin className="text-3xl sm:text-4xl md:text-5xl" />
                </a>
              )}
              {TeamData[currentIndex].insta && (
                <a
                  href={TeamData[currentIndex].insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-600 transition-transform transform hover:scale-125"
                >
                  <FaInstagram className="text-3xl sm:text-4xl md:text-5xl" />
                </a>
              )}
              {TeamData[currentIndex].github && (
                <a
                  href={TeamData[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
                >
                  <FaGithub className="text-3xl sm:text-4xl md:text-5xl" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Image (Peeking) */}
        <motion.img
          key={currentIndex + 1}
          src={TeamData[(currentIndex + 1) % TeamData.length].img}
          alt="Next"
          className="hidden md:block absolute right-0 md:-right-20 lg:right-16 w-9/12 max-w-[250px] rounded-2xl opacity-50 transition-opacity duration-300"
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0.2, scale: 0.8 }}
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 text-white text-3xl sm:text-4xl bg-white/20 hover:bg-white/40 transition-all rounded-full p-2"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 text-white text-3xl sm:text-4xl bg-white/20 hover:bg-white/40 transition-all rounded-full p-2"
      >
        &#8250;
      </button>
    </div>
  );
}
