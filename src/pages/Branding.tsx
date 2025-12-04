import { useState, useEffect } from 'react';
import { ChevronDown, Palette, Type, Eye, Download, Copy, Check, Settings, Zap, Crown, Heart, Star, Briefcase, Target, TrendingUp, Award, Globe, Layers, Monitor, Smartphone, Grid3X3, RotateCcw, Sparkles } from 'lucide-react';

// Enterprise-Level Color Palettes
const colorPalettes = [
  {
    id: "taste-signature",
    name: "TASTE Signature",
    description: "The official TASTE brand identity",
    psychology: "Bold, entertainment-focused, premium comedy",
    industry: "Entertainment",
    colors: [
      { hex: "#FF6B35", name: "TASTE Orange", role: "primary", hsl: "16 100% 60%" },
      { hex: "#0A0A0A", name: "Studio Black", role: "secondary", hsl: "0 0% 4%" },
      { hex: "#F7931E", name: "Spotlight Gold", role: "accent", hsl: "35 93% 54%" },
      { hex: "#FFFFFF", name: "Pure White", role: "neutral", hsl: "0 0% 100%" },
      { hex: "#1A1A1A", name: "Deep Black", role: "background", hsl: "0 0% 10%" }
    ],
    gradient: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
    mood: "Bold & Entertainment",
    category: "Brand"
  },
  {
    id: "executive-platinum",
    name: "Executive Platinum",
    description: "Premium corporate elegance",
    psychology: "Authority, luxury, institutional trust",
    industry: "Corporate",
    colors: [
      { hex: "#C0C0C0", name: "Platinum Silver", role: "primary", hsl: "0 0% 75%" },
      { hex: "#0D0D0D", name: "Obsidian", role: "secondary", hsl: "0 0% 5%" },
      { hex: "#D4AF37", name: "Gold Reserve", role: "accent", hsl: "43 66% 52%" },
      { hex: "#F8F8F8", name: "Ivory White", role: "neutral", hsl: "0 0% 97%" },
      { hex: "#121212", name: "Carbon Black", role: "background", hsl: "0 0% 7%" }
    ],
    gradient: "linear-gradient(135deg, #C0C0C0 0%, #D4AF37 100%)",
    mood: "Prestigious & Refined",
    category: "Executive"
  },
  {
    id: "crimson-cinema",
    name: "Crimson Cinema",
    description: "Hollywood premiere aesthetic",
    psychology: "Drama, passion, cinematic excellence",
    industry: "Film & Television",
    colors: [
      { hex: "#DC143C", name: "Cinema Red", role: "primary", hsl: "348 83% 47%" },
      { hex: "#0A0A0A", name: "Theatre Black", role: "secondary", hsl: "0 0% 4%" },
      { hex: "#FFD700", name: "Award Gold", role: "accent", hsl: "51 100% 50%" },
      { hex: "#FAFAFA", name: "Screen White", role: "neutral", hsl: "0 0% 98%" },
      { hex: "#1C1C1C", name: "Curtain Dark", role: "background", hsl: "0 0% 11%" }
    ],
    gradient: "linear-gradient(135deg, #DC143C 0%, #FFD700 100%)",
    mood: "Cinematic & Bold",
    category: "Entertainment"
  },
  {
    id: "midnight-sapphire",
    name: "Midnight Sapphire",
    description: "Deep luxury evening aesthetic",
    psychology: "Sophistication, depth, premium night appeal",
    industry: "Luxury",
    colors: [
      { hex: "#0F2557", name: "Midnight Blue", role: "primary", hsl: "221 72% 20%" },
      { hex: "#000000", name: "Pure Black", role: "secondary", hsl: "0 0% 0%" },
      { hex: "#FFD700", name: "Gold Accent", role: "accent", hsl: "51 100% 50%" },
      { hex: "#FFFFFF", name: "Pure White", role: "neutral", hsl: "0 0% 100%" },
      { hex: "#0A1628", name: "Deep Navy", role: "background", hsl: "215 62% 10%" }
    ],
    gradient: "linear-gradient(135deg, #0F2557 0%, #FFD700 100%)",
    mood: "Luxurious & Deep",
    category: "Premium"
  },
  {
    id: "emerald-elite",
    name: "Emerald Elite",
    description: "Success-driven prestige",
    psychology: "Growth, prosperity, elite positioning",
    industry: "Finance",
    colors: [
      { hex: "#047857", name: "Elite Emerald", role: "primary", hsl: "162 94% 18%" },
      { hex: "#0D0D0D", name: "Vault Black", role: "secondary", hsl: "0 0% 5%" },
      { hex: "#D4AF37", name: "Wealth Gold", role: "accent", hsl: "43 66% 52%" },
      { hex: "#F9FAFB", name: "Paper White", role: "neutral", hsl: "210 20% 98%" },
      { hex: "#111827", name: "Trust Dark", role: "background", hsl: "221 39% 11%" }
    ],
    gradient: "linear-gradient(135deg, #047857 0%, #D4AF37 100%)",
    mood: "Prosperous & Elite",
    category: "Finance"
  },
  {
    id: "royal-violet",
    name: "Royal Violet",
    description: "Majestic creative authority",
    psychology: "Creativity, royalty, visionary leadership",
    industry: "Creative",
    colors: [
      { hex: "#6D28D9", name: "Royal Violet", role: "primary", hsl: "263 70% 50%" },
      { hex: "#0C0C0C", name: "Royal Black", role: "secondary", hsl: "0 0% 5%" },
      { hex: "#F59E0B", name: "Crown Gold", role: "accent", hsl: "38 92% 50%" },
      { hex: "#FEFEFE", name: "Royal White", role: "neutral", hsl: "0 0% 100%" },
      { hex: "#1E1B4B", name: "Throne Purple", role: "background", hsl: "244 47% 20%" }
    ],
    gradient: "linear-gradient(135deg, #6D28D9 0%, #F59E0B 100%)",
    mood: "Majestic & Creative",
    category: "Creative"
  },
  {
    id: "tech-titanium",
    name: "Tech Titanium",
    description: "Silicon Valley innovation",
    psychology: "Innovation, precision, technological excellence",
    industry: "Technology",
    colors: [
      { hex: "#3B82F6", name: "Tech Blue", role: "primary", hsl: "217 91% 60%" },
      { hex: "#0A0A0A", name: "Code Black", role: "secondary", hsl: "0 0% 4%" },
      { hex: "#10B981", name: "Success Green", role: "accent", hsl: "160 84% 39%" },
      { hex: "#F3F4F6", name: "Interface Light", role: "neutral", hsl: "220 14% 96%" },
      { hex: "#111827", name: "Terminal Dark", role: "background", hsl: "221 39% 11%" }
    ],
    gradient: "linear-gradient(135deg, #3B82F6 0%, #10B981 100%)",
    mood: "Innovative & Precise",
    category: "Technology"
  },
  {
    id: "sunset-coral",
    name: "Sunset Coral",
    description: "Warm creative energy",
    psychology: "Warmth, creativity, approachable premium",
    industry: "Lifestyle",
    colors: [
      { hex: "#F97316", name: "Sunset Orange", role: "primary", hsl: "25 95% 53%" },
      { hex: "#1C1917", name: "Earth Dark", role: "secondary", hsl: "24 10% 10%" },
      { hex: "#FBBF24", name: "Golden Hour", role: "accent", hsl: "45 93% 56%" },
      { hex: "#FFFBEB", name: "Warm White", role: "neutral", hsl: "48 100% 96%" },
      { hex: "#292524", name: "Dusk Gray", role: "background", hsl: "24 6% 15%" }
    ],
    gradient: "linear-gradient(135deg, #F97316 0%, #FBBF24 100%)",
    mood: "Warm & Creative",
    category: "Lifestyle"
  }
];

