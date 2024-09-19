import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Menu', 'Experience', 'Testimonials', 'About'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-transparent bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-full px-4 sm:px-6 flex justify-between items-center py-4">
        <motion.h1
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400 truncate"
          whileHover={{ scale: 1.1 }}
        >
          Quantum Coffee
        </motion.h1>
       
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="text-orange-200 hover:text-orange-400 transition duration-300">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        
        {/* Hamburger Icon */}
        <motion.div
          className="lg:hidden cursor-pointer flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.97 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black bg-opacity-90 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center py-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  className="my-3"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-orange-200 hover:text-orange-400 transition duration-300 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;