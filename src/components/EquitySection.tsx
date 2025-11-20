import { TrendingUp } from "lucide-react";

export const EquitySection = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="font-display text-7xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-white">THE CREATOR</span><br/>
            <span className="text-primary">EQUITY</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            Attracting the best talent through superior deals.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-none p-10 flex-1">
            <h3 className="text-3xl font-black text-white mb-4 uppercase">
              TRADITIONAL STREAMER
            </h3>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-7xl font-black text-gray-600">~5%</span>
            </div>
            <p className="text-gray-400 text-lg">
              Writers get minimal back-end ownership.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3d2618] to-[#1a1a1a] border-2 border-primary rounded-none p-10 flex-1">
            <h3 className="text-3xl font-black text-white mb-4 uppercase">
              THE TASTE MODEL
            </h3>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-7xl font-black text-white">40%+</span>
            </div>
            <p className="text-white text-lg font-medium">
              We offer substantial participation and creative control.
            </p>
          </div>
        </div>
        
        <div className="text-left">
          <p className="text-2xl md:text-3xl text-gray-400">
            <span className="text-white">We are building the A24 of Comedy</span> — creator-focused, quality-first, and profit-sharing from the start.
          </p>
        </div>
      </div>
    </section>
  );
};
