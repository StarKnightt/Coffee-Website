import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    { name: 'Dr. Sarah Quantum', text: 'The flavor complexity in each sip is mind-bending. Its not just coffee, its an exploration of taste.', image: '/images/sarah-quantum.avif' },
    { name: 'Captain John Nebula', text: 'As someone whos traveled the stars, I can say this coffee truly takes you on a journey.', image: '/images/john-nebula.avif' },
    { name: 'Professor Emma Cortex', text: 'The neural stimulation from their brews has revolutionized my research. A triumph of coffee engineering!', image: '/images/emma-cortex.avif' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
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
              className="bg-gray-800 p-8 rounded-lg shadow-lg border border-orange-500 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10"
                animate={{
                  background: ["linear-gradient(45deg, #3b82f6, #8b5cf6)", "linear-gradient(225deg, #3b82f6, #8b5cf6)"],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                <h3 className="text-xl font-semibold text-orange-300">{testimonial.name}</h3>
              </div>
              <p className="text-lg mb-4 italic text-gray-300">"{testimonial.text}"</p>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;