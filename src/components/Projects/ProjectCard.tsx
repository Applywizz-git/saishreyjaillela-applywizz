import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  short_desc: string;
  tech: string[];
  link_demo?: string;
  link_code?: string;
  impact_metric: string;
  index: number;
}

export const ProjectCard = ({ 
  title, 
  short_desc, 
  tech, 
  link_demo, 
  link_code, 
  impact_metric, 
  index 
}: ProjectCardProps) => {
  return (
    <motion.div
      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        rotateX: 5,
        rotateY: 5,
      }}
      style={{ 
        transformStyle: "preserve-3d",
        transformPerspective: "1000px"
      }}
    >
      {/* Glare effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-2">
            {link_demo && (
              <a
                href={link_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
                aria-label="View demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {link_code && (
              <a
                href={link_code}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors focus-ring"
                aria-label="View code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {short_desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((technology, techIndex) => (
            <motion.span
              key={technology}
              className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
            >
              {technology}
            </motion.span>
          ))}
        </div>

        {/* Impact Metric */}
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="w-4 h-4 text-accent" />
          <span className="text-accent font-medium">{impact_metric}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};