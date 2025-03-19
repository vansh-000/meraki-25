import ScrollableGallery from "../../components/ScrollableGallery";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Team() {
    return (
      <>
        <div
          className="relative overflow-y-hidden w-screen h-[90vh] md:h-screen bg-[url('/images/backgrounds/green22.jpeg')] lg:bg-[url('/images/backgrounds/green.jpeg')]
                md:bg-[url('/images/backgrounds/green22.jpeg')] bg-contain bg-center bg-no-repeat"
        >
          <div className="relative z-20">
            <ScrollableGallery />
          </div>
        </div>
      </>
    );
}
