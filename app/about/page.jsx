import Card from "@/components/Card";
import Image from "next/image";
import merakiAboutLogo from "@/public/logos/merakiAboutLogo.png"
import { Iceland } from "next/font/google";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });
export default function About() {
  return (
    <div className=" bg-[url('/images/backgrounds/about.jpeg')] md:bg-[url('/images/backgrounds/about1.jpeg')] h-[95%] bg-cover bg-center flex">
      <Card />
      <div className="hidden h-screen sm:flex  flex-col justify-center items-center md:flex-row  md:justify-start w-full relative sm:-mb-10 ">
        <div className={`${iceland.className} backdrop-brightness-50 md:backdrop-brightness-100 z-50 h-[39vh] w-[80%] md:w-[49%] md:h-[75%] lg:w-[48%] text-[1rem] sm:text-[1.2rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] tracking-wide p-5 md:p-8 mt-80  md:mt-60 lg:mt-68 xl:mt-68 mb-24 text-center`}>
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
            className="z-100 w-[150px] h-[150px] top-[15%] left-[15%] sm:w-[150px] sm:h-[150px] sm:top-[12.5%] sm:left-[12.5%] lg:w-[250px] lg:h-[250px] md:h-[170px] md:w-[170px] absolute lg:top-[15%] lg:left-[15%] md:top-[17%] md:left-[17%]"
          />
          <div className=" w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] lg:h-[350px] lg:w-[350px] md:h-[250px] md:w-[250px] grid grid-cols-2"
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

      <div className="sm:hidden h-screen flex flex-col p-4  justify-center items-center gap-8 -mb-10 overflow-y-hidden">
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
        <div className={`${iceland.className} p-4 text-center w-[80%] max-h-[50%] overflow-y-scroll scroll-hidden
         backdrop-brightness-50  `}>
          MERAKI, the technical fest of IIIT UNA, is a hub of innovation, creativity, and technology. It brings together dreamers, creators, and tech enthusiasts to explore ideas, collaborate, and push boundaries. With competitions, workshops, speaker sessions, and exhibitions, MERAKI offers an immersive experience. Whether you're a coder, designer, or engineer, showcase your skills, gain insights, and be part of a community shaping the future. Join us at MERAKI and embrace innovation, discovery, and endless possibilities!
        </div>
      </div>
    </div>
  );
}
