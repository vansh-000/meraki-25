import Card from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="flex h-screen md:bg-[url('/images/backgrounds/contact.jpeg')] bg-[url('/images/backgrounds/contact.jpg')] bg-cover bg-top md:bg-center w-screen">
      <div className="relative ">
        <Card />

        <div className="absolute z-50 xl:w-[700px] lg:w-[650px] md:w-[600px] sm:w-[550px] w-[400px] top-15 left-20 ">
            <ContactForm/>
        </div>
      </div>
    </div>
  );
}
