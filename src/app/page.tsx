import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Features from "@/components/Features";
import InTheApp from "@/components/InTheApp";
import Team from "@/components/Team";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Overview />
        <Features />
        <InTheApp />
        <Team />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
