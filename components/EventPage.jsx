"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const EventPage = ({ data }) => {
  const [maxTags, setMaxTags] = useState(data.tag.length);

  useEffect(() => {
    const handleResize = () => {
      setMaxTags((window.innerWidth <= 745 && window.innerWidth >=637 ) ? 2 : data.tag.length);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data.tag.length]);

  return (
    <>
      <div
        className="min-h-screen w-full bg-black flex items-center justify-center mb-5 sm:mb-10 md:mb-16 lg:mb-0 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/backgrounds/event.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 z-0 bg-[url('/lightning-bg.jpg')] bg-cover bg-center opacity-70"></div>

        <div className="w-full max-w-6xl z-10 py-6 px-4 mt-12 ">
          <div className="w-full text-left mb-6">
            <h2 className="text-5xl inline-flex w-full items-center justify-center font-bold mb-4">{data.name}</h2>
          </div>

          <div className="w-full flex flex-col sm:flex-row lg:gap-20 lg:mb-20 gap-4">
            <div className="w-full sm:w-1/2 rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30 flex flex-col items-center transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={data.image}
                  alt="event display"
                  className="w-full h-auto max-h-[30rem] object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col justify-around gap-3 transition-transform duration-500 hover:scale-105"
            style={{
              transform: "rotateY(-10deg)",
              transformOrigin: "left center"
            }}
            >
              {/* Description Card */}
              <div className="rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30 hover:border-cyan-300 hover:shadow-cyan-300/50 transition-all duration-300">
                <h2 className="font-mono text-white uppercase border-b border-white/70 pb-2 mb-3 text-xl text-right">
                  DESCRIPTION
                </h2>
                <p className="text-sm text-gray-200 mb-3 lg:text-xl md:text-lg">{data.overview}</p>
                <div className="inline-flex justify-around items-center w-full">
                  <Link
                    className="text-purple-300 underline hover:text-purple-200 transition-colors duration-300 font-mono cursor-pointer"
                    href={data.unstopLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    REGISTRATION LINK
                  </Link>
                  <Link
                    className="text-purple-300 underline hover:text-purple-200 transition-colors duration-300 font-mono cursor-pointer"
                    href={data.brochureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BROCHURE LINK
                  </Link>
                </div>
              </div>

              {/* Threat Level & Prize Pool */}
              <div className="rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30 hover:border-cyan-300 hover:shadow-cyan-300/50 transition-all duration-300">
                <h2 className="text-lg font-mono text-white uppercase border-b border-white/70 pb-2 text-center lg:text-xl">
                  THREAT LEVEL &amp; PRIZE POOL
                </h2>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="w-full max-w-[180px]">
                    <div className="relative w-full aspect-square bg-transparent flex items-center justify-center">
                      <svg
                        viewBox="0 0 153 201"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto max-h-[160px] max-w-[160px]"
                      >
                        <path
                          d="M2 161.534V2H127.719V65.4509L151 80.5583V199L35.9241 191.144L2 161.534Z"
                          stroke="#C8424D"
                          strokeWidth="2"
                        />
                        <text
                          x="20"
                          y="30"
                          fill="white"
                          fontSize="14"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          THREAT
                        </text>
                        <line
                          x1="20"
                          y1="35"
                          x2="100"
                          y2="35"
                          stroke="white"
                          strokeWidth="3"
                        />
                        <text
                          x="20"
                          y="120"
                          fill="white"
                          fontSize="14"
                          fontWeight="bold"
                          fontFamily="monospace"
                        >
                          Threat-Level:
                        </text>

                        <text x="20" y="140" fill="red" fontSize="15" fontFamily="monospace" fontWeight="bold">
                          <tspan x="20" y="140">{data.difficulty}</tspan>
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full max-w-[180px] flex flex-col gap-5 justify-center items-center">
                    <div className="text-white font-mono text-center">
                      <p className="text-lg">PRIZE POOL :</p>
                      <p className="text-xl font-bold">{data.prizePool}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {data.tag.slice(0, maxTags).map((tag, index) => (
                        <div
                          className="bg-purple-400/5 backdrop-blur-sm px-2 py-1 rounded-2xl text-white font-mono border border-purple-500/30"
                          key={index}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
