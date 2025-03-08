
import ScrollableGallery from "../_components/ScrollableGallery";


export default function Team() {
    return (
      <>
        <div
          className="w-screen h-screen bg-[url('/images/backgrounds/green.png')]
                lg:bg-cover md:bg-contain bg-center lg:bg-top bg-no-repeat"
        >
          <ScrollableGallery />
        </div>
      </>
    );
}
