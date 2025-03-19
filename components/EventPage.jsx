"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import {cardsData} from "../constants/data"
import Link from "next/link";

const EventPage = ({data}) => {
  
  return (
    <>
      <Head>
        <title>{data.id}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style jsx global>{`
          .clip-path-polygon {
            clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
          }
          .rotate-card {
            transform: rotate(-5deg);
          }
        `}</style>
      </Head>
      <div
        className="min-h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/backgrounds/event.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 z-0 bg-[url('/lightning-bg.jpg')] bg-cover bg-center opacity-70"></div>

        <div className="w-full max-w-6xl z-10 py-6 px-4 mt-12">
          <div className="w-full text-left mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wider font-mono">
              {data.name}
            </h1>
          </div>

          <div className="w-full flex flex-col sm:flex-row lg:gap-20 lg:mb-20 gap-4">
            {/* Left Card with Image */}
            <div className="w-full sm:w-1/2 rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30 relative overflow-hidden  ">
              <h2 className=" font-mono text-white uppercase border-b border-white/70 pb-2 mb-3 text-xl ">
                DESCRIPTION
              </h2>
              <div className="h-full sm:h-ful w-full rounded-lg overflow-hidden relative">
                <img
                  src={`${data.image}`}
                  alt="event display"
                  width={700}
                  height={700}
                />
              </div>
            </div>
            {/* Right Section */}
            <div className="w-full sm:w-1/2 grid grid-rows-2 justify-between gap-3">
              {/* Description Card */}
              <div className="rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30 rotate-card">
                <h2 className="text-lg font-mono text-white uppercase border-b border-white/70 pb-2 mb-3 lg:text-xl text-right">
                  DESCRIPTION
                </h2>
                <div className="flex flex-col gap-24">
                  <p className="text-sm text-gray-200 mb-3 text-wrap">
                    {data.overview}
                  </p>
                  <Link
                    className="text-purple-300 hover:text-purple-200 transition-colors duration-300 font-mono cursor-pointer"
                    href={`${data.unstopLink}`}
                  >
                    REGISTER HERE
                  </Link>
                </div>
              </div>

              {/* Threat Level & Prize Pool */}
              <div className="rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30 rotate-card sm:mb-1">
                <h2 className="text-lg font-mono text-white uppercase border-b border-white/70 pb-2 mb-4 text-center lg:text-xl">
                  THREAT LEVEL &amp; PRIZE POOL
                </h2>

                <div className="flex flex-row sm:gap-10 md:gap-15 lg:gap-20 items-center ">
                  <div className="w-full max-w-[180px] ">
                    <div className="relative w-full aspect-square bg-transparent flex items-center justify-center">
                      <svg
                        id="52:21"
                        viewBox="0 0 153 201"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[120px] h-[150px]"
                      >
                        {/* Red Border Shape */}
                        <path
                          d="M2 161.534V2H127.719V65.4509L151 80.5583V199L35.9241 191.144L2 161.534Z"
                          stroke="#C8424D"
                          strokeWidth="2"
                        />

                        {/* Text Inside the Shape */}
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
                          fontSize="10"
                          fontFamily="monospace"
                          style={{
                            marginTop: "100px",
                          }}
                        >
                          Mystery
                        </text>

                        {/* <text
                          x="20"
                          y="140"
                          fill="red"
                          fontSize="12"
                          fontFamily="monospace"
                          fontWeight="bold"
                          style={{
                            paddingRight: "10px",
                          }}
                        >
                          Threat level:
                        </text> */}

                        <text
                          x="20"
                          y="140"
                          fill="red"
                          fontSize="12"
                          fontFamily="monospace"
                          fontWeight="bold"
                        >
                          {data.difficulty}
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full max-w-[180px] flex flex-col gap-10 justify-center items-center">
                    <div className="text-white font-mono text-center">
                      <p className="text-lg">PRIZE POOL :</p>
                      <p className="text-xl font-bold">{data.prizePool}</p>
                    </div>

                    <div className="flex  flex-col lg:flex-row gap-4 ">
                     {data.tag.map((tag,index)=>(
                       <div className="bg-purple-400/5 backdrop-blur-sm px-2 py-1 rounded-2xl text-white font-mono border border-purple-500/30 text-wrap" key={index}>
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