// Professional Typography System with Google Fonts
const fontFamilies = [
  {
    id: "inter",
    name: "Inter",
    category: "Neo-Grotesque",
    description: "Optimized for screens, highly legible",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Inter",
    bestFor: "Digital interfaces, web applications",
    preview: "TASTE - Comedy Entertainment",
    personality: "Modern & Legible"
  },
  {
    id: "space-grotesk",
    name: "Space Grotesk",
    category: "Geometric Sans",
    description: "Bold, architectural, tech-forward",
    weights: ["300", "400", "500", "600", "700"],
    googleFont: "Space+Grotesk",
    bestFor: "Tech brands, bold headlines",
    preview: "TASTE - Comedy Entertainment",
    personality: "Bold & Technical"
  },
  {
    id: "montserrat",
    name: "Montserrat",
    category: "Geometric Sans",
    description: "Urban, contemporary, geometric precision",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Montserrat",
    bestFor: "Headlines, modern brands",
    preview: "TASTE - Comedy Entertainment",
    personality: "Urban & Contemporary"
  },
  {
    id: "dm-sans",
    name: "DM Sans",
    category: "Low-Contrast Geometric",
    description: "Clean, professional, versatile",
    weights: ["400", "500", "600", "700"],
    googleFont: "DM+Sans",
    bestFor: "Corporate, professional brands",
    preview: "TASTE - Comedy Entertainment",
    personality: "Clean & Professional"
  },
  {
    id: "plus-jakarta-sans",
    name: "Plus Jakarta Sans",
    category: "Modern Sans",
    description: "Contemporary, friendly, readable",
    weights: ["300", "400", "500", "600", "700", "800"],
    googleFont: "Plus+Jakarta+Sans",
    bestFor: "Modern apps, friendly brands",
    preview: "TASTE - Comedy Entertainment",
    personality: "Contemporary & Friendly"
  },
  {
    id: "outfit",
    name: "Outfit",
    category: "Geometric Sans",
    description: "Modern, geometric, clean",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Outfit",
    bestFor: "Tech, modern brands",
    preview: "TASTE - Comedy Entertainment",
    personality: "Modern & Geometric"
  },
  {
    id: "sora",
    name: "Sora",
    category: "Geometric Sans",
    description: "Futuristic, clean, precise",
    weights: ["300", "400", "500", "600", "700", "800"],
    googleFont: "Sora",
    bestFor: "Future-focused brands",
    preview: "TASTE - Comedy Entertainment",
    personality: "Futuristic & Clean"
  },
  {
    id: "manrope",
    name: "Manrope",
    category: "Semi-Rounded Sans",
    description: "Modern, friendly, professional",
    weights: ["300", "400", "500", "600", "700", "800"],
    googleFont: "Manrope",
    bestFor: "Tech, professional brands",
    preview: "TASTE - Comedy Entertainment",
    personality: "Friendly & Professional"
  },
  {
    id: "work-sans",
    name: "Work Sans",
    category: "Grotesque Sans",
    description: "Optimized for body text and headlines",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Work+Sans",
    bestFor: "Editorial, body text",
    preview: "TASTE - Comedy Entertainment",
    personality: "Editorial & Readable"
  },
  {
    id: "raleway",
    name: "Raleway",
    category: "Elegant Sans",
    description: "Elegant, sophisticated, refined",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Raleway",
    bestFor: "Luxury brands, elegant presentations",
    preview: "TASTE - Comedy Entertainment",
    personality: "Elegant & Refined"
  },
  {
    id: "nunito-sans",
    name: "Nunito Sans",
    category: "Rounded Sans",
    description: "Balanced, well-rounded, approachable",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Nunito+Sans",
    bestFor: "Friendly brands, apps",
    preview: "TASTE - Comedy Entertainment",
    personality: "Balanced & Approachable"
  },
  {
    id: "red-hat-display",
    name: "Red Hat Display",
    description: "Bold, modern, distinctive",
    category: "Display Sans",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Red+Hat+Display",
    bestFor: "Bold headlines, branding",
    preview: "TASTE - Comedy Entertainment",
    personality: "Bold & Distinctive"
  }
];

