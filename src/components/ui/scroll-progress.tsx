import { useEffect, useState } from 'react';

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Get total scrollable height
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Get current scroll position
      const currentScroll = window.scrollY;
      // Calculate percentage (clamp between 0 and 100)
      const progress = Math.min((currentScroll / totalHeight) * 100, 100);

      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    // Initial calculation
    updateScrollProgress();

    // Cleanup
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Main progress bar at bottom */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-black/80 backdrop-blur-sm z-50">
        {/* Glowing background track */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        {/* Animated progress fill */}
        <div
          className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 shadow-[0_0_20px_rgba(244,85,37,0.8)] transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: '0 0 20px rgba(244,85,37,0.8), 0 0 40px rgba(244,85,37,0.4), 0 0 80px rgba(244,85,37,0.2)',
            background: 'linear-gradient(90deg, #F45525 0%, #FF6B4A 50%, #F45525 100%)'
          }}
        ></div>

        {/* Animated light particles */}
        <div
          className="absolute top-0 h-full w-1 bg-white/40 rounded-full animate-pulse"
          style={{
            left: `${scrollProgress}%`,
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(244,85,37,0.8)'
          }}
        ></div>

        {/* Secondary glow overlay */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(244,85,37,0.3) ${scrollProgress}%, transparent ${scrollProgress}%`
          }}
        ></div>
      </div>

      {/* Subtle top border indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/60 backdrop-blur-sm z-40">
        <div
          className="h-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(244,85,37,0.6)]"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #F45525, #FF6B4A)',
            boxShadow: `0 0 10px rgba(244,85,37,0.6), 0 2px 4px rgba(0,0,0,0.3)`
          }}
        ></div>
      </div>
    </>
  );
};
