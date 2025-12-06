import { HeroSection } from "@/components/HeroSection";
import { VisionarySection } from "@/components/VisionarySection";
import { CulturalMomentSection } from "@/components/CulturalMomentSection";
import { ModelSection } from "@/components/ModelSection";
import { BusinessModelSection } from "@/components/BusinessModelSection";
import { MarketPositioningSection } from "@/components/MarketPositioningSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TeamSection } from "@/components/TeamSection";
import { EquitySection } from "@/components/EquitySection";
import { ProductionSection } from "@/components/ProductionSection";
import { RevenueSection } from "@/components/RevenueSection";
import { FundingSection } from "@/components/FundingSection";
import { CTASection } from "@/components/CTASection";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
import { VerticalNavigation } from "@/components/VerticalNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section id="hero"><HeroSection /></section>
      <section id="visionary"><VisionarySection /></section>
      <section id="cultural"><CulturalMomentSection /></section>
      <section id="team"><TeamSection /></section>
      <section id="model"><ModelSection /></section>
      <section id="business"><BusinessModelSection /></section>
      <section id="market"><MarketPositioningSection /></section>
      <section id="roadmap"><RoadmapSection /></section>
      <section id="equity"><EquitySection /></section>
      <section id="production"><ProductionSection /></section>
      <section id="revenue"><RevenueSection /></section>
      <section id="funding"><FundingSection /></section>
      <section id="cta"><CTASection /></section>

      {/* Global scroll progress indicator */}
      <ScrollProgressBar />
      
      {/* Vertical slide navigation */}
      <VerticalNavigation />
    </div>
  );
};

export default Index;
