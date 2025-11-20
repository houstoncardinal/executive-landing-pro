import { useState } from 'react';
import { ChevronRight, TrendingUp, Target, Zap, DollarSign, Globe, Award, Users, Film, Sparkles, Moon, Sun } from 'lucide-react';
import { ColorSwitcher } from '@/components/ColorSwitcher';
import { useThemeContext } from '@/contexts/theme-context';

export const Pitch = () => {
  const [activeSection, setActiveSection] = useState('30-second');
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Header - Matching Landing Page */}
      <header className="relative border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logoblack.png" alt="TASTE" className="h-10 opacity-95" />
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-xl font-black text-foreground tracking-tight">INVESTOR PITCH</h1>
                <p className="text-xs text-primary uppercase tracking-wider">Confidential</p>
              </div>
            </div>
            
            {/* Theme Controls */}
            <div className="flex items-center gap-4">
              {/* Clean Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-muted/50 hover:bg-muted transition-all duration-300 group"
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                <div className="relative w-12 h-6 rounded-full bg-gradient-to-r from-primary/20 to-orange-400/20 border border-primary/30">
                  <div
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-gradient-to-br from-primary to-orange-400 shadow-lg transition-all duration-300 ${
                      isDark ? 'right-0.5' : 'left-0.5'
                    }`}
                  >
                    {isDark ? (
                      <Moon className="w-3 h-3 text-white m-auto mt-1" />
                    ) : (
                      <Sun className="w-3 h-3 text-white m-auto mt-1" />
                    )}
                  </div>
                </div>
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  {isDark ? 'Dark' : 'Light'}
                </span>
              </button>
              
              <div className="h-8 w-px bg-border" />
              <ColorSwitcher />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section - Matching Landing Page Style */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-primary font-medium uppercase tracking-[0.3em] text-sm">
              THE COMEDY REVOLUTION
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-8">
            <span className="text-foreground font-black">OWN THE</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-orange-400 bg-clip-text text-transparent font-black">COMEDY CATEGORY</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            A billion-dollar white space in a $200B global market — and we're the only ones who know how to fill it.
          </p>
        </div>

        {/* Navigation Pills - Refined */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {[
            { id: '30-second', label: '30-Second Pitch', icon: Zap },
            { id: '60-second', label: '60-Second Narrative', icon: Target },
            { id: 'core-hook', label: 'The Core Hook', icon: TrendingUp }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-primary to-orange-400 text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 border border-border hover:border-primary/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* 30-Second Elevator Pitch */}
          {activeSection === '30-second' && (
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-sm p-12">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                      <Zap className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-foreground tracking-tight">30-Second Elevator Pitch</h2>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider">VC Attention-Grabber</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "I'm building the world's first <strong>comedy-only streaming platform</strong> — called Taste.",
                      "Right now, networks and streamers are <strong>failing the half-hour comedy</strong>. They've forgotten what funny is — the top comedies people watch are all 10-plus years old.",
                      "Taste is <strong>curated by real comedy creators</strong> — Emmy-nominated writers and performers — not executives with data dashboards.",
                      "We're making <strong>original, rewatchable comedies</strong> for a global audience that already loves to laugh, and our creators actually own what they make.",
                      "Think <strong>A24 meets Netflix, but just for comedy</strong> — with the creative credibility of HBO's golden era.",
                      "Comedy is the most universal entertainment on Earth — and no one owns that category yet. <strong>We will.</strong>"
                    ].map((text, index) => (
                      <div key={index} className={`flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 hover:border-primary/30 ${
                        index === 5 
                          ? 'bg-gradient-to-r from-primary/10 to-orange-400/10 border-primary/30' 
                          : 'bg-muted/50 border-border'
                      }`}>
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-lg text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 60-Second Narrative */}
          {activeSection === '60-second' && (
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-sm p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                      <Target className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-foreground tracking-tight">60-Second Narrative Version</h2>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider">For a Longer Ride</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: "The Problem",
                        color: "from-red-500/20 to-orange-500/20",
                        border: "border-red-500/30",
                        text: "Comedy is everywhere except television. People spend hours watching sketch comedians on YouTube and TikTok, while the <strong>half-hour comedy — once the backbone of TV — has basically died on streaming</strong>. Why? Because the people running those companies don't actually know what's funny."
                      },
                      {
                        title: "The Solution",
                        color: "from-emerald-500/20 to-teal-500/20",
                        border: "border-emerald-500/30",
                        text: "<strong>Taste fixes that.</strong> We're the world's first comedy-only streaming platform, built by Emmy-nominated writers and producers — the same people who created South Side and Sherman's Showcase."
                      },
                      {
                        title: "The Model",
                        color: "from-blue-500/20 to-cyan-500/20",
                        border: "border-blue-500/30",
                        text: "Every show on Taste is <strong>original, creator-owned, and curated with real comedic instinct</strong> — no algorithmic filler. We make money through subscriptions, branded partnerships, and in-content ads written by comedy writers."
                      },
                      {
                        title: "The Advantage",
                        color: "from-amber-500/20 to-yellow-500/20",
                        border: "border-amber-500/30",
                        text: "We're based in <strong>Chicago — 30% cheaper than LA</strong>, backed by state incentives — and we've already built a dream team of the funniest people in television."
                      },
                      {
                        title: "The Vision",
                        color: "from-primary/20 to-orange-400/20",
                        border: "border-primary/30",
                        text: "We're doing for comedy what Crunchyroll did for anime and what A24 did for film. There's a billion-dollar white space waiting to be owned, and we're the only ones who know how to fill it — <strong>because we actually know funny.</strong>"
                      }
                    ].map((section, index) => (
                      <div key={index} className={`p-8 rounded-2xl border bg-gradient-to-br ${section.color} ${section.border} backdrop-blur-sm`}>
                        <h3 className="text-lg font-black text-foreground mb-4 uppercase tracking-wide flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {section.title}
                        </h3>
                        <p className="text-lg text-foreground/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.text }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Core Hook */}
          {activeSection === 'core-hook' && (
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-sm p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                      <TrendingUp className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-foreground tracking-tight">The Core Hook</h2>
                      <p className="text-primary text-sm font-semibold uppercase tracking-wider">Why VCs Lean In</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Main Hook */}
                    <div className="p-10 rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-orange-400/10 backdrop-blur-sm">
                      <p className="text-2xl text-foreground leading-relaxed font-semibold mb-6">
                        "Every major streamer fights over drama and reality — <span className="text-primary font-black">no one owns comedy</span>. We're building the first creator-led, comedy-only streaming platform in a <span className="text-primary font-black">$200-billion global market</span> that everyone watches but no one curates."
                      </p>
                      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-6" />
                      <p className="text-2xl text-foreground leading-relaxed font-semibold">
                        "Comedy is the most <span className="text-primary font-black">rewatchable, shareable, global</span> entertainment format — and it's completely underserved. <span className="text-primary font-black">Taste is going to own that lane.</span>"
                      </p>
                    </div>

                    {/* Key Stats Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { icon: DollarSign, value: "$200B", label: "Global Market", color: "from-emerald-500 to-teal-500" },
                        { icon: Globe, value: "Universal", label: "Entertainment Format", color: "from-blue-500 to-cyan-500" },
                        { icon: Award, value: "Emmy", label: "Nominated Team", color: "from-primary to-orange-400" }
                      ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                          <div key={index} className="p-8 rounded-2xl border border-border bg-muted/50 backdrop-blur-sm text-center group hover:border-primary/30 transition-all duration-300">
                            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                              <Icon className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <div className="text-5xl font-black text-foreground mb-3">{stat.value}</div>
                            <div className="text-muted-foreground font-medium uppercase tracking-wide text-sm">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Competitive Advantages - Refined Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Users,
              title: "Creator-Led",
              desc: "Built by Emmy-nominated writers and producers who actually understand comedy — not data scientists guessing what's funny.",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              icon: Film,
              title: "Creator-Owned",
              desc: "Creators own their content — attracting top talent who want creative control and long-term value.",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Target,
              title: "Category Leader",
              desc: "First-mover advantage in a billion-dollar white space — no one else is building a comedy-only platform.",
              gradient: "from-emerald-500 to-teal-500"
            },
            {
              icon: TrendingUp,
              title: "Cost Efficient",
              desc: "Chicago-based production is 30% cheaper than LA, with state incentives maximizing every dollar.",
              gradient: "from-amber-500 to-orange-500"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group p-8 rounded-2xl border border-border bg-card backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className={`w-12 h-12 mb-6 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action - Matching Landing Page */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-3xl blur-xl" />
            
            <div className="relative p-12 rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-orange-400/10 backdrop-blur-sm">
              <h3 className="text-4xl font-black text-foreground mb-4 tracking-tight">Ready to Own Comedy?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Join us in building the world's first comedy-only streaming platform and capture a billion-dollar category.
              </p>
              <a
                href="mailto:invest@taste.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-orange-400 text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
              >
                <span>Let's Talk</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
