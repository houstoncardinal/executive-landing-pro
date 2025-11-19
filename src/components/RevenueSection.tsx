import { Tv, Megaphone, Globe } from "lucide-react";

export const RevenueSection = () => {
  const streams = [
    {
      icon: Tv,
      title: "TIERED SUBSCRIPTION",
      description: "Ad-supported and premium ad-free options for a balanced, high-volume income base."
    },
    {
      icon: Megaphone,
      title: "IN-CONTENT ADS",
      description: "Our writers create hilarious, integrated marketing. This is premium, unskippable inventory."
    },
    {
      icon: Globe,
      title: "GLOBAL IP LICENSING",
      description: "Once our content is validated on Taste, we license proven IP to major global streamers for large back-end revenue."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            REVENUE PATH
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text">WE LOVE</span>
            <br />
            <span className="text-foreground">COMMERCIALS.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {streams.map((stream, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-primary/10">
                <stream.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {stream.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {stream.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-primary rounded-2xl p-8 text-center">
          <p className="text-white/90 text-lg mb-2">Target ARPU</p>
          <p className="text-5xl font-black text-white">$12.00</p>
          <p className="text-white/80 mt-2">(Hybrid Model Advantage)</p>
        </div>
      </div>
    </section>
  );
};
