import { Rocket } from "lucide-react";

export const FundingSection = () => {
  const allocation = [
    { category: "Flagship Originals (IP)", amount: "$4.0M", percentage: "50%" },
    { category: "Platform Development", amount: "$1.5M", percentage: "19%" },
    { category: "Production Operations", amount: "$1.0M", percentage: "12%" },
    { category: "Executive & Ops Team", amount: "$1.0M", percentage: "12%" },
    { category: "Go-to-Market & Legal", amount: "$0.5M", percentage: "6%" }
  ];

  const milestones = [
    {
      phase: "0-9 Months:",
      description: "Platform Beta & IP Scripting/Pre-Prod."
    },
    {
      phase: "10-18 Months:",
      description: "Flagship Series Production & Go-To-Market."
    },
    {
      phase: "18+ Months:",
      description: "Full Platform Launch & Series Drop."
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-8 uppercase leading-tight">
            <span className="text-white">$8M </span>
            <span className="text-primary">SEED</span>
          </h2>
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
                <div key={index} className="space-y-1 md:space-y-2">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="text-white font-medium text-sm md:text-base truncate">{item.category}</span>
                    <span className="text-primary font-bold text-sm md:text-xl whitespace-nowrap">{item.amount} ({item.percentage})</span>
                  </div>
                  <div className="h-6 md:h-8 bg-[#2a2a2a] rounded-sm overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-sm"
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                </div>
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
                <div key={index} className="space-y-1 md:space-y-2">
                  <div className="text-primary font-bold text-base md:text-xl">{milestone.phase}</div>
                  <p className="text-gray-300 text-sm md:text-lg">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};