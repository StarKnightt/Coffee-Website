import React from 'react';
import { motion } from 'framer-motion';
import { Github, Codepen, Twitter, Coffee } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/StarKnightt/Coffee-Website' },
  { name: 'CodePen', icon: Codepen, url: 'https://codepen.io/StarKnightt' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/Star_Knight12' },
  { name: 'Buy Me a Coffee', icon: Coffee, url: 'https://buymeacoffee.com/prasen' },
];

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
          {socialLinks.map((link) => (
            <SocialLink key={link.name} {...link} />
          ))}
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

const SocialLink = ({ name, icon: Icon, url }) => (
  <a 
    href={url}
    className="hover:text-orange-400 transition duration-300 flex items-center"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="mr-2" />
    <span className="hover:underline">{name}</span>
  </a>
);

export default Footer;