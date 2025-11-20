const colorPalettes = [
  {
    name: "Primary Flame",
    hex: "#F45525",
    role: "Main accent, used for bold headlines, CTAs, and brand flames.",
  },
  {
    name: "Pitch Black",
    hex: "#050505",
    role: "Primary text, deep backgrounds, and logo lockups.",
  },
  {
    name: "Signal Yellow",
    hex: "#FDB74A",
    role: "Highlight bars, badges, and financial callouts.",
  },
  {
    name: "Ink Wash",
    hex: "#242424",
    role: "Secondary surfaces, chart fills, and modal shells.",
  },
  {
    name: "Graphite",
    hex: "#3F3F42",
    role: "Subtle separators, annotations, and low-contrast copy.",
  },
];

const tonalSchemes = [
  {
    name: "Creator Warmth",
    colors: ["#F45525", "#FDB74A", "#FDC78C"],
    psychology:
      "Evokes passion, urgency, and energy. Use when highlighting momentum or creator wins.",
  },
  {
    name: "Executive Steel",
    colors: ["#050505", "#3F3F42", "#87888C"],
    psychology: "Conveys authority, precision, and timelessness for board decks.",
  },
  {
    name: "Night Shift",
    colors: ["#0C0C0C", "#1E1E1E", "#393A40"],
    psychology:
      "Dark stage for premium storytelling. Use as hero panels or call-to-action floors.",
  },
];

const layouts = [
  {
    label: "Logo Mark",
    description:
      "Stacked angles reference Taste’s slice of culture—bold, sharp, and always forward-moving.",
  },
  {
    label: "Wordmark",
    description:
      "Custom semi-serif with precise angular cuts; uppercase when emphasizing authority, sentence case for approachable touch.",
  },
];

const typography = [
  {
    name: "Inter Black",
    usage: "Headlines, large callouts, hero statements",
  },
  {
    name: "Inter Medium / Regular",
    usage: "Body copy, captions, UI labels",
  },
  {
    name: "Space Grotesk Italic",
    usage: "Special callouts, quotes, quotes from creators",
  },
];

const sections = [
  {
    heading: "Brand Introduction",
    copy:
      "Taste is the half-hour ally—creator-led, instinctual, and architected for cultural resonance. Every visual leans hard into bold contrast, kinetic energy, and cinematic restraint.",
  },
  {
    heading: "Vision",
    copy:
      "A studio that empowers creators with data-informed rigor but always lets taste call the shots.",
  },
  {
    heading: "Mission",
    copy:
      "Produce rewatchable comedy, keep ownership meaningful, and build a catalog for global fandoms.",
  },
];

export const Branding = () => {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#050505]">
      <section className="relative mx-auto max-w-6xl px-6 py-16 space-y-12">
        <div className="border-b border-[#c8c8c4] pb-6">
          <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.6em] text-[#6d6d73]">
            <span>Brand Guidelines</span>
            <span>@2025</span>
          </div>
          <div className="mt-6 flex flex-col items-center gap-4">
            <img src="/logo.png" alt="Taste logo" className="h-24 object-contain" />
            <h1 className="text-5xl font-black uppercase tracking-[0.2em]">Taste Brand System</h1>
            <p className="text-center max-w-3xl text-base text-[#3c3b3f]">
              A cinematic brand built on creator-led instinct, modern typography, and resilient color systems. This page assembles the emblem, palettes, typography, and psychology cues investors expect.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-[2rem] border border-[#d2d2cf] bg-white/80 p-6 shadow-[0_20px_70px_rgba(10,10,10,0.05)]"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-[#8e8d93]">{section.heading}</p>
              <p className="mt-4 text-sm text-[#2b2b2f]">{section.copy}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-[1.2fr,0.8fr] items-center">
            <div className="rounded-[2.5rem] border border-[#c5c5c2] bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <p className="text-xs uppercase tracking-[0.5em] text-[#8f8f95]">Logo Anatomy</p>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                {layouts.map((layout) => (
                  <div key={layout.label} className="space-y-2">
                    <p className="text-xl font-black uppercase tracking-tight text-[#050505]">{layout.label}</p>
                    <p className="text-sm text-[#3c3b3f]">{layout.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#0a0a0a] bg-[#050505] p-6 text-white shadow-[0_25px_90px_rgba(0,0,0,0.5)]">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">Logo Usage</p>
              <p className="mt-4 text-sm">
                Use the logo mark on dark or white backgrounds with generous clear space (at least the height of the wordmark). Avoid recomposing or adding drop shadows.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {colorPalettes.map((color) => (
            <article
              key={color.hex}
              className="rounded-[2rem] border border-[#c8c8c4] bg-white/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div
                className="h-16 w-full rounded-2xl border border-black/10"
                style={{ backgroundColor: color.hex }}
              />
              <p className="text-sm font-semibold mt-4">{color.name}</p>
              <p className="text-xs text-[#6c6c71] mt-1">{color.hex}</p>
              <p className="text-sm text-[#444] mt-3">{color.role}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#c8c8c4] bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <p className="text-xs uppercase tracking-[0.5em] text-[#8e8d93]">Tonality</p>
            <div className="mt-4 space-y-6">
              {tonalSchemes.map((scheme) => (
                <div key={scheme.name} className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.4em] text-[#4f4f52]">{scheme.name}</p>
                  <div className="flex gap-2">
                    {scheme.colors.map((color) => (
                      <span key={color} className="h-8 flex-1 rounded-full border border-black/10" style={{ background: color }} />
                    ))}
                  </div>
                  <p className="text-sm text-[#3c3b3f]">{scheme.psychology}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-[2rem] border border-[#c8c8c4] bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <p className="text-xs uppercase tracking-[0.5em] text-[#8e8d93]">Typography</p>
            <div className="mt-4 space-y-4">
              {typography.map((type) => (
                <div key={type.name} className="space-y-1">
                  <p className="text-2xl font-black text-black">{type.name}</p>
                  <p className="text-sm text-[#3c3b3f]">{type.usage}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#3c3b3f]">
              Maintain generous line spacing. Headlines are bold and uppercase for emphasis, while body copy is left-aligned for readability. Use italics sparingly for creative callouts.
            </p>
          </article>
        </div>

        <div className="rounded-[2rem] border border-[#c8c8c4] bg-[#0b0b0b] p-6 text-white shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">Brand Psychology</p>
          <div className="mt-4 space-y-3 text-sm">
            <p>
              Use high-contrast black and flame orange to signal urgency, cultural taste, and premium craftsmanship. The brand should feel cinematic yet approachable—line details, bars, and alignments should stay precise.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Mood Boards: Industrial, Electric, Bold</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.4em]">
            <span className="rounded-full border border-white/20 px-3 py-1">Bold</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Cinematic</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Creator-Led</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branding;
