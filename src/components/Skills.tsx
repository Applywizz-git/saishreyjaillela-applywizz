// import { motion } from 'framer-motion';
// import { useEffect, useRef, useState } from 'react';
// import { content } from '../data/content';
// import { HoneycombMeter } from './Skills/HoneycombMeter';
// import { ShardMeter } from './Skills/ShardMeter';
// import { GlyphMeter } from './Skills/GlyphMeter';

// type MeterType = 'honeycomb' | 'shard' | 'glyph';

// interface Skill {
//   name: string;
//   percent: number;
//   meter: MeterType;
// }

// export const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCategory, setActiveCategory] = useState<string>('frontend');
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const renderMeter = (skill: Skill, index: number) => {
//     const commonProps = {
//       name: skill.name,
//       percent: skill.percent,
//       className: "w-full"
//     };

//     const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         className="relative bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
//       >
//         {children}
//         {/* ✅ Always show percentage on mobile */}
//         <div className="absolute bottom-2 right-2 text-xs font-semibold text-muted-foreground md:opacity-0 md:group-hover:opacity-100 transition-opacity">
//           {skill.percent}%
//         </div>
//       </motion.div>
//     );

//     switch (skill.meter) {
//       case 'honeycomb':
//         return (
//           <MotionWrapper>
//             <HoneycombMeter {...commonProps} />
//           </MotionWrapper>
//         );
//       case 'shard':
//         return (
//           <MotionWrapper>
//             <ShardMeter {...commonProps} />
//           </MotionWrapper>
//         );
//       case 'glyph':
//         return (
//           <MotionWrapper>
//             <GlyphMeter {...commonProps} />
//           </MotionWrapper>
//         );
//       default:
//         return null;
//     }
//   };

//   const categories = [
//     { key: 'frontend', label: 'BI & Visualization' },
//     { key: 'backend', label: 'Programming & Data' },
//     { key: 'cloud', label: 'Cloud & Analytics' },
//     { key: 'tools', label: 'Tools & Workflow' }
//   ];

//   return (
//     <section 
//       id="skills" 
//       ref={sectionRef}
//       className="py-20"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-6xl"
//         >
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-foreground mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               Technical Skills
//             </motion.h2>
//             <motion.div
//               className="w-24 h-1 bg-gradient-premium mx-auto rounded-full mb-6"
//               initial={{ scaleX: 0 }}
//               animate={isVisible ? { scaleX: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             />
//             <motion.p
//               className="text-muted-foreground max-w-2xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               Specialized in modern data analytics, BI tools, and cloud platforms. 
//               Each skill level reflects practical experience and project impact.
//             </motion.p>
//           </div>

//           {/* Category Navigation */}
//           <motion.div
//             className="flex flex-wrap justify-center gap-4 mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             {categories.map((category) => (
//               <button
//                 key={category.key}
//                 onClick={() => setActiveCategory(category.key)}
//                 className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 focus-ring ${
//                   activeCategory === category.key
//                     ? 'bg-primary text-primary-foreground shadow-premium'
//                     : 'bg-muted text-muted-foreground hover:bg-card hover:text-foreground'
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </motion.div>

//           {/* Skills Grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//             key={activeCategory}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {content.skills[activeCategory as keyof typeof content.skills]?.map((skill, index) => (
//               <div key={`${activeCategory}-${skill.name}`} className="group relative">
//                 {renderMeter(skill as Skill, index)}
//               </div>
//             ))}
//           </motion.div>

//           {/* Skill Legend */}
//           <motion.div
//             className="mt-16 bg-card border border-border rounded-lg p-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             <h3 className="text-lg font-semibold text-foreground mb-4">Skill Meter Legend</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-muted rounded border flex items-center justify-center">
//                   <div className="w-4 h-4 bg-primary rounded-sm" />
//                 </div>
//                 <span><strong>Honeycomb:</strong> Enterprise BI & Analytics</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-muted rounded border flex items-center justify-center">
//                   <div className="w-5 h-2 bg-primary rounded-sm transform skew-x-12" />
//                 </div>
//                 <span><strong>Shard:</strong> Programming & Databases</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-muted rounded border flex items-center justify-center">
//                   <div className="w-4 h-4 border-2 border-primary rounded-full" />
//                 </div>
//                 <span><strong>Glyph:</strong> Tools & Platforms</span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };





// import { motion } from 'framer-motion';
// import { useEffect, useRef, useState } from 'react';
// import { content } from '../data/content';

// type MeterType = 'honeycomb' | 'shard' | 'glyph';

// interface Skill {
//   name: string;
//   percent: number;
//   meter: MeterType;
// }

// export const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCategory, setActiveCategory] = useState<string>('frontend');
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const CircularSkillMeter = ({ skill, index }: { skill: Skill; index: number }) => {
//     const radius = 36;
//     const circumference = 2 * Math.PI * radius;
//     const strokeDashoffset = circumference - (skill.percent / 100) * circumference;

//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={isVisible ? { opacity: 1, scale: 1 } : {}}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         className="relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
//       >
//         {/* Circular Progress Container */}
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <div className="relative">
//             <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
//               {/* Background circle */}
//               <circle
//                 cx="50"
//                 cy="50"
//                 r={radius}
//                 stroke="currentColor"
//                 strokeWidth="8"
//                 fill="none"
//                 className="text-muted opacity-30"
//               />
//               {/* Progress circle */}
//               <circle
//                 cx="50"
//                 cy="50"
//                 r={radius}
//                 stroke="currentColor"
//                 strokeWidth="8"
//                 fill="none"
//                 strokeDasharray={circumference}
//                 strokeDashoffset={strokeDashoffset}
//                 strokeLinecap="round"
//                 className="text-primary transition-all duration-1000 ease-out"
//                 style={{
//                   stroke: `url(#gradient-${skill.meter})`
//                 }}
//               />
//               {/* Gradient definitions */}
//               <defs>
//                 <linearGradient id={`gradient-honeycomb`} x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" />
//                   <stop offset="100%" stopColor="#1D4ED8" />
//                 </linearGradient>
//                 <linearGradient id={`gradient-shard`} x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#10B981" />
//                   <stop offset="100%" stopColor="#059669" />
//                 </linearGradient>
//                 <linearGradient id={`gradient-glyph`} x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#8B5CF6" />
//                   <stop offset="100%" stopColor="#7C3AED" />
//                 </linearGradient>
//               </defs>
//             </svg>

//             {/* Skill Name in Center */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm">
//                 <span className="text-xs font-bold text-foreground text-center leading-tight px-1">
//                   {skill.name.split(' ').map(word => (
//                     <div ></div>
//                   ))}
//                 </span>
//               </div>
//             </div>

//             {/* Percentage Badge */}
//             <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold shadow-lg border-2 border-background">
//               {skill.percent}%
//             </div>
//           </div>

//           {/* Full Skill Name */}
//           <h3 className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors min-h-[2.5rem] flex items-center justify-center">
//             {skill.name}
//           </h3>

//           {/* Meter Type Indicator */}
//           <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
//             skill.meter === 'honeycomb' 
//               ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800' 
//               : skill.meter === 'shard'
//               ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
//               : 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800'
//           }`}>
//             {skill.meter === 'honeycomb' && 'BI & Analytics'}
//             {skill.meter === 'shard' && 'Programming'}
//             {skill.meter === 'glyph' && 'Tools'}
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   const categories = [
//     { key: 'frontend', label: 'BI & Visualization' },
//     { key: 'backend', label: 'Programming & Data' },
//     { key: 'cloud', label: 'Cloud & Analytics' },
//     { key: 'tools', label: 'Tools & Workflow' }
//   ];

//   return (
//     <section 
//       id="skills" 
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-b from-background to-muted/20"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-6xl"
//         >
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-foreground mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               Technical Skills
//             </motion.h2>
//             <motion.div
//               className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-6"
//               initial={{ scaleX: 0 }}
//               animate={isVisible ? { scaleX: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             />
//             <motion.p
//               className="text-muted-foreground max-w-2xl mx-auto text-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             >
//               Specialized in modern data analytics, BI tools, and cloud platforms. 
//               Each skill level reflects practical experience and project impact.
//             </motion.p>
//           </div>

//           {/* Category Navigation */}
//           <motion.div
//             className="flex flex-wrap justify-center gap-4 mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             {categories.map((category) => (
//               <button
//                 key={category.key}
//                 onClick={() => setActiveCategory(category.key)}
//                 className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 focus-ring border ${
//                   activeCategory === category.key
//                     ? 'bg-primary text-primary-foreground shadow-lg border-primary'
//                     : 'bg-background text-muted-foreground hover:bg-card hover:text-foreground border-border'
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </motion.div>

//           {/* Skills Grid */}
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
//             key={activeCategory}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {content.skills[activeCategory as keyof typeof content.skills]?.map((skill, index) => (
//               <CircularSkillMeter 
//                 key={`${activeCategory}-${skill.name}`} 
//                 skill={skill as Skill} 
//                 index={index} 
//               />
//             ))}
//           </motion.div>

//           {/* Progress Legend */}
//           <motion.div
//             className="mt-16 bg-card border border-border rounded-xl p-6 backdrop-blur-sm"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Skill Proficiency Levels</h3>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
//               <div className="flex flex-col items-center text-center space-y-2">
//                 <div className="w-16 h-16 relative">
//                   <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
//                     <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted opacity-30"/>
//                     <circle cx="50" cy="50" r="36" stroke="url(#legend-novice)" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="158" strokeLinecap="round"/>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">30%</div>
//                 </div>
//                 <span><strong>Novice:</strong> Basic understanding</span>
//               </div>
//               <div className="flex flex-col items-center text-center space-y-2">
//                 <div className="w-16 h-16 relative">
//                   <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
//                     <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted opacity-30"/>
//                     <circle cx="50" cy="50" r="36" stroke="url(#legend-intermediate)" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="113" strokeLinecap="round"/>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">50%</div>
//                 </div>
//                 <span><strong>Intermediate:</strong> Practical experience</span>
//               </div>
//               <div className="flex flex-col items-center text-center space-y-2">
//                 <div className="w-16 h-16 relative">
//                   <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
//                     <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted opacity-30"/>
//                     <circle cx="50" cy="50" r="36" stroke="url(#legend-advanced)" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="68" strokeLinecap="round"/>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">70%</div>
//                 </div>
//                 <span><strong>Advanced:</strong> Project mastery</span>
//               </div>
//               <div className="flex flex-col items-center text-center space-y-2">
//                 <div className="w-16 h-16 relative">
//                   <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
//                     <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted opacity-30"/>
//                     <circle cx="50" cy="50" r="36" stroke="url(#legend-expert)" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="23" strokeLinecap="round"/>
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">90%</div>
//                 </div>
//                 <span><strong>Expert:</strong> Deep specialization</span>
//               </div>
//             </div>
//             <defs>
//               <linearGradient id="legend-novice" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#6B7280" />
//                 <stop offset="100%" stopColor="#4B5563" />
//               </linearGradient>
//               <linearGradient id="legend-intermediate" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#10B981" />
//                 <stop offset="100%" stopColor="#059669" />
//               </linearGradient>
//               <linearGradient id="legend-advanced" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#3B82F6" />
//                 <stop offset="100%" stopColor="#1D4ED8" />
//               </linearGradient>
//               <linearGradient id="legend-expert" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#8B5CF6" />
//                 <stop offset="100%" stopColor="#7C3AED" />
//               </linearGradient>
//             </defs>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };




















import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { content } from '../data/content';

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

  const CircularSkillMeter = ({ skill, index }: { skill: Skill; index: number }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (skill.percent / 100) * circumference;

    // Extract main skill name (remove sub-skills)
    const getMainSkillName = (fullName: string): string => {
      const mainSkills = [
        'Python', 'SQL', 'R', 'VBA', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn',
        'MySQL', 'PostgreSQL', 'Snowflake', 'Redshift', 'Power BI', 'Tableau', 'Looker',
        'Google Data Studio', 'Excel', 'Azure Synapse', 'AWS', 'Jupyter', 'Git', 'Databricks',
        'ETL', 'Data Cleaning', 'Data Transformation', 'Data Modeling', 'Data Warehousing',
        'Forecasting', 'Statistical Analysis', 'Regression Analysis', 'Time Series',
        'Predictive Modeling', 'KPI Dashboards', 'Financial Reporting', 'Budget Analysis',
        'Variance Analysis', 'Operational Analytics'
      ];

      const mainSkill = mainSkills.find(main =>
        fullName.toLowerCase().includes(main.toLowerCase())
      );

      return mainSkill || fullName.split(' ')[0];
    };

    const mainSkillName = getMainSkillName(skill.name);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
      >
        {/* Circular Progress Container */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-muted opacity-30"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="text-primary transition-all duration-1000 ease-out"
                style={{
                  stroke: `url(#gradient-${skill.meter})`
                }}
              />
              {/* Gradient definitions */}
              <defs>
                <linearGradient id={`gradient-honeycomb`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id={`gradient-shard`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id={`gradient-glyph`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>

            {/* Main Skill Name in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm"> */}
              <span className="text-sm font-bold text-foreground text-center leading-none">
                {/* {mainSkillName} */}
                {/* <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold shadow-lg border-2 border-background"> */}
                  {skill.percent}%
                {/* </div> */}
              </span>
              {/* </div> */}
            </div>

            {/* Percentage Badge */}
          </div>

          {/* Full Skill Name Below */}
          <h3 className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors min-h-[2.5rem] flex items-center justify-center">
            {skill.name}
          </h3>

          {/* Meter Type Indicator */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${skill.meter === 'honeycomb'
              ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
              : skill.meter === 'shard'
                ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
                : 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800'
            }`}>
            {skill.meter === 'honeycomb' && 'BI & Analytics'}
            {skill.meter === 'shard' && 'Programming'}
            {skill.meter === 'glyph' && 'Tools'}
          </div>
        </div>
      </motion.div>
    );
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
      className="py-20 bg-gradient-to-b from-background to-muted/20"
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
              className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-6"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 focus-ring border ${activeCategory === category.key
                    ? 'bg-primary text-primary-foreground shadow-lg border-primary'
                    : 'bg-background text-muted-foreground hover:bg-card hover:text-foreground border-border'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-6"
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {content.skills[activeCategory as keyof typeof content.skills]?.map((skill, index) => (
              <CircularSkillMeter
                key={`${activeCategory}-${skill.name}`}
                skill={skill as Skill}
                index={index}
              />
            ))}
          </motion.div>

          {/* Progress Legend */}
          {/* <motion.div
            className="mt-16 bg-card border border-border rounded-xl p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          > */}
            {/* <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Skill Proficiency Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 relative">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted opacity-30" />
                    <circle cx="50" cy="50" r="36" stroke="url(#legend-novice)" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="158" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">30%</div>
                </div>
                <span><strong>Novice:</strong> Basic understanding</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 relative">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted opacity-30" />
                    <circle cx="50" cy="50" r="36" stroke="url(#legend-intermediate)" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="113" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">50%</div>
                </div>
                <span><strong>Intermediate:</strong> Practical experience</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 relative">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted opacity-30" />
                    <circle cx="50" cy="50" r="36" stroke="url(#legend-advanced)" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="68" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">70%</div>
                </div>
                <span><strong>Advanced:</strong> Project mastery</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 relative">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted opacity-30" />
                    <circle cx="50" cy="50" r="36" stroke="url(#legend-expert)" strokeWidth="8" fill="none" strokeDasharray="226" strokeDashoffset="23" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">90%</div>
                </div>
                <span><strong>Expert:</strong> Deep specialization</span>
              </div>
            </div> */}
            <defs>
              <linearGradient id="legend-novice" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6B7280" />
                <stop offset="100%" stopColor="#4B5563" />
              </linearGradient>
              <linearGradient id="legend-intermediate" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="legend-advanced" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
              <linearGradient id="legend-expert" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </motion.div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};
