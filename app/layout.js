import {Iceland} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";


const IcelandFont = Iceland({
  subsets : ['latin'],
  weight : '400'
})

export const metadata = {
  title: "Meraki 2K25",
  description:
    "Official website of Meraki 2K25, the annual techfest of IIIT Una",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
