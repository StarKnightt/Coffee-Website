import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee } from 'lucide-react';

const menuItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav 
        className="container mx-auto px-4 sm:px-6 flex justify-between items-center py-4 max-w-7xl"
        aria-label="Main navigation"
      >
        <Logo />
        <DesktopMenu />
        <HamburgerButton 
          isMenuOpen={isMenuOpen} 
          onClick={handleMenuToggle}
        />
      </nav>
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </motion.header>
  );
}

const Logo = React.memo(() => (
  <motion.a
    href="#"
    className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Vitality Coffee Home"
  >
    <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-quantum-orange" />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple">
      Vitality Coffee
    </span>
  </motion.a>
));

Logo.displayName = 'Logo';

const DesktopMenu = React.memo(() => (
  <ul className="hidden lg:flex items-center space-x-8" role="menubar">
    {menuItems.map((item) => (
      <motion.li 
        key={item.label} 
        whileHover={{ scale: 1.05 }}
        role="none"
      >
        <a 
          href={item.href}
          className="text-gray-700 hover:text-quantum-orange transition-colors duration-300 font-medium text-lg relative group focus:outline-none focus:text-quantum-orange"
          role="menuitem"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-quantum-orange to-quantum-pink group-hover:w-full transition-all duration-300"></span>
        </a>
      </motion.li>
    ))}
  </ul>
));

DesktopMenu.displayName = 'DesktopMenu';

const HamburgerButton = React.memo(({ isMenuOpen, onClick }) => (
  <motion.button
    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-orange"
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    aria-expanded={isMenuOpen}
    aria-controls="mobile-menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-quantum-orange"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
      />
    </svg>
  </motion.button>
));

HamburgerButton.displayName = 'HamburgerButton';

const MobileMenu = React.memo(({ isMenuOpen, onClose }) => (
  <AnimatePresence>
    {isMenuOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={onClose}
          aria-hidden="true"
        />
        
        {/* Menu Panel */}
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-orange"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-quantum-orange"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <nav className="mt-12" aria-label="Mobile menu">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-quantum-orange hover:bg-gray-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-quantum-orange focus:ring-offset-2 focus:ring-offset-white"
                      onClick={onClose}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
));

MobileMenu.displayName = 'MobileMenu';

export default Header;