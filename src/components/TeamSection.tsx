const teamMembers = [
  {
    name: "BASHIR SALAHUDDIN",
    role: "CEO · Emmy-nominated writer/actor/director",
    image: "/bashir-alt.png",
  },
  {
    name: "SULTAN SALAHUDDIN",
    role: "EVP, Content",
    image: "/sultan-salahuddin.png",
  },
  {
    name: "DIALLO RIDDLE",
    role: "Content Curator · Sherman’s Showcase co-creator",
    image: "/diallo-riddle.png",
  },
  {
    name: "MICHAEL BLIEDEN",
    role: "Content Curator · Critically Acclaimed Writer",
    image: "/michael-blieden.png",
  },
  {
    name: "CHANDRA RUSSELL",
    role: "Director / Writer · Sherman’s Showcase & South Side",
    image: "/chandra-russell.png",
  },
  {
    name: "WALI SALAHUDDIN",
    role: "CIO",
    image: "/wali-salahuddin.png",
  },
];

export const TeamSection = () => {
  const [lead, ...partners] = teamMembers;

  return (
    <section className="-mt-20 py-16 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-3 uppercase">
            THE <span className="text-primary">DREAM TEAM</span> OF COMEDY
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Creator-first leadership, seasoned writers, directors, and producers who have proven they can build shows that audiences love.
          </p>
        </div>

        {/* Ultra-Compressed Team Layout */}
        <div className="space-y-4">
          {/* Leadership Row - Compact */}
          <div className="flex justify-center">
            <div className="group relative overflow-hidden rounded-xl border border-primary bg-white/5 shadow-[0_15px_60px_rgba(0,0,0,0.5)] max-w-xs">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-full h-full object-contain transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
              </div>
              <div className="absolute inset-x-3 bottom-3 text-left text-white">
                <p className="text-lg font-black uppercase tracking-wide leading-tight">{lead.name}</p>
                <p className="text-sm text-white/80 mt-0.5 leading-tight">{lead.role}</p>
              </div>
            </div>
          </div>

          {/* All Team Members in Compact Grid */}
          <div className="grid md:grid-cols-5 gap-3">
            {partners.map((member) => (
              <div key={member.name} className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_50px_rgba(var(--primary-rgb),0.2)] transition-all duration-300">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/30" />
                </div>
                <div className="absolute inset-x-2 bottom-2 text-left text-white">
                  <p className="text-base font-black uppercase tracking-wide leading-tight">{member.name}</p>
                  <p className="text-sm text-white mt-0.5 leading-tight">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Credibility Footer */}
        <div className="text-center mt-6 pt-4 border-t border-red-500/10">
          <div className="inline-flex items-center gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-primary/10 border-2 border-primary/40 rounded mx-auto mb-1 flex items-center justify-center">
                <div className="w-5 h-5 bg-primary rotate-45 rounded-sm" />
              </div>
              <p className="text-primary font-bold text-xs uppercase tracking-wider">Emmy Winner</p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 bg-red-500/10 border-2 border-red-500/40 rounded mx-auto mb-1 flex items-center justify-center">
                <div className="w-5 h-4 border-2 border-red-400" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }} />
              </div>
              <p className="text-red-400 font-bold text-xs uppercase tracking-wider">Award Director</p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 bg-orange-500/10 border-2 border-orange-500/40 rounded mx-auto mb-1 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <div className="bg-orange-400 rounded-sm" />
                  <div className="bg-orange-400/60 rounded-sm" />
                  <div className="bg-orange-400/60 rounded-sm" />
                  <div className="bg-orange-400 rounded-sm" />
                </div>
              </div>
              <p className="text-orange-400 font-bold text-xs uppercase tracking-wider">Industry Veteran</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
