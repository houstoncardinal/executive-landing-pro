export const BusinessModelSection = () => {
  return (
    <section className="relative py-16 px-6 bg-black overflow-hidden min-h-screen flex items-center">
      {/* Premium background matching theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-orange-500/8" />
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/5 via-transparent to-primary/5" />
        
        {/* Animated glows */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[140px] animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-orange-500/12 rounded-full blur-[140px] animate-pulse" style={{animationDuration: '6s'}} />
        
        {/* Top accent lines */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Powerful Header Matching Other Sections */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4 leading-none">
            <span className="text-white">Business Model</span>
            <br />
            <span className="text-primary">&</span>{' '}
            <span className="text-primary">Edge</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary mx-auto mb-6 rounded-full"></div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Revolutionary Economics. Sustainable Scale.
          </h3>

          <p className="text-white/70 text-base max-w-3xl mx-auto leading-relaxed">
            A business model designed for creators, not corporations — transforming the economics of comedy entertainment
          </p>
        </div>

        {/* Main Content Grid with Powerful Charts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Creator Ownership - Enhanced Chart */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-orange-950/40 to-orange-950/20 border-2 border-primary/30 rounded-2xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 border-2 border-primary/40 rounded-xl mb-4 mx-auto">
                <span className="text-primary text-2xl">⚡</span>
              </div>

              <h3 className="text-white font-black text-xl uppercase text-center mb-6 leading-tight">
                Creator Ownership Revolution
              </h3>

              {/* Powerful Comparison Chart */}
              <div className="space-y-6 mb-4">
                {/* Traditional */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-red-300 text-sm font-bold">Traditional Model</span>
                    <span className="text-red-400 text-2xl font-black">5%</span>
                  </div>
                  <div className="relative w-full h-8 bg-gray-900/80 rounded-lg overflow-hidden border border-red-500/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-lg" style={{width: '5%'}}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/50 text-xs font-bold">Networks Own 95%</span>
                    </div>
                  </div>
                </div>

                {/* Taste */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary text-sm font-bold">Taste Model</span>
                    <span className="text-primary text-3xl font-black">40%</span>
                  </div>
                  <div className="relative w-full h-12 bg-gray-900/80 rounded-lg overflow-hidden border-2 border-primary/50 shadow-[0_0_20px_rgba(244,85,37,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-orange-400 rounded-lg animate-pulse" style={{width: '40%', animationDuration: '3s'}}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Creators Control</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Badge */}
              <div className="bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary/40 rounded-xl p-3 text-center">
                <div className="text-primary text-3xl font-black mb-1">8x</div>
                <div className="text-white/90 text-xs font-bold uppercase tracking-wide">More Ownership</div>
              </div>
            </div>
          </div>

          {/* Production Edge - Enhanced Chart */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-orange-950/40 to-orange-950/20 border-2 border-primary/30 rounded-2xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 border-2 border-primary/40 rounded-xl mb-4 mx-auto">
                <span className="text-primary text-2xl">🏗️</span>
              </div>

              <h3 className="text-white font-black text-xl uppercase text-center mb-6 leading-tight">
                Chicago Production Edge
              </h3>

              {/* Cost Comparison Chart */}
              <div className="space-y-4 mb-4">
                {/* LA/NYC Cost */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm font-bold">LA/NYC</span>
                    <span className="text-gray-400 text-xl font-black">$2.4M</span>
                  </div>
                  <div className="relative w-full h-6 bg-gray-900/80 rounded-lg overflow-hidden border border-gray-600/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg" style={{width: '100%'}}></div>
                  </div>
                </div>

                {/* Chicago Cost */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary text-sm font-bold">Chicago</span>
                    <span className="text-primary text-2xl font-black">$1.7M</span>
                  </div>
                  <div className="relative w-full h-8 bg-gray-900/80 rounded-lg overflow-hidden border-2 border-primary/50 shadow-[0_0_20px_rgba(244,85,37,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-orange-400 rounded-lg animate-pulse" style={{width: '70%', animationDuration: '3s'}}></div>
                  </div>
                </div>
              </div>

              {/* Savings Badge */}
              <div className="bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary/40 rounded-xl p-3 text-center mb-4">
                <div className="text-primary text-3xl font-black mb-1">30%</div>
                <div className="text-white/90 text-xs font-bold uppercase tracking-wide">Cost Savings</div>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-white/80">Second City talent pipeline</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-white/80">State-of-art facilities</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-white/80">Production incentives</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Streams - Enhanced Visualization */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-orange-950/40 to-orange-950/20 border-2 border-primary/30 rounded-2xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 border-2 border-primary/40 rounded-xl mb-4 mx-auto">
                <span className="text-primary text-2xl">💰</span>
              </div>

              <h3 className="text-white font-black text-xl uppercase text-center mb-6 leading-tight">
                Multi-Stream Revenue
              </h3>

              {/* Revenue Stream Bars */}
              <div className="space-y-3 mb-4">
                {/* Subscriptions */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white text-xs font-bold">Subscriptions</span>
                    <span className="text-primary text-sm font-black">$10-20/mo</span>
                  </div>
                  <div className="relative w-full h-6 bg-gray-900/80 rounded-lg overflow-hidden border border-primary/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-lg" style={{width: '85%'}}></div>
                  </div>
                </div>

                {/* Partnerships */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white text-xs font-bold">Partnerships</span>
                    <span className="text-orange-400 text-sm font-black">Ford • Nike</span>
                  </div>
                  <div className="relative w-full h-6 bg-gray-900/80 rounded-lg overflow-hidden border border-orange-500/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg" style={{width: '65%'}}></div>
                  </div>
                </div>

                {/* IP Expansion */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white text-xs font-bold">IP Expansion</span>
                    <span className="text-yellow-400 text-sm font-black">📚 🎮 🛍️</span>
                  </div>
                  <div className="relative w-full h-6 bg-gray-900/80 rounded-lg overflow-hidden border border-yellow-500/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg" style={{width: '50%'}}></div>
                  </div>
                </div>
              </div>

              {/* Diversification Badge */}
              <div className="bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary/40 rounded-xl p-3 text-center">
                <div className="text-primary text-2xl font-black mb-1">3+</div>
                <div className="text-white/90 text-xs font-bold uppercase tracking-wide">Revenue Streams</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Summary - Enhanced */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-orange-500/25 to-primary/25 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
          
          <div className="relative bg-gradient-to-br from-white/12 to-white/5 border-2 border-white/25 rounded-2xl p-8 backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange-400/40 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-yellow-400/40 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-2xl"></div>

            <div className="text-center mb-6">
              <h3 className="text-primary font-black text-2xl uppercase tracking-wide mb-3">
                Economic Revolution Complete
              </h3>

              <p className="text-white/90 text-base leading-relaxed max-w-3xl mx-auto">
                Taste reinvents creator economics with <span className="text-primary font-bold drop-shadow-[0_0_10px_rgba(244,85,37,0.5)]">40% ownership</span>, <span className="text-orange-400 font-bold drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]">30% savings</span>, and <span className="text-yellow-400 font-bold">sustainable scaling</span>
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-900/50 border-2 border-primary/30 rounded-xl hover:border-primary/50 transition-all duration-300">
                <div className="text-2xl mb-2">💪</div>
                <div className="text-primary text-xl font-black mb-1">40%</div>
                <div className="text-xs text-white/80 font-bold">Creator Power</div>
              </div>
              <div className="text-center p-3 bg-gray-900/50 border-2 border-orange-500/30 rounded-xl hover:border-orange-500/50 transition-all duration-300">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-orange-400 text-xl font-black mb-1">30%</div>
                <div className="text-xs text-white/80 font-bold">Cost Efficient</div>
              </div>
              <div className="text-center p-3 bg-gray-900/50 border-2 border-primary/30 rounded-xl hover:border-primary/50 transition-all duration-300">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-primary text-xl font-black mb-1">3+</div>
                <div className="text-xs text-white/80 font-bold">Revenue Streams</div>
              </div>
              <div className="text-center p-3 bg-gray-900/50 border-2 border-yellow-500/30 rounded-xl hover:border-yellow-500/50 transition-all duration-300">
                <div className="text-2xl mb-2">🌟</div>
                <div className="text-yellow-400 text-xl font-black mb-1">8x</div>
                <div className="text-xs text-white/80 font-bold">More Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
    </section>
  );
};
