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
        {[
          { id: 1, title: "AI & Machine Learning", img: "/images/backgrounds/event1.jpeg" },
          { id: 2, title: "Blockchain Development", img: "/images/backgrounds/blockChain_card.jpeg" },
          { id: 3, title: "Cybersecurity Essentials", img: "/images/backgrounds/event3.jpeg" },
          { id: 4, title: "Cloud Computing", img: "/images/backgrounds/event4.jpeg" },
          { id: 5, title: "Internet of Things (IoT)", img: "/images/backgrounds/event5.jpeg" },
          { id: 6, title: "Big Data & Analytics", img: "/images/backgrounds/event6.jpeg" },
          { id: 7, title: "AR/VR Innovations", img: "/images/backgrounds/event7.jpeg" },
          { id: 8, title: "Software Development Trends", img: "/images/backgrounds/event8.jpeg" },
          { id: 9, title: "DevOps & Automation", img: "/images/backgrounds/event9.jpeg" },
          { id: 10, title: "Data Science Breakthroughs", img: "/images/backgrounds/event10.jpeg" },
        ].map((event) => (
          <SwiperSlide key={event.id} className="h-full flex items-center justify-center my-28 sm:my-20 md:my-12 lg:my-6">
            <div className="flex items-center justify-center lg:my-12 xl:my-0">
              <EventCard
                eventNumber={event.id}
                title={event.title}
                text="Event details here."
                image={event.img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}