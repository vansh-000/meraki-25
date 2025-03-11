import Card from "@/components/Card";
import Image from "next/image";
import merakiAboutLogo from "@/public/logos/merakiAboutLogo.png"
import { Iceland } from "next/font/google";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });
export default function About() {
  return (
    <div className="h-screen bg-[url('/images/backgrounds/about.jpeg')] md:bg-[url('/images/backgrounds/about1.jpeg')] bg-cover bg-center flex">
      <Card />
      <div className={`hidden sm:block md:hidden lg:block ${iceland.className} backdrop-brightness-50 lg:backdrop-brightness-100 z-50 w-[100%] h-[100%] lg:w-[38%] lg:h-[75%]  self-center text-[1.05rem] sm:text-[1.5rem] lg:text-[1.2rem] xl:text-[1.4rem] lg:tracking-wide xl:tracking-wider p-7 lg:p-4 lg:ml-6 xl:mt-8 pt-32 sm:pt-40 `} >
        MERAKI, the technical fest of IIIT UNA, is more than just a
        gathering—it's a celebration of innovation, creativity, and
        technological excellence. Designed for dreamers, creators, and tech
        enthusiasts, MERAKI provides a platform to explore new ideas,
        collaborate with like-minded individuals, and push the boundaries of
        what’s possible. From cutting-edge competitions and hands-on workshops
        to insightful speaker sessions and interactive exhibitions, MERAKI
        offers an immersive experience. Whether you're a coder, designer,
        engineer, or simply passionate about technology, this is your chance to
        showcase your skills and be part of a community that is shaping the
        future. Join us at MERAKI and take a step toward innovation and
        limitless possibilities!
      </div>
      <div className={` sm:hidden md:block lg:hidden ${iceland.className}  z-50 backdrop-brightness-50 md:backdrop-brightness-100 h-[100%] md:w-[38%] md:h-[75%]  self-center text-[1.2rem] p-8 pt-32 md:pt-0 md:p-4 md:ml-6 md:mt-8 `} >
        MERAKI, the technical fest of IIIT UNA, is a hub of innovation,
        creativity, and technology. It brings together dreamers, creators, and
        tech enthusiasts to explore ideas, collaborate, and push boundaries.
        With competitions, workshops, speaker sessions, and exhibitions, MERAKI
        offers an immersive experience. Whether you're a coder, designer, or
        engineer, showcase your skills, gain insights, and be part of a
        community shaping the future. Join us at MERAKI and embrace innovation,
        discovery, and endless possibilities!
      </div>
      <div className="hidden md:block absolute lg:top-[26.2%] lg:left-[43%] md:top-[30%] md:left-[44%] z-50 ">
        <Image src={merakiAboutLogo} alt="merakiAboutLogo" className="z-100 lg:w-[250px] lg:h-[250px] md:h-[180px] md:w-[180px] absolute lg:top-[15%] lg:left-[15%] md:top-[18%] md:left-[18%]" />
        <div className="lg:h-[350px] lg:w-[350px] md:h-[280px] md:w-[280px]  grid grid-cols-2"
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
  );
}
