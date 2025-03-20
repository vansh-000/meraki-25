"use client";
import { useState, useRef } from "react";
import HomeSponsors from "@/components/HomeSponsors";
import HomeSlider from "@/components/HomeSlider";
import HomeContact from "@/components/HomeContact";
import LandingScreen from "@/components/LandingScreen";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/loader/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  const scrollToNextSection = (index) => {
    const sections = containerRef.current?.querySelectorAll("section");
    if (sections && sections[index + 1]) {
      sections[index + 1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden relative">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <div
          ref={containerRef}
          className="h-screen overflow-y-auto snap-y snap-mandatory"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "y mandatory",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none; /* Hides scrollbar in Chrome/Safari */
            }
          `}</style>
          <section className="h-screen relative snap-start bg-black">
            <LandingScreen />
            <div
              onClick={() => scrollToNextSection(0)}
              className="absolute bottom-12 md:bottom-4 left-1/2 transform -translate-x-1/2 w-auto p-0 h-auto flex justify-center items-center z-50 overflow-hidden rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-20 w-10 md:h-15 h-10 text-white hover:text-gray-200 animate-bounce"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </section>

          {/* Section 2 */}
          <section className="h-screen relative snap-start">
            <HomeSlider />
            <div
              onClick={() => scrollToNextSection(1)}
              className="absolute bottom-12 md:bottom-4 left-1/2 transform -translate-x-1/2 w-auto h-auto p-0 flex justify-center items-center z-50 overflow-hidden rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-20 md:h-15 w-10 h-10 text-white hover:text-gray-200 animate-bounce"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </section>
          <section className="h-screen relative snap-start">
            <HomeSponsors />
            <div
              onClick={() => scrollToNextSection(2)}
              className="absolute bottom-12 md:bottom-4 left-1/2 transform -translate-x-1/2 w-auto p-0 h-auto flex justify-center items-center z-50 overflow-hidden rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-20 md:h-15 w-10 h-10 text-white hover:text-gray-200 animate-bounce"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </section>
          <section className="h-screen overflow-y-hidden snap-start">
            <HomeContact />
            <div className="relative bottom-[80px] md:bottom-0 w-full">
              <Footer />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
