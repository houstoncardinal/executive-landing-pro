export const ProblemSection = () => {
  const issues = [
    {
      label: "Half-Hour Vacuum",
      detail:
        "Budgets climb to $3–5M per episode while half-hour comedies vanish after one season. South Side thrived with 1/10th the spend.",
    },
    {
      label: "Algorithm Overreach",
    detail:
      "Executives rely on dashboards instead of comedic instinct, signing on dramedies that don't land.",
    },
    {
      label: "Creators Disconnected",
      detail:
        "When creators lose control, comedy loses heart — just look at the teams behind The Boondocks or In Living Color.",
    },
    {
      label: "Rerun Reliance",
      detail:
        "Streaming giants keep cycling legacy hits (The Office, Seinfeld, Martin) while new laughter struggles to get greenlit.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#020202] text-white overflow-hidden">
      {/* Subtle layered gradients for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,140,65,0.35),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(13,182,255,0.2),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.05)_15%,_transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,_0.9fr]">
        <div className="space-y-8">
          <div className="flex justify-start">
            <div className="bg-primary px-14 py-6 skew-x-[-15deg] transform max-w-[360px]">
              <span className="inline-block text-white text-base font-black uppercase tracking-[0.2em] skew-x-[15deg]">
                THE PROBLEM
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Where <span className="whitespace-nowrap">Half-Hour</span> Comedy Goes to Die.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            The genre that once defined television is hollowing out. Audiences still crave rewatchable sitcoms, creators still have stories, and the only thing missing is a home run by people who know what funny is.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {issues.map((issue) => (
              <div key={issue.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.4em] text-primary mb-2">Core Signal</p>
                <h3 className="text-2xl font-black text-white mb-3">{issue.label}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{issue.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2.5rem] border border-white/20 bg-black/70 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60 mb-3">CORE PROBLEM</p>
            <h3 className="text-3xl font-black leading-tight">Great, rewatchable half-hour comedy is gone because the people running it forget what funny feels like.</h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              When leaders chase algorithms, the stories lose heart. Creators are starved, budgets balloon, and audiences switch to short-form reruns. The genre drifts without leadership — until Taste puts creators back in charge.
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-white/60">Avg. Lifetime</span>
                <span className="text-white font-semibold">1.8 seasons</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-white/60">Taste Benchmark</span>
                <span className="text-white font-semibold">South Side · 7 episodes renewed</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-white/60">Creative Control</span>
                <span className="text-white font-semibold">Restored</span>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 border border-white/20 p-8 shadow-[0_35px_120px_rgba(255,115,65,0.4)] text-white">
            <p className="text-xs uppercase tracking-[0.5em] opacity-80 mb-3">TASTE STEPS IN</p>
            <h3 className="text-3xl font-black leading-tight">Built by the people who do know what funny is.</h3>
            <div className="mt-6 space-y-3 text-sm text-white/90">
              <p className="flex items-start gap-3">
                <span className="text-lg leading-none text-white/80">•</span>
                Creator-led greenlights, not executive focus groups.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-lg leading-none text-white/80">•</span>
                Chicago base keeps costs 30% lower than LA/NYC.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-lg leading-none text-white/80">•</span>
                Creators keep 40% ownership and long-term control.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-lg leading-none text-white/80">•</span>
                We make the next Martin, South Park, and Living Color for a global audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
