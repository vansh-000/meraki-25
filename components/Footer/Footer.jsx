import { Iceland } from "next/font/google";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });
import Image from "next/image";
import insta from '@/public/logos/insta.png';
import linkedIn from '@/public/logos/linkedIn.png';

const Footer = () => {
  return (
    <>
      <div className="relative z-[200] mt-[-97px] hidden text-white md:block w-full">
        <div
          className={`bg-black w-full h-24 flex flex-col md:flex-row justify-between px-6 ${iceland.className}`}
          style={{
            clipPath: "polygon(38% 27%, 78% 27%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 35% 0)",
          }}
        >
          <div className="flex flex-col gap-2 md:gap-3">
            <h2 className="text-2xl sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] xl:text-4xl tracking-wide">
              MERAKI - AY'25
            </h2>
            <div className="flex gap-2 md:gap-3">
              <a href="https://www.instagram.com/meraki_iiitu/">
                <Image src={insta} alt="Follow us on Instagram" className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 items-end">
            <h2 className="text-2xl sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] xl:text-4xl tracking-wide">
              IIIT UNA
            </h2>
            <p className="hidden sm:block w-[20rem] md:w-[22rem] lg:w-[30rem] xl:w-[38rem] text-sm md:text-base tracking-wide leading-tight">
              Welcome to MERAKI: Where Creativity Meets Technology, the annual
              celebration of innovation, creativity, and technology at IIIT UNA.
            </p>
          </div>
        </div>
      </div>
      <div className={`md:hidden flex relative mt-[-40px] bottom-0 ${iceland.className} left-0 right-0 bg-black w-full h-20 flex flex-row justify-around items-center px-6 py-2 z-50`}>
      
          <a href="https://www.instagram.com/meraki_iiitu/">
            <Image src={insta} alt="Follow us on Instagram" className="w-6 h-6" />
          </a>
        <h2 className="text-lg tracking-wide text-white">MERAKI - AY'25</h2>
        <h2 className="text-lg tracking-wide text-white">IIIT UNA</h2>
      </div>
    </>
  );
};

export default Footer;
