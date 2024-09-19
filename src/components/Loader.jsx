import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* High-resolution background GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/coffee-gif.gif"
          alt="wait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated text */}
      <motion.p
        className="relative z-10 text-black text-3xl font-bold mt-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          repeat: Infinity, 
          repeatType: "reverse", 
          repeatDelay: 1 
        }}
      >
        Brewing the experience...
      </motion.p>
    </motion.div>
  );
}

export default Loader;