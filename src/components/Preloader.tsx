import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 800); // Allow exit animation to complete
    }, 2400); // Total preloader duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  const letters = "LOADING".split("");

  const letterVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      rotateX: 90,
      z: -100
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      z: 0,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-dark flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Subtle background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main loading text */}
          <div className="relative">
            <motion.div 
              className="flex items-center justify-center space-x-4 text-6xl md:text-8xl font-bold"
              style={{ perspective: "1000px" }}
            >
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block text-glow"
                  variants={letterVariants}
                  custom={i}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Progress line */}
            <motion.div
              className="mt-8 h-1 bg-muted rounded-full mx-auto"
              style={{ width: "300px" }}
            >
              <motion.div
                className="h-full bg-gradient-premium rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" as const }}
              />
            </motion.div>
          </div>

          {/* Bloom effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2.4, ease: "easeInOut" as const }}
          >
            <div className="absolute inset-0 bg-gradient-premium opacity-10 blur-3xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};