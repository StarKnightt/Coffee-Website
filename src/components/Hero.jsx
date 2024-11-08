import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const IMAGES = [
  '/images/hero-background.webp',
  '/images/coffee3.webp',
  '/images/hero-bg-3.webp',
  '/images/coffee4.webp',
];

const INTERVAL = 5000;

// Preload images for smoother transitions
const preloadImages = () => {
  IMAGES.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    preloadImages();
    setImagesLoaded(true);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImage, INTERVAL);
    return () => clearInterval(timer);
  }, [nextImage]);

  const heroContent = (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center px-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <HeroTitle />
        <HeroSubtitle />
        <HeroCTA />
      </div>
    </div>
  );

  if (!imagesLoaded) {
    return <div className="h-screen w-full bg-gray-900 animate-pulse" />;
  }

  return (
    <section className="relative h-screen w-full overflow-hidden" role="banner">
      {IMAGES.map((src, index) => (
        <BackgroundImage
          key={src}
          src={src}
          isActive={index === currentImage}
        />
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-60" />
      {heroContent}
      <NavigationDots currentImage={currentImage} setCurrentImage={setCurrentImage} />
    </section>
  );
}

const BackgroundImage = React.memo(({ src, isActive }) => (
  <motion.div
    className="absolute inset-0 bg-cover bg-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: isActive ? 1 : 0 }}
    transition={{ duration: 1 }}
    style={{ backgroundImage: `url(${src})` }}
    aria-hidden="true"
  />
));

const HeroTitle = React.memo(() => (
  <motion.h1
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-orange-400 drop-shadow-lg leading-tight"
  >
    Experience Coffee Evolution
  </motion.h1>
));

const HeroSubtitle = React.memo(() => (
  <motion.p
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5 md:mb-6 text-orange-200 drop-shadow-md"
  >
    Where science meets flavor
  </motion.p>
));

const HeroCTA = React.memo(() => (
  <motion.a
    href="#menu"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="hero-cta bg-orange-600 text-white px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-orange-700 transition duration-300 inline-block"
  >
    Explore Our Innovations
  </motion.a>
));

const NavigationDots = React.memo(({ currentImage, setCurrentImage }) => (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
    {IMAGES.map((_, index) => (
      <motion.button
        key={index}
        onClick={() => setCurrentImage(index)}
        aria-label={`Switch to image ${index + 1}`}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          currentImage === index ? 'bg-orange-400 w-4' : 'bg-gray-400'
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
    ))}
  </div>
));

// Add PropTypes
BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

NavigationDots.propTypes = {
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default React.memo(Hero);