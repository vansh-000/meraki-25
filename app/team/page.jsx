import ScrollableGallery from "../../components/ScrollableGallery";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HomeSlider from "@/components/ImageSlider";

export default function Team() {
    return (
      <>
        <div
          className="relative overflow-y-hidden w-screen h-screen bg-[url('/images/backgrounds/green22.jpeg')] sm:bg-[url('/images/backgrounds/green.jpeg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="mt-10 sm:mt-0 md:-mt-5 relative z-20">
            <ScrollableGallery />
          </div>
        </div>
      </>
    );
}
