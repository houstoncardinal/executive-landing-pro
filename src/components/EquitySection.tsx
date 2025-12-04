export const EquitySection = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-none">
            <span className="text-white">THE CREATOR</span><br/>
            <span className="text-primary">EQUITY</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 font-medium">
            Attracting the best talent through superior deals.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-none p-6 md:p-10 flex-1">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-3 md:mb-4 uppercase">
              TRADITIONAL STREAMER
            </h3>
            <div className="flex items-baseline gap-2 md:gap-4 mb-3 md:mb-4">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-600">~5%</span>
            </div>
            <p className="text-gray-400 text-sm md:text-lg">
              Writers get minimal back-end ownership.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3d2618] to-[#1a1a1a] border-2 border-primary rounded-none p-6 md:p-10 flex-1">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-3 md:mb-4 uppercase">
              THE TASTE MODEL
            </h3>
            <div className="flex items-baseline gap-2 md:gap-4 mb-3 md:mb-4">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white">40%+</span>
            </div>
            <p className="text-white text-sm md:text-lg font-medium">
              We offer substantial participation and creative control.
            </p>
          </div>
        </div>
        
        <div className="text-left">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 leading-relaxed">
            <span className="text-white">Creator-focused, quality-first</span> — substantial participation and profit-sharing from the start.
          </p>
        </div>
      </div>
    </section>
  );
};