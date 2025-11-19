import { TrendingUp } from "lucide-react";

export const EquitySection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            THE CREATOR EQUITY
          </h2>
          <p className="text-xl text-white/90 font-medium">
            Attracting superior the best talent through deals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              TRADITIONAL STREAMER
            </h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-black text-white">~5%</span>
            </div>
            <p className="text-white/80 text-lg">
              Writers get minimal back-end ownership.
            </p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <TrendingUp className="w-12 h-12 text-white/50" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              THE TASTE MODEL
            </h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-6xl font-black text-white">40%+</span>
            </div>
            <p className="text-white/90 text-lg font-medium">
              We offer substantial participation and creative control.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            We are building the <span className="text-accent">A24 of Comedy</span>
          </p>
          <p className="text-xl text-white/90 mt-2">
            —creator-focused quality-first, and profit-sharing from the start.
          </p>
        </div>
      </div>
    </section>
  );
};
