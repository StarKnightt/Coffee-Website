import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { motion } from 'framer-motion';
import './App.css';

const Menu = lazy(() => import('./components/Menu'));
const Experience = lazy(() => import('./components/Experience'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Footer = lazy(() => import('./components/Footer'));
const About = lazy(() => import('./components/About'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Menu />
        <Experience />
        <About />
        <Testimonials />
        <Footer />
      </Suspense>
    </motion.div>
  );
}

export default App;