import { Iceland } from "next/font/google";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });
import Image from "next/image";
import insta from '@/public/logos/insta.png'
import linkedIn from '@/public/logos/linkedIn.png'

const Footer = () => {
  return (
    <div className="w-screen h-screen flex items-end ">
      <div className="hidden md:block w-full h-40">
        <div
          className={`   bg-black flex justify-between w-full h-full p-2  ${iceland.className}`}
          style={{
            clipPath:
              "polygon(38% 27%, 78% 27%, 81% 0, 100% 0, 100% 100%, 0 100%, 0 0, 35% 0)",
          }}
        >
          {/*Left Side */}
          <div className="flex flex-col gap-6">
            <h2 className="  xl:text-6xl lg:text-[2.8rem] md:text-[2.3rem] xl:tracking-[0.16em] leading-12 lg:tracking-[0.12em] md:tracking-[0.08em]">
              MERAKI - AY'25
            </h2>
            <div className="flex gap-6 ml-12">
              <a href="">
                <Image
                  src={insta}
                  alt=""
                  className="md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
                />
              </a>
              <a href="">
                <Image
                  src={linkedIn}
                  alt=""
                  className="md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
                />
              </a>
            </div>
          </div>

          {/* Right Side*/}
          <div className="flex flex-col gap-6">
            <h2 className="text-end xl:text-6xl lg:text-[2.8rem] md:text-[2.3rem] xl:tracking-[0.16em] leading-12 lg:tracking-[0.12em] md:tracking-[0.08em]">
              IIIT UNA
            </h2>
            <p className="xl:w-[46rem] lg:w-[38rem] md:w-[26rem] leading-[0.9em] lg:text-lg  tracking-[0.16em]">
              Welcome to MERAKI: Where Creativity Meets Technology, the annual
              celebration of innovation, creativity, and technology at IIIT UNA.
              We are more than just a technical fest
            </p>
          </div>
        </div>
      </div>

      <div
          className={`  md:hidden bg-black flex justify-between w-full h-40 p-2  ${iceland.className}`}
        >
          {/*Left Side */}
          <div className="flex flex-col gap-6 sm:w-[50%] w-[60%]">
            <h2 className=" sm:text-[2rem] sm:tracking-wide tracking-wider text-4xl  w-full">
              MERAKI - AY'25
            </h2>
            <div className="flex gap-6 ml-12 leading-3.5">
              <a href="">
                <Image
                  src={insta}
                  alt=""
                  className="w-10 h-10"
                />
              </a>
              <a href="">
                <Image
                  src={linkedIn}
                  alt=""
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Right Side*/}
          <div className="flex flex-col gap-6 items-end ">
            <h2 className="sm:text-[2rem] sm:tracking-wide tracking-wider text-4xl">
              IIIT UNA
            </h2>
            <p className=" hidden sm:block w-[24rem] leading-3.5 text-[1rem] ">
              Welcome to MERAKI: Where Creativity Meets Technology, the annual
              celebration of innovation, creativity, and technology at IIIT UNA.
              We are more than just a technical fest
            </p>
          </div>
        </div>

      
    </div>
  );
};

export default Footer;
