export const CTASection = () => {
  return (
    <section
      className="py-16 md:py-32 px-4 md:px-6 bg-primary"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,0.04) 25%, transparent 25%)",
        backgroundSize: "90px 90px",
        backgroundPosition: "0 0, 0 45px, 45px -45px, -45px 0px",
      }}
    >
      <div className="container mx-auto max-w-6xl text-center px-2">
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <img src="/logo.png" alt="Taste logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-12 md:mb-32 uppercase tracking-wide leading-tight">
          Comedy connects the world. It just needed a home — with taste.
        </h3>
        
        <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase">
          THANK YOU.
        </p>
      </div>
    </section>
  );
};