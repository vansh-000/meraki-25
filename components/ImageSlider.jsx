"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { TeamData } from "@/constants/data";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function HomeSlider() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      isVisible ? swiperInstance.autoplay.start() : swiperInstance.autoplay.stop();
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center min-h-[85vh] sm:min-h-screen px-4 py-8 sm:px-6 md:px-10 lg:px-24 bg-black"
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          scale: 0.9,
        }}
        breakpoints={{
          400: { slidesPerView: 1, spaceBetween: 10 },
          600: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1280: { slidesPerView: 2, spaceBetween: 40 },
        }}
        className="w-full max-w-4xl h-auto flex items-center justify-center"
      >
        {TeamData.map((member) => (
          <SwiperSlide key={member.name} className="flex justify-center items-center">
            <div className="text-center flex flex-col items-center w-full sm:w-[90%] md:w-[80%] lg:w-[65%] max-w-2xl h-auto sm:h-[90vh] space-y-6 p-6 justify-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-full aspect-square max-w-[335px] max-h-[335px] object-cover rounded-3xl shadow-xl"
              />
              <h3 className="text-3xl sm:text-4xl font-bold text-white">{member.name}</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300">{member.club} - {member.team}</p>
              <div className="flex space-x-6 sm:space-x-8 mt-4">
                {member.Linkedin && (
                  <a href={member.Linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-125">
                    <FaLinkedin className="text-3xl sm:text-4xl md:text-5xl" />
                  </a>
                )}
                {member.insta && (
                  <a href={member.insta} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 transition-transform transform hover:scale-125">
                    <FaInstagram className="text-3xl sm:text-4xl md:text-5xl" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-125">
                    <FaGithub className="text-3xl sm:text-4xl md:text-5xl" />
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
