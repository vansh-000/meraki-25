
import ScrollableGallery from "../_components/ScrollableGallery";


export default function Team() {
    return (
      <>
        <div
          className="w-screen h-screen bg-[url('/images/backgrounds/green.png')]
                object-cover lg:bg-cover  bg-center lg:bg-top bg-no-repeat z-50  "
        >
          <ScrollableGallery />
        </div>
      </>
    );
}
