import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { ThemeToggle } from './ThemeToggle';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { content } from '../data/content';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollDirection, scrollY } = useScrollDirection();

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const shouldHide = scrollDirection === 'down' && scrollY > 100;

  return (
    <>
      {/* Skip to content link */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-premium border-b border-border/50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-background/80 shadow-lg' : 'bg-background/40'
        }`}
        initial={{ y: 0 }}
        animate={{ y: shouldHide ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex lg:flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => handleNavClick('#hero')}
                className="text-xl font-bold text-primary hover:text-accent transition-colors focus-ring rounded-lg px-2 py-1"
              >
                {content.name.split(' ').map(name => name[0]).join('')}
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden lg:flex lg:gap-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors focus-ring rounded-lg px-3 py-2 link-animated ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </motion.div>

            {/* Theme Toggle & Social Links */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* {content.socials.linkedin && (
                <a
                  href={content.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors focus-ring rounded-lg p-2"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </a>
              )} */}
              
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-lg bg-card border border-border focus-ring"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <Dialog 
        as="div" 
        className="lg:hidden" 
        open={mobileMenuOpen} 
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavClick('#hero')}
              className="text-xl font-bold text-primary focus-ring rounded-lg px-2 py-1"
            >
              {content.name.split(' ').map(name => name[0]).join('')}
            </button>
            <button
              type="button"
              className="p-2 rounded-lg focus-ring"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left rounded-lg px-3 py-2 text-base font-semibold transition-colors focus-ring ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
              <div className="py-6">
                {content.socials.linkedin && (
                  <a
                    href={content.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted focus-ring"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
