const roadmapPhases = [
  {
    id: "01",
    title: "Taste Test",
    timeframe: "Year 1",
    summary: "Pilot the studio, prove the Taste process, and build the earliest creator champions.",
    bullets: [
      "Launch the platform with the MVP experience and community accrual levers.",
      "Deliver two flagship original half-hour comedies with bold creative ownership.",
      "Collect data on retention, cost-per-episode, and creator satisfaction to prove the model.",
    ],
    highlight: "Proof-of-concept",
  },
  {
    id: "02",
    title: "Savory Expansion",
    timeframe: "Years 2-3",
    summary: "Scale creators, refine ops, and lock the brand as the home for modern comedy.",
    bullets: [
      "Grow to 5+ new premium shows while keeping budgets lean and creator royalties high.",
      "Automate the Taste Labs pipeline so every new voice gets production, marketing, and data support.",
      "Expand the audience internationally while partnering with boutique advertisers and sponsors.",
    ],
    highlight: "Scale with discipline",
  },
  {
    id: "03",
    title: "Global Flavor",
    timeframe: "Year 4+",
    summary: "Build the global, franchise-ready comedy catalog investors crave.",
    bullets: [
      "License and co-produce with international partners for deeper distribution.",
      "Launch creator incubators in Chicago, London, and Lagos to seed new voices.",
      "Turn Taste Originals into multiplatform IP (live, merch, podcasts, shorts).",
    ],
    highlight: "Franchise-ready",
  },
];

const roadmapSignals = [
  { label: "Creator pipeline", value: "20+ creators", detail: "Already vetted and sharing ownership." },
  { label: "Target runway", value: "36 months", detail: "Fully funded through global expansion." },
  { label: "Revenue visibility", value: "$12M+", detail: "Recurring cash by Year 3 with subscription + licensing." },
];

export const RoadmapSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,85,37,0.12),_transparent_65%)]" />
        <div className="absolute -top-4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[radial-gradient(circle,_rgba(255,193,7,0.2),_transparent_60%)] blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.6em] text-white/60">EXECUTION TIMELINE</p>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
            ROADMAP
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            The Taste roadmap is engineered for creator success, operational precision, and investor-grade scale.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[0.55rem] uppercase tracking-[0.4em] text-white/70">
            <span className="rounded-full border border-white/20 px-4 py-1 bg-white/5">Creator first</span>
            <span className="rounded-full border border-white/20 px-4 py-1 bg-white/5">Capital efficient</span>
            <span className="rounded-full border border-white/20 px-4 py-1 bg-white/5">Data-led insights</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.3fr,0.7fr] items-start">
          <div className="hidden lg:block relative pl-6">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary to-transparent" />
            <div className="space-y-12">
              {roadmapPhases.map((phase, index) => (
                <div key={phase.id} className="relative flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full border-2 border-primary/70 bg-gradient-to-br from-primary/60 to-orange-600 flex items-center justify-center text-white font-black text-sm shadow-[0_25px_40px_rgba(0,0,0,0.4)]">
                      {phase.id}
                    </div>
                    {index < roadmapPhases.length - 1 && (
                      <div className="flex-1 w-px bg-gradient-to-b from-primary to-transparent h-20 mt-4" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">{phase.timeframe}</p>
                    <p className="text-lg font-black text-white">{phase.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {roadmapPhases.map((phase) => (
              <div
                key={phase.id}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-black/70 via-black/60 to-slate-900 p-8 shadow-[0_35px_110px_rgba(0,0,0,0.65)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">{phase.timeframe}</p>
                    <h3 className="text-3xl font-black text-white">{phase.title}</h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.5em] rounded-full border border-white/20 px-4 py-1 bg-white/5 text-white/80">{phase.highlight}</span>
                </div>
                <p className="mt-6 text-white/70 text-base">{phase.summary}</p>
                <div className="mt-6 grid gap-3 text-sm text-white/80">
                  {phase.bullets.map((bullet) => (
                    <p key={bullet} className="flex items-start gap-3">
                      <span className="text-lg">•</span>
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roadmapSignals.map((signal) => (
            <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.45em] text-white/60">{signal.label}</p>
              <p className="text-3xl font-black text-white mt-3">{signal.value}</p>
              <p className="text-sm text-white/70 mt-1">{signal.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-xs uppercase tracking-[0.5em] text-white/60">Milestones unlocked with Taste Discipline™</span>
          <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/80 bg-white/5">
            Investor-ready progress
          </span>
        </div>
      </div>
    </section>
  );
};
