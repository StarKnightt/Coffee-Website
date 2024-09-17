import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
function Loader() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-brown-800"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-amber-400 rounded-full"
        />
      </motion.div>
    );
  }

  export default Loader;