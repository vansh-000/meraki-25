import Card from "@/components/Card";
import Image from "next/image";
import merakiAboutLogo from "@/public/logos/merakiAboutLogo.png"
import { Iceland } from "next/font/google";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });
export default function About() {
  return (
    <div className=" bg-[url('/images/backgrounds/about.jpeg')] md:bg-[url('/images/backgrounds/about1.jpeg')] bg-cover bg-center flex ">
      <Card />
      <div className="hidden h-screen sm:flex  flex-col justify-end items-center md:flex-row  md:justify-start w-full relative ">
        <div className={`${iceland.className} backdrop-brightness-50 md:backdrop-brightness-100 z-50 h-[41vh] w-[80%] md:w-[49%] md:h-[75%] text-[1rem] sm:text-[1.2rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] tracking-wide p-5 md:p-8 mt-10 md:mt-52 lg:mt-68 xl:mt-68 mb-24 text-center`}>
          MERAKI, the technical fest of IIIT UNA, is a hub of innovation,
          creativity, and technology. It brings together dreamers, creators, and
          tech enthusiasts to explore ideas, collaborate, and push boundaries.
          With competitions, workshops, speaker sessions, and exhibitions,
          MERAKI offers an immersive experience. Whether you're a coder,
          designer, or engineer, showcase your skills, gain insights, and be
          part of a community shaping the future. Join us at MERAKI and embrace
          innovation, discovery, and endless possibilities!
        </div>

        <div className="absolute top-1/6 lg:top-[26.2%] lg:left-[62%] md:top-[30%] md:left-[50%] z-50 icon">
          <Image
            src={merakiAboutLogo}
            alt="merakiAboutLogo"
            className="z-100 w-[150px] h-[150px] top-[15%] left-[15%] sm:w-[150px] sm:h-[150px] sm:top-[12%] sm:left-[12%] lg:w-[250px] lg:h-[250px] md:h-[180px] md:w-[180px] absolute lg:top-[15%] lg:left-[15%] md:top-[18%] md:left-[18%]"
          />
          <div className=" w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] lg:h-[350px] lg:w-[350px] md:h-[280px] md:w-[280px] grid grid-cols-2"
            style={{
              clipPath:
                "polygon(0% 0%, 0% 100%, 6% 94%, 6% 6%, 94% 6%, 94% 94%, 6% 94%, 0 100%, 100% 100%, 100% 0%)",
            }}
          >
            <div className="bg-white"></div>
            <div className="bg-black"></div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex flex-col p-4 gap-10 mt-20 mb-10 items-center">
        <div className=" z-50 relative">
          <Image
            src={merakiAboutLogo}
            alt="merakiAboutLogo"
            className="z-100 w-[100px] h-[100px] top-[17%] left-[17%]  absolute  "
          />
          <div
            className=" w-[150px] h-[150px]  grid grid-cols-2 "
            style={{
              clipPath:
                "polygon(0% 0%, 0% 100%, 6% 94%, 6% 6%, 94% 6%, 94% 94%, 6% 94%, 0 100%, 100% 100%, 100% 0%)",
            }}
          >
            <div className="bg-white"></div>
            <div className="bg-black"></div>
          </div>
        </div>
        <div className={`${iceland.className} p-4 text-center
         backdrop-brightness-50  `}>
          MERAKI, the technical fest of IIIT UNA, is a hub of innovation, creativity, and technology. It brings together dreamers, creators, and tech enthusiasts to explore ideas, collaborate, and push boundaries. With competitions, workshops, speaker sessions, and exhibitions, MERAKI offers an immersive experience. Whether you're a coder, designer, or engineer, showcase your skills, gain insights, and be part of a community shaping the future. Join us at MERAKI and embrace innovation, discovery, and endless possibilities!
        </div>
      </div>
    </div>
  );
}
