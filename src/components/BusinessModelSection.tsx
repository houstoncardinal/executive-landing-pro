export const BusinessModelSection = () => {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Minimal background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Compact Header */}
        <div className="mb-12">
          <div className="inline-block bg-primary/10 border-l-4 border-primary px-6 py-2 mb-6 skew-x-[-2deg]">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white skew-x-[2deg]">
              BUSINESS MODEL <span className="text-primary">& EDGE</span>
            </h2>
          </div>
          <p className="text-white/60 text-lg max-w-2xl">
            Revolutionary economics meets sustainable scale
          </p>
        </div>

        {/* Two Column Layout - Ultra Compact */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT: Creator Economics */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-950/40 to-gray-900/40 border border-primary/30 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 border border-primary/40 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xl">⚡</span>
                </div>
                <h3 className="text-white font-black text-xl uppercase">CREATOR OWNERSHIP</h3>
              </div>
              
              {/* Comparison Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-sm font-bold uppercase">Traditional</span>
                    <span className="text-red-400 text-xl font-black">5%</span>
                  </div>
                  <div className="h-8 bg-gray-900 rounded overflow-hidden">
                    <div className="h-full bg-red-600 w-[5%] flex items-center justify-center">
                      <span className="text-white text-xs font-bold ml-20">Networks: 95%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary text-sm font-bold uppercase">Taste Model</span>
                    <span className="text-primary text-2xl font-black">40%</span>
                  </div>
                  <div className="h-10 bg-gray-900 rounded overflow-hidden border-2 border-primary/50">
                    <div className="h-full bg-gradient-to-r from-primary to-orange-500 w-[40%] flex items-center justify-center">
                      <span className="text-white text-sm font-bold">Creators Control</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                <div className="text-primary text-3xl font-black">8x</div>
                <div className="text-white/80 text-xs font-bold uppercase">More Ownership</div>
              </div>
            </div>

            {/* Chicago Advantage */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-700/40 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-700/30 border border-gray-600/40 rounded-lg flex items-center justify-center">
                  <span className="text-orange-400 text-xl">🏗️</span>
                </div>
                <h3 className="text-white font-black text-xl uppercase">PRODUCTION EDGE</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">LA/NYC</div>
                  <div className="text-gray-400 text-2xl font-black">$2.4M</div>
                </div>
                <div className="text-center border-l-2 border-primary/30">
                  <div className="text-primary text-sm mb-2">Chicago</div>
                  <div className="text-primary text-3xl font-black">$1.7M</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700/30 text-center">
                <div className="text-primary text-2xl font-black">30% Savings</div>
                <div className="text-white/60 text-xs">Per show, per season</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Revenue Model */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-700/40 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-700/30 border border-gray-600/40 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-xl">💰</span>
                </div>
                <h3 className="text-white font-black text-xl uppercase">REVENUE STREAMS</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-900/50 border border-gray-700/30 rounded p-3 flex justify-between items-center">
                  <span className="text-white text-sm font-bold">Subscription (SVOD)</span>
                  <span className="text-green-400 text-lg font-black">40%</span>
                </div>
                <div className="bg-gray-900/50 border border-gray-700/30 rounded p-3 flex justify-between items-center">
                  <span className="text-white text-sm font-bold">Licensing (Domestic)</span>
                  <span className="text-green-400 text-lg font-black">25%</span>
                </div>
                <div className="bg-gray-900/50 border border-gray-700/30 rounded p-3 flex justify-between items-center">
                  <span className="text-white text-sm font-bold">International</span>
                  <span className="text-green-400 text-lg font-black">20%</span>
                </div>
                <div className="bg-gray-900/50 border border-gray-700/30 rounded p-3 flex justify-between items-center">
                  <span className="text-white text-sm font-bold">Merch & Live</span>
                  <span className="text-green-400 text-lg font-black">15%</span>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-br from-orange-950/40 to-gray-900/40 border border-primary/30 rounded-lg p-6">
              <h3 className="text-white font-black text-lg uppercase mb-4">UNIT ECONOMICS</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 rounded p-3 text-center">
                  <div className="text-primary text-2xl font-black">$1.7M</div>
                  <div className="text-white/60 text-xs uppercase">Cost/Show</div>
                </div>
                <div className="bg-black/40 rounded p-3 text-center">
                  <div className="text-primary text-2xl font-black">$3.5M</div>
                  <div className="text-white/60 text-xs uppercase">Revenue/Show</div>
                </div>
                <div className="bg-black/40 rounded p-3 text-center col-span-2">
                  <div className="text-green-400 text-3xl font-black">$1.8M</div>
                  <div className="text-white/60 text-xs uppercase">Net Profit Per Show</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight Bar */}
        <div className="mt-12 bg-gradient-to-r from-primary/20 via-orange-500/20 to-primary/20 border-l-4 border-primary rounded-lg p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-primary text-2xl font-black">106%</div>
              <div className="text-white/70 text-xs uppercase">Gross Margin</div>
            </div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-primary text-2xl font-black">3-5 Years</div>
              <div className="text-white/70 text-xs uppercase">IP Payback</div>
            </div>
            <div className="text-center flex-1 min-w-[150px]">
              <div className="text-primary text-2xl font-black">Infinite</div>
              <div className="text-white/70 text-xs uppercase">Franchise Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
