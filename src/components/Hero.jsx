import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/images/hero-background.jpg',
    '/images/coffee3.jpg',
    '/images/hero-bg-3.jpg',
    '/images/coffee4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={images[currentImage]}
          className="absolute inset-0 bg-cover bg-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              filter: 'brightness(0.4)',
            }}
          />
        </motion.div>
      </AnimatePresence>
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
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-orange-700 transition duration-300 inline-block"
        >
          Explore Our Innovations
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;