import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
function Gallery() {
    const images = ['/images/coffee1.jpg', '/images/coffee2.jpg', '/images/coffee3.jpg'];
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <section id="gallery" className="py-20 bg-orange-800">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16 text-amber-100"
          >
            Our Cozy Atmosphere
          </motion.h2>
          <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
  }
  
  export default Gallery;