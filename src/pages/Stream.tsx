import clsx from "clsx";

const heroHighlights = [
  "Creator-led premieres",
  "Chicago production base (30% cheaper)",
  "40% creator ownership",
];

const heroStats = [
  { label: "Creator Ownership", value: "40%", detail: "retained per show" },
  { label: "Chicago Base", value: "30% cheaper", detail: "vs LA/NYC production" },
  { label: "Global Reach", value: "60+ countries", detail: "simultaneous drops" },
];

const featuredShows = [
  {
    title: "South Side",
    description: "Bashir Salahuddin & Diallo Riddle's certified humor map of Chicago.",
    image: "/southside.png",
    badge: "Taste Original · 2 Seasons",
  },
  {
    title: "Sherman's Showcase",
    description: "Sketch variety reimagined with Black music and satire.",
    image: "/shermans-showcase.png",
    badge: "Taste Original · 3 Seasons",
  },
  {
    title: "Taste Spotlight: Harlem Night Shift",
    description: "Late-night lo-fi sketch lab exploring joy after dark.",
    image: "/southside-vertical.jpg",
    badge: "Premiere",
  },
  {
    title: "Taste Studio: Late Light",
    description: "Creator-run late-night experiments from the A/V lab.",
    image: "/4.png",
    badge: "Taste Lab · Coming Soon",
  },
];

const nowPlaying = [
  {
    title: "South Side",
    type: "Taste Original",
    description: "Chicago heart, fearless laughter.",
    image: "/southside.png",
  },
  {
    title: "Sherman's Showcase",
    type: "Sketch Reimagined",
    description: "Music, satire, and unapologetic truth.",
    image: "/shermans-showcase.png",
  },
  {
    title: "The Last O.G.",
    type: "Classic Rewatch",
    description: "Timeless voice, modern-day blows.",
    image: "/thelastogvertical.jpg",
  },
  {
    title: "Martin",
    type: "Legacy Pulse",
    description: "Cultural DNA with a fresh framing.",
    image: "/martin-poster.jpg",
  },
];

const catalogRows = [
  {
    label: "Trending Laughs",
    items: [
      { title: "Martin", image: "/martin.jpg" },
      { title: "The Office", image: "/theoffice.jpg" },
      { title: "Seinfeld", image: "/seinfield.jpg" },
      { title: "South Side", image: "/southside.png" },
    ],
  },
  {
    label: "Bold Originals",
    items: [
      { title: "Harlem Night Shift", image: "/thelastogvertical.jpg" },
      { title: "Taste Writers Room", image: "/shermans-showcase-vertical.jpg" },
      { title: "Mockingbird Stories", image: "/martin-poster.jpg" },
      { title: "The Last O.G.", image: "/thelastogvertical.jpg" },
    ],
  },
  {
    label: "Creator Library",
    items: [
      { title: "Taste Cinema", image: "/screen.png" },
      { title: "Sherman's Showcase", image: "/shermans-showcase.png" },
      { title: "South Side", image: "/southside.png" },
      { title: "Studio Cuts", image: "/4.png" },
    ],
  },
];

const creatorSpotlights = [
  {
    title: "Taste Cinema",
    description: "Docs, director's cuts, and the raw process that makes comedy.",
    image: "/screen.png",
    metric: "Studio Files",
  },
  {
    title: "Chicago Base",
    description: "Production hub that keeps budgets lean and talent close.",
    image: "/chi.jpeg",
    metric: "30% capital efficiency",
  },
  {
    title: "Signature Rooms",
    description: "Bashir's collaborators room for sketches and live writing rooms.",
    image: "/bashir-alt.png",
    metric: "40% creator ownership",
  },
];

