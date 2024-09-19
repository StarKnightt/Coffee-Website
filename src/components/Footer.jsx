import React from 'react';
import { motion } from 'framer-motion';
import { Github, Codepen, Twitter, Coffee } from 'lucide-react';

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <a 
            href="https://github.com/StarKnightt/Coffee-Website" 
            className="hover:text-orange-400 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2" />
            <span className="hover:underline">GitHub</span>
          </a>
          <a 
            href="https://codepen.io/StarKnightt" 
            className="hover:text-orange-400 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Codepen className="mr-2" />
            <span className="hover:underline">CodePen</span>
          </a>
          <a 
            href="https://x.com/Star_Knight12" 
            className="hover:text-orange-400 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="mr-2" />
            <span className="hover:underline">Twitter</span>
          </a>
          <a 
            href="https://buymeacoffee.com/prasen" 
            className="hover:text-orange-400 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Coffee className="mr-2" />
            <span className="hover:underline">Buy Me a Coffee</span>
          </a>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Quantum Coffee Co. All rights reserved across all dimensions.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;