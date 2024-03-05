import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Perks from "./components/Perks";
import Footer from "./components/Footer";
import { Lexend } from "next/font/google";

export const dynamic = "force-dynamic";

const font = Lexend({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className={font.className}>
      <Hero />
      <Perks />
      <Newest />
      <Footer />
    </div>
  );
}
