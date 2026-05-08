import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import BrolancersPreloader from "@/components/BrolancersPreloader";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustStrip from "@/components/site/TrustStrip";
import Services from "@/components/site/Services";
import WorkGrid from "@/components/site/WorkGrid";
import PortfolioCarousel from "@/components/site/PortfolioCarousel";
import Process from "@/components/site/Process";
import Industries from "@/components/site/Industries";
import About from "@/components/site/About";
import FinalCTA from "@/components/site/FinalCTA";
import ContactInfo from "@/components/site/ContactInfo";
import Footer from "@/components/site/Footer";
import { useLenis } from "@/hooks/useLenis";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Brolancers — AI Content, Video & Digital Marketing Studio" },
      {
        name: "description",
        content:
          "Brolancers is a modern AI content, video production and digital marketing studio creating reels, ads, and campaigns for ambitious brands.",
      },
      { property: "og:title", content: "Brolancers — Premium AI Content Studio" },
      {
        property: "og:description",
        content:
          "Scroll-stopping videos, AI visuals, reels and campaigns for hotels, schools, stores, creators, and modern businesses.",
      },
    ],
  }),
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  useLenis(loaded);

  return (
    <>
      {!loaded && <BrolancersPreloader onComplete={() => setLoaded(true)} />}
      <main className="min-h-screen overflow-x-hidden bg-[#12051F] text-[#F6F1E8] antialiased">
        <Navbar />
        <Hero />
        <TrustStrip />
        <Services />
        <WorkGrid />
        <PortfolioCarousel />
        <Process />
        <Industries />
        <About />
        <FinalCTA />
        <ContactInfo />
        <Footer />
      </main>
    </>
  );
}
