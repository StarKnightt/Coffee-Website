import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-gradient-to-b from-amber-50 to-amber-100 text-brown-900 font-serif"
        >
          <Header />
          <Hero />
          <Menu />
          <Gallery />
          <About />
          <Testimonials />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;