import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.h1 
          className="text-3xl font-bold text-orange-400"
          whileHover={{ scale: 1.1 }}
        >
          Quantum Coffee
        </motion.h1>
        <ul className="flex space-x-6">
          {['Menu', 'Experience', 'Testimonials','About'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="text-orange-200 hover:text-orange-400 transition duration-300">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;