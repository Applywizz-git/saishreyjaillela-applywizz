import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { content } from '../data/content';
import { ProjectCard } from './Projects/ProjectCard';
import { ProjectFilter } from './Projects/ProjectFilter';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  // Extract unique categories from tech stack
  const allCategories = ['All', ...new Set(content.projects.flatMap(p => p.tech))];
  
  const filteredProjects = activeFilter === 'All' 
    ? content.projects 
    : content.projects.filter(project => project.tech.includes(activeFilter));

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-10"
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
              Featured Projects
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
              Data-driven solutions that solve real problems. Each project demonstrates 
              practical application of analytics, machine learning, and business intelligence.
            </motion.p>
          </div>

          {/* Filter */}
          {isVisible && (
            <ProjectFilter
              categories={allCategories}
              activeCategory={activeFilter}
              onCategoryChange={setActiveFilter}
            />
          )}

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeFilter} // Force re-render on filter change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeFilter}-${project.title}`}
                {...project}
                index={index}
              />
            ))}
          </motion.div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-muted-foreground">
                No projects found for "{activeFilter}". Try selecting a different category.
              </p>
            </motion.div>
          )}

          {/* Call to action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to tackle new data challenges and build solutions that drive real impact.
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-hero"
              >
                Let's Connect
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};




