import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section
      className="py-32 px-6 bg-primary"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,0.04) 25%, transparent 25%)",
        backgroundSize: "90px 90px",
        backgroundPosition: "0 0, 0 45px, 45px -45px, -45px 0px",
      }}
    >
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center mb-8">
          <img src="/logo.png" alt="Taste logo" className="h-20 w-auto object-contain" />
        </div>
        <h3 className="text-5xl md:text-6xl font-black text-white mb-32 uppercase tracking-wide">
          Comedy connects the world. It just needed a home — with taste.
        </h3>
        
        <p className="text-4xl font-black text-white uppercase">
          THANK YOU.
        </p>
      </div>
    </section>
  );
};
