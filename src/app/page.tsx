import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { GlobalBackground } from "@/components/GlobalBackground";
import { Header } from "@/components/Header";
import { Hero } from "@/components/hero/Hero";
import { Portfolio } from "@/components/Portfolio";
import { ProcessSimple } from "@/components/ProcessSimple";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      {/* Global animated background — fixed, behind everything */}
      <GlobalBackground />

      <Header />
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Services />
        <ProcessSimple />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
