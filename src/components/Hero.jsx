import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Coffee, Zap } from 'lucide-react';
import PropTypes from 'prop-types';

const IMAGES = [
  '/images/hero-background.webp',
  '/images/coffee3.webp',
  '/images/hero-bg-3.webp',
  '/images/coffee4.webp',
];

const INTERVAL = 3000;

// Floating particles for visual interest
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
}));

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

  if (!imagesLoaded) {
    return (
      <div className="h-screen w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 animate-pulse flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-quantum-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Brewing something special...</p>
        </div>
      </div>
    );
  }

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50" 
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Images with better visibility */}
      <AnimatePresence initial={false}>
        {IMAGES.map((src, index) => (
          index === currentImage && (
            <BackgroundImage
              key={src}
              src={src}
              isActive={index === currentImage}
            />
          )
        ))}
      </AnimatePresence>

      {/* Lighter gradient overlay for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50" />
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-quantum-orange/10 to-quantum-pink/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-quantum-purple/10 to-quantum-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-quantum-orange/20 rounded-full"
            initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            style={{ width: particle.size, height: particle.size }}
          />
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20">
        <div className="text-center max-w-6xl w-full">
          {/* Badge */}
          <HeroBadge />
          
          {/* Title */}
          <HeroTitle />
          
          {/* Subtitle */}
          <HeroSubtitle />
          
          {/* CTAs */}
          <HeroCTA />
          
          {/* Features/Stats */}
          <HeroFeatures />
        </div>
      </div>
      
      {/* Navigation Dots */}
      <NavigationDots currentImage={currentImage} setCurrentImage={setCurrentImage} />
      
      {/* Curved bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}

const BackgroundImage = React.memo(({ src, isActive }) => (
  <motion.div
    className="absolute inset-0 bg-cover bg-center"
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: isActive ? 0.7 : 0, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    style={{ 
      backgroundImage: `url(${src})`,
      filter: 'blur(1px) brightness(1.15)',
    }}
    aria-hidden="true"
  />
));

BackgroundImage.displayName = 'BackgroundImage';

const HeroBadge = React.memo(() => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 backdrop-blur-sm rounded-full border border-quantum-orange/20 shadow-lg"
  >
    <Sparkles className="w-4 h-4 text-quantum-orange" />
    <span className="text-sm font-semibold text-gray-900">Est. 2025 • 100% Organic Certified</span>
  </motion.div>
));

HeroBadge.displayName = 'HeroBadge';

const HeroTitle = React.memo(() => (
  <motion.h1
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
  >
    <span className="block">
      Discover
    </span>
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple">
      Vitality Coffee
    </span>
  </motion.h1>
));

HeroTitle.displayName = 'HeroTitle';

const HeroSubtitle = React.memo(() => (
  <motion.p
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="text-xl sm:text-2xl md:text-3xl mb-10 text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
  >
    Where organic excellence meets artisan craftsmanship.
    <span className="block mt-2 text-lg sm:text-xl text-gray-500">
      Sustainably sourced. Expertly roasted. Crafted for your wellness.
    </span>
  </motion.p>
));

HeroSubtitle.displayName = 'HeroSubtitle';

const HeroCTA = React.memo(() => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
  >
    <motion.a
      href="#menu"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-gradient-to-r from-quantum-orange to-quantum-pink text-white px-10 py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-quantum-orange focus:ring-offset-2 focus:ring-offset-white overflow-hidden"
    >
      <span className="relative z-10">Explore Our Menu</span>
      <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
      <div className="absolute inset-0 bg-gradient-to-r from-quantum-pink to-quantum-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
    <motion.a
      href="#about"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-900 px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:border-quantum-orange hover:text-quantum-orange transition-all duration-300 inline-flex items-center gap-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white"
    >
      Learn More
      <Coffee className="w-5 h-5" />
    </motion.a>
  </motion.div>
));

HeroCTA.displayName = 'HeroCTA';

const HeroFeatures = React.memo(() => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.9 }}
    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
  >
    {[
      { icon: Coffee, label: 'Organic Beans', value: '100%' },
      { icon: Zap, label: 'Energy Boost', value: 'Natural' },
      { icon: Sparkles, label: 'Happy Customers', value: '10K+' },
    ].map((feature, index) => (
      <motion.div
        key={feature.label}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
        className="group relative bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-quantum-orange/50 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <feature.icon className="w-8 h-8 text-quantum-orange mb-3 mx-auto group-hover:scale-110 transition-transform" />
        <p className="text-3xl font-bold text-gray-900 mb-1">{feature.value}</p>
        <p className="text-sm text-gray-600 font-medium">{feature.label}</p>
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-orange/5 to-quantum-pink/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    ))}
  </motion.div>
));

HeroFeatures.displayName = 'HeroFeatures';

const NavigationDots = React.memo(({ currentImage, setCurrentImage }) => (
  <div 
    className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-2 z-20"
    role="group"
    aria-label="Hero image navigation"
  >
    {IMAGES.map((_, index) => (
      <motion.button
        key={index}
        onClick={() => setCurrentImage(index)}
        aria-label={`View image ${index + 1} of ${IMAGES.length}`}
        aria-current={currentImage === index ? 'true' : 'false'}
        className="relative group"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className={`rounded-full transition-all duration-300 ${
          currentImage === index 
            ? 'bg-gradient-to-r from-quantum-orange to-quantum-pink w-10 h-2.5' 
            : 'bg-gray-400/60 hover:bg-gray-600 w-2.5 h-2.5'
        }`} />
        {currentImage === index && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-quantum-orange to-quantum-pink blur-sm"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </motion.button>
    ))}
  </div>
));

NavigationDots.displayName = 'NavigationDots';

// PropTypes
BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

NavigationDots.propTypes = {
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default React.memo(Hero);