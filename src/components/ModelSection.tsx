import { Sparkles, Users, Library } from "lucide-react";

export const ModelSection = () => {
  const features = [
    {
      icon: Sparkles,
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
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="relative inline-block mb-8">
            <div className="bg-primary px-12 py-6 skew-x-[-15deg]">
              <h3 className="text-black text-2xl font-black uppercase skew-x-[15deg]">THE TASTE MODEL</h3>
            </div>
          </div>
          
          <h2 className="font-display text-7xl md:text-8xl font-black leading-none">
            <span className="text-white">ONLY ORIGINAL </span>
            <span className="text-primary">COMEDY.</span>
          </h2>
        </div>
        
        <div className="space-y-6 max-w-3xl">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#0a0a0a] border-t-2 border-primary rounded-none p-10"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/20">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 text-white uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
