"use client";

import EventCard from "../../components/EventCard";
import { cardsData } from "@/constants/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Events() {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };
    
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen md:mb-35 mb-15 md:mt-25 mt-20">
      <div className="w-full flex justify-center items-center">
        <h2 className="text-5xl font-bold mb-4">Meraki Lineup</h2>
      </div>

      <div 
        className="w-full min-h-screen grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   xl:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20 py-10 overflow-hidden"
      >
        {cardsData?.length > 0 ? (
          cardsData.map((event) => (
            <motion.div
              key={event.id}
              className="flex justify-center items-center w-full max-w-[420px] min-w-[280px] mx-auto"
              animate={isMdScreen ? {
                scale: [1, 1.02, 1], 
                filter: [
                  "brightness(100%)",
                  "brightness(120%)",
                  "brightness(100%)",
                ],
              } : {}}
              transition={isMdScreen ? {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              } : {}}
              whileHover={{
                scale: 1.08,
                filter: "brightness(130%)",
                transition: { duration: 0.4 },
              }}
            >
              <EventCard
                EventNumber={event.id}
                name={event.name}
                overview={event.overview}
                image={event.image}
                className="w-full cursor-pointer overflow-hidden bg-transparent transition-transform duration-300"
              />
            </motion.div>
          ))
        ) : (
          <p className="text-white text-lg text-center col-span-full">
            No events available
          </p>
        )}
      </div>
    </div>
  );
}
