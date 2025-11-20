import { useState, useEffect } from 'react';
import { ChevronDown, Palette, Type, Download, Copy, Check, Settings, Sparkles, Zap, Crown, Heart, Star, Briefcase, Target, TrendingUp, Award, Globe, Layers, Wrench, BarChart3, Users, Building, Lightbulb, Shuffle, Plus, Minus, RotateCcw, Save, Upload, Share2 } from 'lucide-react';

// Enterprise-Level Color Palettes - Comedy Industry Excellence
const colorPalettes = [
  {
    id: "executive-gold",
    name: "Executive Gold",
    description: "Premium entertainment leadership",
    psychology: "Authority, excellence, premium positioning",
    industry: "Executive Entertainment",
    colors: [
      { hex: "#D4AF37", name: "Executive Gold", role: "primary" },
      { hex: "#1A1A1A", name: "Studio Black", role: "secondary" },
      { hex: "#C0392B", name: "Award Red", role: "accent" },
      { hex: "#F8F9FA", name: "Premium White", role: "neutral" },
      { hex: "#2C3E50", name: "Boardroom Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #D4AF37 0%, #C0392B 100%)",
    mood: "Executive & Prestigious",
    category: "Leadership"
  },
  {
    id: "creative-crimson",
    name: "Creative Crimson",
    description: "Bold creative storytelling",
    psychology: "Passion, creativity, bold expression",
    industry: "Creative Entertainment",
    colors: [
      { hex: "#E74C3C", name: "Creative Red", role: "primary" },
      { hex: "#2C3E50", name: "Studio Navy", role: "secondary" },
      { hex: "#F39C12", name: "Spotlight Gold", role: "accent" },
      { hex: "#ECF0F1", name: "Clean White", role: "neutral" },
      { hex: "#34495E", name: "Production Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #E74C3C 0%, #F39C12 100%)",
    mood: "Creative & Bold",
    category: "Creative"
  },
  {
    id: "innovation-indigo",
    name: "Innovation Indigo",
    description: "Forward-thinking entertainment",
    psychology: "Innovation, trust, technological advancement",
    industry: "Tech Entertainment",
    colors: [
      { hex: "#3498DB", name: "Innovation Blue", role: "primary" },
      { hex: "#2C3E50", name: "Tech Gray", role: "secondary" },
      { hex: "#E67E22", name: "Energy Orange", role: "accent" },
      { hex: "#FFFFFF", name: "Digital White", role: "neutral" },
      { hex: "#34495E", name: "Interface Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #3498DB 0%, #E67E22 100%)",
    mood: "Innovative & Modern",
    category: "Technology"
  },
  {
    id: "premium-platinum",
    name: "Premium Platinum",
    description: "Luxury entertainment experience",
    psychology: "Luxury, exclusivity, premium quality",
    industry: "Premium Entertainment",
    colors: [
      { hex: "#BDC3C7", name: "Platinum Silver", role: "primary" },
      { hex: "#2C3E50", name: "Luxury Black", role: "secondary" },
      { hex: "#E74C3C", name: "Signature Red", role: "accent" },
      { hex: "#F8F9FA", name: "Pure White", role: "neutral" },
      { hex: "#34495E", name: "Executive Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #BDC3C7 0%, #E74C3C 100%)",
    mood: "Luxury & Exclusive",
    category: "Premium"
  },
  {
    id: "vibrant-viridian",
    name: "Vibrant Viridian",
    description: "Fresh, energetic entertainment",
    psychology: "Growth, vitality, fresh perspectives",
    industry: "Modern Entertainment",
    colors: [
      { hex: "#27AE60", name: "Growth Green", role: "primary" },
      { hex: "#2C3E50", name: "Modern Black", role: "secondary" },
      { hex: "#F39C12", name: "Sunshine Yellow", role: "accent" },
      { hex: "#FFFFFF", name: "Fresh White", role: "neutral" },
      { hex: "#34495E", name: "Contemporary Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #27AE60 0%, #F39C12 100%)",
    mood: "Fresh & Energetic",
    category: "Modern"
  },
  {
    id: "royal-royal",
    name: "Royal Royal",
    description: "Majestic entertainment heritage",
    psychology: "Heritage, majesty, timeless appeal",
    industry: "Heritage Entertainment",
    colors: [
      { hex: "#8E44AD", name: "Royal Purple", role: "primary" },
      { hex: "#2C3E50", name: "Heritage Black", role: "secondary" },
      { hex: "#D4AF37", name: "Crown Gold", role: "accent" },
      { hex: "#F8F9FA", name: "Classic White", role: "neutral" },
      { hex: "#34495E", name: "Traditional Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #8E44AD 0%, #D4AF37 100%)",
    mood: "Majestic & Timeless",
    category: "Heritage"
  },
  {
    id: "dynamic-dusk",
    name: "Dynamic Dusk",
    description: "Sophisticated evening entertainment",
    psychology: "Sophistication, mystery, evening appeal",
    industry: "Evening Entertainment",
    colors: [
      { hex: "#9B59B6", name: "Dusk Purple", role: "primary" },
      { hex: "#2C3E50", name: "Night Black", role: "secondary" },
      { hex: "#E67E22", name: "Sunset Orange", role: "accent" },
      { hex: "#ECF0F1", name: "Twilight White", role: "neutral" },
      { hex: "#34495E", name: "Evening Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #9B59B6 0%, #E67E22 100%)",
    mood: "Sophisticated & Mysterious",
    category: "Evening"
  },
  {
    id: "bold-burgundy",
    name: "Bold Burgundy",
    description: "Rich, confident entertainment",
    psychology: "Confidence, richness, established presence",
    industry: "Established Entertainment",
    colors: [
      { hex: "#8B0000", name: "Burgundy Red", role: "primary" },
      { hex: "#2C3E50", name: "Classic Black", role: "secondary" },
      { hex: "#D4AF37", name: "Prestige Gold", role: "accent" },
      { hex: "#F8F9FA", name: "Refined White", role: "neutral" },
      { hex: "#34495E", name: "Sophisticated Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #8B0000 0%, #D4AF37 100%)",
    mood: "Rich & Confident",
    category: "Established"
  },
  {
    id: "tech-teal",
    name: "Tech Teal",
    description: "Modern digital entertainment",
    psychology: "Technology, innovation, digital-first",
    industry: "Digital Entertainment",
    colors: [
      { hex: "#16A085", name: "Tech Teal", role: "primary" },
      { hex: "#2C3E50", name: "Digital Black", role: "secondary" },
      { hex: "#F39C12", name: "Digital Yellow", role: "accent" },
      { hex: "#FFFFFF", name: "Screen White", role: "neutral" },
      { hex: "#34495E", name: "Interface Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #16A085 0%, #F39C12 100%)",
    mood: "Modern & Digital",
    category: "Digital"
  },
  {
    id: "visionary-violet",
    name: "Visionary Violet",
    description: "Forward-thinking entertainment vision",
    psychology: "Visionary, creative, future-focused",
    industry: "Visionary Entertainment",
    colors: [
      { hex: "#6C5CE7", name: "Vision Violet", role: "primary" },
      { hex: "#2C3E50", name: "Future Black", role: "secondary" },
      { hex: "#00CEC9", name: "Innovation Teal", role: "accent" },
      { hex: "#F8F9FA", name: "Vision White", role: "neutral" },
      { hex: "#34495E", name: "Strategic Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #6C5CE7 0%, #00CEC9 100%)",
    mood: "Visionary & Future-Focused",
    category: "Visionary"
  },
  {
    id: "elite-emerald",
    name: "Elite Emerald",
    description: "Exclusive premium entertainment",
    psychology: "Exclusivity, success, premium positioning",
    industry: "Elite Entertainment",
    colors: [
      { hex: "#2ECC71", name: "Elite Green", role: "primary" },
      { hex: "#2C3E50", name: "Exclusive Black", role: "secondary" },
      { hex: "#E74C3C", name: "Prestige Red", role: "accent" },
      { hex: "#FFFFFF", name: "Elite White", role: "neutral" },
      { hex: "#34495E", name: "Executive Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #2ECC71 0%, #E74C3C 100%)",
    mood: "Exclusive & Successful",
    category: "Elite"
  },
  {
    id: "pioneer-persimmon",
    name: "Pioneer Persimmon",
    description: "Trailblazing entertainment innovation",
    psychology: "Pioneering, bold, industry-leading",
    industry: "Pioneer Entertainment",
    colors: [
      { hex: "#E67E22", name: "Pioneer Orange", role: "primary" },
      { hex: "#2C3E50", name: "Trail Black", role: "secondary" },
      { hex: "#9B59B6", name: "Innovation Purple", role: "accent" },
      { hex: "#F8F9FA", name: "Fresh White", role: "neutral" },
      { hex: "#34495E", name: "Strategic Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #E67E22 0%, #9B59B6 100%)",
    mood: "Pioneering & Bold",
    category: "Pioneer"
  }
];

// Premium Enterprise Typography System
const fontFamilies = [
  {
    id: "helvetica-neue",
    name: "Helvetica Neue",
    category: "Modern Sans-Serif",
    description: "Clean, professional, universally trusted",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Helvetica Neue:wght@300;400;500;600;700;800;900",
    bestFor: "Corporate, professional, clean interfaces",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Professional & Clean",
    enterprise: true
  },
  {
    id: "avenir-next",
    name: "Avenir Next",
    category: "Geometric Sans",
    description: "Modern, geometric, forward-thinking",
    weights: ["400", "500", "600", "700", "800", "900"],
    googleFont: "Avenir Next:wght@400;500;600;700;800;900",
    bestFor: "Tech companies, modern brands, innovation",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Modern & Geometric",
    enterprise: true
  },
  {
    id: "proxima-nova",
    name: "Proxima Nova",
    category: "Humanist Sans",
    description: "Friendly yet professional, highly readable",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Proxima Nova:wght@300;400;500;600;700;800;900",
    bestFor: "Consumer brands, friendly enterprises",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Friendly & Professional",
    enterprise: true
  },
  {
    id: "futura-pt",
    name: "Futura PT",
    category: "Geometric Sans",
    description: "Bold, geometric, architectural presence",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Futura PT:wght@300;400;500;600;700;800;900",
    bestFor: "Bold statements, architectural brands",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Bold & Architectural",
    enterprise: true
  },
  {
    id: "akzidenz-grotesk",
    name: "Akzidenz-Grotesk",
    category: "Grotesque Sans",
    description: "Classic, authoritative, European heritage",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Akzidenz-Grotesk:wght@300;400;500;600;700;800;900",
    bestFor: "European brands, classic enterprises",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Classic & Authoritative",
    enterprise: true
  },
  {
    id: "univers-next",
    name: "Univers Next Pro",
    category: "Neo-Grotesque",
    description: "Refined, versatile, corporate standard",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Univers Next Pro:wght@300;400;500;600;700;800;900",
    bestFor: "Corporate communications, versatile use",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Refined & Versatile",
    enterprise: true
  },
  {
    id: "trade-gothic",
    name: "Trade Gothic",
    category: "Grotesque Sans",
    description: "American classic, editorial excellence",
    weights: ["400", "700"],
    googleFont: "Trade Gothic:wght@400;700",
    bestFor: "American brands, editorial content",
    preview: "The Entertainment Revolution Starts Here",
    personality: "American & Editorial",
    enterprise: true
  },
  {
    id: "neue-haas-grotesk",
    name: "Neue Haas Grotesk",
    category: "Neo-Grotesque",
    description: "Swiss design, perfect proportions",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Neue Haas Grotesk:wght@300;400;500;600;700;800;900",
    bestFor: "Swiss design, minimal aesthetics",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Swiss & Minimal",
    enterprise: true
  },
  {
    id: "aktiv-grotesk",
    name: "Aktiv Grotesk",
    category: "Grotesque Sans",
    description: "Contemporary, digital-native design",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Aktiv Grotesk:wght@300;400;500;600;700;800;900",
    bestFor: "Digital brands, contemporary design",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Contemporary & Digital",
    enterprise: true
  },
  {
    id: "gotham-rounded",
    name: "Gotham Rounded",
    category: "Rounded Sans",
    description: "Friendly authority, American institution",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Gotham Rounded:wght@300;400;500;600;700;800;900",
    bestFor: "American institutions, friendly authority",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Friendly Authority",
    enterprise: true
  }
];

// Enterprise Theme Context
export const useBrandingTheme = () => {
  const [currentTheme, setCurrentTheme] = useState({
    colors: colorPalettes[0],
    font: fontFamilies[0],
    isDark: false
  });

  const updateTheme = (palette: typeof colorPalettes[0], font: typeof fontFamilies[0]) => {
    setCurrentTheme({ colors: palette, font, isDark: currentTheme.isDark });

    // Update CSS variables for real-time website theming
    const root = document.documentElement;

    // Update color variables
    palette.colors.forEach((color, index) => {
      const varName = index === 0 ? '--primary' :
                     index === 1 ? '--secondary' :
                     index === 2 ? '--accent' :
                     index === 3 ? '--neutral' : '--background';
      root.style.setProperty(varName, color.hex);
    });

    // Update font variables
    root.style.setProperty('--font-display', font.name);
    root.style.setProperty('--font-sans', font.name);

    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('themeChange', {
      detail: { palette, font }
    }));
  };

  return { currentTheme, updateTheme };
};

// Enterprise Color Palette Card Component - Professional Corporate Design
const ColorPaletteCard = ({
  palette,
  isSelected,
  onSelect
}: {
  palette: typeof colorPalettes[0];
  isSelected: boolean;
  onSelect: (palette: typeof colorPalettes[0]) => void;
}) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = (hex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div
      onClick={() => onSelect(palette)}
      className={`group relative bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 ${
        isSelected
          ? 'ring-4 ring-primary/20 shadow-2xl border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5'
          : 'hover:shadow-xl border-gray-200 hover:border-primary/30'
      }`}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-xl z-20 border-4 border-white">
          <Check className="w-6 h-6 text-white" />
        </div>
      )}

      {/* Professional header */}
      <div className="p-8 pb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{palette.name}</h3>
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                palette.category === 'Leadership' ? 'bg-amber-100 text-amber-800' :
                palette.category === 'Creative' ? 'bg-red-100 text-red-800' :
                palette.category === 'Technology' ? 'bg-blue-100 text-blue-800' :
                palette.category === 'Premium' ? 'bg-slate-100 text-slate-800' :
                palette.category === 'Modern' ? 'bg-emerald-100 text-emerald-800' :
                palette.category === 'Heritage' ? 'bg-purple-100 text-purple-800' :
                palette.category === 'Evening' ? 'bg-indigo-100 text-indigo-800' :
                palette.category === 'Established' ? 'bg-red-100 text-red-900' :
                palette.category === 'Digital' ? 'bg-teal-100 text-teal-800' :
                palette.category === 'Visionary' ? 'bg-violet-100 text-violet-800' :
                palette.category === 'Elite' ? 'bg-emerald-100 text-emerald-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {palette.category}
              </span>
              <span className="text-sm text-gray-500 font-medium">{palette.industry}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6">{palette.description}</p>

        {/* Professional color swatches - Large and organized */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Color Palette</h4>
          <div className="grid grid-cols-5 gap-3">
            {palette.colors.map((color, index) => (
              <div key={index} className="text-center group/color">
                <div
                  onClick={(e) => copyColor(color.hex, e)}
                  className="relative w-full h-20 rounded-xl border-2 border-gray-200 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200 overflow-hidden"
                  style={{ backgroundColor: color.hex }}
                >
                  {/* Subtle overlay for better text contrast */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/color:opacity-100 transition-opacity duration-200" />

                  {/* Color info on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/color:opacity-100 transition-opacity duration-200">
                    <span className="text-white text-xs font-bold drop-shadow-lg">{color.name}</span>
                    <span className="text-white/90 text-xs font-mono drop-shadow-lg mt-1">{color.hex}</span>
                  </div>

                  {/* Copy feedback */}
                  {copiedColor === color.hex && (
                    <div className="absolute inset-0 bg-green-500/90 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Copied!</span>
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <p className="text-xs font-semibold text-gray-700 capitalize">{color.role}</p>
                  <p className="text-xs text-gray-500 font-mono">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional metadata */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold text-gray-600 uppercase tracking-wider text-xs">Psychology</span>
              <p className="text-gray-800 font-medium mt-1">{palette.psychology}</p>
            </div>
            <div>
              <span className="font-semibold text-gray-600 uppercase tracking-wider text-xs">Mood</span>
              <span className={`font-bold mt-1 px-2 py-1 rounded-full text-xs inline-block ${
                palette.mood.includes('Executive') ? 'bg-amber-100 text-amber-800' :
                palette.mood.includes('Creative') ? 'bg-red-100 text-red-800' :
                palette.mood.includes('Innovative') ? 'bg-blue-100 text-blue-800' :
                palette.mood.includes('Luxury') ? 'bg-slate-100 text-slate-800' :
                palette.mood.includes('Fresh') ? 'bg-emerald-100 text-emerald-800' :
                palette.mood.includes('Majestic') ? 'bg-purple-100 text-purple-800' :
                palette.mood.includes('Sophisticated') ? 'bg-indigo-100 text-indigo-800' :
                palette.mood.includes('Rich') ? 'bg-red-100 text-red-900' :
                palette.mood.includes('Modern') ? 'bg-teal-100 text-teal-800' :
                palette.mood.includes('Visionary') ? 'bg-violet-100 text-violet-800' :
                palette.mood.includes('Exclusive') ? 'bg-emerald-100 text-emerald-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {palette.mood}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional gradient preview */}
      <div className="px-8 pb-8">
        <div className="relative h-16 rounded-xl overflow-hidden shadow-inner border border-gray-200" style={{ background: palette.gradient }}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold drop-shadow-lg">Preview</span>
          </div>
        </div>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/2 to-accent/2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

// Enterprise Font Card Component
const FontCard = ({
  font,
  isSelected,
  onSelect
}: {
  font: typeof fontFamilies[0];
  isSelected: boolean;
  onSelect: (font: typeof fontFamilies[0]) => void;
}) => {
  return (
    <div
      onClick={() => onSelect(font)}
      className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border ${
        isSelected
          ? 'ring-2 ring-primary ring-opacity-50 shadow-2xl scale-[1.02] border-primary bg-gradient-to-br from-primary/5 to-accent/5'
          : 'hover:shadow-xl border-gray-200 bg-white hover:border-primary/30'
      }`}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg z-10">
          <Check className="w-5 h-5 text-white" />
        </div>
      )}

      {/* Enterprise badge */}
      {font.enterprise && (
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Enterprise</span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{font.name}</h3>
        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">{font.category}</p>
        <p className="text-sm text-gray-600 mt-1">{font.description}</p>
      </div>

      {/* Font preview */}
      <div className="mb-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <p
          className="text-2xl font-bold text-gray-900 leading-tight"
          style={{ fontFamily: font.name }}
        >
          {font.preview}
        </p>
      </div>

      {/* Font weights */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Available Weights</h4>
        <div className="flex flex-wrap gap-2">
          {font.weights.map((weight) => (
            <span
              key={weight}
              className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-bold hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default border border-gray-200"
              style={{
                fontFamily: font.name,
                fontWeight: weight,
                color: '#1f2937'
              }}
            >
              {weight}
            </span>
          ))}
        </div>
      </div>

      {/* Personality and best for */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Personality</span>
          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {font.personality}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Best For</span>
          <span className="text-sm text-gray-700 font-medium">{font.bestFor}</span>
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export const Branding = () => {
  const [selectedPalette, setSelectedPalette] = useState(colorPalettes[0]);
  const [selectedFont, setSelectedFont] = useState(fontFamilies[0]);
  const [activeSection, setActiveSection] = useState('overview');
  const [animatingElements, setAnimatingElements] = useState<Set<string>>(new Set());

  // Load Google Fonts dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.googleFont}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [selectedFont]);

  // Apply theme changes to website
  useEffect(() => {
    const updateWebsiteTheme = () => {
      const root = document.documentElement;

      // Update primary color (first color)
      root.style.setProperty('--primary', selectedPalette.colors[0].hex);

      // Update secondary color (second color)
      root.style.setProperty('--secondary', selectedPalette.colors[1].hex);

      // Update accent color (third color)
      root.style.setProperty('--accent', selectedPalette.colors[2].hex);

      // Update other CSS custom properties
      root.style.setProperty('--neutral', selectedPalette.colors[3].hex);
      root.style.setProperty('--background', selectedPalette.colors[4].hex);

      // Update font family
      root.style.setProperty('--font-display', selectedFont.name);
      root.style.setProperty('--font-sans', selectedFont.name);

      // Trigger custom event for other components
      window.dispatchEvent(new CustomEvent('themeChange', {
        detail: { palette: selectedPalette, font: selectedFont }
      }));
    };

    updateWebsiteTheme();
  }, [selectedPalette, selectedFont]);

  const animateElement = (elementId: string) => {
    setAnimatingElements(prev => new Set(prev).add(elementId));
    setTimeout(() => {
      setAnimatingElements(prev => {
        const newSet = new Set(prev);
        newSet.delete(elementId);
        return newSet;
      });
    }, 600);
  };

  const exportBrandKit = () => {
    animateElement('export');
    const brandKit = {
      palette: selectedPalette,
      font: selectedFont,
      theme: {
        primary: selectedPalette.colors[0].hex,
        secondary: selectedPalette.colors[1].hex,
        accent: selectedPalette.colors[2].hex,
        neutral: selectedPalette.colors[3].hex,
        background: selectedPalette.colors[4].hex
      },
      timestamp: new Date().toISOString(),
      metadata: {
        industry: selectedPalette.industry,
        psychology: selectedPalette.psychology,
        mood: selectedPalette.mood,
        category: selectedPalette.category
      }
    };

    const dataStr = JSON.stringify(brandKit, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedPalette.name.replace(/\s+/g, '-')}-Brand-Kit.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Enterprise Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  TASTE Brand Center
                </h1>
                <p className="text-gray-600 font-medium">
                  Enterprise Branding & Design System
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={exportBrandKit}
                className={`flex items-center space-x-3 px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 ${
                  animatingElements.has('export') ? 'animate-pulse' : ''
                }`}
              >
                <Download className="w-5 h-5" />
                <span>Export Brand Kit</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Enterprise Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              {[
                { id: 'overview', label: 'Brand Overview', icon: Crown, color: 'from-amber-500 to-yellow-600', desc: 'System overview' },
                { id: 'colors', label: 'Color Palettes', icon: Palette, color: 'from-blue-500 to-indigo-600', desc: 'Psychology-based colors' },
                { id: 'typography', label: 'Typography', icon: Type, color: 'from-emerald-500 to-teal-600', desc: 'Premium fonts' },
                { id: 'applications', label: 'Applications', icon: Target, color: 'from-rose-500 to-pink-600', desc: 'Brand usage' }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      animateElement(item.id);
                    }}
                    className={`w-full p-6 rounded-2xl transition-all duration-500 text-left group hover:shadow-xl hover:scale-105 ${
                      activeSection === item.id
                        ? `bg-gradient-to-r ${item.color} text-white shadow-2xl scale-105`
                        : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border border-gray-200'
                    } ${animatingElements.has(item.id) ? 'animate-pulse' : ''}`}
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <div className={`p-3 rounded-xl ${
                        activeSection === item.id
                          ? 'bg-white/20'
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-primary/10 group-hover:to-accent/10'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          activeSection === item.id ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.label}</h3>
                        <p className={`text-sm ${
                          activeSection === item.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Brand Overview */}
            {activeSection === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Brand System</h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                      A comprehensive, psychology-driven brand identity system designed for Fortune 500 level presentation and global entertainment leadership.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200">
                      <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
                      <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Color Palettes</div>
                      <p className="text-xs text-gray-500 mt-1">Industry-specific & psychological</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                      <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
                      <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Enterprise Fonts</div>
                      <p className="text-xs text-gray-500 mt-1">Premium typography system</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
                      <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Real-time Sync</div>
                      <p className="text-xs text-gray-500 mt-1">Instant website theming</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200">
                      <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                      <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Applications</div>
                      <p className="text-xs text-gray-500 mt-1">Cross-platform consistency</p>
                    </div>
                  </div>

                  {/* Current Selection Summary */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-6">
                      <Zap className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold text-gray-900">Current Brand Configuration</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wide">Color Palette</h4>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex space-x-2">
                            {selectedPalette.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-10 h-10 rounded-lg border-2 border-white shadow-lg"
                                style={{ backgroundColor: color.hex }}
                              />
                            ))}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-lg">{selectedPalette.name}</p>
                            <p className="text-sm text-gray-600">{selectedPalette.category} • {selectedPalette.industry}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 font-medium">{selectedPalette.psychology}</p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-700 uppercase tracking-wide">Typography</h4>
                        <div className="mb-4">
                          <p
                            className="text-2xl font-bold text-gray-900"
                            style={{ fontFamily: selectedFont.name }}
                          >
                            {selectedFont.name}
                          </p>
                          <p className="text-sm text-gray-600">{selectedFont.category}</p>
                        </div>
                        <p className="text-gray-700 font-medium">{selectedFont.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Color Palettes */}
            {activeSection === 'colors' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
                  <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Color Psychology</h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                      Each palette is meticulously crafted based on entertainment industry psychology, emotional impact, and brand positioning. Click any palette to instantly transform your website.
                    </p>
                  </div>

                  <div className="grid gap-8">
                    {colorPalettes.map((palette) => (
                      <ColorPaletteCard
                        key={palette.id}
                        palette={palette}
                        isSelected={selectedPalette.id === palette.id}
                        onSelect={(palette) => {
                          setSelectedPalette(palette);
                          animateElement(palette.id);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Typography */}
            {activeSection === 'typography' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
                  <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Type className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Typography System</h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                      Curated selection of enterprise-grade fonts used by Fortune 500 companies worldwide. Each font is chosen for its professional impact and cross-platform performance.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {fontFamilies.map((font) => (
                      <FontCard
                        key={font.id}
                        font={font}
                        isSelected={selectedFont.id === font.id}
                        onSelect={(font) => {
                          setSelectedFont(font);
                          animateElement(font.id);
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}



            {/* Applications */}
            {activeSection === 'applications' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
                  <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Brand Applications</h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                      Practical ways to deploy your brand kit across marketing, product, and executive presentations.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        title: 'Pitch Decks',
                        desc: 'Use your palette and typography for investor-grade slides.',
                        icon: Crown
                      },
                      {
                        title: 'Product UI',
                        desc: 'Sync colors and fonts into your web or mobile design system.',
                        icon: Settings
                      },
                      {
                        title: 'Marketing Assets',
                        desc: 'Export ready-to-use codes for ads, social, and OOH creative.',
                        icon: Sparkles
                      }
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-inner space-y-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-primary/10 to-accent/10 text-primary shadow">
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      );
                    })}
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
