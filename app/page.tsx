import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Perks from "./components/Perks";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Perks />
      <Newest />
      <Footer />
    </div>
  );
}
