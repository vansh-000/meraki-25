"use client";
import { useState } from "react";
import HomeSponsors from "@/components/HomeSponsors";
import HomeSlider from "@/components/HomeSlider";
import HomeContact from "@/components/HomeContact";
import LandingScreen from "@/components/LandingScreen";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/loader/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="overflow-hidden">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <div
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
              display: none; // Hides scrollbar in Chrome/Safari
            }
          `}</style>

          <section className="h-screen snap-start bg-black">
            <LandingScreen />
          </section>

          <section className="h-screen snap-start">
            <HomeSlider />
          </section>

          <section className="h-screen snap-start">
            <HomeSponsors />
          </section>

          <section className="h-screen snap-start">
            <HomeContact />
            <Footer />
          </section>
        </div>
      )}
    </div>
  );
}
