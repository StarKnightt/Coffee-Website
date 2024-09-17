import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="font-sans bg-gray-900 text-white">
      <Header />
      <Hero />
      <Menu />
      <Experience />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;