export const OpportunitySection = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-primary font-bold text-lg uppercase tracking-widest">
              THE OPPORTUNITY
            </p>
            
            <h2 className="font-display text-7xl md:text-8xl font-black leading-none">
              <span className="text-white">WHERE COMEDY</span><br/>
              <span className="text-primary">GOES TO DIE.</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Streaming giants have lost their <span className="text-white">**comedic instinct**</span>. They're making fewer comedies, and what they do make is often <span className="text-white">**dramedy filler**</span> by faulty algorithms.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Audiences are fleeing to short-form content (YouTube, TikTok). Taste is the premium platform that brings them back to <span className="text-white">**timeless, writer-driven television**</span>.
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] border-l-4 border-primary p-12 flex flex-col justify-center">
            <h3 className="text-4xl font-black text-primary uppercase mb-6">
              THE MARKET IS<br/>UNDERSERVED.
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              No major streamer owns the <span className="text-white font-semibold">**hard comedy**</span> lane. We will.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
