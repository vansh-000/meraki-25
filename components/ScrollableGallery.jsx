"use client";
import React, { useState } from "react";
import LeftImageSection from "./LeftImageSection";
import RightImageSection from "./RightImageSection";
import { MarqueeDemoVertical } from "./Marquee";
import { Iceland } from "next/font/google";
import { TeamData } from "@/constants/data";
import HomeSlider from "./ImageSlider";

const iceland = Iceland({ subsets: ["latin"], weight: "400" });

export default function ScrollableGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Large Screens (lg, xl, 2xl) */}
      <div
        className={`${iceland.className} hidden lg:flex h-screen items-center justify-center text-white relative overflow-hidden bg-black/40 backdrop-blur-sm`}
      >
        <div className="grid grid-cols-[10%_40%_40%_10%] w-full h-full items-center">
          {/* Left Marquee */}
          <div className="h-full flex items-center justify-center lg:ml-2.5 ml-1">
            <MarqueeDemoVertical names={TeamData} currentIndex={currentIndex} />
          </div>

          {/* Left Image Section */}
          <div className="flex w-full h-full overflow-hidden items-center justify-center lg:w-[600px] lg:h-[600px]">
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

          {/* Right Marquee */}
          <div className="flex items-center justify-center w-full h-auto lg:h-full lg:ml-0 xl:ml-16 2xl:ml-20 lg:mr-40 xl:mr-6">
            <MarqueeDemoVertical names={TeamData} currentIndex={currentIndex} />
          </div>
        </div>
      </div>

      {/* Small and Medium Screens (sm, md) */}
      <div className="block sm:block md:block lg:hidden">
        <HomeSlider />
      </div>
    </>
  );
}
