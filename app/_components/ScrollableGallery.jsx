"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import LeftImageSection from "./LeftImageSection";
import RightImageSection from "./RightImageSection";
import { MarqueeDemoVertical } from "./Marquee";

const data = [
  { name: "Vansh Namdev", img: "https://avatar.vercel.sh/jack" },
  { name: "Pranav Garg", img: "https://avatar.vercel.sh/jill" },
  { name: "John Doe", img: "https://avatar.vercel.sh/john" },
  { name: "Jane Smith", img: "https://avatar.vercel.sh/jane" },
  { name: "Jenny Wilson", img: "https://avatar.vercel.sh/jenny" },
  { name: "James Brown", img: "https://avatar.vercel.sh/james" },
];

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
    <div className="h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Four Sections Grid with Spacing */}
      <div className="grid grid-cols-[10%_1fr_1fr_10%] w-full h-full items-center">
        {/* Left Marquee */}
        <div className="h-full flex items-center justify-center">
          <MarqueeDemoVertical names={data} currentIndex={currentIndex} />
        </div>

        {/* Left Image Section with Margin */}
        <div className="flex w-full h-full overflow-hidden items-center justify-center">
          <div className="mr-6"> {/* Added margin for spacing */}
            <LeftImageSection data={data[currentIndex]} />
          </div>
        </div>

        {/* Right Image Section with Margin */}
        <div className="flex w-full h-full overflow-hidden items-center justify-center">
          <div className="ml-1"> {/* Added margin for spacing */}
            <RightImageSection
              data={data[currentIndex]}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>

        {/* Right Marquee */}
        <div className="h-full flex items-center justify-center">
          <MarqueeDemoVertical names={data} currentIndex={currentIndex} />
        </div>
      </div>

      {/* Navigation Buttons */}
      
    </div>
  );
}
