export const OpportunitySection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Premium corporate grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-orange-500/5 to-transparent"></div>

          <div className="relative z-10 w-full max-w-6xl mx-auto">
            {/* Executive Header */}
            <div className="mb-16">
              <div className="mb-8">
                <div className="bg-primary px-12 py-4 skew-x-[-15deg] transform inline-block">
                  <span className="inline-block text-white text-xs font-black uppercase tracking-[0.2em] skew-x-[15deg]">
                    THE OPPORTUNITY
                  </span>
                </div>
              </div>

            <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
            <div>
              <h2 className="font-display text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-[0.95]">
                THE <span className="text-primary">OPPORTUNITY</span>
              </h2>
              <div className="h-2 w-32 bg-gradient-to-r from-primary via-orange-500 to-yellow-500 mb-8"></div>
              <p className="text-2xl text-gray-700 font-semibold leading-tight mb-4">
                Comedy Is Timeless… and Underserved
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                A billion-dollar market gap exists where universal demand meets zero supply. The appetite for great comedy has never been stronger — yet the market remains critically underserved.
              </p>
            </div>

            {/* Key Metric Callout */}
            <div className="bg-gradient-to-br from-primary via-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-sm font-bold uppercase tracking-wider mb-3 opacity-90">Market Size</div>
              <div className="text-5xl font-black mb-2">$1B+</div>
              <div className="text-sm font-medium opacity-90">Addressable Opportunity</div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-xs uppercase tracking-wider mb-2 opacity-75">Growth Rate</div>
                <div className="text-3xl font-black">↑ 23%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Analysis Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Universal Appeal */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Global</div>
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">Universal Appeal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comedy transcends borders — universal, cross-cultural, and endlessly rewatchable. The appetite has never been stronger.
              </p>
            </div>
          </div>

          {/* Legacy Dominance */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-red-500 to-red-600 h-2"></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-gray-900">57B+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Minutes</div>
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">Legacy Dominance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Office and Martin still dominate streaming viewership — but no one's building their successors.
              </p>
            </div>
          </div>

          {/* Market Gap */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-primary to-orange-500 h-2"></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-gray-900">0</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">New Classics</div>
                </div>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">Critical Gap</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Massive demand exists with zero supply. Taste fills this gap with high-quality originals designed to last.
              </p>
            </div>
          </div>
        </div>

        {/* Competitive Positioning */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-10 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-orange-500"></div>
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Competitive Positioning</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Netflix */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-500"></div>
              <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-xl p-8 border border-red-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-red-600 font-bold uppercase tracking-wide">Traditional Model</div>
                    <div className="text-2xl font-black text-gray-900">Netflix</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Algorithm-driven decisions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Data over creative instinct</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-700 text-sm">Mixed content strategy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Taste */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary"></div>
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 border-2 border-primary shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-primary font-bold uppercase tracking-wide">Taste Model</div>
                    <div className="text-2xl font-black text-gray-900">Creator-First</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 text-sm font-medium">Creative instinct over algorithms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 text-sm font-medium">Creator-led decisions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 text-sm font-medium">Pure comedy focus</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Brand Clarity</div>
                  <div className="text-sm text-gray-900 font-bold">Comedy, not dramedy — no tears, no trauma, just timeless laughter</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-primary via-orange-500 to-orange-600 rounded-2xl p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-sm uppercase tracking-[0.3em]">Strategic Conclusion</span>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <p className="text-white text-3xl md:text-4xl font-black leading-tight mb-8">
              The solution isn't more content —<br />
              it's better content, made by the people<br />
              who actually know how
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white text-2xl font-black mb-1">40%</div>
                <div className="text-white/80 text-xs uppercase tracking-wide">Creator Ownership</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white text-2xl font-black mb-1">30%</div>
                <div className="text-white/80 text-xs uppercase tracking-wide">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-white text-2xl font-black mb-1">$1B+</div>
                <div className="text-white/80 text-xs uppercase tracking-wide">Market Opportunity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
