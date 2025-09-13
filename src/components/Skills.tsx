import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { content } from '../data/content';
import { HoneycombMeter } from './Skills/HoneycombMeter';
import { ShardMeter } from './Skills/ShardMeter';
import { GlyphMeter } from './Skills/GlyphMeter';

type MeterType = 'honeycomb' | 'shard' | 'glyph';

interface Skill {
  name: string;
  percent: number;
  meter: MeterType;
}

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderMeter = (skill: Skill, index: number) => {
    const commonProps = {
      name: skill.name,
      percent: skill.percent,
      className: "w-full"
    };

    const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
      >
        {children}
        {/* ✅ Always show percentage on mobile */}
        <div className="absolute bottom-2 right-2 text-xs font-semibold text-muted-foreground md:opacity-0 md:group-hover:opacity-100 transition-opacity">
          {skill.percent}%
        </div>
      </motion.div>
    );

    switch (skill.meter) {
      case 'honeycomb':
        return (
          <MotionWrapper>
            <HoneycombMeter {...commonProps} />
          </MotionWrapper>
        );
      case 'shard':
        return (
          <MotionWrapper>
            <ShardMeter {...commonProps} />
          </MotionWrapper>
        );
      case 'glyph':
        return (
          <MotionWrapper>
            <GlyphMeter {...commonProps} />
          </MotionWrapper>
        );
      default:
        return null;
    }
  };

  const categories = [
    { key: 'frontend', label: 'BI & Visualization' },
    { key: 'backend', label: 'Programming & Data' },
    { key: 'cloud', label: 'Cloud & Analytics' },
    { key: 'tools', label: 'Tools & Workflow' }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Technical Skills
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-premium mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Specialized in modern data analytics, BI tools, and cloud platforms. 
              Each skill level reflects practical experience and project impact.
            </motion.p>
          </div>

          {/* Category Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 focus-ring ${
                  activeCategory === category.key
                    ? 'bg-primary text-primary-foreground shadow-premium'
                    : 'bg-muted text-muted-foreground hover:bg-card hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {content.skills[activeCategory as keyof typeof content.skills]?.map((skill, index) => (
              <div key={`${activeCategory}-${skill.name}`} className="group relative">
                {renderMeter(skill as Skill, index)}
              </div>
            ))}
          </motion.div>

          {/* Skill Legend */}
          <motion.div
            className="mt-16 bg-card border border-border rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Skill Meter Legend</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded border flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-sm" />
                </div>
                <span><strong>Honeycomb:</strong> Enterprise BI & Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded border flex items-center justify-center">
                  <div className="w-5 h-2 bg-primary rounded-sm transform skew-x-12" />
                </div>
                <span><strong>Shard:</strong> Programming & Databases</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded border flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-primary rounded-full" />
                </div>
                <span><strong>Glyph:</strong> Tools & Platforms</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
