import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import LimitedOffer from "@/components/LimitedOffer";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SpinWheel from "@/components/SpinWheel";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SpinWheel />
      <Hero />
      <Benefits />
      <SocialProof />
      <LimitedOffer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
