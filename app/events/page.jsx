// "use client";
// import { motion } from "framer-motion";
// import React from "react";

// export default function Events() {
//     return (
//         <div className="min-h-screen px-4 flex flex-col md:flex-row gap-48 items-start justify-center pt-20 pb-16">
//             {/* Left Trapezium with 3D Effect */}
//             <motion.div
//                 initial={{ x: 100, opacity: 0, rotateX: 20 }}
//                 animate={{ x: 0, opacity: 1, rotateX: 30 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 style={{
//                     width: '700px',
//                     height: '300px',
//                     background: 'linear-gradient(to right, #4E0A5B, #2A0436)',
//                     clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)',
//                     border: '3px solid #05D4FE',
//                     transformOrigin: 'center',
//                     boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: 'white',
//                     fontSize: '2rem',
//                     fontWeight: 'bold',
//                 }}
//             >
//                 Main Event
//             </motion.div>

//             {/* Right Cards with 3D Effect */}
//             <div className="w-full md:w-1/3 flex flex-col gap-6">
//                 <motion.div
//                     initial={{ x: -100, opacity: 0, rotateY: -10 }}
//                     animate={{ x: 0, opacity: 1, rotateY: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//                     className="bg-red-500 text-white p-4 rounded-lg shadow-lg h-48 flex items-center justify-center text-xl font-bold transform perspective-1000"
//                 >
//                     Event 1
//                 </motion.div>

//                 <motion.div
//                     initial={{ x: -100, opacity: 0, rotateY: -10 }}
//                     animate={{ x: 0, opacity: 1, rotateY: 0 }}
//                     transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//                     className="bg-green-500 text-white p-4 rounded-lg shadow-lg h-48 flex items-center justify-center text-xl font-bold transform perspective-1000"
//                 >
//                     Event 2
//                 </motion.div>
//             </div>
//         </div>
//     );
// }