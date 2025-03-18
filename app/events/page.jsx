"use client";
import React from 'react';
import Head from 'next/head';

const MysteryOps = () => {
  return (
    <>
      <Head>
        <title>Mystery-Ops</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style jsx global>{`
          .clip-path-polygon {
            clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
          }
        `}</style>
      </Head>
      
      <div className="min-h-screen w-full bg-black flex items-center justify-center p-2 relative overflow-hidden " style={{
        backgroundImage: "url('/images/backgrounds/event.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Background effect - lightning */}
        <div className="absolute inset-0 z-0 bg-[url('/lightning-bg.jpg')] bg-cover bg-center opacity-70"></div>
        
        {/* Main content - scrollable on small screens to maintain layout */}
        <div className="w-full min-w-[640px] max-w-6xl z-10 py-4 px-2 overflow-x-auto">
          {/* Header */}
          <div className="w-full mb-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider font-mono">
              MYSTERY-OPS
            </h1>
          </div>
          
          {/* Cards container - consistent layout */}
          <div className="w-full flex flex-row gap-6">
            {/* Left card */}
            <div className="w-5/12 rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30 relative overflow-hidden">
              <h2 className="text-xl font-mono text-white uppercase border-b border-white/70 pb-2 mb-4">
                DESCRIPTION
              </h2>
              {/* Checkerboard placeholder */}
              <div className="h-80 w-full rounded">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array(64).fill().map((_, i) => (
                    <div 
                      key={i} 
                      className={`${(Math.floor(i/8) + i%8) % 2 === 0 ? 'bg-gray-300' : 'bg-gray-400'} opacity-20`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="w-7/12 flex flex-col gap-6">
              {/* Right top card */}
              <div className="rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30">
                <h2 className="text-xl font-mono text-white uppercase border-b border-white/70 pb-2 mb-4">
                  DESCRIPTION
                </h2>
                <p className="text-sm text-gray-200 mb-4">
                  A simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen
                  book. Lorem ipsum dolor sit amet, consectetur, looked up one of the more obscure Latin words,
                  consectetur. From a Lorem Ipsum passage, and going
                  through the cites of the word in classical literature,
                  discovered the undoubtable source.
                </p>
                <div className="w-full mt-2">
                  <p className="text-purple-300 hover:text-purple-200 transition-colors duration-300 font-mono cursor-pointer">
                    REGISTER HERE
                  </p>
                </div>
              </div>
              
              {/* Right bottom card */}
              <div className="rounded-lg bg-purple-900/40 backdrop-blur-sm p-4 border border-cyan-400/70 shadow-lg shadow-cyan-500/30">
                <h2 className="text-xl font-mono text-white uppercase border-b border-white/70 pb-2 mb-6">
                  THREAT LEVEL &amp;PRIZE POOL
                </h2>
                
                <div className="flex flex-row gap-4 items-center">
                  {/* Threat level diagram */}
                  <div className="w-2/5">
                    <div className="relative w-full aspect-square bg-transparent">
                      <div className="absolute inset-0 bg-red-900/50 backdrop-blur-sm rounded-md border border-red-700/70 clip-path-polygon">
                        <div className="absolute top-2 left-8 right-8 flex justify-center">
                          <span className="text-white font-mono text-sm border-b border-white/70 px-4 pb-1">
                            THREAT
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="text-white font-mono text-xs">
                            <p>Mystery</p>
                            <p>Threat level:</p>
                            <p>High</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Prize pool */}
                  <div className="w-3/5">
                    <div className="text-white font-mono mb-6">
                      <p className="text-xl">PRIZE POOL:</p>
                      <p className="text-2xl font-bold">10000/-</p>
                    </div>
                    
                    {/* Category tags */}
                    <div className="flex gap-4">
                      <div className="bg-purple-800/60 backdrop-blur-sm px-6 py-1 rounded-full text-white font-mono border border-purple-500/30">
                        Tech
                      </div>
                      <div className="bg-purple-800/60 backdrop-blur-sm px-6 py-1 rounded-full text-white font-mono border border-purple-500/30">
                        Fun
                      </div>
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

export default MysteryOps;
