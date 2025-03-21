"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Gallery", path: "/gallery" },
        { label: "About", path: "/about" },
        { label: "Team", path: "/team" },
        { label: "FAQs", path: "/faq" },
        { label: "Contact Us", path: "/contact" },
    ];

    return (
        <div>
            <div className="absolute z-[200] w-[100%] left-1/2 -translate-x-1/2">
                <div
                    className="w-full h-[70px] p-2 md:p-6 bg-white/10 backdrop-blur-lg border border-white/10 shadow-lg flex items-center justify-between relative z-[200]"
                    style={{
                        clipPath:
                            "polygon(0% 0%, 100% 0%, 100% 100%, 78% 100%, 70% 60%, 26.4% 60%, 19% 99%, 0% 98%, 0% 79%, 0% 67%, 0% 31.6%, 0% 9.4%, 0% 0%)",
                    }}
                >
                    <Link href="/">
                        <div className="w-[60px] h-[40px] bg-no-repeat bg-contain bg-center bg-[url('/images/Vectors/logo.svg')]" />
                    </Link>
                    <div className="cursor-pointer z-[200]" onClick={() => setMenuOpen(!menuOpen)}>
                        <RxHamburgerMenu className="text-white text-4xl transition-all duration-300" />
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
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-[200]"
                    >
                        <IoClose
                            className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white text-4xl cursor-pointer transition-all duration-300 hover:scale-110"
                            onClick={() => setMenuOpen(false)}
                        />

                        <div className="w-full max-w-4xl text-center px-8 mt-16 sm:mt-24 flex flex-col items-center justify-center z-[200]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 justify-center">
                                {menuItems.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.path}
                                        className="relative flex flex-row items-center text-2xl sm:text-4xl font-semibold group transition-all sm:justify-start z-[200]"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.span
                                            className="mr-4 text-lg font-bold text-gray-400 transition-all group-hover:text-white group-hover:scale-125 z-[200]"
                                            whileHover={{
                                                scale: 1.3,
                                                rotate: -5,
                                                color: ["#888", "#ddd", "#fff"],
                                                transition: { duration: 0.4 },
                                            }}
                                        >
                                            0{index + 1}.
                                        </motion.span>

                                        <span className="relative z-[200] transition-all group-hover:text-gray-300 group-hover:scale-105 group-hover:shadow-lg">
                                            {item.label}
                                        </span>

                                        <span className="absolute bottom-[-8px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full z-[200]"></span>

                                        <motion.div
                                            className="absolute -left-6 -top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-[300]"
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
