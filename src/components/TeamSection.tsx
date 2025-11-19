export const TeamSection = () => {
  const team = [
    {
      name: "BASHIR SALAHUDDIN",
      role: "CEO, CO-CREATOR: SOUTH SIDE",
      emoji: "🎬"
    },
    {
      name: "SULTAN SALAHUDDIN",
      role: "EVP CONTENT, STAR: SOUTH SIDE",
      emoji: "⭐"
    },
    {
      name: "DIALLO RIDDLE",
      role: "CONTENT CURATOR, CO-CREATOR: SHERMAN'S SHOWCASE",
      emoji: "🎭"
    },
    {
      name: "KENT ALTERMAN",
      role: "STRATEGIC ADVISOR, FMR. PRESIDENT: COMEDY CENTRAL",
      emoji: "🎪"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(14_90%_55%/0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            THE DREAM TEAM OF COMEDY
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground">
            PROVEN INDUSTRY LEADERS
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="text-5xl mb-4 text-center">{member.emoji}</div>
              <h3 className="text-xl font-bold mb-2 text-foreground text-center">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center leading-snug">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
