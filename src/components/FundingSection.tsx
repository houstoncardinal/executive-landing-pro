import { DollarSign, Rocket, Calendar } from "lucide-react";

export const FundingSection = () => {
  const allocation = [
    { category: "Flagship Originals (IP)", amount: "$4.0M", percentage: "50%" },
    { category: "Platform Development (Tech)", amount: "$1.5M", percentage: "19%" },
    { category: "Production Operations (BTL)", amount: "$1.0M", percentage: "12%" },
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
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-8xl md:text-9xl font-black mb-8 uppercase">
            <span className="text-white">$8M </span>
            <span className="text-primary">SEED ROUND</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-5xl font-black text-white mb-8 uppercase">
              Funding Allocation
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              18-Month Runway to Fund Platform Launch and 2 Flagship Series.
            </p>
            <div className="space-y-4">
              {allocation.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-white font-medium">{item.category}</span>
                    <span className="text-primary font-bold text-xl">{item.amount} ({item.percentage})</span>
                  </div>
                  <div className="h-8 bg-[#2a2a2a] rounded-sm overflow-hidden">
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
            <div className="flex items-center gap-4 mb-8">
              <Rocket className="w-16 h-16 text-primary" />
              <h3 className="text-5xl font-black text-white uppercase">
                Launch Milestones
              </h3>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-primary font-bold text-xl">{milestone.phase}</div>
                  <p className="text-gray-300 text-lg">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
