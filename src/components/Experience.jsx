import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    { title: 'Gravity-Defying Brews', description: 'Experience coffee in zero-gravity chambers, where flavors float and mingle in ways never before possible.' },
    { title: 'Time-Shifted Tastings', description: 'Our quantum-locked beans are harvested across different timelines, offering tastes from the past, present, and future.' },
    { title: 'Neural-Enhanced Aromas', description: 'Our patented NeuroAroma technology amplifies your olfactory senses, unlocking hidden depths in every cup.' },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-orange-400"
        >
          The Quantum Experience
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-800 p-8 rounded-lg shadow-lg border border-orange-500 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 group-hover:opacity-30"
                animate={{
                  background: [
                    "linear-gradient(45deg, #3b82f6, #8b5cf6)", 
                    "linear-gradient(225deg, #3b82f6, #8b5cf6)"
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              />
              
              <h3 className="text-2xl font-semibold mb-4 text-orange-300">{exp.title}</h3>
              <p className="text-gray-300 mb-6">{exp.description}</p>
              </motion.div>
           
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            className="bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Book Your Quantum Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
