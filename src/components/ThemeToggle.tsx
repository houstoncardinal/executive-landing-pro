'use client';
import { Moon, SunMedium } from "lucide-react";
import { useThemeContext } from "@/contexts/theme-context";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 rounded-full border border-white/20 bg-black/60 px-2 py-1 text-white shadow-[0_15px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/40"
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative h-10 w-20 rounded-full border border-white/30 bg-white/5 p-1">
        <div
          className={`absolute inset-y-1 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-orange-400 shadow-[0_10px_30px_rgba(255,140,0,0.5)] transition-all duration-300 ${
            isDark ? "right-1" : "left-1"
          }`}
        >
          {isDark ? (
            <Moon className="m-auto mt-1 h-4 w-4 text-white" />
          ) : (
            <SunMedium className="m-auto mt-1 h-4 w-4 text-white" />
          )}
        </div>
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-white/60">
          {isDark ? "Dark" : "Light"}
        </span>
      </div>
      <div className="flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
        <span>{isDark ? "Midnight" : "Daylight"}</span>
        <span className="text-white/40">•</span>
        <span>Toggle</span>
      </div>
    </button>
  );
};
