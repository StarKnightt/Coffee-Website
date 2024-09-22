import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <img src="/images/coffee2.jpg" alt="Vintage coffee shop" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 md:pl-12"
        >
          <h2 className="text-5xl font-bold mb-6">Our Story</h2>
          <p className="text-xl mb-6 leading-relaxed">
            Since 1950, Retro Coffee Co. has been serving the finest coffee with a touch of nostalgia. Our passion for quality beans and traditional brewing methods has made us a beloved fixture in the community.
          </p>
          <p className="text-xl leading-relaxed">
            Step into our shop and travel back in time while enjoying the perfect cup of coffee. We're committed to preserving the art of coffee making and creating a warm, inviting space for our customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default About;