import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import BentoGrid from "@/components/BentoGrid";
import CraftSection from "@/components/CraftSection";
import ColorVariants from "@/components/ColorVariants";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechSpecs from "@/components/TechSpecs";
import FooterCTA from "@/components/FooterCTA";
import SocialBubbles from "@/components/SocialBubbles";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Sidebar />
      <SocialBubbles />
      <div>
        <Navbar />
        <HeroSection />
        <div id="philosophy">
          <PhilosophySection />
        </div>
        <div id="features">
          <BentoGrid />
        </div>
        <div id="craft">
          <CraftSection />
        </div>
        <div id="colors">
          <ColorVariants />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="specs">
          <TechSpecs />
        </div>
        <FooterCTA />
      </div>
    </div>
  );
};

export default Index;
