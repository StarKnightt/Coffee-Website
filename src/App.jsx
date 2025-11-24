import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import { motion } from 'framer-motion';
import './App.css';

const Menu = lazy(() => import('./components/Menu'));
const Experience = lazy(() => import('./components/Experience'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Footer = lazy(() => import('./components/Footer'));
const About = lazy(() => import('./components/About'));

function App() {
  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-sans bg-white text-gray-900 min-h-screen"
      >
        <Header />
        <Hero />
        <Suspense fallback={<LoadingSpinner fullScreen={false} />}>
          <main>
            <Menu />
            <Experience />
            <About />
            <Testimonials />
          </main>
          <Footer />
        </Suspense>
        <ScrollToTop />
      </motion.div>
    </ErrorBoundary>
  );
}

export default App;