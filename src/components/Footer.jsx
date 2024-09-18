import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-black text-blue-200 py-12">
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-orange-400"
        >
          Quantum Coffee
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          123 Cosmic Avenue, Neo Tokyo, NT 21XX
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          Open daily from 6am to 11pm
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <a href="#" className="hover:text-orange-400 transition duration-300">Holo-gram</a>
          <a href="#" className="hover:text-orange-400 transition duration-300">Quantum-link</a>
          <a href="#" className="hover:text-orange-400 transition duration-300">Nexus</a>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          &copy; 2124 Quantum Coffee Co. All rights reserved across all dimensions.
        </motion.p>
      </div>
    </footer>
  );
}
export default Footer;