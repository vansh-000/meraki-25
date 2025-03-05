"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "Events",
        "Gallery",
        "About",
        "Brochure",
        "Sponsors",
        "Team",
        "FAQs",
        "Contact Us",
    ];

    return (
        <div>
            <div className="absolute z-50 w-[90%] h-[70px] left-1/2 -translate-x-1/2 mt-3">
                <div
                    className="w-full h-full bg-white/6 backdrop-blur-lg border border-white/10 shadow-lg flex items-center justify-between px-6"
                    style={{
                        clipPath:
                            "polygon(0% 100%, 100% 100%, 100% 0%, 78% 0%, 70.5% 40%, 26.4% 40%, 19.3% .6%, 0% 1.6%, 0% 20.9%, 0% 33%, 0% 68.4%, 0% 90.6%, 0% 100%)",
                    }}
                >
                    <div className="w-[60px] h-[40px] bg-no-repeat bg-contain bg-center bg-[url('/images/Vectors/logo.svg')]"></div>

                    <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <IoClose className="text-white text-5xl transition-all duration-300" />
                        ) : (
                            <RxHamburgerMenu className="text-white text-4xl transition-all duration-300" />
                        )}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }} // Slowed down closing animation
                        className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-40"
                    >
                        <div className="grid grid-cols-2 w-full max-w-4xl text-center gap-12 px-8 mt-10">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="relative flex flex-col items-center text-4xl font-semibold group transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.span
                                        className="absolute left-[-40px] text-lg font-bold text-gray-400 transition-all group-hover:text-white group-hover:scale-125"
                                        whileHover={{
                                            scale: 1.3,
                                            rotate: -5,
                                            color: ["#888", "#ddd", "#fff"],
                                            transition: { duration: 0.4 },
                                        }}
                                    >
                                        0{index + 1}
                                    </motion.span>

                                    <span className="relative z-10 transition-all group-hover:text-gray-300 group-hover:scale-105 group-hover:shadow-lg">
                                        {item}
                                    </span>

                                    <span className="absolute bottom-[-12px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>

                                    <motion.div
                                        className="absolute -left-10 -top-1 w-8 h-8 rounded-full bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
