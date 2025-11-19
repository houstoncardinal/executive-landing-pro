import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(14_90%_55%/0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-block">
            <h1 className="font-display text-8xl md:text-9xl font-black tracking-tighter mb-4 gradient-text text-shadow-glow">
              TASTE
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            WHERE COMEDY FINALLY LIVES
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            THE WORLD'S FIRST COMEDY-ONLY STREAMING PLATFORM
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 font-semibold group"
            >
              Invest in the Laugh
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
