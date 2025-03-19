"use client"
import Image from "next/image";
import event from "@/public/images/backgrounds/event.png";
import { useRouter } from "next/navigation";
import { Iceland, Red_Rose } from "next/font/google";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });
const redRose = Red_Rose({ subsets: ["latin"], weight: ["400", "700"] });

const EventCard = ({
  name = "Event Name",
  overview = "Event Overview",
  EventNumber = -1,
  image,
}) => {
  const router = useRouter();
  const routeName = name.split(" ").join("-");
  console.log(routeName);
  return (
    <div className=" h-[260px] w-[230px] sm:h-[310px] sm:w-[300px]  md:h-[340px] md:w-[330px] lg:h-[340px] lg:w-[330px] xl:h-[440px] xl:w-[430px] relative  flex flex-col justify-end " onClick={()=> router.push(`/events/${routeName}`)}>
      <Image
        src={image}
        fill
        alt="eventImage"
        className="absolute top-0 left-0 w-full h-full rounded-2xl z-0"
      />
      <div className="z-10 absolute top-1/2 left-3 md:left-3  xl:left-4">
        <p
          className={` ${iceland.className} text-2xl md:text-4xl xl:text-5xl text-[#F5DE19] `}
        >{`<${EventNumber}>`}</p>
      </div>
      <div
        className="w-full h-1/2 bg-[#303030]  text-white  overflow-hidden rounded-2xl relative flex items-end justify-center z-10"
        style={{
          clipPath:
            "polygon( 17.346% 34.458%,5.063% 34.458%,5.063% 34.458%,4.242% 34.56%,3.463% 34.855%,2.737% 35.328%,2.073% 35.962%,1.483% 36.74%,0.977% 37.648%,0.565% 38.669%,0.258% 39.787%,0.066% 40.986%,0% 42.25%,0% 92.208%,0% 92.208%,0.066% 93.472%,0.258% 94.671%,0.565% 95.789%,0.977% 96.81%,1.483% 97.718%,2.073% 98.496%,2.737% 99.13%,3.463% 99.603%,4.242% 99.898%,5.063% 100%,94.936% 100%,94.936% 100%,95.758% 99.898%,96.537% 99.603%,97.263% 99.13%,97.927% 98.496%,98.517% 97.718%,99.023% 96.81%,99.435% 95.789%,99.742% 94.671%,99.934% 93.472%,100% 92.208%,100% 27.295%,100% 27.295%,99.934% 26.031%,99.742% 24.832%,99.435% 23.714%,99.023% 22.693%,98.517% 21.785%,97.927% 21.006%,97.263% 20.372%,96.537% 19.899%,95.758% 19.604%,94.936% 19.502%,88.037% 19.502%,88.037% 19.502%,87.391% 19.439%,86.765% 19.253%,86.166% 18.951%,85.6% 18.541%,85.073% 18.028%,84.591% 17.419%,84.159% 16.721%,83.785% 15.942%,83.473% 15.086%,83.231% 14.162%,81.362% 5.488%,81.362% 5.488%,81.119% 4.564%,80.808% 3.708%,80.433% 2.928%,80.002% 2.231%,79.52% 1.622%,78.993% 1.109%,78.427% 0.698%,77.828% 0.397%,77.202% 0.211%,76.556% 0.148%,33.084% 0.148%,33.084% 0.148%,32.469% 0.205%,31.872% 0.374%,31.298% 0.648%,30.753% 1.023%,30.242% 1.492%,29.769% 2.049%,29.342% 2.691%,28.964% 3.41%,28.642% 4.202%,28.38% 5.06%,22.051% 29.546%,22.051% 29.546%,21.789% 30.404%,21.466% 31.196%,21.088% 31.915%,20.661% 32.556%,20.188% 33.114%,19.677% 33.583%,19.132% 33.958%,18.558% 34.232%,17.961% 34.401%,17.346% 34.458% )",
        }}
      >
        <div className="relative w-full h-full flex flex-col p-2">
          <h2
            className={` ${iceland.className} absolute w-[50%] text-white text-[0.9rem] sm:text-md md:text-[1.1rem] px-1 lg:text-[1.1rem] xl:text-2xl font-bold z-20 tracking-[0.24em]  uppercase left-16 sm:left-28 md:left-[6rem] lg:left-[5.5rem] xl:left-[7.8rem]`}
          >
            {name}
          </h2>
          <p
            className={` ${iceland.className} absolute top-12 sm:top-14 md:top-14 lg:top-[3.7rem] xl:top-20  text-white text-[0.72rem] sm:text-[0.9rem] md:text-[1rem]  xl:text-xl  w-full z-20  pr-6 p-2 text-justify  `}
          >
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
