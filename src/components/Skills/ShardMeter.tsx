import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ShardMeterProps {
  name: string;
  percent: number;
  className?: string;
}

export const ShardMeter = ({ name, percent, className = '' }: ShardMeterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPercent, setShowPercent] = useState(false);

  // Create angled shard segments
  const totalShards = 12;
  const filledShards = Math.round((percent / 100) * totalShards);

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
        {/* Shard container */}
        <svg 
          width="200" 
          height="20" 
          viewBox="0 0 200 20"
          className="w-full h-auto"
        >
          {/* Background track */}
          <polygon
            points="0,5 190,5 200,10 190,15 0,15 10,10"
            className="fill-muted stroke-border stroke-1"
          />
          
          {/* Individual shards */}
          {Array.from({ length: totalShards }, (_, i) => {
            const shardWidth = 180 / totalShards;
            const x = 10 + i * shardWidth;
            const isFilled = i < filledShards;
            
            return (
              <motion.polygon
                key={i}
                points={`${x},6 ${x + shardWidth - 2},6 ${x + shardWidth + 1},10 ${x + shardWidth - 2},14 ${x},14 ${x + 3},10`}
                className={`transition-colors duration-300 ${
                  isFilled 
                    ? 'fill-primary' 
                    : 'fill-transparent'
                }`}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isVisible ? { 
                  opacity: 1, 
                  scaleX: 1,
                } : {}}
                transition={{ 
                  delay: i * 0.05,
                  duration: 0.3,
                  ease: "easeOut"
                }}
                style={{ transformOrigin: `${x + shardWidth/2}px 10px` }}
              />
            );
          })}
          
          {/* Animated progress fill */}
          <motion.polygon
            points={`10,6 ${10 + (180 * percent / 100)},6 ${15 + (180 * percent / 100)},10 ${10 + (180 * percent / 100)},14 10,14 13,10`}
            className="fill-primary/30"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ 
              delay: 0.5,
              duration: 1.2,
              ease: "easeOut"
            }}
            style={{ transformOrigin: "10px 10px" }}
          />
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