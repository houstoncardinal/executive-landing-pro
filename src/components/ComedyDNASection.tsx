import { Laugh } from "lucide-react";

export const ComedyDNASection = () => {
  return (
    <section className="py-24 px-6 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(45_100%_55%/0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-block p-6 rounded-full bg-accent/10 mb-8">
          <Laugh className="w-16 h-16 text-accent" />
        </div>
        
        <h2 className="font-display text-5xl md:text-7xl font-black mb-8">
          <span className="gradient-text">COMEDY</span>
          <br />
          <span className="text-foreground">NOT DRAMEDY.</span>
        </h2>
        
        <p className="text-2xl md:text-3xl text-foreground font-medium">
          Our DNA is <span className="text-primary font-bold">hard, rewatchable comedy.</span>
        </p>
      </div>
    </section>
  );
};
