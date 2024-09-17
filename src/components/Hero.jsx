import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('/images/coffee1.jpg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.7)' }}
      />
      <div className="container mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-7xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Experience Timeless Coffee
        </motion.h2>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-3xl mb-10 text-amber-100 drop-shadow-md"
        >
          Brewing perfection since 1950
        </motion.p>
        <motion.a 
          href="#menu"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-amber-700 transition duration-300 inline-block"
        >
          Explore Our Menu
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
