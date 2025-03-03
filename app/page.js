import Image from "next/image";
import TeamsPage from "./_components/Teams_page";

export default function Home() {
  return (
    <>
      <div className="w-screen inline-flex text-4xl h-screen items-center justify-center">
        Meraki 2K25
        <TeamsPage/>
      </div>
    </>
  );
}
