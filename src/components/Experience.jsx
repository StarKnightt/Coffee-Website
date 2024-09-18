import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          {/* Add futuristic coffee machine image here */}
          <img src="/images/futuristic-coffee-machine.jpg" alt="Advanced coffee brewing" className="rounded-lg shadow-lg" />
          {/* Replace '/images/futuristic-coffee-machine.jpg' with your actual image path */}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 md:pl-12"
        >
          <h2 className="text-5xl font-bold mb-6 text-orange-400">The Quantum Experience</h2>
          <p className="text-xl mb-6 leading-relaxed text-gray-300">
            At Quantum Coffee, we've revolutionized the art of coffee-making. Our state-of-the-art brewing techniques combine cutting-edge science with artisanal craftsmanship to create flavors that transcend time and space.
          </p>
          <p className="text-xl leading-relaxed text-gray-300">
            Step into our neo-futuristic café and embark on a sensory journey. Experience coffee like never before, where each cup is a gateway to new dimensions of taste and aroma.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
