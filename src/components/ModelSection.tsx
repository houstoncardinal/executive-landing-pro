import { Sparkles, Library } from "lucide-react";

export const ModelSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "CURATED BY CREATORS",
      description: "Our content is selected by Emmy-nominated writers, not an algorithm. Quality over quantity.",
    },
    {
      icon: Library,
      title: "FOCUSED LIBRARY",
      description: "No \"Blockbuster Video Graveyard.\" Our small, potent catalog eliminates choice fatigue.",
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-white/95"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(0,0,0,0.002) 25%, transparent 25%), linear-gradient(225deg, rgba(0,0,0,0.002) 25%, transparent 25%), linear-gradient(45deg, rgba(0,0,0,0.002) 25%, transparent 25%), linear-gradient(315deg, rgba(0,0,0,0.002) 25%, transparent 25%)",
        backgroundSize: "120px 120px",
        backgroundPosition: "0 0, 0 60px, 60px -60px, -60px 0px",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 mb-6 items-start">
          <div>
            <div className="relative inline-block mb-8">
              <div className="bg-primary px-12 py-6 skew-x-[-15deg]">
                <h3 className="text-white text-2xl font-black uppercase skew-x-[15deg]">THE TASTE MODEL</h3>
              </div>
            </div>
            <h2 className="font-display text-7xl md:text-8xl font-black leading-tight text-black mb-6">
              A New Home for <span className="text-primary">Great Comedy.</span>
            </h2>
            <p className="text-black/70 text-xl leading-relaxed mb-6 max-w-2xl">
              World-class comedy creators deserve better than corporate data models. Taste puts creative instinct first — where comedy is curated by comedians, not algorithms.
            </p>
            <h3 className="text-black font-black text-4xl uppercase tracking-wide mb-4">
              Led by Acclaimed Comedy Creators.
            </h3>
          </div>
          <div className="relative flex h-[650px] items-center justify-center">
            <div className="absolute inset-0 rounded-3xl bg-white/10" />
            <div className="relative w-full h-full">
              {/* South Side - Top Left */}
              <div
                className="absolute overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                style={{
                  top: '8%',
                  left: '-15%',
                  transform: 'rotate(-4deg)',
                  zIndex: 1
                }}
              >
                <img src="/southside-vertical.jpg" alt="South Side" className="h-[380px] w-[240px] object-cover" />
              </div>

              {/* Sheriff's Showcase - Top Right */}
              <div
                className="absolute overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                style={{
                  top: '25%',
                  right: '2%',
                  transform: 'rotate(0deg)',
                  zIndex: 1
                }}
              >
                <img src="/shermans-showcase-vertical.jpg" alt="Sherman's Showcase" className="h-[380px] w-[240px] object-cover" />
              </div>

              {/* Last OG - Bottom Center */}
              <div
                className="absolute overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                style={{
                  bottom: '5%',
                  left: '40%',
                  transform: 'translateX(-50%) rotate(4deg)',
                  zIndex: 1
                }}
              >
                <img src="/thelastogvertical.jpg" alt="The Last OG" className="h-[380px] w-[240px] object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {features.map((feature) => (
            <div key={feature.title} className="space-y-3 border-b border-black/10 pb-5">
              <p className="text-xs uppercase tracking-[0.6em] text-black/60">INSIGHT</p>
              <h3 className="text-3xl font-black uppercase tracking-[0.3em] text-black">{feature.title}</h3>
              <p className="text-lg leading-relaxed text-gray-700">{feature.description}</p>
              <p className="text-xs uppercase tracking-[0.5em] text-black/60">
                Calculated for creators
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
