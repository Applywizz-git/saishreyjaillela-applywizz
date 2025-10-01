// import { motion } from 'framer-motion';
// import { useEffect, useRef, useState } from 'react';
// import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
// import { content } from '../data/content';

// export const Education = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isFlipped, setIsFlipped] = useState(false);
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

//   return (
//     <section 
//       id="education" 
//       ref={sectionRef}
//       className="py-20"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mx-auto max-w-4xl"
//         >
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-foreground mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               Education
//             </motion.h2>
//             <motion.div
//               className="w-24 h-1 bg-gradient-premium mx-auto rounded-full"
//               initial={{ scaleX: 0 }}
//               animate={isVisible ? { scaleX: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             />
//           </div>

//           {/* Education Card with Flip Effect */}
//           <motion.div
//             className="relative h-80 w-full max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             style={{ perspective: "1000px" }}
//           >
//             <motion.div
//               className="relative w-full h-full transition-transform duration-700 cursor-pointer"
//               style={{ transformStyle: "preserve-3d" }}
//               animate={{ rotateY: isFlipped ? 180 : 0 }}
//               onClick={() => setIsFlipped(!isFlipped)}
//               whileHover={{ scale: 1.02 }}
//             >
//               {/* Front Side */}
//               <div 
//                 className="absolute inset-0 w-full h-full bg-card border border-border rounded-lg shadow-lg"
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <div className="p-8 h-full flex flex-col justify-center items-center text-center">
//                   <motion.div
//                     className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"
//                     initial={{ scale: 0 }}
//                     animate={isVisible ? { scale: 1 } : {}}
//                     transition={{ duration: 0.5, delay: 0.5 }}
//                   >
//                     <GraduationCap className="w-8 h-8 text-primary" />
//                   </motion.div>
                  
//                   <h3 className="text-2xl font-bold text-foreground mb-2">
//                     {content.education.degree}
//                   </h3>
                  
//                   <p className="text-xl text-primary font-semibold mb-4">
//                     {content.education.school}
//                   </p>
                  
//                   <div className="flex items-center gap-4 text-muted-foreground mb-4">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-4 h-4" />
//                       <span>{content.education.years}</span>
//                     </div>
//                   </div>
                  
//                   <p className="text-muted-foreground text-center max-w-md">
//                     {content.education.brief}
//                   </p>
                  
//                   <div className="mt-6 text-sm text-primary">
//                     Click to see more details
//                   </div>
//                 </div>
//               </div>

//               {/* Back Side */}
//               <div 
//                 className="absolute inset-0 w-full h-full bg-card border border-border rounded-lg shadow-lg"
//                 style={{ 
//                   backfaceVisibility: "hidden",
//                   transform: "rotateY(180deg)"
//                 }}
//               >
//                 <div className="p-8 h-full flex flex-col justify-center">
//                   <div className="flex items-center gap-3 mb-6">
//                     <BookOpen className="w-6 h-6 text-primary" />
//                     <h3 className="text-xl font-semibold text-foreground">Academic Focus</h3>
//                   </div>
                  
//                   <div className="space-y-4 text-muted-foreground">
//                     <div>
//                       <h4 className="font-medium text-foreground mb-2">Core Coursework</h4>
//                       <ul className="space-y-1 text-sm">
//                         <li>• Data Analytics & Modeling</li>
//                         <li>• Machine Learning & AI</li>
//                         <li>• Database Systems & Design</li>
//                         <li>• Statistical Analysis</li>
//                         <li>• Software Engineering</li>
//                       </ul>
//                     </div>
                    
//                     <div>
//                       <h4 className="font-medium text-foreground mb-2">Research Areas</h4>
//                       <ul className="space-y-1 text-sm">
//                         <li>• Business Intelligence</li>
//                         <li>• Predictive Analytics</li>
//                         <li>• Data Pipeline Architecture</li>
//                         <li>• Performance Optimization</li>
//                       </ul>
//                     </div>
//                   </div>
                  
//                   <div className="mt-6 text-sm text-muted-foreground text-center">
//                     Click to flip back
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Additional Info */}
//           <motion.div
//             className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isVisible ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             {[
//               { 
//                 icon: GraduationCap, 
//                 title: 'Advanced Degree',
//                 desc: 'Master of Science in Computer & Information Science'
//               },
//               { 
//                 icon: BookOpen, 
//                 title: 'Research Focus',
//                 desc: 'Data analytics, modeling, and scalable pipeline design'
//               },
//               { 
//                 icon: Calendar, 
//                 title: 'Recent Graduate',
//                 desc: 'Completed December 2024 with latest industry practices'
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 className="bg-muted/50 rounded-lg p-6 text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isVisible ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
//                 <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
//                 <p className="text-sm text-muted-foreground">{item.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };



import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { content } from '../data/content';

export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([]);
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

  // Initialize flipped state for each card
  useEffect(() => {
    setFlippedCards(new Array(content.education.length).fill(false));
  }, []);

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-10"
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
              Education
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-premium mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Education Cards */}
          {content.education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative h-80 w-full max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-700 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                onClick={() => handleCardFlip(index)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 w-full h-full bg-card border border-border rounded-lg shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6"
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-xl text-primary font-semibold mb-4">
                      {edu.school}
                    </p>
                    
                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.years}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-center max-w-md">
                      {edu.brief}
                    </p>
                    
                    <div className="mt-6 text-sm text-primary">
                      Click to see more details
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full bg-card border border-border rounded-lg shadow-lg"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="p-8 h-full flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">
                        {index === 0 ? 'Academic Focus' : 'Undergraduate Focus'}
                      </h3>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">
                          {index === 0 ? 'Core Coursework' : 'Key Coursework'}
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {index === 0 ? (
                            <>
                              <li>• Data Analytics & Modeling</li>
                              <li>• Machine Learning & AI</li>
                              <li>• Database Systems & Design</li>
                              <li>• Statistical Analysis</li>
                              <li>• Software Engineering</li>
                            </>
                          ) : (
                            <>
                              <li>• Data Structures & Algorithms</li>
                              <li>• Database Management Systems</li>
                              <li>• Operating Systems</li>
                              <li>• Computer Networks</li>
                              <li>• Software Engineering</li>
                            </>
                          )}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">
                          {index === 0 ? 'Research Areas' : 'Technical Skills'}
                        </h4>
                        <ul className="space-y-1 text-sm">
                          {index === 0 ? (
                            <>
                              <li>• Business Intelligence</li>
                              <li>• Predictive Analytics</li>
                              <li>• Data Pipeline Architecture</li>
                              <li>• Performance Optimization</li>
                            </>
                          ) : (
                            <>
                              <li>• Programming Fundamentals (C++, Java)</li>
                              <li>• Web Development (HTML, CSS, JavaScript)</li>
                              <li>• Database Design & SQL</li>
                              <li>• Software Development Lifecycle</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-sm text-muted-foreground text-center">
                      Click to flip back
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Additional Info */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { 
                icon: GraduationCap, 
                title: 'Advanced Degree',
                desc: 'Master of Science in Computer & Information Science'
              },
              { 
                icon: BookOpen, 
                title: 'Research Focus',
                desc: 'Data analytics, modeling, and scalable pipeline design'
              },
              { 
                icon: Calendar, 
                title: 'Recent Graduate',
                desc: 'Completed December 2024 with latest industry practices'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-muted/50 rounded-lg p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};