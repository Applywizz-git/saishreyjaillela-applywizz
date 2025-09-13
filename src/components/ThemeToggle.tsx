import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = stored === 'dark' || (stored === null && prefersDark);
    setIsDark(shouldBeDark);
    
    // Apply theme to document
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', shouldBeDark ? '#0B0F19' : '#ffffff');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Apply to document
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme ? '#0B0F19' : '#ffffff');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-card border border-border focus-ring"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="relative w-5 h-5"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-amber transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-primary transition-opacity duration-300 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </motion.div>
    </motion.button>
  );
};