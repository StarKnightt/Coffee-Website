import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-brown-800 text-amber-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Retro Coffee Co.</h2>
        <p className="mb-6">123 Nostalgia Lane, Vintage City, VC 12345</p>
        <p className="mb-8">Open daily from 7am to 8pm</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-amber-300 transition duration-300">Facebook</a>
          <a href="#" className="hover:text-amber-300 transition duration-300">Instagram</a>
          <a href="#" className="hover:text-amber-300 transition duration-300">Twitter</a>
        </div>
        <p>&copy; 2024 Retro Coffee Co. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;
