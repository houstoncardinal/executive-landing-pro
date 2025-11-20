import { useState, useEffect } from 'react';
import { ChevronDown, Palette, Type, Eye, Download, Copy, Check, Settings, Sparkles, Zap, Crown, Heart, Star, Briefcase, Target, TrendingUp, Award, Globe } from 'lucide-react';

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
  },
  {
    id: "midnight-sapphire",
    name: "Midnight Sapphire",
    description: "Deep, luxurious evening entertainment",
    psychology: "Luxury, depth, premium nighttime appeal",
    industry: "Premium Night Entertainment",
    colors: [
      { hex: "#0F2557", name: "Midnight Blue", role: "primary" },
      { hex: "#000000", name: "Pure Black", role: "secondary" },
      { hex: "#FFD700", name: "Gold Accent", role: "accent" },
      { hex: "#FFFFFF", name: "Pure White", role: "neutral" },
      { hex: "#1A1A2E", name: "Deep Navy", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #0F2557 0%, #FFD700 100%)",
    mood: "Luxurious & Deep",
    category: "Premium"
  },
  {
    id: "crimson-noir",
    name: "Crimson Noir",
    description: "Dramatic, bold entertainment presence",
    psychology: "Drama, intensity, powerful storytelling",
    industry: "Dramatic Entertainment",
    colors: [
      { hex: "#DC143C", name: "Crimson Red", role: "primary" },
      { hex: "#0A0A0A", name: "Noir Black", role: "secondary" },
      { hex: "#C0C0C0", name: "Silver Accent", role: "accent" },
      { hex: "#F5F5F5", name: "Off White", role: "neutral" },
      { hex: "#2B2B2B", name: "Charcoal", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #DC143C 0%, #C0C0C0 100%)",
    mood: "Dramatic & Intense",
    category: "Dramatic"
  },
  {
    id: "champagne-gold",
    name: "Champagne Gold",
    description: "Celebratory, upscale entertainment",
    psychology: "Celebration, success, premium quality",
    industry: "Celebration Entertainment",
    colors: [
      { hex: "#F7E7CE", name: "Champagne", role: "primary" },
      { hex: "#1C1C1C", name: "Elegant Black", role: "secondary" },
      { hex: "#B8860B", name: "Dark Gold", role: "accent" },
      { hex: "#FFFEF7", name: "Cream White", role: "neutral" },
      { hex: "#3D3D3D", name: "Refined Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #F7E7CE 0%, #B8860B 100%)",
    mood: "Celebratory & Upscale",
    category: "Celebration"
  },
  {
    id: "forest-emerald",
    name: "Forest Emerald",
    description: "Natural, organic entertainment feel",
    psychology: "Growth, nature, organic authenticity",
    industry: "Natural Entertainment",
    colors: [
      { hex: "#228B22", name: "Forest Green", role: "primary" },
      { hex: "#1B1B1B", name: "Earth Black", role: "secondary" },
      { hex: "#FFD700", name: "Sunlight Gold", role: "accent" },
      { hex: "#FAFAFA", name: "Natural White", role: "neutral" },
      { hex: "#2F4F4F", name: "Slate Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #228B22 0%, #FFD700 100%)",
    mood: "Natural & Organic",
    category: "Natural"
  },
  {
    id: "cosmic-purple",
    name: "Cosmic Purple",
    description: "Futuristic, otherworldly entertainment",
    psychology: "Innovation, mystery, future-forward",
    industry: "Futuristic Entertainment",
    colors: [
      { hex: "#4B0082", name: "Cosmic Purple", role: "primary" },
      { hex: "#000000", name: "Space Black", role: "secondary" },
      { hex: "#00CED1", name: "Cyan Accent", role: "accent" },
      { hex: "#F0F0F0", name: "Star White", role: "neutral" },
      { hex: "#1E1E3F", name: "Deep Space", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #4B0082 0%, #00CED1 100%)",
    mood: "Futuristic & Mysterious",
    category: "Futuristic"
  },
  {
    id: "sunset-coral",
    name: "Sunset Coral",
    description: "Warm, inviting entertainment atmosphere",
    psychology: "Warmth, comfort, approachable luxury",
    industry: "Warm Entertainment",
    colors: [
      { hex: "#FF7F50", name: "Coral", role: "primary" },
      { hex: "#2C2C2C", name: "Warm Black", role: "secondary" },
      { hex: "#FFD700", name: "Golden Hour", role: "accent" },
      { hex: "#FFF8F0", name: "Warm White", role: "neutral" },
      { hex: "#4A4A4A", name: "Warm Gray", role: "background" }
    ],
    gradient: "linear-gradient(135deg, #FF7F50 0%, #FFD700 100%)",
    mood: "Warm & Inviting",
    category: "Warm"
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
  },
  {
    id: "inter",
    name: "Inter",
    category: "Neo-Grotesque",
    description: "Optimized for screens, highly legible",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Inter:wght@300;400;500;600;700;800;900",
    bestFor: "Digital interfaces, web applications",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Modern & Legible",
    enterprise: true
  },
  {
    id: "montserrat",
    name: "Montserrat",
    category: "Geometric Sans",
    description: "Urban, contemporary, geometric precision",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Montserrat:wght@300;400;500;600;700;800;900",
    bestFor: "Headlines, modern brands, urban appeal",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Urban & Contemporary",
    enterprise: true
  },
  {
    id: "poppins",
    name: "Poppins",
    category: "Geometric Sans",
    description: "Friendly, approachable, geometric",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Poppins:wght@300;400;500;600;700;800;900",
    bestFor: "Consumer apps, friendly brands",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Friendly & Geometric",
    enterprise: true
  },
  {
    id: "raleway",
    name: "Raleway",
    category: "Elegant Sans",
    description: "Elegant, sophisticated, refined",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Raleway:wght@300;400;500;600;700;800;900",
    bestFor: "Luxury brands, elegant presentations",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Elegant & Refined",
    enterprise: true
  },
  {
    id: "roboto",
    name: "Roboto",
    category: "Neo-Grotesque",
    description: "Google's signature font, versatile",
    weights: ["300", "400", "500", "700", "900"],
    googleFont: "Roboto:wght@300;400;500;700;900",
    bestFor: "Android apps, Google ecosystem",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Versatile & Modern",
    enterprise: true
  },
  {
    id: "source-sans",
    name: "Source Sans Pro",
    category: "Humanist Sans",
    description: "Adobe's open-source workhorse",
    weights: ["300", "400", "600", "700", "900"],
    googleFont: "Source Sans Pro:wght@300;400;600;700;900",
    bestFor: "Body text, long-form content",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Professional & Readable",
    enterprise: true
  },
  {
    id: "circular",
    name: "Circular",
    category: "Geometric Sans",
    description: "Spotify's signature font, modern and friendly",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Circular:wght@300;400;500;600;700;800;900",
    bestFor: "Music, entertainment, modern brands",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Modern & Friendly",
    enterprise: true
  },
  {
    id: "sf-pro",
    name: "SF Pro Display",
    category: "Neo-Grotesque",
    description: "Apple's system font, refined and elegant",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "SF Pro Display:wght@300;400;500;600;700;800;900",
    bestFor: "Premium products, Apple ecosystem",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Refined & Elegant",
    enterprise: true
  },
  {
    id: "gilroy",
    name: "Gilroy",
    category: "Geometric Sans",
    description: "Bold, modern, geometric excellence",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Gilroy:wght@300;400;500;600;700;800;900",
    bestFor: "Headlines, bold statements, modern brands",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Bold & Modern",
    enterprise: true
  },
  {
    id: "brandon-grotesque",
    name: "Brandon Grotesque",
    category: "Geometric Sans",
    description: "Elegant geometric with personality",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Brandon Grotesque:wght@300;400;500;600;700;800;900",
    bestFor: "Fashion, lifestyle, elegant brands",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Elegant & Geometric",
    enterprise: true
  },
  {
    id: "din-next",
    name: "DIN Next",
    category: "Industrial Sans",
    description: "German engineering, industrial strength",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "DIN Next:wght@300;400;500;600;700;800;900",
    bestFor: "Industrial, automotive, engineering",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Industrial & Strong",
    enterprise: true
  },
  {
    id: "museo-sans",
    name: "Museo Sans",
    category: "Humanist Sans",
    description: "Warm, friendly, highly versatile",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Museo Sans:wght@300;400;500;600;700;800;900",
    bestFor: "Museums, cultural institutions, education",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Warm & Versatile",
    enterprise: true
  },
  {
    id: "sofia-pro",
    name: "Sofia Pro",
    category: "Geometric Sans",
    description: "Elegant, geometric, sophisticated",
    weights: ["300", "400", "500", "600", "700", "800", "900"],
    googleFont: "Sofia Pro:wght@300;400;500;600;700;800;900",
    bestFor: "Fashion, luxury, sophisticated brands",
    preview: "The Entertainment Revolution Starts Here",
    personality: "Sophisticated & Elegant",
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

// Enterprise Color Palette Card Component
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
  const [isHovered, setIsHovered] = useState(false);

  const copyColor = (hex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div
      onClick={() => onSelect(palette)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-10 rounded-3xl cursor-pointer transition-all duration-700 border-2 overflow-hidden ${
        isSelected
          ? 'ring-4 ring-primary/40 shadow-2xl border-primary bg-white'
          : 'hover:shadow-2xl border-gray-200 bg-white hover:border-primary/40'
      }`}
    >
      {/* Animated gradient background on hover */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-10' : ''}`}
        style={{ background: palette.gradient }}
      />
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-primary via-accent to-primary rounded-full flex items-center justify-center shadow-2xl z-20 border-4 border-white animate-in zoom-in duration-500">
          <Check className="w-7 h-7 text-white font-bold" />
        </div>
      )}

      {/* Category badge */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
            palette.category === 'Leadership' ? 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-900' :
            palette.category === 'Creative' ? 'bg-gradient-to-r from-red-100 to-rose-100 text-red-900' :
            palette.category === 'Technology' ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900' :
            palette.category === 'Premium' ? 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-900' :
            palette.category === 'Modern' ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-900' :
            palette.category === 'Heritage' ? 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-900' :
            palette.category === 'Evening' ? 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-900' :
            palette.category === 'Established' ? 'bg-gradient-to-r from-red-100 to-orange-100 text-red-900' :
            palette.category === 'Digital' ? 'bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-900' :
            palette.category === 'Visionary' ? 'bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-900' :
            palette.category === 'Elite' ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-900' :
            'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-900'
          }`}>
            {palette.category}
          </div>
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {palette.industry}
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="relative mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">{palette.name}</h3>
        <p className="text-base text-gray-600 leading-relaxed font-medium">{palette.description}</p>
      </div>

      {/* Large Color Swatches - Main Feature */}
      <div className="relative mb-8">
        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center justify-between">
          <span>Color Palette</span>
          <span className="text-xs text-gray-500 font-normal normal-case">Click to copy</span>
        </h4>
        <div className="grid grid-cols-5 gap-4">
          {palette.colors.map((color, index) => (
            <div key={index} className="group/swatch">
              <div
                onClick={(e) => copyColor(color.hex, e)}
                className="relative w-full h-28 rounded-2xl border-2 border-gray-300 shadow-lg cursor-pointer hover:scale-110 hover:shadow-2xl hover:z-10 transition-all duration-300 overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/swatch:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/swatch:opacity-100 transition-all duration-300 p-3">
                  <Copy className="w-6 h-6 text-white mb-2 drop-shadow-lg" />
                  <span className="text-white text-xs font-bold drop-shadow-lg text-center leading-tight">{color.name}</span>
                </div>
                {copiedColor === color.hex && (
                  <div className="absolute inset-0 bg-green-500 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-200">
                    <Check className="w-7 h-7 text-white mb-1" />
                    <span className="text-white text-xs font-bold">Copied!</span>
                  </div>
                )}
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs font-bold text-gray-800 capitalize mb-1">{color.role}</p>
                <p className="text-xs text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded-md inline-block">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Psychology and mood */}
      <div className="relative space-y-4 pt-6 border-t-2 border-gray-100">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Psychology</span>
            </div>
            <p className="text-sm text-gray-900 font-semibold leading-relaxed">{palette.psychology}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">Mood</span>
            </div>
            <span className={`text-sm font-bold px-3 py-1.5 rounded-full inline-block shadow-sm ${
              palette.mood.includes('Executive') ? 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-900' :
              palette.mood.includes('Creative') ? 'bg-gradient-to-r from-red-100 to-rose-100 text-red-900' :
              palette.mood.includes('Innovative') ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900' :
              palette.mood.includes('Luxury') ? 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-900' :
              palette.mood.includes('Fresh') ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-900' :
              palette.mood.includes('Majestic') ? 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-900' :
              palette.mood.includes('Sophisticated') ? 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-900' :
              palette.mood.includes('Rich') ? 'bg-gradient-to-r from-red-100 to-orange-100 text-red-900' :
              palette.mood.includes('Modern') ? 'bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-900' :
              palette.mood.includes('Visionary') ? 'bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-900' :
              palette.mood.includes('Exclusive') ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-900' :
              'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-900'
            }`}>
              {palette.mood}
            </span>
          </div>
        </div>
      </div>
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onSelect(font)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-500 border ${
        isSelected
          ? 'ring-2 ring-primary ring-opacity-50 shadow-2xl scale-[1.02] border-primary bg-gradient-to-br from-primary/5 to-accent/5'
          : 'hover:shadow-xl border-gray-200 bg-white hover:border-primary/20'
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
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

export const Branding = () => {
  const [selectedPalette, setSelectedPalette] = useState(colorPalettes[0]);
  const [selectedFont, setSelectedFont] = useState(fontFamilies[0]);
  const [activeSection, setActiveSection] = useState('logo');
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
      <header className="bg-[#FF6B35] border-b border-orange-600 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="TASTE" className="h-8 brightness-0 invert" />
              <div className="h-6 w-px bg-white/30"></div>
              <div>
                <h1 className="text-lg font-bold text-white tracking-tight">
                  Brand Center
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <div className="flex -space-x-1">
                  {selectedPalette.colors.slice(0, 3).map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-white">{selectedPalette.name}</span>
              </div>
              <button
                onClick={exportBrandKit}
                className={`flex items-center space-x-2 px-4 py-1.5 font-semibold text-xs rounded-lg transition-all duration-300 bg-white text-orange-600 hover:bg-orange-50 shadow-md hover:shadow-lg ${
                  animatingElements.has('export') ? 'animate-pulse' : ''
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Professional Admin Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider">Navigation</h2>
              </div>
              <nav className="p-2">
                {[
                  { id: 'logo', label: 'Logo & Assets', icon: Briefcase },
                  { id: 'colors', label: 'Color System', icon: Palette },
                  { id: 'typography', label: 'Typography', icon: Type },
                  { id: 'applications', label: 'Applications', icon: Target }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        animateElement(item.id);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left group mb-1 ${
                        activeSection === item.id
                          ? 'bg-[#FF6B35] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${
                        activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                      }`} />
                      <span className="font-medium text-sm">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Logo & Assets Section */}
            {activeSection === 'logo' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Your Brand. Your Story.</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                      Official TASTE brand identity assets, logo variations, and <span className="font-semibold text-gray-900">usage guidelines</span> for consistent brand presentation across all platforms.
                    </p>
                  </div>

                  {/* Current Logo Display */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 mb-8 border-2 border-gray-200">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Primary Logo Variations</h3>
                      <p className="text-gray-600">Official TASTE wordmark and brand identity in multiple formats</p>
                    </div>
                    
                    {/* Main Logo Versions */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-50"></div>
                        <div className="relative flex flex-col h-full">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                              <Sparkles className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <p className="text-sm font-black text-gray-800 uppercase tracking-wider mb-6 text-center">Orange Logo</p>
                          <div className="bg-white rounded-2xl p-8 mb-4 shadow-inner border-2 border-gray-100 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center min-h-[140px]">
                            <img src="/logoorange.png" alt="TASTE Logo Orange" className="h-20 w-auto max-w-full object-contain" />
                          </div>
                          <div className="text-center space-y-1 mt-auto">
                            <p className="text-xs font-bold text-orange-600 uppercase tracking-wide">Primary Brand</p>
                            <p className="text-xs text-gray-600 leading-relaxed">Use for all primary brand applications</p>
                          </div>
                        </div>
                      </div>

                      <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-2 border-gray-300 hover:border-gray-500 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-50"></div>
                        <div className="relative flex flex-col h-full">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                              <Briefcase className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <p className="text-sm font-black text-gray-800 uppercase tracking-wider mb-6 text-center">Black Logo</p>
                          <div className="bg-white rounded-2xl p-8 mb-4 shadow-inner border-2 border-gray-100 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center min-h-[140px]">
                            <img src="/logoblack.png" alt="TASTE Logo Black" className="h-20 w-auto max-w-full object-contain" />
                          </div>
                          <div className="text-center space-y-1 mt-auto">
                            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">Professional</p>
                            <p className="text-xs text-gray-600 leading-relaxed">Use for corporate documents</p>
                          </div>
                        </div>
                      </div>

                      <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl border-2 border-gray-700 hover:border-gray-500 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>
                        <div className="relative flex flex-col h-full">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                              <Crown className="w-5 h-5 text-gray-900" />
                            </div>
                          </div>
                          <p className="text-sm font-black text-white uppercase tracking-wider mb-6 text-center">White Logo</p>
                          <div className="bg-gray-800 rounded-2xl p-8 mb-4 shadow-inner border-2 border-gray-700 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center min-h-[140px]">
                            <img src="/logo.png" alt="TASTE Logo White" className="h-20 w-auto max-w-full object-contain brightness-0 invert" />
                          </div>
                          <div className="text-center space-y-1 mt-auto">
                            <p className="text-xs font-bold text-gray-300 uppercase tracking-wide">Dark Backgrounds</p>
                            <p className="text-xs text-gray-400 leading-relaxed">Use on dark backgrounds & video</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Logo Usage Examples */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Logo Usage Examples</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-500">
                          <p className="text-sm font-bold text-gray-700 mb-4 text-center">Light Backgrounds</p>
                          <div className="space-y-4">
                            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                              <img src="/logoorange.png" alt="Orange on White" className="h-16 mx-auto" />
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                              <img src="/logoorange.png" alt="Orange on Light" className="h-16 mx-auto" />
                            </div>
                            <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-200">
                              <img src="/logoblack.png" alt="Black on Light" className="h-16 mx-auto" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="group bg-gray-900 rounded-2xl p-8 shadow-lg border-2 border-gray-700 hover:border-gray-600 hover:shadow-2xl transition-all duration-500">
                          <p className="text-sm font-bold text-gray-200 mb-4 text-center">Dark Backgrounds</p>
                          <div className="space-y-4">
                            <div className="bg-gray-900 rounded-xl p-6 border-2 border-gray-700">
                              <img src="/logo.png" alt="White on Dark" className="h-16 mx-auto brightness-0 invert" />
                            </div>
                            <div className="bg-gray-800 rounded-xl p-6 border-2 border-gray-700">
                              <img src="/logo.png" alt="White on Dark Gray" className="h-16 mx-auto brightness-0 invert" />
                            </div>
                            <div className="bg-black rounded-xl p-6 border-2 border-gray-700">
                              <img src="/logo.png" alt="White on Black" className="h-16 mx-auto brightness-0 invert" />
                            </div>
                          </div>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-500">
                          <p className="text-sm font-bold text-gray-700 mb-4 text-center">Brand Gradients</p>
                          <div className="space-y-4">
                            <div className="rounded-xl p-6 border-2 border-gray-200" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)' }}>
                              <img src="/logo.png" alt="White on Orange" className="h-16 mx-auto brightness-0 invert" />
                            </div>
                            <div className="rounded-xl p-6 border-2 border-gray-200" style={{ background: selectedPalette.gradient }}>
                              <img src="/logo.png" alt="White on Brand" className="h-16 mx-auto brightness-0 invert" />
                            </div>
                            <div className="rounded-xl p-6 border-2 border-gray-200" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2C3E50 100%)' }}>
                              <img src="/logo.png" alt="White on Dark Gradient" className="h-16 mx-auto brightness-0 invert" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Brand Guidelines */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Clear Space</h3>
                      </div>
                      <p className="text-gray-700 mb-4">Maintain minimum clear space equal to the width of the letter 'T' around all sides of the logo for optimal visibility and impact</p>
                      <div className="bg-white rounded-lg p-8 border-2 border-dashed border-blue-300 flex items-center justify-center">
                        <img src="/logoorange.png" alt="TASTE Logo Clear Space" className="h-20 mx-auto" />
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Minimum Size</h3>
                      </div>
                      <p className="text-gray-700 mb-4">Logo must be at least 100px wide for digital use and 0.75 inches for print to maintain legibility</p>
                      <div className="bg-white rounded-lg p-6 flex items-center justify-center gap-6">
                        <div className="text-center">
                          <img src="/logoorange.png" alt="TASTE Logo Small" className="h-10 mx-auto mb-2" />
                          <span className="text-xs text-gray-500 font-semibold">100px min</span>
                        </div>
                        <span className="text-2xl text-gray-400">→</span>
                        <div className="text-center">
                          <img src="/logoorange.png" alt="TASTE Logo Large" className="h-20 mx-auto mb-2" />
                          <span className="text-xs text-gray-500 font-semibold">Preferred</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Approved Uses</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="font-medium">All marketing and promotional materials</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="font-medium">Digital platforms and social media</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="font-medium">Branded merchandise and apparel</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="font-medium">Partner and investor communications</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                          <Settings className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Logo Don'ts</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center gap-3">
                          <span className="text-red-600 text-xl font-bold flex-shrink-0">✕</span>
                          <span className="font-medium">Don't stretch, compress, or distort proportions</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-red-600 text-xl font-bold flex-shrink-0">✕</span>
                          <span className="font-medium">Don't alter or modify brand colors</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-red-600 text-xl font-bold flex-shrink-0">✕</span>
                          <span className="font-medium">Don't add shadows, glows, or effects</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="text-red-600 text-xl font-bold flex-shrink-0">✕</span>
                          <span className="font-medium">Don't rotate, tilt, or skew the logo</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}


            {/* Color Palettes */}
            {activeSection === 'colors' && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Enterprise Color Psychology</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
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
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Premium Typography System</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
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
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Brand Applications</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                      Transform your brand identity into powerful marketing assets across every touchpoint. From investor presentations to digital campaigns, here's how to deploy your brand kit for maximum impact.
                    </p>
                  </div>

                  {/* Main Application Categories */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Pitch Decks & Presentations */}
                    <div className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200/50 to-transparent rounded-bl-full"></div>
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Crown className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Pitch Decks & Presentations</h3>
                            <p className="text-sm text-purple-600 font-semibold">Investor-Grade Materials</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          Create compelling investor presentations that command attention and communicate your vision with authority.
                        </p>

                        <div className="space-y-4">
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Color Usage
                            </h4>
                            <p className="text-sm text-gray-600">Use primary colors for key metrics and headlines. Apply accent colors to highlight growth numbers and success indicators.</p>
                          </div>
                          
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Typography
                            </h4>
                            <p className="text-sm text-gray-600">Headlines in bold weights (700-900), body text in regular (400-500). Maintain 1.5x line height for readability.</p>
                          </div>

                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Best Practices
                            </h4>
                            <p className="text-sm text-gray-600">One key message per slide. Use gradient backgrounds sparingly. Include logo on every slide footer.</p>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl border border-purple-300">
                          <p className="text-xs font-semibold text-purple-900 uppercase tracking-wide mb-2">Quick Export</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-purple-200">PowerPoint</span>
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-purple-200">Keynote</span>
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-purple-200">Google Slides</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Digital & Social Media */}
                    <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/50 to-transparent rounded-bl-full"></div>
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Globe className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Digital & Social Media</h3>
                            <p className="text-sm text-blue-600 font-semibold">Multi-Platform Presence</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          Maintain consistent brand identity across all digital platforms and social media channels.
                        </p>

                        <div className="space-y-4">
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Social Media Assets
                            </h4>
                            <p className="text-sm text-gray-600">Profile pictures, cover photos, story templates. Use orange logo on light backgrounds, white on dark.</p>
                          </div>
                          
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Web & Mobile
                            </h4>
                            <p className="text-sm text-gray-600">Apply color palette to buttons, links, and CTAs. Use selected typography for all UI text elements.</p>
                          </div>

                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Email Marketing
                            </h4>
                            <p className="text-sm text-gray-600">Header with logo, primary color for CTAs, neutral colors for body text. Mobile-responsive templates.</p>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-300">
                          <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">Platform Specs</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-blue-200">Instagram</span>
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-blue-200">LinkedIn</span>
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-blue-200">Twitter/X</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Marketing Campaigns */}
                    <div className="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200/50 to-transparent rounded-bl-full"></div>
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <TrendingUp className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Marketing Campaigns</h3>
                            <p className="text-sm text-orange-600 font-semibold">Integrated Advertising</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          Launch cohesive marketing campaigns that amplify your brand across paid, owned, and earned media.
                        </p>

                        <div className="space-y-4">
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Display Advertising
                            </h4>
                            <p className="text-sm text-gray-600">Banner ads, native ads, programmatic creative. Use gradient backgrounds with white logo overlay.</p>
                          </div>
                          
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Video Content
                            </h4>
                            <p className="text-sm text-gray-600">Intro/outro animations with brand colors. Lower thirds with selected typography. Logo watermark placement.</p>
                          </div>

                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-orange-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              Print & OOH
                            </h4>
                            <p className="text-sm text-gray-600">Billboards, posters, flyers. High-contrast color combinations. Minimum 0.75" logo size for print.</p>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-300">
                          <p className="text-xs font-semibold text-orange-900 uppercase tracking-wide mb-2">Ad Formats</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-orange-200">Display</span>
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-orange-200">Video</span>
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-orange-200">Print</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product & UI Design */}
                    <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-200/50 to-transparent rounded-bl-full"></div>
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Settings className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Product & UI Design</h3>
                            <p className="text-sm text-emerald-600 font-semibold">Design System Integration</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          Integrate your brand identity seamlessly into product interfaces and design systems.
                        </p>

                        <div className="space-y-4">
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              Component Library
                            </h4>
                            <p className="text-sm text-gray-600">Buttons, forms, cards using brand colors. Typography scale for headings, body, captions.</p>
                          </div>
                          
                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              CSS Variables
                            </h4>
                            <p className="text-sm text-gray-600">Export color palette as CSS custom properties. Font stack with fallbacks for cross-browser support.</p>
                          </div>

                          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-200">
                            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              Accessibility
                            </h4>
                            <p className="text-sm text-gray-600">WCAG AA contrast ratios. Focus states with accent colors. Readable font sizes (16px minimum).</p>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-300">
                          <p className="text-xs font-semibold text-emerald-900 uppercase tracking-wide mb-2">Export Formats</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-emerald-200">Figma</span>
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-emerald-200">Sketch</span>
                            <span className="px-3 py-1 bg-white rounded-lg text-xs font-mono text-gray-700 border border-emerald-200">CSS/SCSS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Code Examples Section */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 border-2 border-gray-700">
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-white mb-3">Ready-to-Use Code</h3>
                      <p className="text-gray-300">Copy and paste these code snippets directly into your projects</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* CSS Variables */}
                      <div className="bg-black/40 rounded-2xl p-6 border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-white">CSS Variables</h4>
                          <button 
                            onClick={() => {
                              const cssCode = `:root {\n  --primary: ${selectedPalette.colors[0].hex};\n  --secondary: ${selectedPalette.colors[1].hex};\n  --accent: ${selectedPalette.colors[2].hex};\n  --neutral: ${selectedPalette.colors[3].hex};\n  --background: ${selectedPalette.colors[4].hex};\n  --font-display: '${selectedFont.name}', sans-serif;\n}`;
                              navigator.clipboard.writeText(cssCode);
                            }}
                            className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition-colors"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
{`:root {
  --primary: ${selectedPalette.colors[0].hex};
  --secondary: ${selectedPalette.colors[1].hex};
  --accent: ${selectedPalette.colors[2].hex};
  --neutral: ${selectedPalette.colors[3].hex};
  --background: ${selectedPalette.colors[4].hex};
  --font-display: '${selectedFont.name}', sans-serif;
}`}
                        </pre>
                      </div>

                      {/* Tailwind Config */}
                      <div className="bg-black/40 rounded-2xl p-6 border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-white">Tailwind Config</h4>
                          <button 
                            onClick={() => {
                              const tailwindCode = `theme: {\n  extend: {\n    colors: {\n      primary: '${selectedPalette.colors[0].hex}',\n      secondary: '${selectedPalette.colors[1].hex}',\n      accent: '${selectedPalette.colors[2].hex}',\n    },\n    fontFamily: {\n      sans: ['${selectedFont.name}', 'sans-serif'],\n    },\n  },\n}`;
                              navigator.clipboard.writeText(tailwindCode);
                            }}
                            className="px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-lg transition-colors"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
{`theme: {
  extend: {
    colors: {
      primary: '${selectedPalette.colors[0].hex}',
      secondary: '${selectedPalette.colors[1].hex}',
      accent: '${selectedPalette.colors[2].hex}',
    },
    fontFamily: {
      sans: ['${selectedFont.name}', 'sans-serif'],
    },
  },
}`}
                        </pre>
                      </div>
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
