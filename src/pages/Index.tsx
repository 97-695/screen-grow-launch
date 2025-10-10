import { useState } from "react";
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
  const [showSpinWheel, setShowSpinWheel] = useState(false);

  return (
    <main className="min-h-screen">
      <SpinWheel isOpen={showSpinWheel} onOpenChange={setShowSpinWheel} />
      <Hero onBuyClick={() => setShowSpinWheel(true)} />
      <Benefits />
      <SocialProof />
      <LimitedOffer onBuyClick={() => setShowSpinWheel(true)} />
      <Guarantee />
      <FAQ />
      <FinalCTA onBuyClick={() => setShowSpinWheel(true)} />
      <Footer />
    </main>
  );
};

export default Index;
