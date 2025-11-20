export const ComedyDNASection = () => {
  const dnaImages = [
    { src: "/toastmockup.png", caption: "Creator-first DNA" },
    { src: "/toastmockup2.png", caption: "Comedy, not dramedy" },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {dnaImages.map((dna) => (
              <div key={dna.src} className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={dna.src}
                  alt={dna.caption}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <p className="absolute inset-x-6 bottom-6 text-sm font-semibold uppercase tracking-[0.3em] text-white">
                  {dna.caption}
                </p>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <h2 className="font-display text-7xl md:text-8xl font-black leading-none">
              <span className="text-white">COMEDY. </span>
              <span className="text-primary">NOT DRAMEDY.</span>
            </h2>
            
            <p className="text-2xl text-gray-400 font-medium">
              Our DNA is hard, rewatchable comedy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
