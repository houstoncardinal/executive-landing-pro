export const VisionarySection = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="bg-primary px-12 py-6 skew-x-[-15deg]">
                <h3 className="text-black text-2xl font-black uppercase skew-x-[15deg]">THE VISIONARY</h3>
              </div>
            </div>
            
            <h1 className="font-display text-7xl md:text-8xl font-black text-white uppercase leading-none">
              BASHIR<br />SALAHUDDIN
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl text-white font-bold">
                Award-winning Actor, Writer & Producer.<br/>Harvard Alum.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Bashir launched his career as a writer on <span className="text-white font-semibold">**Late Night with Jimmy Fallon**</span> (Emmy Nominee) and went on to co-create the critically acclaimed comedies <span className="text-white font-semibold">**South Side (HBO Max)**</span> and <span className="text-white font-semibold">**Sherman's Showcase (IFC/Hulu)**</span>.
              </p>
              
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-lg text-gray-300">
                  <span className="text-white font-bold">Hollywood Credibility:</span> Starred in Top Gun: Maverick (HONDO), GLOW, Bad Boys 4.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative bg-[#C5B4A8] rounded-2xl flex items-center justify-center min-h-[600px]">
            <div className="text-9xl font-black text-[#9D8A7A] opacity-40">0 × 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};
