import { Laugh } from "lucide-react";

export const ComedyDNASection = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-[#CCCCCC] aspect-[3/2] rounded-lg flex items-center justify-center">
              <span className="text-[#999] text-8xl font-bold">600 × 400</span>
            </div>
            <div className="bg-[#CCCCCC] aspect-[3/2] rounded-lg flex items-center justify-center">
              <span className="text-[#999] text-8xl font-bold">600 × 400</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-display text-7xl md:text-8xl font-black leading-none">
              <span className="text-white">COMEDY. </span>
              <span className="text-primary">NOT DRAMEDY.</span>
            </h2>
            
            <p className="text-2xl text-gray-400 font-medium">
              Our DNA is hard, rewatchable comedy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
