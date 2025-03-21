import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TeamData } from "@/constants/data";

function App({ data, currentIndex, setCurrentIndex }) {
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TeamData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TeamData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? TeamData.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === TeamData.length - 1 ? 0 : currentIndex + 1;
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeIn" } },
    exit: { opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.7, ease: "easeIn" } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="max-w-6xl w-full h-[80vh] flex flex-col items-center relative overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center ">
          <motion.div
            className="w-[50%] sm:w-[60%] md:w-[80%] aspect-sqaure cursor-pointer opacity-50 hover:opacity-75 transition-all transform scale-75 hover:scale-85"
            onClick={goToPrevious}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imageVariants}
          >
            <img
              src={TeamData[getPreviousIndex()].img}
              alt="Previous"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            key={currentIndex}
            className="w-[70%] md:w-[60%] lg:w-[80%] aspect-sqaure z-10 transform scale-100 transition-all"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imageVariants}
          >
            <img
              src={TeamData[currentIndex].img}
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white/10"
            />
          </motion.div>
          <motion.div
            className="w-[50%] sm:w-[60%] md:w-[80%] aspect-sqaure cursor-pointer opacity-50 hover:opacity-75 transition-all transform scale-75 hover:scale-85"
            onClick={goToNext}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imageVariants}
          >
            <img
              src={TeamData[getNextIndex()].img}
              alt="Next"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;


