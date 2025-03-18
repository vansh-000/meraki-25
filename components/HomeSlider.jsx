"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import EventCard from "./EventCard";
import { cardsData } from "@/constants/data";

export default function HomeSlider() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen h-auto overflow-hidden bg-cover bg-center bg-no-repeat py-8 px-4 sm:py-12 sm:px-8 md:px-16 lg:px-24 transition-transform duration-700 ease-in-out transform"
      style={{
        backgroundImage: "url('/images/backgrounds/Slider_Home.jpeg')",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) =>
            `<span class='${className} !bg-blue-500 opacity-50 w-3 h-3 mx-1'></span>`,
        }}
        
        
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 2,
          scale: 0.85,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            scale: 0.85 
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            scale: 0.9 
          },
        }}
        className="w-full max-w-7xl h-[500px]">
        {cardsData.map((event) => (
          <SwiperSlide key={event.id} className="h-full flex items-center justify-center my-28 sm:my-20 md:my-12 lg:my-6">
            <div className="flex items-center justify-center lg:my-12 xl:my-0 ">
              <EventCard
                EventNumber={event.id}
                name={event.name}
                overview={event.overview}
                image={event.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}