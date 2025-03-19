"use client";
import React, { useState } from "react";
import LeftImageSection from "./LeftImageSection";
import RightImageSection from "./RightImageSection";
import { MarqueeDemoVertical } from "./Marquee";
import { Iceland } from "next/font/google";
import { TeamData } from "@/constants/data";

const iceland = Iceland({ subsets: ["latin"], weight: "400" });



export default function ScrollableGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div
      className={`${iceland.className} h-screen flex items-center justify-center text-white relative overflow-hidden bg-black/40 backdrop-blur-sm`}
    >
      {/* Four Sections Grid with Ratio 10% - 30% - 50% - 10% */}
      <div className="grid grid-cols-[10%_45%_35%_10%] w-full h-full items-center">
        {/* Left Marquee */}
        <div className="h-full flex items-center justify-center lg:ml-2.5 ml-1">
          <MarqueeDemoVertical names={TeamData} currentIndex={currentIndex} />
        </div>

        {/* Left Image Section */}
        <div className="flex w-full h-full overflow-hidden items-center justify-center lg:ml-6 sm:ml-0.5 md:ml-1.5 lg:w-[600px] lg:h-[600px]">
          <LeftImageSection data={TeamData[currentIndex]} />
        </div>

        {/* Right Image Section */}
        <div className="flex w-full h-full overflow-hidden items-center justify-center">
          <RightImageSection
            data={TeamData[currentIndex]}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>

        {/* Right Marquee with slight left margin */}
        <div className="h-full flex items-center justify-center  lg:ml-12 mr-0.5">
          <MarqueeDemoVertical names={TeamData} currentIndex={currentIndex} />
        </div>
      </div>
    </div>
  );
}
