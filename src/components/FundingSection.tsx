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
      phase: "0-9 Months",
      description: "Platform Beta & IP Scripting/Pre-Prod."
    },
    {
      phase: "10-18 Months",
      description: "Flagship Series Production & Go-To-Market."
    },
    {
      phase: "18+ Months",
      description: "Full Platform Launch & Series Drop."
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block p-6 rounded-full bg-accent/10 mb-6">
            <DollarSign className="w-16 h-16 text-accent" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black gradient-text mb-4">
            $8M SEED ROUND
          </h2>
          <p className="text-xl text-muted-foreground">
            18-Month Runway to Fund Platform Launch and 2 Flagship Series.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-primary" />
              Funding Allocation
            </h3>
            <div className="space-y-4">
              {allocation.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{item.category}</span>
                    <div className="text-right">
                      <span className="text-primary font-bold text-lg">{item.amount}</span>
                      <span className="text-muted-foreground ml-2">({item.percentage})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-secondary" />
              Launch Milestones
            </h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-primary/30 last:border-l-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  <div className="font-bold text-primary mb-2">{milestone.phase}</div>
                  <p className="text-foreground/80">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
