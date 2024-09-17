import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
     <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.4)' }}
      />
      <div className="container mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-7xl font-bold mb-6 text-orange-400 drop-shadow-lg"
        >
          Experience Coffee Evolution
        </motion.h2>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-3xl mb-10 text-orange-200 drop-shadow-md"
        >
          Where science meets flavor
        </motion.p>
        <motion.a 
          href="#menu"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-orange-700 transition duration-300 inline-block"
        >
          Explore Our Innovations
        </motion.a>
        <div className="container mx-auto text-center relative z-10"></div>
      </div>
    </section>
  );
}

export default Hero;