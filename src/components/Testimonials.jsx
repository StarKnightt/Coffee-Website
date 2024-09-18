import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    { name: 'Dr. Sarah Quantum', text: 'The flavor complexity in each sip is mind-bending. Its not just coffee, its an exploration of taste' },
    { name: 'Captain John Nebula', text: 'As someone whos traveled the stars, I can say this coffee truly takes you on a journey.' },
    { name: 'Professor Emma Cortex', text: 'The neural stimulation from their brews has revolutionized my research. A triumph of coffee engineering!' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-orange-400"
        >
          Intergalactic Reviews
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-lg shadow-lg border border-orange-500"
            >
              <p className="text-lg mb-4 italic text-gray-300">"{testimonial.text}"</p>
              <p className="text-blue-400 font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;