export const BusinessModelSection = () => {
  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Enhanced Header for Meetings */}
        <div className="mb-12">
          <div className="inline-block border-l-4 border-primary px-6 py-4 mb-6">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-900">
              BUSINESS MODEL <span className="text-primary">& EDGE</span>
            </h2>
          </div>
          <p className="text-gray-800 text-xl font-bold max-w-2xl">
            Revolutionary economics meets sustainable scale
          </p>
        </div>

        {/* Enhanced Two Column Layout for Better Visibility */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT: Creator Economics */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/20 border-2 border-primary/60 rounded flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rotate-45 rounded-sm" />
                </div>
                <h3 className="text-gray-900 font-black text-2xl uppercase tracking-wider">Creator Ownership</h3>
              </div>
              
              {/* Enhanced Comparison Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-gray-700 text-lg font-bold uppercase">Traditional</span>
                    <span className="text-red-600 text-3xl font-black">5%</span>
                  </div>
                  <div className="h-10 bg-gray-200 rounded overflow-hidden">
                    <div className="h-full bg-red-600 w-[5%] flex items-center justify-center">
                      <span className="text-white text-sm font-bold ml-24">Networks: 95%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-primary text-lg font-bold uppercase">Taste Model</span>
                    <span className="text-primary text-3xl font-black">40%</span>
                  </div>
                  <div className="h-12 bg-gray-200 rounded overflow-hidden border-2 border-primary/50">
                    <div className="h-full bg-gradient-to-r from-primary to-orange-500 w-[40%] flex items-center justify-center">
                      <span className="text-white text-lg font-bold">Creators Control</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-primary/15 border-2 border-primary/50 rounded-lg p-6 text-center">
                <div className="text-primary text-5xl font-black">8x</div>
                <div className="text-gray-800 text-lg font-bold uppercase">More Ownership</div>
              </div>
            </div>

            {/* Enhanced Chicago Advantage */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-1 w-6 h-6">
                    <div className="bg-orange-400 rounded-sm" />
                    <div className="bg-orange-400/50 rounded-sm" />
                    <div className="bg-orange-400/50 rounded-sm" />
                    <div className="bg-orange-400 rounded-sm" />
                  </div>
                </div>
                <h3 className="text-gray-900 font-black text-2xl uppercase tracking-wider">Production Edge</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-gray-700 text-lg mb-3 font-bold">LA/NYC</div>
                  <div className="text-gray-700 text-3xl font-black">$2.4M</div>
                </div>
                <div className="text-center border-l-4 border-primary/50">
                  <div className="text-primary text-lg mb-3 font-bold">Chicago</div>
                  <div className="text-primary text-4xl font-black">$1.7M</div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t-2 border-gray-200 text-center">
                <div className="text-primary text-3xl font-black">30% Savings</div>
                <div className="text-gray-700 text-lg font-semibold">Per show, per season</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Revenue Model */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gray-200 border-2 border-gray-400 rounded flex items-center justify-center">
                  <div className="flex flex-col gap-1">
                    <div className="w-6 h-2 bg-green-500 rounded-full" />
                    <div className="w-5 h-2 bg-green-500/70 rounded-full" />
                    <div className="w-4 h-2 bg-green-500/50 rounded-full" />
                  </div>
                </div>
                <h3 className="text-gray-900 font-black text-2xl uppercase tracking-wider">Revenue Streams</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-md">
                  <span className="text-gray-900 text-lg font-bold">Subscription (SVOD)</span>
                  <span className="text-green-600 text-2xl font-black">40%</span>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-md">
                  <span className="text-gray-900 text-lg font-bold">Licensing (Domestic)</span>
                  <span className="text-green-600 text-2xl font-black">25%</span>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-md">
                  <span className="text-gray-900 text-lg font-bold">International</span>
                  <span className="text-green-600 text-2xl font-black">20%</span>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex justify-between items-center shadow-md">
                  <span className="text-gray-900 text-lg font-bold">Merch & Live</span>
                  <span className="text-green-600 text-2xl font-black">15%</span>
                </div>
              </div>
            </div>

            {/* Enhanced Key Metrics */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-gray-900 font-black text-2xl uppercase mb-6">UNIT ECONOMICS</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center shadow-md">
                  <div className="text-primary text-3xl font-black">$1.7M</div>
                  <div className="text-gray-700 text-sm uppercase font-bold">Cost/Show</div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center shadow-md">
                  <div className="text-primary text-3xl font-black">$3.5M</div>
                  <div className="text-gray-700 text-sm uppercase font-bold">Revenue/Show</div>
                </div>
                <div className="bg-white border-2 border-primary rounded-lg p-4 text-center col-span-2 shadow-lg">
                  <div className="text-green-600 text-4xl font-black">$1.8M</div>
                  <div className="text-gray-800 text-sm uppercase font-bold">Net Profit Per Show</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Highlight Bar */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-orange-100/50 to-primary/10 border-l-6 border-primary rounded-lg p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="text-center flex-1 min-w-[180px]">
              <div className="text-primary text-4xl font-black">106%</div>
              <div className="text-gray-800 text-lg uppercase font-bold">Gross Margin</div>
            </div>
            <div className="text-center flex-1 min-w-[180px]">
              <div className="text-primary text-4xl font-black">3-5 Years</div>
              <div className="text-gray-800 text-lg uppercase font-bold">IP Payback</div>
            </div>
            <div className="text-center flex-1 min-w-[180px]">
              <div className="text-primary text-4xl font-black">Infinite</div>
              <div className="text-gray-800 text-lg uppercase font-bold">Franchise Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
