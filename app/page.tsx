import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Perks from "./components/Perks";
import Footer from "./components/Footer";
import { Oswald } from "next/font/google";

export const dynamic = "force-dynamic";
const OswaldStyles = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${OswaldStyles.className} bg-white pb-6 sm:pb-8 lg:pb-12`}>
      <Hero />
      <Perks />
      <Newest />
      <Footer />
    </div>
  );
}
