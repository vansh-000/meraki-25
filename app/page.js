"use client";
import HomeSponsors from "@/components/HomeSponsors";
import HomeSlider from "@/components/HomeSlider";
import HomeContact from "@/components/HomeContact";
import LandingScreen from "@/components/LandingScreen";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <div
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
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

        <section className="h-screen snap-start ">
          <HomeContact />
          <Footer />
        </section>
      </div>
    </div>
  );
}
