// "use client";
// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function RightImageSection({ data, currentIndex }) {
//   return (
//     <div className="w-full flex flex-col items-center justify-center opacity-90 px-4 sm:px-8">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           initial={{ y: 50, opacity: 0 }} // Enter from bottom
//           animate={{ y: 0, opacity: 1 }} // Centered
//           exit={{ y: -50, opacity: 0 }} // Exit to top
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="flex flex-col justify-center items-center gap-y-4 sm:gap-y-6 md:gap-y-8 min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] w-full max-w-lg rounded-xl p-4 sm:p-6"
//         >
//           {/* Name Section */}
//           <motion.div className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide font-light text-center">
//             {data[currentIndex].name}
//           </motion.div>

//           {/* Club & Team Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
//             <Link href="#">
//               <Button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold shadow-md transition-transform hover:scale-105">
//                 {data[currentIndex].club}
//               </Button>
//             </Link>
//             <Button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold shadow-md transition-transform hover:scale-105">
//               {data[currentIndex].team}
//             </Button>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }


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
          className="text-white  text-3xl md:text-5xl lg:text-6xl tracking-wide drop-shadow-lg font-extralight text-center mt-20 lg:-mt-14"
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
        

        {/* Prev & Next Buttons */}
       
      </motion.div>
    </div>
  );
}