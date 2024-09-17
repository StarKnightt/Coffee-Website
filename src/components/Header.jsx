import React from 'react';
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';

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
        isScrolled ? 'bg-brown-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.h1 
          className="text-3xl font-bold text-amber-100"
          whileHover={{ scale: 1.1 }}
        >
          Retro Coffee Co.
        </motion.h1>
        <ul className="flex space-x-6">
          {['Menu', 'Gallery', 'About', 'Testimonials'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="text-amber-100 hover:text-amber-300 transition duration-300">
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