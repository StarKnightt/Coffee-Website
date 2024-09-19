import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/images/hero-background.jpg',
    '/images/coffee3.jpg',
    '/images/hero-bg-3.jpg',
    '/images/coffee4.jpg',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          filter: 'brightness(0.4)',
        }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 rounded-full text-white hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 rounded-full text-white hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRight size={24} />
      </button>

      <div className="text-center px-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 text-orange-400 drop-shadow-lg leading-tight"
        >
          Experience Coffee Evolution
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5 sm:mb-6 md:mb-8 text-orange-200 drop-shadow-md"
        >
          Where science meets flavor
        </motion.p>
        <motion.a
          href="#menu"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-orange-700 transition duration-300 inline-block"
        >
          Explore Our Innovations
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;