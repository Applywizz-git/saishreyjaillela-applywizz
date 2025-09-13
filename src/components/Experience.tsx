import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { content } from '../data/content';

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(0); // First item expanded by default
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

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Professional Experience
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
              Building data solutions that drive real business impact across diverse industries.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px" />

            {content.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {/* Timeline node */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary border-4 border-background rounded-full transform md:-translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'}`}>
                  <motion.div
                    className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                    whileHover={{ y: -2 }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <div className="text-primary font-medium mb-2">
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.start} - {exp.end}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <motion.button
                        className="p-2 rounded-lg hover:bg-muted transition-colors focus-ring"
                        animate={{ rotate: expandedItem === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-label="Toggle details"
                      >
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </motion.button>
                    </div>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedItem === index ? 'auto' : 0,
                        opacity: expandedItem === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border">
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <motion.li
                              key={highlightIndex}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              animate={expandedItem === index ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3, delay: highlightIndex * 0.05 }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { label: 'Total Experience', value: '2+ Years', icon: Calendar },
              { label: 'Companies Worked', value: '3', icon: ExternalLink },
              { label: 'Key Technologies', value: '10+', icon: MapPin }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};