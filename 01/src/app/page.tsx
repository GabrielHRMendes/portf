import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { PostPortfolioSections } from "@/components/PostPortfolioSections";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <PostPortfolioSections />
        <About />
        <Process />
        <Technologies />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
