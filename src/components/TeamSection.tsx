export const TeamSection = () => {
  const team = [
    {
      name: "BASHIR SALAHUDDIN",
      role: "CEO, CO-CREATOR: SOUTH SIDE"
    },
    {
      name: "SULTAN SALAHUDDIN",
      role: "EVP CONTENT, STAR: SOUTH SIDE"
    },
    {
      name: "DIALLO RIDDLE",
      role: "CONTENT CURATOR, CO-CREATOR: SHERMAN'S SHOWCASE"
    },
    {
      name: "KENT ALTERMAN",
      role: "STRATEGIC ADVISOR, FMR. PRESIDENT: COMEDY CENTRAL"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-6xl md:text-7xl font-black text-center mb-16 uppercase">
          THE <span className="text-primary">DREAM TEAM</span> OF COMEDY
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {team.map((member, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-[#999999] aspect-[3/2] rounded-lg flex items-center justify-center">
                <span className="text-[#777] text-6xl font-bold">600 × 400</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-black text-white uppercase mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-primary uppercase font-semibold">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 items-end">
          <div className="bg-[#999999] aspect-[3/2] rounded-lg flex items-center justify-center">
            <span className="text-[#777] text-6xl font-bold">600 × 400</span>
          </div>
          <div className="bg-[#999999] aspect-[3/2] rounded-lg flex items-center justify-center">
            <span className="text-[#777] text-6xl font-bold">600 × 400</span>
          </div>
          <div className="bg-[#999999] aspect-[3/2] rounded-lg flex items-center justify-center">
            <span className="text-[#777] text-6xl font-bold">600 × 400</span>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-primary text-8xl mb-4">+</div>
            <p className="text-white font-black text-xl uppercase">KEY INVESTOR</p>
            <div className="h-1 w-full bg-primary mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
