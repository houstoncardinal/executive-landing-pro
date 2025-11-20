import React from 'react';
import { AnimatedGroup } from './ui/animated-group';

const colors = [
  { name: 'Orange', value: '14 90% 55%' }, // Original orange
  { name: 'Blue', value: '220 90% 60%' },
  { name: 'Green', value: '142 70% 45%' },
  { name: 'Purple', value: '280 85% 60%' },
  { name: 'Pink', value: '322 84% 60%' },
  { name: 'Teal', value: '178 84% 41%' },
  { name: 'Red', value: '0 84% 60%' },
  { name: 'Yellow', value: '45 93% 58%' },
];

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const setAccentColor = (hslValue: string) => {
    document.documentElement.style.setProperty('--primary', hslValue);

    // Update the ring color to match (used in focus states)
    const [h, s, l] = hslValue.split(' ');
    document.documentElement.style.setProperty('--ring', `${h} ${s} ${l}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full border border-white/20 hover:border-primary/50 transition-all duration-300"
        aria-label="Change accent color"
      >
        <div className="w-4 h-4 rounded-full bg-[hsl(var(--primary))]" />
        <span className="text-white text-sm font-medium">COLOR</span>
      </button>

      {isOpen && (
        <AnimatedGroup>
          <div className="absolute top-full right-0 mt-2 p-4 bg-black/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl min-w-[200px]">
            <div className="grid grid-cols-4 gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setAccentColor(color.value)}
                  className="group relative"
                  title={color.name}
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white/30 hover:border-white/80 transition-all duration-200"
                    style={{ backgroundColor: `hsl(${color.value})` }}
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-white/70 text-xs text-center">
                Click to change accent color
              </p>
            </div>
          </div>
        </AnimatedGroup>
      )}
    </div>
  );
};

export { ColorSwitcher };
