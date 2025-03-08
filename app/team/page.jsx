
import ScrollableGallery from "../../components/ScrollableGallery";


export default function Team() {
    return (
      <>
        <div
          className="w-screen h-screen bg-[url('/images/backgrounds/green2.jpeg')] lg:bg-[url('/images/backgrounds/green.jpeg')]
                object-cover lg:bg-cover  bg-center lg:bg-top bg-no-repeat z-50  "
        >
          <ScrollableGallery />
        </div>
      </>
    );
}
