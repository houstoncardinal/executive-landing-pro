import { Tv, Megaphone, Globe } from "lucide-react";
import { FinancialDetail } from "@/components/ui/financial-detail";

export const RevenueSection = () => {
  const streams = [
    {
      icon: Tv,
      title: "TIERED SUBSCRIPTION",
      description: "Ad-supported and premium ad-free options for a balanced, high-volume income base.",
      details: [
        { label: "Ad-Supported Tier", value: "$4.99/mo", subtext: "Entry-level with limited ads" },
        { label: "Premium Tier", value: "$9.99/mo", subtext: "Ad-free experience" },
        { label: "Annual Discount", value: "20% off", subtext: "2 months free annually" },
        { label: "Family Plan", value: "$14.99/mo", subtext: "Up to 5 profiles" },
        { label: "Projected Mix", value: "60/40", subtext: "Premium vs ad-supported" },
      ]
    },
    {
      icon: Megaphone,
      title: "IN-CONTENT ADS",
      description: "Our writers create hilarious, integrated marketing. This is premium, unskippable inventory.",
      details: [
        { label: "CPM Rate", value: "$45-65", subtext: "Premium comedy audience" },
        { label: "Completion Rate", value: "94%", subtext: "Integrated ads aren't skipped" },
        { label: "Brand Recall", value: "3.2x", subtext: "Higher than traditional pre-roll" },
        { label: "Avg Deal Size", value: "$150K", subtext: "Per brand partnership" },
        { label: "Fill Rate Target", value: "85%", subtext: "Sold inventory goal" },
      ]
    },
    {
      icon: Globe,
      title: "GLOBAL IP LICENSING",
      description: "Once our content is validated on Taste, we license proven IP to major global streamers for large back-end revenue.",
      details: [
        { label: "Domestic License", value: "$500K-2M", subtext: "Per series, per platform" },
        { label: "International", value: "$200K-800K", subtext: "Per territory deal" },
        { label: "Format Rights", value: "$100K-500K", subtext: "International remakes" },
        { label: "Syndication", value: "$50K/ep", subtext: "Linear TV windows" },
        { label: "AVOD Rights", value: "$25K/ep", subtext: "Free streaming platforms" },
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="relative inline-block mb-8">
            <div className="bg-primary px-12 py-6 skew-x-[-15deg]">
              <h3 className="text-black text-2xl font-black uppercase skew-x-[15deg]">REVENUE PATH</h3>
            </div>
          </div>
          
          <h2 className="font-display text-7xl md:text-8xl font-black leading-none">
            <span className="text-white">WE LOVE </span>
            <span className="text-primary">COMMERCIALS.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {streams.map((stream, index) => (
            <FinancialDetail
              key={index}
              title={stream.title}
              position="top"
              details={stream.details}
              className="block h-full"
            >
              <div className="bg-[#0a0a0a] border-t-4 border-primary rounded-lg p-10 h-full transition-all duration-300 hover:bg-[#111] hover:border-orange-400">
                <div className="mb-8 inline-block p-6 bg-primary/20 rounded-lg">
                  <stream.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-black mb-6 text-white uppercase">
                  {stream.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {stream.description}
                </p>
              </div>
            </FinancialDetail>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-2"><span className="text-white">Target ARPU:</span></p>
          <FinancialDetail
            title="ARPU Breakdown"
            position="top"
            details={[
              { label: "Subscription Revenue", value: "$7.50", subtext: "Blended tier average" },
              { label: "Ad Revenue", value: "$3.20", subtext: "Per user per month" },
              { label: "Merch & Extras", value: "$1.30", subtext: "Ancillary revenue" },
              { label: "Total ARPU", value: "$12.00", subtext: "Combined monthly value" },
              { label: "Industry Avg", value: "$8.50", subtext: "Competitor benchmark" },
              { label: "Premium", value: "+41%", subtext: "Above industry average" },
            ]}
          >
            <p className="text-6xl font-black text-white mb-2">$12.00</p>
          </FinancialDetail>
          <p className="text-gray-400">(Hybrid Model Advantage)</p>
        </div>
      </div>
    </section>
  );
};
