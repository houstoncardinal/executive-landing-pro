export const OpportunitySection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(280_60%_60%/0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
            THE OPPORTUNITY
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black mb-8">
            <span className="gradient-text">WHERE COMEDY</span>
            <br />
            <span className="text-foreground">GOES TO DIE.</span>
          </h2>
        </div>
        
        <div className="bg-card border border-border rounded-3xl p-12 space-y-8">
          <h3 className="text-3xl font-bold text-primary mb-6">
            THE MARKET IS UNDERSERVED.
          </h3>
          
          <p className="text-xl leading-relaxed text-foreground/90">
            Streaming giants have lost their comedic instinct. They're making fewer comedies and what they do make is often dramedy filler by faulty algorithms.
          </p>
          
          <p className="text-xl leading-relaxed text-foreground/90">
            Audiences are fleeing to short-form content (YouTube, TikTok). <span className="font-semibold text-primary">Taste is the premium platform</span> that brings them back to timeless, writer-driven television.
          </p>
        </div>
      </div>
    </section>
  );
};
