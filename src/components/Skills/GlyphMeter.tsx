import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Code2, Database, BarChart3, Settings } from 'lucide-react';

interface GlyphMeterProps {
  name: string;
  percent: number;
  className?: string;
}

export const GlyphMeter = ({ name, percent, className = '' }: GlyphMeterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPercent, setShowPercent] = useState(false);

  // Choose glyph based on skill name
  const getGlyph = () => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('python') || lowerName.includes('code')) return Code2;
    if (lowerName.includes('sql') || lowerName.includes('database')) return Database;
    if (lowerName.includes('power bi') || lowerName.includes('tableau')) return BarChart3;
    return Settings;
  };

  const IconComponent = getGlyph();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Create bezier curve path for mask sweep
  const createBezierPath = () => {
    const width = 100;
    const height = 100;
    const progress = percent / 100;
    
    // Create a smooth S-curve that reveals the icon
    const endX = width * progress;
    const endY = height * (1 - Math.sin(progress * Math.PI) * 0.3);
    
    return `M 0 0 Q ${endX * 0.3} ${height * 0.7} ${endX} ${endY} L ${endX} ${height} L 0 ${height} Z`;
  };

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
      
      <div className="relative w-16 h-16 mx-auto">
        {/* Background glyph */}
        <div className="absolute inset-0 flex items-center justify-center">
          <IconComponent 
            className="w-12 h-12 text-muted stroke-1" 
          />
        </div>

        {/* Masked revealed glyph */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 100 100"
            className="absolute inset-0"
          >
            <defs>
              <clipPath id={`glyph-clip-${name.replace(/\s+/g, '-')}`}>
                <motion.path
                  d={createBezierPath()}
                  initial={{ d: "M 0 0 L 0 0 L 0 100 Z" }}
                  animate={isVisible ? { d: createBezierPath() } : {}}
                  transition={{ 
                    delay: 0.3,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
              </clipPath>
            </defs>
          </svg>
          
          <div 
            className="text-primary"
            style={{ 
              clipPath: `url(#glyph-clip-${name.replace(/\s+/g, '-')})` 
            }}
          >
            <IconComponent 
              className="w-12 h-12 stroke-1 drop-shadow-sm" 
            />
          </div>
        </motion.div>

        {/* Progress ring */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90" 
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            className="fill-none stroke-muted stroke-2"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            className="fill-none stroke-primary stroke-2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
            animate={isVisible ? { 
              strokeDashoffset: 2 * Math.PI * 45 * (1 - percent / 100) 
            } : {}}
            transition={{ 
              delay: 0.5,
              duration: 1.2,
              ease: "easeOut"
            }}
          />
        </svg>

        {/* Percentage overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPercent ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary">
            {percent}%
          </div>
        </motion.div>
      </div>
    </div>
  );
};