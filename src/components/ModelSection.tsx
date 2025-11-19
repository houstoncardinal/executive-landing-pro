import { Sparkles, Users, Library } from "lucide-react";

export const ModelSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "ORIGINAL COMEDY. ONLY",
      description: "Premium comedy content, exclusively created for TASTE"
    },
    {
      icon: Users,
      title: "CURATED BY CREATORS",
      description: "Our content is selected by Emmy-nominated writers, not an algorithm. Quality over quantity."
    },
    {
      icon: Library,
      title: "FOCUSED LIBRARY",
      description: "No \"Blockbuster Video Graveyard.\" Our small, potent catalog eliminates choice fatigue."
    }
  ];

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            THE TASTE MODEL
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black gradient-text">
            THE A24 OF COMEDY
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
