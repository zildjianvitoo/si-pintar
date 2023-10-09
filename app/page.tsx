import Intro from "@/components/LandingPage/Intro";
import Jumbotron from "@/components/LandingPage/Jumbotron";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-white ">
      <img
        src="/assets/images/elipse-topleft.svg"
        className="absolute top-0 left-0"
      />
      <Navbar />
      <main className="overflow-hidden relative z-10">
        <Jumbotron />
        <Intro />
      </main>
    </div>
  );
}
