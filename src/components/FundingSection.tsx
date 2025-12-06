import { Rocket } from "lucide-react";
import { FinancialDetail } from "@/components/ui/financial-detail";

export const FundingSection = () => {
  const allocation = [
    { 
      category: "Flagship Originals (IP)", 
      amount: "$4.0M", 
      percentage: "50%",
      details: [
        { label: "Series Development", value: "$1.5M", subtext: "2 flagship comedy series" },
        { label: "Writers Room", value: "$800K", subtext: "Top-tier comedy writers" },
        { label: "Production Budget", value: "$1.2M", subtext: "Chicago-based filming" },
        { label: "Post-Production", value: "$500K", subtext: "Editing, VFX, sound design" },
      ]
    },
    { 
      category: "Platform Development", 
      amount: "$1.5M", 
      percentage: "19%",
      details: [
        { label: "Streaming Infrastructure", value: "$600K", subtext: "CDN & video delivery" },
        { label: "Mobile Apps", value: "$400K", subtext: "iOS & Android development" },
        { label: "Web Platform", value: "$300K", subtext: "React-based frontend" },
        { label: "Backend Systems", value: "$200K", subtext: "APIs, auth, payments" },
      ]
    },
    { 
      category: "Production Operations", 
      amount: "$1.0M", 
      percentage: "12%",
      details: [
        { label: "Studio Space", value: "$400K", subtext: "Chicago production facility" },
        { label: "Equipment", value: "$350K", subtext: "Cameras, lighting, sound" },
        { label: "Crew & Talent", value: "$250K", subtext: "Production staff & actors" },
      ]
    },
    { 
      category: "Executive & Ops Team", 
      amount: "$1.0M", 
      percentage: "12%",
      details: [
        { label: "Executive Salaries", value: "$600K", subtext: "CEO, CCO, CTO" },
        { label: "Operations Staff", value: "$250K", subtext: "Finance, HR, admin" },
        { label: "Benefits & Overhead", value: "$150K", subtext: "Healthcare, office costs" },
      ]
    },
    { 
      category: "Go-to-Market & Legal", 
      amount: "$0.5M", 
      percentage: "6%",
      details: [
        { label: "Marketing Launch", value: "$250K", subtext: "PR, social, influencers" },
        { label: "Legal & Contracts", value: "$150K", subtext: "IP, talent agreements" },
        { label: "Compliance", value: "$100K", subtext: "Licensing, regulations" },
      ]
    }
  ];

  const milestones = [
    {
      phase: "0-9 Months:",
      description: "Platform Beta & IP Scripting/Pre-Prod.",
      details: [
        { label: "Q1-Q2", value: "Platform MVP", subtext: "Core streaming functionality" },
        { label: "Q2-Q3", value: "Writers Room", subtext: "Script development for 2 series" },
        { label: "Q3", value: "Pre-Production", subtext: "Casting, locations, crew hiring" },
      ]
    },
    {
      phase: "10-18 Months:",
      description: "Flagship Series Production & Go-To-Market.",
      details: [
        { label: "Q4-Q5", value: "Principal Photography", subtext: "Both series in production" },
        { label: "Q5-Q6", value: "Post-Production", subtext: "Editing, scoring, finishing" },
        { label: "Q6", value: "Marketing Push", subtext: "Teaser campaign, press tour" },
      ]
    },
    {
      phase: "18+ Months:",
      description: "Full Platform Launch & Series Drop.",
      details: [
        { label: "Launch Day", value: "Platform Live", subtext: "Public launch with both series" },
        { label: "Month 1-3", value: "User Acquisition", subtext: "Target 100K subscribers" },
        { label: "Month 6", value: "Series 3 Greenlight", subtext: "Expansion based on performance" },
      ]
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <FinancialDetail
            title="Seed Round Details"
            position="bottom"
            details={[
              { label: "Round Type", value: "Seed", subtext: "Pre-Series A financing" },
              { label: "Target Raise", value: "$8,000,000", subtext: "Full round commitment" },
              { label: "Runway", value: "18 Months", subtext: "To Series A metrics" },
              { label: "Use of Funds", value: "Platform + Content", subtext: "Dual investment strategy" },
              { label: "Valuation", value: "$32M Pre", subtext: "4x revenue multiple target" },
              { label: "Minimum Check", value: "$100K", subtext: "Qualified investors only" },
            ]}
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-8 uppercase leading-tight inline-block">
              <span className="text-white">$8M </span>
              <span className="text-primary">SEED</span>
            </h2>
          </FinancialDetail>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-8 uppercase">
              Funding Allocation
            </h3>
            <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8">
              18-Month Runway to Fund Platform Launch and 2 Flagship Series.
            </p>
            <div className="space-y-3 md:space-y-4">
              {allocation.map((item, index) => (
                <FinancialDetail
                  key={index}
                  title={item.category}
                  position="right"
                  details={item.details}
                  className="block"
                >
                  <div className="space-y-1 md:space-y-2">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-white font-medium text-sm md:text-base truncate">{item.category}</span>
                      <span className="text-primary font-bold text-sm md:text-xl whitespace-nowrap">{item.amount} ({item.percentage})</span>
                    </div>
                    <div className="h-6 md:h-8 bg-[#2a2a2a] rounded-sm overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-sm transition-all duration-300 group-hover:bg-orange-400"
                        style={{ width: item.percentage }}
                      ></div>
                    </div>
                  </div>
                </FinancialDetail>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <Rocket className="w-10 h-10 md:w-16 md:h-16 text-primary flex-shrink-0" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase">
                Milestones
              </h3>
            </div>
            <div className="space-y-6 md:space-y-8">
              {milestones.map((milestone, index) => (
                <FinancialDetail
                  key={index}
                  title={milestone.phase}
                  position="left"
                  details={milestone.details}
                  className="block"
                >
                  <div className="space-y-1 md:space-y-2">
                    <div className="text-primary font-bold text-base md:text-xl">{milestone.phase}</div>
                    <p className="text-gray-300 text-sm md:text-lg">{milestone.description}</p>
                  </div>
                </FinancialDetail>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
