'use client';
import { useEffect, useMemo, useState } from "react";
import { AnimatedGroup } from "./animated-group";
import { ColorSwitcher } from "@/components/ColorSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  },
};

const rotator = ["/shermans-showcase.png", "/southside.png"];

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const backgroundImage = useMemo(() => rotator[index % rotator.length], [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotator.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-black -mb-[100px]">
      <section
        className="relative w-full min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.99)), url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Premium overlay effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        {/* Subtle cinematic grid */}
        <div className="absolute inset-0 opacity-[0.001]">
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          {/* Color switcher positioned elegantly */}
          <div className="absolute right-6 top-6 z-20 flex items-center gap-3">
            <ColorSwitcher />
            <ThemeToggle />
          </div>

          {/* Main cinematic headline */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="space-y-12 text-center mb-16">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                  <p className="text-primary font-medium uppercase tracking-[0.3em] text-sm">
                    WHERE COMEDY FINALLY LIVES
                  </p>
                </div>

                {/* Taste Logo */}
                <div className="mb-4">
                  <img
                    src="/logo.png"
                    alt="Taste Logo"
                    className="h-56 w-auto mx-auto opacity-95"
                  />
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[0.9] tracking-tight max-w-4xl mx-auto">
                  <span className="text-white whitespace-nowrap">THE WORLD'S FIRST</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary to-orange-400 bg-clip-text text-transparent whitespace-nowrap">COMEDY-ONLY</span> <span className="text-white whitespace-nowrap">STREAMING</span>
                  <br />
                  <span className="text-white font-black">PLATFORM</span>
                </h1>
              </div>
            </div>
          </AnimatedGroup>

          {/* Premium dashboard preview (below headline) */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 1.2,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative w-full max-w-6xl mx-auto px-6">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-[3rem] blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm">
                  <img
                    src="/screen.png"
                    alt="Taste streaming dashboard"
                    className="h-full min-h-[600px] lg:min-h-[700px] w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Browser icons in top left */}
                  <div className="absolute top-6 left-8">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                      <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                    </div>
                  </div>

                  {/* TASTE DASHBOARD label */}
                  <div className="absolute bottom-8 left-8">
                    <span className="text-white/80 font-semibold uppercase tracking-wider text-sm">
                      TASTE DASHBOARD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  );
}
