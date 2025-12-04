export const MarketPositioningSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Enhanced Header for Meetings */}
        <div className="mb-8 md:mb-12">
          <div className="inline-block border-l-4 border-primary px-4 md:px-6 py-3 md:py-4 mb-4 md:mb-6">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight text-gray-900">
              MARKET <span className="text-primary">POSITIONING</span>
            </h2>
          </div>
          <p className="text-gray-800 text-base md:text-xl font-bold uppercase tracking-wide">
            Curated Excellence. Studio Precision.
          </p>
        </div>

        {/* Enhanced Two Column Layout for Better Visibility */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* LEFT: Market Landscape */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-gray-900 font-black text-xl md:text-3xl uppercase mb-4 md:mb-8">The Landscape</h3>
            
            {/* Enhanced Short Form */}
            <div className="bg-gradient-to-r from-red-50 to-gray-50 border-l-4 md:border-l-6 border-red-500 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 border-2 border-red-300 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-red-500 rounded-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-red-700 font-bold text-base md:text-xl uppercase mb-1 md:mb-2">Short-Form Viral</h4>
                  <p className="text-gray-700 text-sm md:text-lg font-semibold">TikTok, YouTube — fast trends, no franchises</p>
                </div>
              </div>
            </div>

            {/* Enhanced Prestige */}
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 border-l-4 md:border-l-6 border-blue-500 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 border-2 border-blue-300 rounded flex items-center justify-center flex-shrink-0">
                  <div className="flex gap-1">
                    <div className="w-2 h-5 md:w-3 md:h-6 bg-blue-500 rounded-full" />
                    <div className="w-2 h-5 md:w-3 md:h-6 bg-blue-400 rounded-full" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-blue-700 font-bold text-base md:text-xl uppercase mb-1 md:mb-2">Prestige Drama</h4>
                  <p className="text-gray-700 text-sm md:text-lg font-semibold">HBO, Netflix — expensive, critic-focused</p>
                </div>
              </div>
            </div>

            {/* Enhanced TASTE Sweet Spot */}
            <div className="bg-gradient-to-r from-primary/15 to-orange-100 border-2 md:border-3 border-primary rounded-lg p-4 md:p-8 shadow-xl">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 border-2 md:border-3 border-primary/60 rounded flex items-center justify-center flex-shrink-0">
                  <div className="relative w-6 h-6 md:w-8 md:h-8">
                    <div className="absolute inset-0 border-2 md:border-3 border-primary rounded-full" />
                    <div className="absolute inset-1.5 md:inset-2 bg-primary rounded-full" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-primary font-black text-lg md:text-2xl uppercase mb-1 md:mb-2">TASTE: Sweet Spot</h4>
                  <p className="text-gray-800 text-base md:text-xl font-bold">Half-hour franchises. Quality + Scale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Proven Models */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-gray-900 font-black text-xl md:text-3xl uppercase mb-4 md:mb-8">Proven Models</h3>
            
            {/* Enhanced Indie Film Model */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-purple-500 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 md:w-8 md:h-8 border-2 md:border-3 border-white rounded-sm rotate-12" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 font-bold text-base md:text-xl uppercase tracking-wide">Indie Film Model</h4>
                  <p className="text-gray-600 text-sm md:text-lg font-semibold">Artist-led, cultural impact</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 border-t-2 border-gray-200">
                <div className="text-center">
                  <div className="text-red-600 text-2xl md:text-4xl font-black">$2.5B</div>
                  <div className="text-gray-600 text-sm md:text-lg font-bold uppercase">Valuation</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-600 text-2xl md:text-4xl font-black">19</div>
                  <div className="text-gray-600 text-sm md:text-lg font-bold uppercase">Oscar Wins</div>
                </div>
              </div>
            </div>

            {/* Enhanced Crunchyroll */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center flex-shrink-0">
                  <div className="relative w-6 h-6 md:w-8 md:h-8">
                    <div className="absolute inset-0 border-2 md:border-3 border-white rounded-full" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 font-bold text-base md:text-xl uppercase">Anime Niche</h4>
                  <p className="text-orange-600 text-sm md:text-lg font-bold">Community to Scale</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 border-t-2 border-orange-200">
                <div className="text-center">
                  <div className="text-orange-600 text-2xl md:text-4xl font-black">$2B+</div>
                  <div className="text-gray-600 text-sm md:text-lg font-bold uppercase">Acquired</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-600 text-2xl md:text-4xl font-black">50M+</div>
                  <div className="text-gray-600 text-sm md:text-lg font-bold uppercase">Users</div>
                </div>
              </div>
            </div>

            {/* Enhanced Shudder */}
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-lg p-4 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 md:w-8 md:h-8 border-2 md:border-3 border-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 font-bold text-base md:text-xl uppercase">Horror Focus</h4>
                  <p className="text-green-600 text-sm md:text-lg font-bold">Niche dominance</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6 border-t-2 border-green-200">
                <div className="text-center">
                  <div className="text-green-600 text-2xl md:text-4xl font-black">$500M+</div>
                  <div className="text-gray-600 text-sm md:text-lg font-bold uppercase">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-green-600 text-2xl md:text-4xl font-black">Top</div>
                  <div className="text-gray-600 text-sm md:text-lg font-bold uppercase">Position</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Statement for Better Visibility */}
        <div className="bg-gradient-to-r from-primary/15 via-orange-100/50 to-primary/15 border-l-4 md:border-l-6 border-primary rounded-lg p-4 md:p-8 shadow-xl">
          <h3 className="text-gray-900 font-black text-xl md:text-3xl uppercase mb-6 md:mb-8 text-center">
            Not Chasing Trends — Chasing Laughs
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/20 border-2 md:border-3 border-primary/50 rounded mx-auto mb-2 md:mb-4 flex items-center justify-center">
                <div className="relative w-7 h-7 md:w-10 md:h-10">
                  <div className="absolute inset-0 border-2 md:border-3 border-primary rounded-full" />
                  <div className="absolute inset-2 md:inset-3 bg-primary rounded-full" />
                </div>
              </div>
              <p className="text-gray-800 font-bold text-xs sm:text-sm md:text-lg tracking-wide">Algorithm-Free</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/20 border-2 md:border-3 border-primary/50 rounded mx-auto mb-2 md:mb-4 flex items-center justify-center">
                <div className="flex gap-0.5 md:gap-1">
                  <div className="w-1.5 md:w-2 h-7 md:h-10 bg-primary rounded-full" />
                  <div className="w-1.5 md:w-2 h-5 md:h-8 bg-primary/70 rounded-full mt-1 md:mt-2" />
                  <div className="w-1.5 md:w-2 h-7 md:h-10 bg-primary rounded-full" />
                </div>
              </div>
              <p className="text-gray-800 font-bold text-xs sm:text-sm md:text-lg tracking-wide">Audience-Building</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/20 border-2 md:border-3 border-primary/50 rounded mx-auto mb-2 md:mb-4 flex items-center justify-center">
                <div className="w-7 h-7 md:w-10 md:h-10 bg-primary rotate-45 rounded-sm" />
              </div>
              <p className="text-gray-800 font-bold text-xs sm:text-sm md:text-lg tracking-wide">Culturally Authentic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};