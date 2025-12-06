import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FinancialDetailProps {
  children: React.ReactNode;
  details: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  title?: string;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const FinancialDetail = ({
  children,
  details,
  title,
  className,
  position = "top"
}: FinancialDetailProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3"
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-900",
    left: "left-full top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-gray-900",
    right: "right-full top-1/2 -translate-y-1/2 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-900"
  };

  return (
    <div
      className={cn("relative inline-block cursor-pointer group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(!isHovered)}
    >
      {/* Hover indicator */}
      <div className="relative">
        {children}
        <motion.div
          className="absolute -inset-1 rounded-lg border-2 border-primary/0 pointer-events-none"
          animate={{
            borderColor: isHovered ? "rgba(244, 85, 37, 0.6)" : "rgba(244, 85, 37, 0)",
            boxShadow: isHovered ? "0 0 20px rgba(244, 85, 37, 0.3)" : "0 0 0px rgba(244, 85, 37, 0)"
          }}
          transition={{ duration: 0.2 }}
        />
        {/* Subtle pulse indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 0 : [1, 1.5, 1], 
            opacity: isHovered ? 0 : [0.8, 0.4, 0.8] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Expanded details popup */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: position === "top" ? 10 : position === "bottom" ? -10 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "absolute z-50 min-w-[280px] max-w-[360px]",
              positionClasses[position]
            )}
          >
            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              {title && (
                <div className="bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-3 border-b border-gray-700">
                  <h4 className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    {title}
                  </h4>
                </div>
              )}
              
              {/* Details grid */}
              <div className="p-4 space-y-3">
                {details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex justify-between items-start gap-4"
                  >
                    <div className="flex-1">
                      <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">
                        {detail.label}
                      </span>
                      {detail.subtext && (
                        <p className="text-gray-500 text-xs mt-0.5">{detail.subtext}</p>
                      )}
                    </div>
                    <span className="text-white font-bold text-sm whitespace-nowrap">
                      {detail.value}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Footer accent */}
              <div className="h-1 bg-gradient-to-r from-primary via-orange-400 to-primary" />
            </div>
            
            {/* Arrow */}
            <div className={cn("absolute w-0 h-0", arrowClasses[position])} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Simplified inline version for smaller numbers
export const FinancialTooltip = ({
  children,
  content,
  className
}: {
  children: React.ReactNode;
  content: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span
      className={cn("relative inline-block cursor-help border-b border-dashed border-current", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap shadow-xl border border-gray-700 z-50"
          >
            {content}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};
