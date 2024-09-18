import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Loader from './components/Loader';
import About from './components/About';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans bg-gray-900 text-white"
        >
          <Header />
          <Hero />
          <Menu />
          <Experience />
          <About />
          <Testimonials />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;