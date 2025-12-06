import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'visionary', label: 'Vision' },
  { id: 'cultural', label: 'Culture' },
  { id: 'team', label: 'Team' },
  { id: 'model', label: 'Model' },
  { id: 'business', label: 'Business' },
  { id: 'market', label: 'Market' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'equity', label: 'Equity' },
  { id: 'production', label: 'Production' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'funding', label: 'Funding' },
  { id: 'cta', label: 'Contact' },
];

export const VerticalNavigation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goToNext = () => {
    if (activeSection < sections.length - 1) {
      scrollToSection(activeSection + 1);
    }
  };

  const goToPrev = () => {
    if (activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  };

  return (
    <div 
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Current section indicator */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 pointer-events-none"
      >
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: 0 }}
          className="bg-background/90 backdrop-blur-md border border-border/50 rounded-lg px-4 py-2 shadow-xl"
        >
          <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            {sections[activeSection].label}
          </span>
        </motion.div>
      </motion.div>

      {/* Navigation container */}
      <div className="relative flex flex-col items-center gap-1 p-3 rounded-full bg-background/80 backdrop-blur-xl border border-border/30 shadow-2xl">
        {/* Up arrow */}
        <button
          onClick={goToPrev}
          disabled={activeSection === 0}
          className="w-8 h-8 flex items-center justify-center rounded-full mb-2 transition-all duration-300 disabled:opacity-20 hover:bg-primary/10 group"
          aria-label="Previous section"
        >
          <svg 
            className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* Progress track */}
        <div className="relative">
          {/* Background track */}
          <div className="w-[2px] bg-border/50 rounded-full" style={{ height: `${(sections.length - 1) * 24 + 8}px` }} />
          
          {/* Active progress */}
          <motion.div 
            className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-primary via-primary to-primary/50 rounded-full"
            style={{ height: `${(sections.length - 1) * 24 + 8}px` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: (activeSection + 1) / sections.length }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />

          {/* Dots */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 flex flex-col gap-4">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className="group relative flex items-center justify-center"
                aria-label={`Go to ${section.label}`}
              >
                {/* Hover label */}
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                  transition={{ delay: index * 0.02 }}
                  className="absolute right-full mr-4 text-xs font-medium tracking-wide text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.span>

                {/* Dot */}
                <motion.div
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeSection 
                      ? 'bg-primary shadow-[0_0_12px_rgba(244,85,37,0.6)]' 
                      : index < activeSection 
                        ? 'bg-primary/60' 
                        : 'bg-border hover:bg-muted-foreground/50'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Active ring */}
                  {index === activeSection && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/50"
                      initial={{ scale: 1, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </button>
            ))}
          </div>
        </div>

        {/* Down arrow */}
        <button
          onClick={goToNext}
          disabled={activeSection === sections.length - 1}
          className="w-8 h-8 flex items-center justify-center rounded-full mt-2 transition-all duration-300 disabled:opacity-20 hover:bg-primary/10 group"
          aria-label="Next section"
        >
          <svg 
            className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Section counter */}
        <div className="mt-2 pt-2 border-t border-border/30 text-center">
          <span className="text-xs font-mono text-primary font-semibold">
            {String(activeSection + 1).padStart(2, '0')}
          </span>
          <span className="text-xs font-mono text-muted-foreground/50">/</span>
          <span className="text-xs font-mono text-muted-foreground/50">
            {String(sections.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};
