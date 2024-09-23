import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  '/images/hero-background.avif',
  '/images/coffee3.avif',
  '/images/hero-bg-3.avif',
  '/images/coffee4.avif',
];

const INTERVAL = 5000; // 5 seconds

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

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

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
            backgroundImage: `url(${IMAGES[currentImage]})`,
            filter: 'brightness(0.4)',
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-orange-400 drop-shadow-lg leading-tight">
            Experience Coffee Evolution
          </h1>
          <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5 md:mb-6 text-orange-200 drop-shadow-md">
            Where science meets flavor
          </p>
          <HeroCTA />
        </div>
      </div>

      <NavigationDots currentImage={currentImage} setCurrentImage={setCurrentImage} />
    </section>
  );
}

const HeroCTA = React.memo(() => (
  <motion.a
    href="#menu"
    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249, 115, 22, 0.7)" }}
    whileTap={{ scale: 0.95 }}
    className="hero-cta bg-orange-600 text-white px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-orange-700 transition duration-300 inline-block"
  >
    Explore Our Innovations
  </motion.a>
));

const NavigationDots = React.memo(({ currentImage, setCurrentImage }) => (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
    {IMAGES.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          currentImage === index ? 'bg-orange-400 w-4' : 'bg-gray-400'
        }`}
      />
    ))}
  </div>
));

export default Hero;