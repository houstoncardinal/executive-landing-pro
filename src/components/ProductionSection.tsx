import { MapPin, DollarSign, TrendingDown } from "lucide-react";

export const ProductionSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
                PRODUCTION ADVANTAGE
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-6">
                CHICAGO BASE.
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-primary mb-2">30%</h3>
                  <p className="text-lg text-foreground/80">
                    Guaranteed discount on production costs VS. LA/NYC.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                We leverage local talent, robust state tax incentives for massive capital efficiency and a genuine community partnership.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-20 h-20 mx-auto text-primary" />
                <h3 className="text-3xl font-bold text-foreground">Chicago</h3>
                <p className="text-muted-foreground">Strategic Production Hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
