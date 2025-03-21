"use client";
import React, { useState, useEffect } from "react";
import LeftImageSection from "./LeftImageSection";
import RightImageSection from "./RightImageSection";
import { MarqueeDemoVertical } from "./Marquee";
import { Iceland } from "next/font/google";
import { TeamData } from "@/constants/data";
import HomeSlider from "./ImageSlider";

const iceland = Iceland({ subsets: ["latin"], weight: "400" });

export default function ScrollableGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return; // Pause auto-scroll when user interacts

    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isManual]);

  const goToPrevious = () => {
    setIsManual(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TeamData.length) % TeamData.length);
  };

  const goToNext = () => {
    setIsManual(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TeamData.length);
  };

  return (
    <>
      {/* Large Screens (lg, xl, 2xl) */}
      <div
        className={`${iceland.className} hidden lg:flex h-screen items-center justify-center text-white relative overflow-hidden bg-black/40 backdrop-blur-sm`}
      >
        <div className="grid grid-cols-[8%_40%_42%_10%] w-full h-full items-center">
          {/* Left Marquee */}
          <div className="h-full flex items-center justify-center lg:ml-2.5 ml-1">
            <MarqueeDemoVertical names={TeamData} currentIndex={currentIndex} />
          </div>

          {/* Left Image Section */}
          <div className="flex w-full h-full overflow-hidden items-center justify-center">
            <LeftImageSection
              data={TeamData[currentIndex]}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>

          {/* Right Image Section */}
          <div className="flex w-full h-full overflow-hidden items-center justify-center lg:ml-4 xl:ml-4">
            <RightImageSection
              data={TeamData[currentIndex]}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>

          {/* Right Marquee (Scrollable) */}
          <div className="flex items-center justify-center overflow-y-scroll scrollbar-hide w-full h-auto lg:h-full lg:ml-0 xl:ml-16 2xl:ml-20 lg:mr-40 xl:mr-6">
            <MarqueeDemoVertical names={TeamData} currentIndex={currentIndex} />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-30 text-white text-5xl rounded-full p-3 hover:scale-110 transition"
        >
          &#8249;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-30 text-white text-5xl rounded-full p-3 hover:scale-110 transition"
        >
          &#8250;
        </button>
      </div>

      {/* Small and Medium Screens (sm, md) */}
      <div className="block sm:block md:block lg:hidden">
        <HomeSlider />
      </div>
    </>
  );
}
