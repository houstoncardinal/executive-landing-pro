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
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="relative inline-block mb-8">
            <div className="bg-primary px-12 py-6 skew-x-[-15deg]">
              <h3 className="text-black text-2xl font-black uppercase skew-x-[15deg]">REVENUE PATH</h3>
            </div>
          </div>
          
          <h2 className="font-display text-7xl md:text-8xl font-black leading-none">
            <span className="text-white">WE LOVE </span>
            <span className="text-primary">COMMERCIALS.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {streams.map((stream, index) => (
            <div 
              key={index}
              className="bg-[#0a0a0a] border-t-4 border-primary rounded-lg p-10"
            >
              <div className="mb-8 inline-block p-6 bg-primary/20 rounded-lg">
                <stream.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-6 text-white uppercase">
                {stream.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {stream.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-2"><span className="text-white">Target ARPU:</span></p>
          <p className="text-6xl font-black text-white mb-2">$12.00</p>
          <p className="text-gray-400">(Hybrid Model Advantage)</p>
        </div>
      </div>
    </section>
  );
};
