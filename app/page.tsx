import Benefit from "@/components/LandingPage/Benefit";
import Footer from "@/components/LandingPage/Footer";
import ImageSlider from "@/components/LandingPage/ImageSlider";
import Intro from "@/components/LandingPage/Intro";
import Jumbotron from "@/components/LandingPage/Jumbotron";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white ">
      <img
        src="/assets/images/elipse-topleft.svg"
        className="absolute top-0 left-0"
        alt="Elipse decor"
      />
      <Navbar />
      <main className="overflow-hidden relative z-10">
        <figure className="absolute top-[25%] z-[-1]">
          <Image
            width={1700}
            height={1800}
            src={"/assets/images/bg-image.svg"}
            alt="Gambar Background"
            className="   "
          />
        </figure>
        <Jumbotron />
        <Intro />
        <Benefit />
        <ImageSlider />
        <Footer />
      </main>
    </div>
  );
}
