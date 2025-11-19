import { HeroSection } from "@/components/HeroSection";
import { VisionarySection } from "@/components/VisionarySection";
import { OpportunitySection } from "@/components/OpportunitySection";
import { ModelSection } from "@/components/ModelSection";
import { TeamSection } from "@/components/TeamSection";
import { EquitySection } from "@/components/EquitySection";
import { ProductionSection } from "@/components/ProductionSection";
import { ComedyDNASection } from "@/components/ComedyDNASection";
import { RevenueSection } from "@/components/RevenueSection";
import { FundingSection } from "@/components/FundingSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisionarySection />
      <OpportunitySection />
      <ModelSection />
      <TeamSection />
      <EquitySection />
      <ProductionSection />
      <ComedyDNASection />
      <RevenueSection />
      <FundingSection />
      <CTASection />
    </div>
  );
};

export default Index;
