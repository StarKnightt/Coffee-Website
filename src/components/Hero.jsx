import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const images = [
    '/images/hero-background.jpg',
    '/images/coffee3.jpg',
    '/images/hero-bg-3.jpg',
    '/images/coffee4.jpg',
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const backgroundVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={1}>
        <motion.div
          key={currentImage}
          custom={1}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            filter: 'brightness(0.4)',
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.2,
                }
              },
              exit: {
                opacity: 0,
                transition: {
                  when: "afterChildren",
                  staggerChildren: 0.1,
                  staggerDirection: -1,
                }
              }
            }}
            className="text-center px-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl z-10"
          >
            <motion.h2
              variants={textVariants}
              className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-orange-400 drop-shadow-lg leading-tight"
            >
              Experience Coffee Evolution
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5 md:mb-6 text-orange-200 drop-shadow-md"
            >
              Where science meets flavor
            </motion.p>
            <motion.a
              href="#menu"
              variants={textVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="hero-cta bg-orange-600 text-white px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-orange-700 transition duration-300 inline-block"
            >
              Explore Our Innovations
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-orange-400 w-4' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;