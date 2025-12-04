export const VisionarySection = () => {
  return (
    <section className="relative mt-[25px] pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 bg-white overflow-hidden">
      {/* Top shadow to blend with hero mockup */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/10 via-black/5 to-transparent pointer-events-none"></div>
      {/* Subtle cinematic grid background */}
      <div className="absolute inset-0 opacity-[0.005]">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="space-y-4">
            <div className="relative inline-block">
              <div className="bg-primary px-6 sm:px-8 md:px-12 py-4 md:py-6 skew-x-[-15deg]">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-black uppercase skew-x-[15deg]">THE VISIONARY</h3>
              </div>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase leading-tight">
              BASHIR<br />SALAHUDDIN
            </h1>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 md:gap-3 flex-wrap">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-sm md:text-lg font-bold text-primary uppercase tracking-wider md:tracking-widest drop-shadow-lg">AWARD-WINNING CREATOR</p>
                <div className="w-2 h-2 bg-primary rounded-full hidden sm:block"></div>
              </div>

              <p className="text-base md:text-lg text-black font-medium leading-relaxed">
                Actor - Writer - Director - Producer<br/>
                Harvard Alum (Hasty Pudding Theatricals, Honor Guard)
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-primary">
                  <h4 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-2">WRITING BREAKTHROUGH</h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Launched career as staff writer on <span className="font-semibold text-black">Late Night with Jimmy Fallon</span>,
                    co-creating iconic segments like "Slow Jam the News" with President Obama
                    and "History of Hip-Hop" with Justin Timberlake — earning an Emmy nomination.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-primary">
                  <h4 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-2">SIGNATURE SHOWS</h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Co-created <span className="font-semibold text-black">South Side (HBO Max)</span> — NAACP Image Award for Best Director
                    and <span className="font-semibold text-black">Sherman's Showcase (IFC/Hulu)</span> — Critics Choice nomination for Best Lead Actor.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-primary">
                  <h4 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-2">HOLLYWOOD RESUME</h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    Starred in <span className="font-semibold text-black">Top Gun: Maverick (HONDO)</span>, <span className="font-semibold text-black">Cyrano</span>,
                    <span className="font-semibold text-black"> Bad Boys 3 & 4</span>, <span className="font-semibold text-black">GLOW (SAG nominee)</span>,
                    <span className="font-semibold text-black"> A Simple Favor</span> and its sequel.
                  </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                  <h4 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-2">NEXT CHAPTER</h4>
                  <p className="text-xs md:text-sm text-black leading-relaxed font-medium">
                    Now building a boutique streaming platform focused on
                    <span className="text-primary font-bold"> bold, writer-driven TV comedy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] md:min-h-[600px] shadow-2xl order-first md:order-last">
            <img
              src="/bashir-salahuddinmain.jpg"
              alt="Bashir Salahuddin"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};