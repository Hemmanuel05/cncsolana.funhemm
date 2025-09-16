import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Tokenomics from "@/components/sections/tokenomics";
import Roadmap from "@/components/sections/roadmap";
import Community from "@/components/sections/community";
import Schedule from "@/components/sections/schedule";
import SubmitIdea from "@/components/sections/submit-idea";
import HowToBuy from "@/components/sections/how-to-buy";
import Socials from "@/components/sections/socials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pump-bg"></div>
      <Navigation />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Schedule />
      <SubmitIdea />
      <HowToBuy />
      <Socials />
      <Footer />
    </div>
  );
}
