import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import About from './components/About';
import { motion } from 'framer-motion';
import './App.css'; 

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
  );
}

export default App;