const showCard = (show: { title: string; description?: string; image: string; badge?: string }) => (
  <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
    <div className="relative h-48 w-full">
      <img src={show.image} alt={show.title} className="h-full w-full object-cover" />
      {show.badge && (
        <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.4em] text-white">
          {show.badge}
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col gap-2 p-5">
      <h3 className="text-xl font-black uppercase tracking-[0.3em] text-white">{show.title}</h3>
      {show.description && <p className="text-sm leading-relaxed text-white/70">{show.description}</p>}
      <div className="mt-auto flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-white/70">
        <span>Stream Now</span>
        <span>HD · 4K Ready</span>
      </div>
    </div>
  </div>
);

const StreamPage = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <section
        className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,#ff8538,#12090c_60%)]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('/screen.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.8em] text-white/60">Taste Stream</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              Streaming by Comedians, for Everyone Who Loves to Laugh
            </h1>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.4em] text-white/80">
              {heroHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2"
                >
                  {highlight}
                </span>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl text-center"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">{stat.label}</p>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    <section className="px-6 py-12 border-b border-white/5 bg-[#050505]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-white/60">Now Playing</p>
            <h2 className="font-display text-3xl font-black uppercase tracking-[0.2em]">Live Signal Feed</h2>
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Always fresh, always creator led
          </p>
        </div>

        <div className="mt-8 overflow-x-auto pb-4">
          <div className="flex min-w-[900px] gap-6">
            {nowPlaying.map((show, index) => (
              <div
                key={show.title}
                className={clsx(
                  "relative min-w-[260px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] transition-transform duration-500",
                  index === 0 && "scale-105 border-white/40"
                )}
              >
                <img
                  src={show.image}
                  alt={show.title}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="relative p-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/60">{show.type}</p>
                  <h3 className="text-2xl font-black text-white">{show.title}</h3>
                  <p className="text-sm text-white/70">{show.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-white/60">Featured Originals</p>
              <h2 className="font-display text-4xl font-black uppercase">Taste Premieres</h2>
            </div>
            <button className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80">
              View All
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredShows.map((show) => (
              <div key={show.title}>{showCard(show)}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto max-w-6xl space-y-10">
          {catalogRows.map((row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl font-black uppercase tracking-[0.3em]">{row.label}</h3>
                <span className="text-xs uppercase tracking-[0.4em] text-white/60">Curated by Taste</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {row.items.map((item) => (
                  <div
                    key={item.title}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                  >
                    <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                    <div className="p-4">
                      <h4 className="text-lg font-black uppercase tracking-[0.2em] text-white">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/5 bg-gradient-to-br from-[#050505] via-[#070707] to-[#020202]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-white/60">Taste Studio</p>
              <h2 className="font-display text-3xl font-black uppercase tracking-[0.2em]">Creator Spotlights</h2>
            </div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Designed and curated by Taste's team
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {creatorSpotlights.map((spotlight) => (
              <div
                key={spotlight.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              >
                <img
                  src={spotlight.image}
                  alt={spotlight.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="relative z-10 p-6">
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/70">Creator Lab</p>
                  <h3 className="text-2xl font-black text-white mt-2">{spotlight.title}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{spotlight.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.4em] text-white/80">
                    {spotlight.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto max-w-6xl space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-white/60">Streaming Intelligence</p>
              <h3 className="font-display text-3xl font-black uppercase">The Taste Hub</h3>
            </div>
            <button className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
              Sync Watchlist
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Live Insights",
                detail: "View real-time creators versus algorithm tension and what audiences actually watch.",
              },
              {
                title: "Creator Ownership",
                detail: "Writers maintain 40% rights every time their show streams and resells.",
              },
              {
                title: "Global Pulse",
                detail: "Taste subtitles and distributes to over 60 countries simultaneously.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                <p className="text-xs uppercase tracking-[0.6em] text-white/60">{item.title}</p>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/5">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.6em] text-white/60">Stay tuned</p>
          <h4 className="font-display text-3xl font-black uppercase tracking-[0.4em]">
            Drop of new Hat Trick specials every Friday
          </h4>
          <p className="text-white/70 text-base">
            Taste is constantly expanding the library with fearless short-form and premium originals curated by
            creators who know the craft.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StreamPage;
