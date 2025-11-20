import { OpportunitySection } from "@/components/OpportunitySection";
import { Tv, Film, Zap, Users, TrendingUp, DollarSign, Youtube, Mic, Calendar } from "lucide-react";
import { ProblemSection } from "./ProblemSection";

export const CulturalMomentSection = () => {
  const comedyPlatforms = [
    {
      icon: Youtube,
      platform: "YouTube & TikTok",
      description: "Gen Z's entertainment ecosystem",
      metric: "$20B+ yearly comedy revenue",
      displayMetric: "$20B+",
      displayLabel: "ANNUAL REVENUE"
    },
    {
      icon: Mic,
      platform: "Podcasts",
      description: "Audio comedy renaissance leader",
      metric: "#1 in comedy charts",
      displayMetric: "#1",
      displayLabel: "COMEDY DOMINANCE"
    },
    {
      icon: Calendar,
      platform: "Live Comedy",
      description: "Arena tours with extreme demand",
      metric: "Sold out months ahead",
      displayMetric: "EXTREME",
      displayLabel: "DEMAND LEVEL"
    }
  ];

  const creatorStats = [
    { label: "Monthly Views", value: "2B+", icon: TrendingUp },
    { label: "Active Creators", value: "500M+", icon: Users }
  ];

  const classicReruns = [
    {
      id: 1,
      title: "The Office",
      year: "1995",
      poster: "office-poster.png",
      description: "Default rerun king"
    },
    {
      id: 2,
      title: "Seinfeld",
      year: "1989",
      poster: "seinfeld-poster.png",
      description: "Cliché fallback comedy"
    },
    {
      id: 3,
      title: "Martin",
      year: "1992",
      poster: "martin-poster.png",
      description: "90s sitcom reliance"
    }
  ];

  const heroPillars = [
    { title: "Creative instinct", detail: "People over spreadsheets." },
    { title: "Original first", detail: "No recycled catalog—only new hits." },
    { title: "Creator-led", detail: "Artists stay in charge, forever." },
  ];

  const heroConfidence = [
    { label: "Taste Labs", value: "9/10", detail: "Creator satisfaction rating" },
    { label: "Launch pace", value: "+35%", detail: "Series greenlit vs. streaming average" },
    { label: "Retention", value: "92%", detail: "Audience return rate after premiere" },
  ];

  return (
    <section className="py-32 bg-black">
      {/* NETFLIX-STYLE MARQUEE HEADER */}
      <div className="text-center mb-20">
        {/* SKEWED SECTION BADGE */}
        <div className="relative inline-block mb-12">
          <div className="bg-primary px-16 py-8 skew-x-[-15deg] transform">
            <h3 className="text-white text-3xl font-black uppercase skew-x-[15deg]">
              CULTURAL MOMENT
            </h3>
          </div>
        </div>

        {/* PROFESSIONAL BOLD HEADLINE */}
        <h2 className="font-display font-black leading-none mb-12">
          <span className="text-white text-5xl md:text-6xl lg:text-7xl">THE </span>
          <span className="text-primary text-7xl md:text-8xl lg:text-9xl">GOLDEN AGE</span>
          <br />
          <span className="text-white text-5xl md:text-6xl lg:text-7xl">OF COMEDY</span>
        </h2>

        {/* SUBTITLE WITH DRAMA */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            EVERYWHERE EXCEPT TV
          </h3>
          <p className="text-2xl text-white/90 font-medium">
            Comedy has never been more alive — dominating YouTube, TikTok, podcasts, and arenas.
            But streaming platforms cling to re-runs from the previous millennium.
          </p>
        </div>

        {/* DRAMATIC QUESTION BOX */}
        <div className="bg-[#0a0a0a] border-t-4 border-primary rounded-xl p-12 max-w-5xl mx-auto">
          <p className="text-white/80 text-2xl font-medium italic text-center">
            "What happened to the great comedy that defined culture?"
          </p>
        </div>
      </div>

      {/* PRIMARY BRAND TRIANGLE ARROW - PERFECTLY BALANCED BETWEEN SECTIONS */}
      <div className="relative -mt-4 mb-12 z-10">
        <div className="flex justify-center">
          {/* Primary brand color downward triangle perfectly balanced */}
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[28px] border-l-transparent border-r-transparent border-b-primary transform rotate-180"></div>
        </div>
      </div>

      {/* FULL-WIDTH WHITE BACKGROUND LUXURY DISPLAY */}
      <div className="bg-white w-full relative overflow-hidden">
        {/* SUBTLE PATTERN BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <pattern id="section-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#F45525" opacity="0.3" />
              <circle cx="2" cy="18" r="1" fill="white" opacity="0.2" />
              <path d="M0 0 L20 0 L20 20 L0 20 Z" stroke="#F45525" strokeWidth="0.1" opacity="0.1" />
            </pattern>
            <rect width="100" height="100" fill="url(#section-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* LEFT COLUMN - COMEDY SUCCESS ON WHITE */}
              <div>
                <div className="mb-8">
                  <h3 className="text-6xl font-black text-black uppercase mb-8 leading-tight">
                    COMEDY THRIVES
                    <br />
                    <span className="text-primary">EVERYWHERE</span>
                  </h3>
                  <div className="w-40 h-2 bg-gradient-to-r from-black via-primary to-white rounded-full"></div>
                </div>

                {/* CLEAN PROFESSIONAL PLATFORM CARDS */}
                <div className="space-y-5">
                  {comedyPlatforms.map((platform, index) => {
                    const IconComponent = platform.icon;

                    return (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-center justify-between">
                          {/* Clean Icon Section */}
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300">
                              <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                            </div>

                            {/* Clean Typography */}
                            <div className="min-w-0 flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 leading-tight tracking-tight">
                                {platform.platform}
                              </h4>
                              <p className="text-gray-500 text-sm leading-tight">
                                {platform.description}
                              </p>
                            </div>
                          </div>

                          {/* Clean Metric Display */}
                          <div className="text-right ml-4">
                            <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                              <div className="text-2xl font-bold text-gray-900 leading-none">
                                {platform.displayMetric}
                              </div>
                              <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                                {platform.displayLabel}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* ULTRA-COMPACT CREATORS IMPACT CARD */}
                  <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-black/10 rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-black/5 border-2 border-black/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-black/70" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg font-bold text-black uppercase mb-0.5 leading-tight">
                          Digital Creator
                          <br />
                          <span className="text-primary">Ecosystem</span>
                        </h4>
                        <p className="text-black/60 text-xs leading-tight">
                          The revolution powering comedy's future
                        </p>
                      </div>
                    </div>

                    {/* TIGHT STATS GRID */}
                    <div className="grid grid-cols-2 gap-3">
                      {creatorStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                          <div key={index} className="bg-white border border-black/10 rounded-lg p-3 text-center">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {stat.value}
                            </div>
                            <div className="text-black/70 font-semibold uppercase text-xs mb-1">
                              {stat.label}
                            </div>
                            <IconComponent className="w-5 h-5 text-black/60 mx-auto" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - BEAUTIFUL TV ANALYSIS DESIGN */}
              <div className="relative">
                {/* ELEGANT HEADER */}
                <div className="text-center mb-8">
                  <h3 className="text-5xl font-black text-black uppercase mb-6 leading-tight">
                    TV HAS
                    <br />
                    <span className="text-red-500">FALLEN BEHIND</span>
                  </h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-black via-red-500 to-black rounded-full mx-auto"></div>
                </div>

                {/* BEAUTIFUL RERUNS STATEMENT - NO CARD */}
                <div className="text-center mb-8">
                  {/* Elegant typography, no background */}
                  <div className="inline-block">
                    <div className="text-lg font-bold text-black/70 uppercase tracking-wider mb-2">
                      Streaming Platforms' Best
                    </div>
                    <div className="text-7xl font-black text-red-500 tracking-widest mb-3 leading-none">
                      RERUNS ONLY
                    </div>
                    <div className="text-sm font-medium text-black/60 italic mb-1">
                      From the previous millennium
                    </div>
                    <div className="w-16 h-px bg-red-300 mx-auto"></div>
                  </div>
                </div>

                {/* STYLISH POSTER DISPLAY */}
                <div className="grid grid-cols-3 gap-5">
                  {classicReruns.map((show, index) => (
                    <div key={show.id} className="group">
                      {/* Luxury TV poster design */}
                      <div className="relative overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
                        {/* Premium border effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-xl z-10"></div>

                        {/* Poster image */}
                        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
                          <div className="relative pb-[135%]">
                            <img
                              src={`${show.id === 1 ? '/theoffice.jpg' : show.id === 2 ? '/seinfield.jpg' : '/martin.jpg'}`}
                              alt={`${show.title} poster`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Year badge with premium styling */}
                            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-red-500/30 px-2 py-1 rounded-md">
                              <div className="text-white text-xs font-bold">{show.year}</div>
                            </div>
                          </div>
                        </div>

                        {/* Sophisticated overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                          <div className="text-white font-bold text-xs uppercase tracking-wide mb-1">CLASSIC RERUN</div>
                          <div className="text-white/80 text-xs leading-tight mb-2">Since {show.year}</div>
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      </div>

                      {/* Elegant show title */}
                      <div className="text-center mt-3">
                        <h5 className="text-black font-bold text-sm leading-tight">{show.title}</h5>
                        <p className="text-black/50 text-xs mt-1 italic">{show.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <ProblemSection />
      <OpportunitySection />

      {/* MASTER-LEVEL "WHY TASTE EXISTS" SECTION */}
      <div className="relative bg-white overflow-hidden">

        <div className="relative z-10 mt-12 px-4 py-16">
          {/* Centered solution badge with matching culture header shape */}
          <div className="flex justify-center mb-12">
            <div className="bg-primary px-16 py-8 skew-x-[-15deg] transform">
              <span className="inline-block text-white text-sm font-black uppercase tracking-[0.2em] skew-x-[15deg]">
                THE SOLUTION
              </span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 space-y-10">
            <div className="text-center space-y-6 relative overflow-hidden">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-black text-black uppercase leading-tight relative z-10">
                WHY <span className="text-primary">TASTE</span> EXISTS
              </h3>
              <p className="text-sm uppercase tracking-[0.6em] text-black/60 relative z-10">A NEW HOME FOR GREAT COMEDY</p>
              <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto relative z-10">
                Taste is the creator-first streaming studio for bold <span className="whitespace-nowrap">half-hour</span> comedy — instinct-led, original-only, and built by people who know what funny is.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 text-center">
              {heroPillars.map((pillar) => (
                <div key={pillar.title} className="space-y-3">
                  <p className="text-3xl font-black text-black uppercase">{pillar.title}</p>
                  <p className="text-sm text-black/70 leading-relaxed">{pillar.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-center">
              {heroConfidence.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xs uppercase tracking-[0.45em] text-black/60">{metric.label}</p>
                  <p className="text-3xl font-black text-black">{metric.value}</p>
                  <p className="text-[0.75rem] text-black/70">{metric.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  label: "Creator Economics",
                  title: "Artists First",
                  copy: "Paying creators what they deserve.",
                  stat: "40% Creator Ownership",
                  accent: "from-orange-500 via-orange-600 to-red-600",
                },
                {
                  label: "Content Strategy",
                  title: "Fresh Content",
                  copy: "Original comedy without corporate interference.",
                  stat: "100% Originals",
                  accent: "from-primary via-orange-500 to-orange-600",
                },
                {
                  label: "Audience Focus",
                  title: "Audience Choice",
                  copy: "Giving viewers what they actually want.",
                  stat: "↑ 95% Satisfaction",
                  accent: "from-yellow-500 via-orange-500 to-orange-600",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`rounded-[2rem] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-gradient-to-br ${card.accent} flex flex-col justify-between`}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.5em] text-white/80">{card.label}</p>
                    <h4 className="text-2xl font-black uppercase tracking-tight mt-3">{card.title}</h4>
                    <p className="text-sm text-white/90 mt-3">{card.copy}</p>
                  </div>
                  <div className="mt-6 text-sm uppercase tracking-[0.4em] text-white/80">{card.stat}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-black/10 pt-10 mt-10">
              <p className="text-xs uppercase tracking-[0.5em] text-black/60">A CREATOR-LED STREAMING STUDIO</p>
              <h3 className="mt-4 text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
                Taste exists to bring bold, creator-curated half-hour comedy back to the world.
              </h3>
              <p className="mt-4 max-w-3xl text-base text-black/70 leading-relaxed">
                Taste greenlights comedies by instinct, produces only original titles, and keeps the creative voices who built culture in full control. We operate like a boutique studio with Fortune 500 discipline—smart budgets, ruthless curation, and ownership for the creators.
              </p>
              <div className="mt-6 border-t border-black/10 pt-6">
                <p className="text-sm lowercase text-black/60">
                  Designed for the Taste deck: strong headline, clean spacing, and hero-level contrast.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-6 shadow-[0_25px_70px_rgba(0,0,0,0.25)]">
                <p className="text-sm uppercase tracking-[0.4em] text-orange-300 mb-3">Taste Philosophy</p>
                <p className="text-white/80 text-base leading-relaxed">
                  Creator-led, taste-forward, and business-ready. We do what great comedy needs, not what algorithms demand.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
