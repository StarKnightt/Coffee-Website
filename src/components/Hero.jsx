import React, { useState, useEffect, useRef } from 'react';

const IMAGES = [
  '/images/hero-background.webp',
  '/images/coffee3.webp',
  '/images/hero-bg-3.webp',
  '/images/coffee4.webp',
];

const INTERVAL = 5000;

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const imageRefs = useRef(IMAGES.map(() => React.createRef()));

  useEffect(() => {
    // Preload all images
    IMAGES.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      if (index === 0) {
        img.onload = () => {
          if (imageRefs.current[0].current) {
            imageRefs.current[0].current.style.opacity = '1';
          }
        };
      }
    });

    const timer = setInterval(() => {
      setCurrentImage((prevImage) => {
        const nextImage = (prevImage + 1) % IMAGES.length;
        if (imageRefs.current[nextImage].current) {
          imageRefs.current[nextImage].current.style.opacity = '1';
        }
        if (imageRefs.current[prevImage].current) {
          imageRefs.current[prevImage].current.style.opacity = '0';
        }
        return nextImage;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {IMAGES.map((src, index) => (
        <div
          key={src}
          ref={imageRefs.current[index]}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: index === 0 ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-60" /> {/* Overlay for readability */}

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
  <a
    href="#menu"
    className="hero-cta bg-orange-600 text-white px-3 sm:px-4 md:px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-orange-700 transition duration-300 inline-block"
  >
    Explore Our Innovations
  </a>
));

const NavigationDots = React.memo(({ currentImage, setCurrentImage }) => (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
    {IMAGES.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        aria-label={`Switch to image ${index + 1}`}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-orange-400 w-4' : 'bg-gray-400'
          }`}
      />
    ))}
  </div>
));

export default Hero;