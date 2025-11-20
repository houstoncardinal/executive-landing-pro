export const MarketPositioningSection = () => {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Compact Header */}
        <div className="mb-12">
          <div className="inline-block bg-primary/10 border-l-4 border-primary px-6 py-2 mb-6 skew-x-[-2deg]">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white skew-x-[2deg]">
              MARKET <span className="text-primary">POSITIONING</span>
            </h2>
          </div>
          <p className="text-primary text-lg font-bold uppercase tracking-wide">
            Curated Like A24. Built Like A Studio.
          </p>
        </div>

        {/* Compact Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* LEFT: Market Landscape */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-2xl uppercase mb-6">The Landscape</h3>
            
            {/* Short Form */}
            <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-l-4 border-red-500 rounded p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 text-lg">📱</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-red-300 font-bold text-base uppercase mb-1">Short-Form Viral</h4>
                  <p className="text-white/80 text-sm">TikTok, YouTube — fast trends, no franchises</p>
                </div>
              </div>
            </div>

            {/* Prestige */}
            <div className="bg-gradient-to-r from-blue-950/30 to-gray-900/30 border-l-4 border-blue-500 rounded p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 text-lg">🎭</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-blue-300 font-bold text-base uppercase mb-1">Prestige Drama</h4>
                  <p className="text-white/80 text-sm">HBO, Netflix — expensive, critic-focused</p>
                </div>
              </div>
            </div>

            {/* TASTE Sweet Spot */}
            <div className="bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary rounded p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl font-black">🎯</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-primary font-black text-lg uppercase mb-1">TASTE: Sweet Spot</h4>
                  <p className="text-white text-sm font-bold">Half-hour franchises. Quality + Scale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Proven Models */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-2xl uppercase mb-6">Proven Models</h3>
            
            {/* A24 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600/40 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-black">A24</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base uppercase">Film Model</h4>
                  <p className="text-gray-400 text-xs">Artist-led, cultural impact</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-700/30">
                <div className="text-center">
                  <div className="text-red-400 text-lg font-black">$2.5B</div>
                  <div className="text-gray-500 text-xs">Valuation</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 text-lg font-black">19</div>
                  <div className="text-gray-500 text-xs">Oscar Wins</div>
                </div>
              </div>
            </div>

            {/* Crunchyroll */}
            <div className="bg-gradient-to-br from-orange-950/40 to-gray-900/40 border border-orange-500/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-black">CR</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base uppercase">Anime Niche</h4>
                  <p className="text-orange-300 text-xs">Community → Scale</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-orange-500/20">
                <div className="text-center">
                  <div className="text-orange-400 text-lg font-black">$2B+</div>
                  <div className="text-gray-500 text-xs">Acquired</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-400 text-lg font-black">50M+</div>
                  <div className="text-gray-500 text-xs">Users</div>
                </div>
              </div>
            </div>

            {/* Shudder */}
            <div className="bg-gradient-to-br from-green-950/40 to-gray-900/40 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">🎬</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base uppercase">Horror Focus</h4>
                  <p className="text-green-300 text-xs">Niche dominance</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-green-500/20">
                <div className="text-center">
                  <div className="text-green-400 text-lg font-black">$500M+</div>
                  <div className="text-gray-500 text-xs">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 text-lg font-black">Top</div>
                  <div className="text-gray-500 text-xs">Position</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement - Compact */}
        <div className="bg-gradient-to-r from-primary/20 via-orange-500/20 to-primary/20 border-l-4 border-primary rounded-lg p-6">
          <h3 className="text-primary font-black text-2xl uppercase mb-4 text-center">
            Not Chasing Trends — Chasing Laughs
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 border border-primary/40 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-primary text-xl">🎯</span>
              </div>
              <p className="text-white font-bold text-sm">Algorithm-Free</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 border border-primary/40 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-primary text-xl">🎬</span>
              </div>
              <p className="text-white font-bold text-sm">Audience-Building</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 border border-primary/40 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-primary text-xl">🏆</span>
              </div>
              <p className="text-white font-bold text-sm">Culturally Authentic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
