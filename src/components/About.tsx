import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { content } from '../data/content';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  // Highlight key terms with typing effect
  const highlightTerms = ['Python', 'SQL', 'Power BI', 'Tableau', 'ETL', 'KPI', 'Azure', 'AWS'];
  
  const createHighlightedText = (text: string) => {
    let highlightedText = text;
    highlightTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      highlightedText = highlightedText.replace(
        regex, 
        `<span class="text-primary font-semibold">${term}</span>`
      );
    });
    return highlightedText;
  };

  return (
    <section 
      id="about" 
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
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-premium mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div 
                className="text-lg leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ 
                  __html: createHighlightedText(content.about) 
                }}
              />

              {/* Key Skills Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {['Data Analytics', 'BI Engineering', 'ETL Pipelines', 'Reporting'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-foreground font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: 'Years Experience', value: '2+', color: 'text-primary' },
                { label: 'Projects Completed', value: '15+', color: 'text-accent' },
                { label: 'Data Quality', value: '99%', color: 'text-amber' },
                { label: 'Efficiency Gain', value: '40%', color: 'text-tangerine' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Personal Touch */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <p className="text-muted-foreground italic">
                "I believe data should tell a story that drives action. My goal is to transform 
                complex datasets into clear, actionable insights that help teams make confident decisions."
              </p>
              <div className="mt-4 text-sm text-primary font-semibold">
                - {content.name}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};