const Branding = () => {
  const [selectedPalette, setSelectedPalette] = useState(colorPalettes[0]);
  const [selectedFont, setSelectedFont] = useState(fontFamilies[0]);
  const [activeSection, setActiveSection] = useState('colors');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  // Load Google Font dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.googleFont}:wght@${selectedFont.weights.join(';')}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [selectedFont]);

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    selectedPalette.colors.forEach((color) => {
      if (color.hsl) {
        if (color.role === 'primary') {
          root.style.setProperty('--primary', color.hsl);
        } else if (color.role === 'accent') {
          root.style.setProperty('--accent', color.hsl);
        }
      }
    });
    
    root.style.setProperty('--font-display', selectedFont.name);
    root.style.setProperty('--font-sans', selectedFont.name);
  }, [selectedPalette, selectedFont]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const resetToDefault = () => {
    setSelectedPalette(colorPalettes[0]);
    setSelectedFont(fontFamilies[0]);
  };

  const exportBrandKit = () => {
    const brandKit = {
      palette: selectedPalette,
      font: selectedFont,
      cssVariables: {
        primary: selectedPalette.colors[0].hsl,
        secondary: selectedPalette.colors[1].hsl,
        accent: selectedPalette.colors[2].hsl,
        fontFamily: selectedFont.name
      },
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(brandKit, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `TASTE-Brand-Kit-${selectedPalette.id}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Professional Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <img src="/logoorange.png" alt="TASTE" className="h-8" />
                <div className="h-6 w-px bg-gray-300" />
                <span className="text-sm font-bold text-gray-900 tracking-wide">BRAND CENTER</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Current Selection Preview */}
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex -space-x-1">
                  {selectedPalette.colors.slice(0, 4).map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-700">{selectedPalette.name}</span>
                <div className="h-4 w-px bg-gray-300" />
                <span className="text-xs font-medium text-gray-500" style={{ fontFamily: selectedFont.name }}>
                  {selectedFont.name}
                </span>
              </div>

              <button
                onClick={resetToDefault}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>

              <button
                onClick={exportBrandKit}
                className="flex items-center gap-2 px-4 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#e55a2b] transition-colors text-sm font-semibold shadow-sm"
              >
                <Download className="w-4 h-4" />
                Export Kit
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-[280px,1fr] gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Brand Assets</h2>
              </div>
              <nav className="p-2">
                {[
                  { id: 'colors', label: 'Color Palettes', icon: Palette, count: colorPalettes.length },
                  { id: 'typography', label: 'Typography', icon: Type, count: fontFamilies.length },
                  { id: 'preview', label: 'Live Preview', icon: Eye },
                  { id: 'assets', label: 'Logo Assets', icon: Briefcase }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all text-left mb-1 ${
                        activeSection === item.id
                          ? 'bg-[#FF6B35] text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${activeSection === item.id ? 'text-white' : 'text-gray-400'}`} />
                        <span className="font-medium text-sm">{item.label}</span>
                      </div>
                      {item.count && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          activeSection === item.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Quick Stats */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-[#FF6B35]">{colorPalettes.length}</div>
                    <div className="text-xs text-gray-500 font-medium">Palettes</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-[#FF6B35]">{fontFamilies.length}</div>
                    <div className="text-xs text-gray-500 font-medium">Fonts</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            {/* Color Palettes Section */}
            {activeSection === 'colors' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Color Palettes</h1>
                    <p className="text-gray-600 mt-1">Select a palette to apply across the platform in real-time</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Zap className="w-4 h-4 text-[#FF6B35]" />
                    Live preview enabled
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {colorPalettes.map((palette) => (
                    <div
                      key={palette.id}
                      onClick={() => setSelectedPalette(palette)}
                      className={`group relative bg-white rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedPalette.id === palette.id
                          ? 'border-[#FF6B35] shadow-lg ring-2 ring-[#FF6B35]/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {selectedPalette.id === palette.id && (
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{palette.name}</h3>
                          <p className="text-sm text-gray-500">{palette.description}</p>
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          {palette.category}
                        </span>
                      </div>

                      {/* Color Swatches */}
                      <div className="flex gap-2 mb-4">
                        {palette.colors.map((color, idx) => (
                          <div key={idx} className="flex-1">
                            <div
                              className="h-16 rounded-lg border border-gray-200 mb-2 cursor-pointer hover:scale-105 transition-transform relative group/swatch"
                              style={{ backgroundColor: color.hex }}
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(color.hex);
                              }}
                            >
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/swatch:opacity-100 transition-opacity bg-black/30 rounded-lg">
                                {copiedColor === color.hex ? (
                                  <Check className="w-4 h-4 text-white" />
                                ) : (
                                  <Copy className="w-4 h-4 text-white" />
                                )}
                              </div>
                            </div>
                            <p className="text-xs font-medium text-gray-700 truncate">{color.name}</p>
                            <p className="text-xs text-gray-400 font-mono">{color.hex}</p>
                          </div>
                        ))}
                      </div>

                      {/* Gradient Preview */}
                      <div
                        className="h-3 rounded-full"
                        style={{ background: palette.gradient }}
                      />

                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-500">{palette.mood}</span>
                        <span className="text-xs font-medium text-gray-700">{palette.industry}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Typography Section */}
            {activeSection === 'typography' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Typography</h1>
                    <p className="text-gray-600 mt-1">Select a font family to preview across the platform</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {fontFamilies.map((font) => (
                    <div
                      key={font.id}
                      onClick={() => setSelectedFont(font)}
                      className={`group bg-white rounded-xl border-2 p-5 cursor-pointer transition-all duration-300 hover:shadow-md ${
                        selectedFont.id === font.id
                          ? 'border-[#FF6B35] shadow-md ring-2 ring-[#FF6B35]/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {selectedFont.id === font.id && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center shadow">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{font.name}</h3>
                          <p className="text-xs text-gray-500">{font.category}</p>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          {font.personality}
                        </span>
                      </div>

                      {/* Font Preview */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-3 border border-gray-100">
                        <p
                          className="text-xl font-bold text-gray-900"
                          style={{ fontFamily: font.name }}
                        >
                          {font.preview}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">{font.description}</p>

                      {/* Weights */}
                      <div className="flex flex-wrap gap-1">
                        {font.weights.map((weight) => (
                          <span
                            key={weight}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-mono"
                          >
                            {weight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Live Preview Section */}
            {activeSection === 'preview' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Live Preview</h1>
                    <p className="text-gray-600 mt-1">See how your selections look in real-time</p>
                  </div>
                  <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
                    <button
                      onClick={() => setPreviewMode('desktop')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        previewMode === 'desktop' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                      }`}
                    >
                      <Monitor className="w-4 h-4" />
                      Desktop
                    </button>
                    <button
                      onClick={() => setPreviewMode('mobile')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        previewMode === 'mobile' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                      }`}
                    >
                      <Smartphone className="w-4 h-4" />
                      Mobile
                    </button>
                  </div>
                </div>

                {/* Preview Container */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-white rounded-md px-4 py-1.5 text-sm text-gray-500 text-center">
                      tastecomedy.com
                    </div>
                  </div>

                  {/* Preview Content */}
                  <div
                    className={`transition-all duration-500 mx-auto ${
                      previewMode === 'mobile' ? 'max-w-[375px]' : 'w-full'
                    }`}
                  >
                    <div
                      className="min-h-[600px] p-8"
                      style={{ 
                        backgroundColor: selectedPalette.colors[4].hex,
                        fontFamily: selectedFont.name
                      }}
                    >
                      {/* Hero Preview */}
                      <div className="text-center mb-12">
                        <div
                          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                          style={{ 
                            backgroundColor: selectedPalette.colors[0].hex + '20',
                            color: selectedPalette.colors[0].hex
                          }}
                        >
                          WHERE COMEDY LIVES
                        </div>
                        <h1
                          className="text-4xl md:text-5xl font-black mb-4"
                          style={{ color: selectedPalette.colors[3].hex }}
                        >
                          TASTE.
                        </h1>
                        <p
                          className="text-lg opacity-80"
                          style={{ color: selectedPalette.colors[3].hex }}
                        >
                          The world's first comedy super-brand
                        </p>
                      </div>

                      {/* Cards Preview */}
                      <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {['Originals', 'Creators', 'Community'].map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl p-6 border"
                            style={{ 
                              backgroundColor: selectedPalette.colors[1].hex,
                              borderColor: selectedPalette.colors[0].hex + '30'
                            }}
                          >
                            <div
                              className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                              style={{ backgroundColor: selectedPalette.colors[0].hex }}
                            >
                              <Sparkles className="w-5 h-5" style={{ color: selectedPalette.colors[3].hex }} />
                            </div>
                            <h3
                              className="font-bold text-lg mb-2"
                              style={{ color: selectedPalette.colors[3].hex }}
                            >
                              {item}
                            </h3>
                            <p
                              className="text-sm opacity-70"
                              style={{ color: selectedPalette.colors[3].hex }}
                            >
                              Premium comedy content curated for real fans.
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Button Preview */}
                      <div className="flex justify-center gap-4">
                        <button
                          className="px-6 py-3 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                          style={{ 
                            backgroundColor: selectedPalette.colors[0].hex,
                            color: selectedPalette.colors[3].hex
                          }}
                        >
                          Get Started
                        </button>
                        <button
                          className="px-6 py-3 rounded-lg font-bold text-sm border-2 transition-all hover:opacity-90"
                          style={{ 
                            borderColor: selectedPalette.colors[0].hex,
                            color: selectedPalette.colors[0].hex,
                            backgroundColor: 'transparent'
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Logo Assets Section */}
            {activeSection === 'assets' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Logo Assets</h1>
                  <p className="text-gray-600 mt-1">Official TASTE brand identity assets</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Orange Logo */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="bg-gray-50 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[160px]">
                      <img src="/logoorange.png" alt="TASTE Orange" className="h-16 w-auto" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">Primary Orange</h3>
                    <p className="text-sm text-gray-500 mb-4">Use on light backgrounds</p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded font-medium">PNG</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-medium">Primary</span>
                    </div>
                  </div>

                  {/* Black Logo */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <div className="bg-gray-50 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[160px]">
                      <img src="/logoblack.png" alt="TASTE Black" className="h-16 w-auto" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">Professional Black</h3>
                    <p className="text-sm text-gray-500 mb-4">For corporate documents</p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 bg-gray-800 text-white rounded font-medium">PNG</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded font-medium">Corporate</span>
                    </div>
                  </div>

                  {/* White Logo */}
                  <div className="bg-gray-900 rounded-2xl border border-gray-700 p-6 shadow-sm">
                    <div className="bg-gray-800 rounded-xl p-8 mb-4 flex items-center justify-center min-h-[160px]">
                      <img src="/logo.png" alt="TASTE White" className="h-16 w-auto brightness-0 invert" />
                    </div>
                    <h3 className="font-bold text-white mb-1">Inverted White</h3>
                    <p className="text-sm text-gray-400 mb-4">For dark backgrounds</p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 bg-white text-gray-900 rounded font-medium">PNG</span>
                      <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded font-medium">Dark Mode</span>
                    </div>
                  </div>
                </div>

                {/* Usage Guidelines */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        Do
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>Use the orange logo on light backgrounds</li>
                        <li>Maintain minimum clear space around logo</li>
                        <li>Use white logo on dark or image backgrounds</li>
                        <li>Keep logo proportions consistent</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                          <span className="text-red-500 text-xs font-bold">X</span>
                        </div>
                        Don't
                      </h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>Stretch or distort the logo</li>
                        <li>Change logo colors arbitrarily</li>
                        <li>Add effects like drop shadows or glows</li>
                        <li>Place logo on busy backgrounds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Branding;