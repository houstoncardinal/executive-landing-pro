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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisionarySection />
      <CulturalMomentSection />
      <TeamSection />
      <ModelSection />
      <BusinessModelSection />
      <MarketPositioningSection />
      <RoadmapSection />
      <EquitySection />
      <ProductionSection />
      <RevenueSection />
      <FundingSection />
      <CTASection />

      {/* Global scroll progress indicator */}
      <ScrollProgressBar />
    </div>
  );
};

export default Index;
