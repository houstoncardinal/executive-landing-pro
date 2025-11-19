import { MapPin, DollarSign, TrendingDown } from "lucide-react";

export const ProductionSection = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-full"></div>
          
          <div className="space-y-8 text-right">
            <div className="relative inline-block float-right">
              <div className="border-2 border-primary px-12 py-6 skew-x-[15deg]">
                <h3 className="text-primary text-xl font-black uppercase skew-x-[-15deg]">PRODUCTION ADVANTAGE</h3>
              </div>
            </div>
            
            <div className="clear-both">
              <h2 className="font-display text-8xl md:text-9xl font-black text-white uppercase leading-none mb-4">
                CHICAGO<br/>
                <span className="text-primary">BASE.</span>
              </h2>
              
              <h3 className="text-9xl font-black text-primary mb-8">30%</h3>
              
              <p className="text-2xl text-white font-bold mb-6">
                Guaranteed discount on production costs vs. LA/NYC.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                We leverage local talent, robust state tax incentives, and a genuine community partnership for massive capital efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
