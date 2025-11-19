import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(14_90%_55%/0.2)_0%,transparent_70%)]" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="font-display text-6xl md:text-8xl font-black mb-8">
          <span className="gradient-text text-shadow-glow">TASTE.</span>
        </h2>
        
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          INVEST IN THE LAUGH.
        </h3>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join us in revolutionizing comedy streaming. Be part of the platform where comedy finally lives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 font-semibold group"
          >
            Get in Touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-10 py-7 border-2 border-primary/30 hover:border-primary font-semibold group"
          >
            <Mail className="mr-2" />
            Request Pitch Deck
          </Button>
        </div>
        
        <p className="text-2xl font-bold text-foreground mt-16">
          THANK YOU.
        </p>
      </div>
    </section>
  );
};
