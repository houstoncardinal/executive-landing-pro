export const MarketPositioningSection = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-500/5" />
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-blue-500/2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto max-w-8xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-8 mb-10">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-500/60 to-transparent" />
            <div className="w-4 h-4 bg-purple-500/80 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.6)]" />
            <div className="w-px h-16 bg-gradient-to-t from-transparent via-purple-500/60 to-transparent" />
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              MARKET POSITIONING
            </span>
          </h2>

          <div className="w-48 h-1 bg-gradient-to-r from-purple-500/70 via-blue-500/90 to-purple-500/70 mx-auto mb-10 rounded-full shadow-[0_0_30px_rgba(var(--primary),0.3)]" />
          <p className="text-2xl text-purple-400 font-bold uppercase tracking-wider mb-4">
            Curated Like a Record Label.
          </p>
          <p className="text-xl text-purple-300 font-semibold uppercase tracking-wider">
            Built Like a Studio.
          </p>
        </div>

        {/* Main positioning content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Competitive positioning */}
          <div>
            <h3 className="text-3xl font-black text-purple-400 uppercase tracking-wide mb-8">
              Entertainment Landscape
            </h3>

            <div className="space-y-6">
              {/* TikTok/YouTube Short Form */}
              <div className="bg-gradient-to-r from-red-950/30 to-red-950/20 border border-red-500/30 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 border border-red-400/30 rounded-full flex items-center justify-center">
                    <span className="text-red-400 font-bold text-lg">📱</span>
                  </div>
                  <div>
                    <h4 className="text-red-300 font-bold text-xl uppercase tracking-wide mb-2">
                      SHORT-FORM VIRAL
                    </h4>
                    <p className="text-white text-base leading-relaxed">
                      TikTok, YouTube Shorts — fast, trend-chasing, algorithmic delivery. Gets eyeballs but doesn't build franchises.
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio Content */}
              <div className="bg-gradient-to-r from-orange-950/30 to-orange-950/20 border border-orange-500/30 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 border border-orange-400/30 rounded-full flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-lg">🎥</span>
                  </div>
                  <div>
                    <h4 className="text-orange-300 font-bold text-xl uppercase tracking-wide mb-2">
                      STUDIO STORYTELLING
                    </h4>
                    <p className="text-white text-base leading-relaxed">
                      HBO, Netflix prestige TV — prestigious, expensive, measured in Emmys. Appeals to critics, not mass audiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Taste Position */}
              <div className="bg-gradient-to-r from-purple-950/30 to-purple-950/20 border-2 border-purple-500/40 p-6 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 border-2 border-purple-400/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                    <span className="text-purple-400 font-black text-xl">🎭</span>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-bold text-xl uppercase tracking-wide mb-2">
                      TASTE: THE SWEET SPOT
                    </h4>
                    <p className="text-white text-base leading-relaxed">
                      Half-hour comedies that build connections, create franchises, and delight audiences. Quality over quantity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Market validation & precedents */}
          <div>
            <h3 className="text-3xl font-black text-blue-400 uppercase tracking-wide mb-8">
              Validated Market Precedents
            </h3>

            <div className="space-y-6">
              {/* A24 Comparison */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-600/30 p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm tracking-wider">A24</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl uppercase tracking-wide mb-2">
                      THE A24 MODEL
                    </h4>
                    <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-3">
                      FILM • ARTIST-LED • CULTURAL IMPACT
                    </p>
                    <p className="text-white text-base leading-relaxed">
                      Started as indie darlings, became billion-dollar brand. Taste applies this to comedy: creator-owned, culturally relevant, audience-building.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-600/20">
                  <div className="text-center">
                    <p className="text-red-400 font-bold text-lg">$800M</p>
                    <p className="text-gray-400 text-xs">Market Cap</p>
                  </div>
                  <div className="text-center">
                    <p className="text-purple-400 font-bold text-lg">19 Oscars</p>
                    <p className="text-gray-400 text-xs">Nominated</p>
                  </div>
                </div>
              </div>

              {/* Crunchyroll Comparison */}
              <div className="bg-gradient-to-br from-orange-950/40 to-red-950/40 border border-orange-500/30 p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm tracking-wider">CR</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl uppercase tracking-wide mb-2">
                      CRUNCHYROLL MODEL
                    </h4>
                    <p className="text-orange-300 text-sm font-semibold uppercase tracking-wider mb-3">
                      ANIME • NICHE • GLOBAL GROWTH
                    </p>
                    <p className="text-white text-base leading-relaxed">
                      Niche anime streaming became $2B+ brand through passionate community building. Comedy has the same untapped potential.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-orange-500/20">
                  <div className="text-center">
                    <p className="text-orange-400 font-bold text-lg">$2B+</p>
                    <p className="text-gray-400 text-xs">Acquired For</p>
                  </div>
                  <div className="text-center">
                    <p className="text-orange-400 font-bold text-lg">50M+</p>
                    <p className="text-gray-400 text-xs">Active Users</p>
                  </div>
                </div>
              </div>

              {/* Shudder Comparison */}
              <div className="bg-gradient-to-br from-green-950/40 to-emerald-950/40 border border-green-500/30 p-6 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm tracking-wider">*</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl uppercase tracking-wide mb-2">
                      SHUDDER MODEL
                    </h4>
                    <p className="text-green-300 text-sm font-semibold uppercase tracking-wider mb-3">
                      HORROR • PRESTIGE • NICHE DOMINATION
                    </p>
                    <p className="text-white text-base leading-relaxed">
                      Defined modern horror streaming through quality curation. Taste will do the same for comedy.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-green-500/20">
                  <div className="text-center">
                    <p className="text-green-400 font-bold text-lg">$500M+</p>
                    <p className="text-gray-400 text-xs">Annual Revenue</p>
                  </div>
                  <div className="text-center">
                    <p className="text-green-400 font-bold text-lg">Premium</p>
                    <p className="text-gray-400 text-xs">Brand Position</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand positioning statement */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-2 border-purple-500/30 rounded-3xl shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)] max-w-5xl">
            <h3 className="text-purple-400 font-black text-4xl uppercase tracking-wide mb-6">
              We're Not Chasing Trends — We're Chasing Laughs
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 border-2 border-purple-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-400 font-black text-2xl">🎯</span>
                </div>
                <p className="text-white font-bold text-lg mb-2">Algorithm-Free</p>
                <p className="text-gray-300 text-sm">Creative instinct over data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 border-2 border-purple-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-400 font-black text-2xl">🎬</span>
                </div>
                <p className="text-white font-bold text-lg mb-2">Audience-Building</p>
                <p className="text-gray-300 text-sm">Creating tomorrow's favorites</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 border-2 border-purple-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-400 font-black text-2xl">🏆</span>
                </div>
                <p className="text-white font-bold text-lg mb-2">Culturally Authentic</p>
                <p className="text-gray-300 text-sm">Real voices, real impact</p>
              </div>
            </div>
            <div className="mt-8 h-1 bg-gradient-to-r from-purple-500 via-primary to-blue-500 rounded-full shadow-[0_0_40px_rgba(var(--primary-rgb),0.6)]" />
          </div>
        </div>
      </div>
    </section>
  );
};
