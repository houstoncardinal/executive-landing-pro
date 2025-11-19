export const VisionarySection = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            THE VISIONARY
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-black mb-6 gradient-text">
            BASHIR SALAHUDDIN
          </h2>
          <p className="text-xl text-muted-foreground font-medium mb-2">
            Award-winning Actor, Writer & Producer
          </p>
          <p className="text-lg text-muted-foreground">
            Alum. Harvard
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              Bashir launched his career as a writer on <span className="font-semibold text-foreground">Late Night with Jimmy Fallon</span> (Emmy Nominee) and went on to co-create the critically acclaimed comedies <span className="font-semibold text-foreground">South Side</span> (HBO Max) and <span className="font-semibold text-foreground">Sherman's Showcase</span> (IFC/Hulu).
            </p>
            <p className="text-foreground/90">
              <span className="font-semibold text-primary">Hollywood Credibility:</span> Starred in Top Gun: Maverick (HONDO), GLOW, Bad Boys 4.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-primary p-1">
              <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎭</div>
                  <p className="text-sm text-muted-foreground">Emmy-Nominated Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
