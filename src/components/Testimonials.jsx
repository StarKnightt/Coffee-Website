import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
function Testimonials() {
    const testimonials = [
      { name: 'Sarah L.', text: 'The best coffee I have ever had The atmosphere is so cozy and inviting.'},
      { name: 'John D.', text: 'I love the retro vibes and the attention to detail in every cup.' },
      { name: 'Emma W.', text: 'This place is a hidden gem. The staff is friendly and the coffee is outstanding!' },
    ];
  
    return (
      <section id="testimonials" className="py-20 bg-amber-100">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="text-amber-600 font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Testimonials;