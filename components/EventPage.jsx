"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { cardsData } from "../constants/data";
import Link from "next/link";

const EventPage = ({ data }) => {
  return (
    <>
      <div
        className="min-h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden "
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
            <h1 className="text-3xl inline-flex justify-center items-center w-full sm:text-4xl font-bold text-white tracking-wider font-mono">
              {data.name}
            </h1>
          </div>

          <div className="w-full flex flex-col sm:flex-row lg:gap-20 lg:mb-20 gap-4">
            {/* Left Card with Image */}
            <div className="w-full sm:w-1/2 rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30 relative overflow-hidden flex flex-col items-center">
              <div className="w-full flex justify-center">
                <img
                  src={`${data.image}`}
                  alt="event display"
                  className="w-full h-auto max-h-[30rem] object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full sm:w-1/2 flex flex-col justify-around gap-3">
              {/* Description Card */}
              <div className="rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30">
                <h2 className="font-mono text-white uppercase border-b border-white/70 pb-2 mb-3 text-xl text-right">
                  DESCRIPTION
                </h2>
                <p className="text-sm text-gray-200 mb-3 lg:text-xl md:text-lg">
                  {data.overview}
                </p>
                <Link
                  className="text-purple-300 hover:text-purple-200 transition-colors duration-300 font-mono cursor-pointer"
                  href={`${data.unstopLink}`}
                >
                  REGISTER HERE
                </Link>
              </div>

              {/* Threat Level & Prize Pool */}
              <div className="rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30">
                <h2 className="text-lg font-mono text-white uppercase border-b border-white/70 pb-2 text-center lg:text-xl">
                  THREAT LEVEL &amp; PRIZE POOL
                </h2>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="w-full max-w-[180px] ">
                    <div className="relative w-full aspect-square bg-transparent flex items-center justify-center">
                      <svg
                        id="52:21"
                        viewBox="0 0 153 201"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto max-h-[170px] max-w-[170px]"
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
                          fontSize="15"
                          fontFamily="monospace"
                        >
                          Mystery
                        </text>

                        <text x="20" y="140" fill="red" fontSize="15" fontFamily="monospace" fontWeight="bold">
                          <tspan x="20" y="140">Threat:</tspan>
                          <tspan x="20" y="155">{data.difficulty}</tspan>
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full max-w-[180px] flex flex-col gap-5 justify-center items-center">
                    <div className="text-white font-mono text-center">
                      <p className="text-lg">PRIZE POOL :</p>
                      <p className="text-xl font-bold">{data.prizePool}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                      {data.tag.map((tag, index) => (
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