import React from 'react';
import { motion } from 'framer-motion';

function LoadingSpinner({ fullScreen = false, message = "Brewing something special..." }) {
  const containerClass = fullScreen 
    ? "fixed inset-0 bg-white flex items-center justify-center z-50" 
    : "flex items-center justify-center py-20";

  return (
    <div className={containerClass}>
      <div className="text-center">
        <motion.div
          className="relative w-24 h-24 mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-0 border-4 border-quantum-orange rounded-full border-t-transparent"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-quantum-purple rounded-full border-b-transparent"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-4 border-4 border-quantum-pink rounded-full border-l-transparent"
            animate={{ scale: [1, 0.8, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
        
        <motion.p
          className="text-gray-600 text-lg font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {message}
        </motion.p>
      </div>
    </div>
  );
}

export default LoadingSpinner;

