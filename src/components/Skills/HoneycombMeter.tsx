import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HoneycombMeterProps {
  name: string;
  percent: number;
  className?: string;
}

export const HoneycombMeter = ({ name, percent, className = '' }: HoneycombMeterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPercent, setShowPercent] = useState(false);

  // Create hexagonal grid pattern (7x4 = 28 cells for good fill granularity)
  const totalCells = 28;
  const filledCells = Math.round((percent / 100) * totalCells);

  // Hexagon coordinates in a honeycomb pattern
  const generateHoneycombPattern = () => {
    const cells = [];
    const rows = 4;
    const cellsPerRow = 7;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cellsPerRow; col++) {
        const x = col * 16 + (row % 2) * 8; // Offset alternate rows
        const y = row * 14;
        cells.push({ x, y, index: row * cellsPerRow + col });
      }
    }
    return cells;
  };

  const cells = generateHoneycombPattern();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`group ${className}`}
      onMouseEnter={() => setShowPercent(true)}
      onMouseLeave={() => setShowPercent(false)}
      onFocus={() => setShowPercent(true)}
      onBlur={() => setShowPercent(false)}
      tabIndex={0}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${name}: ${percent}%`}
    >
      <div className="text-sm font-medium text-foreground mb-3">{name}</div>
      
      <div className="relative">
        {/* Honeycomb SVG */}
        <svg 
          width="120" 
          height="60" 
          viewBox="0 0 120 60"
          className="w-full h-auto"
        >
          {cells.map((cell, i) => (
            <motion.polygon
              key={i}
              points="6,0 18,0 24,10 18,20 6,20 0,10"
              transform={`translate(${cell.x}, ${cell.y})`}
              className={`stroke-border stroke-1 transition-colors duration-300 ${
                i < filledCells 
                  ? 'fill-primary' 
                  : 'fill-muted'
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { 
                opacity: 1, 
                scale: 1,
              } : {}}
              transition={{ 
                delay: i * 0.02,
                duration: 0.3,
                ease: "easeOut"
              }}
            />
          ))}
        </svg>

        {/* Percentage overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPercent ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-bold text-primary">
            {percent}%
          </div>
        </motion.div>
      </div>
    </div>
  );
};