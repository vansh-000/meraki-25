
// // "use client";
// // import React from "react";
// // import { motion } from "framer-motion";
// // import { TeamData } from "@/constants/data";

// // export default function LeftImageSection({ data , currentIndex }) {
// //   console.log("jb",data);
// //   console.log("hbee",currentIndex);
// //   return (
// //     <div className="w-full h-full flex items-center justify-center">
// //       <motion.div
// //         key={TeamData[currentIndex].img} // Triggers animation on image change
// //         className="w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12"
// //         initial={{ y: 50, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         exit={{ y: -50, opacity: 0 }}
// //         transition={{ duration: 0.5, ease: "easeOut" }}
// //       >
// //         <motion.img
// //           src={TeamData[currentIndex].img}
// //           alt={TeamData[cur].name}
// //           className="w-48 h-40 sm:w-64 sm:h-56 md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] object-cover border-4 border-white shadow-lg"
// //         />
// //       </motion.div>
// //     </div>
// //   );
// // }


// import React, { useState } from 'react';
// import { ChevronUp, ChevronDown } from 'lucide-react';
// import { TeamData } from '@/constants/data';


// function LeftImageSection({data,currentIndex}) {
  
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? TeamData.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === TeamData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const getPreviousIndex = () => {
//     return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
//   };

//   const getNextIndex = () => {
//     return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
//       <div className="max-w-6xl w-full h-[80vh] flex flex-col items-center relative">
       
//         {/* Image Counter */}
//         <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
//           {currentIndex + 1} / {TeamData.length}
//         </div>

//         {/* Vertical Image Strip */}
//         <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 overflow-hidden py-20">
//           {/* Previous Image */}
//           <div 
//             className="w-[60%] aspect-[16/9] cursor-pointer opacity-50 hover:opacity-75 transition-all duration-300 transform scale-75 hover:scale-80"
//             onClick={goToPrevious}
//           >
//             <img
//               src={`${TeamData[getPreviousIndex()]}?auto=format&fit=crop&w=1200&h=675`}
//               alt="Previous"
//               className="w-full h-full object-cover rounded-lg shadow-2xl"
//             />
//           </div>

//           {/* Current Image */}
//           <div className="w-[80%] aspect-[16/9] z-10 transform scale-100 transition-all duration-300">
//             <img
//               src={`${TeamData[currentIndex]}?auto=format&fit=crop&w=1600&h=900`}
//               alt={`Image ${currentIndex + 1}`}
//               className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white/10"
//             />
//           </div>

//           {/* Next Image */}
//           <div 
//             className="w-[60%] aspect-[16/9] cursor-pointer opacity-50 hover:opacity-75 transition-all duration-300 transform scale-75 hover:scale-80"
//             onClick={goToNext}
//           >
//             <img
//               src={`${images[getNextIndex()]}?auto=format&fit=crop&w=1200&h=675`}
//               alt="Next"
//               className="w-full h-full object-cover rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>

//         {/* Side Navigation Indicators */}
//         <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
//                 index === currentIndex 
//                   ? 'bg-white w-4' 
//                   : 'bg-white/50 hover:bg-white/75'
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftImageSection;

// import React from "react";
// import { TeamData } from "@/constants/data";

// function App({ data, currentIndex, setCurrentIndex }) {
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? TeamData.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === TeamData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const getPreviousIndex = () => {
//     return currentIndex === 0 ? TeamData.length - 1 : currentIndex - 1;
//   };

//   const getNextIndex = () => {
//     return currentIndex === TeamData.length - 1 ? 0 : currentIndex + 1;
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="max-w-6xl w-full h-[80vh] flex flex-col items-center relative">
//         {/* Image Counter */}

//         {/* Vertical Image Strip */}
//         <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 overflow-hidden py-20">
//           {/* Previous Image */}
//           <div
//             className="w-[60%] aspect-[16/9] cursor-pointer opacity-50 hover:opacity-75 transition-all duration-300 transform scale-75 hover:scale-80"
//             onClick={goToPrevious}
//           >
//             <img
//               src={TeamData[getPreviousIndex()].img}
//               alt="Previous"
//               className="w-full h-full object-cover rounded-lg shadow-2xl"
//             />
//           </div>

//           {/* Current Image */}
//           <div className="w-[80%] aspect-[16/9] z-10 transform scale-100 transition-all duration-300">
//             <img
//               src={TeamData[currentIndex].img}
//               alt={`Image ${currentIndex + 1}`}
//               className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white/10"
//             />
//           </div>

//           {/* Next Image */}
//           <div
//             className="w-[60%] aspect-[16/9] cursor-pointer opacity-50 hover:opacity-75 transition-all duration-300 transform scale-75 hover:scale-80"
//             onClick={goToNext}
//           >
//             <img
//               src={TeamData[getNextIndex()].img}
//               alt="Next"
//               className="w-full h-full object-cover rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>

//         {/* Side Navigation Indicators */}
        
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TeamData } from "@/constants/data";

function App({ data, currentIndex, setCurrentIndex }) {
  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change image every 3 seconds
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

  // Variants for animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeIn" } },
    exit: { opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.7, ease: "easeIn" } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="max-w-6xl w-full h-[80vh] flex flex-col items-center relative overflow-hidden">
        
        {/* Image Counter */}
        

        {/* Image Strip with Framer Motion */}
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
          
          {/* Previous Image */}
          <motion.div
            className="w-[50%] sm:w-[60%] md:w-[40%] aspect-[16/9] cursor-pointer opacity-50 hover:opacity-75 transition-all transform scale-75 hover:scale-85"
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

          {/* Current Image */}
          <motion.div
            key={currentIndex}
            className="w-[70%] sm:w-[80%] md:w-[60%] aspect-[16/9] z-10 transform scale-100 transition-all"
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

          {/* Next Image */}
          <motion.div
            className="w-[50%] sm:w-[60%] md:w-[40%] aspect-[16/9] cursor-pointer opacity-50 hover:opacity-75 transition-all transform scale-75 hover:scale-85"
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

        {/* Side Navigation Indicators */}
        
      </div>
    </div>
  );
}

export default App;


