import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="inline-block">
            <h1 className="font-display text-[12rem] md:text-[16rem] lg:text-[20rem] font-black tracking-tighter text-white uppercase" style={{
              textShadow: '0 0 80px rgba(255, 107, 53, 0.8), 0 0 40px rgba(255, 107, 53, 0.6)',
              WebkitTextStroke: '3px rgba(255, 107, 53, 0.3)'
            }}>
              TASTE<span className="text-primary">.</span>
            </h1>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase">
              WHERE COMEDY FINALLY LIVES
            </h2>
            <div className="h-2 bg-primary w-full mt-4"></div>
          </div>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold uppercase tracking-wider pt-20">
            THE WORLD'S FIRST COMEDY-ONLY STREAMING PLATFORM
          </p>
        </div>
      </div>
    </section>
  );
};
