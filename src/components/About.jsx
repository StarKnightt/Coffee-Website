import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-quantum-blue via-quantum-purple to-quantum-pink rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src="/images/coffee2.avif" 
                alt="Vitality Coffee organic coffee roasting facility" 
                className="relative rounded-lg shadow-2xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Story
            </motion.h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg md:text-xl leading-relaxed">
                Founded in 2025, <span className="text-quantum-orange font-semibold">Vitality Coffee</span> was born 
                from a simple belief: that exceptional coffee can be both delicious and good for you. We're passionate 
                about sourcing the finest organic beans and roasting them to perfection.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Every bean is sustainably sourced from family-owned farms that share our commitment to quality and 
                environmental stewardship. We work directly with farmers, ensuring fair wages and building lasting 
                partnerships that benefit entire communities.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                More than just a coffee shop, we're a community hub dedicated to wellness, sustainability, and the 
                art of the perfect cup. Welcome to a healthier way to enjoy your daily ritual.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {['Organic Certified', 'Fair Trade', 'Carbon Neutral'].map((feature, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-quantum-blue/20 to-quantum-purple/20 rounded-full border border-quantum-blue/30 text-quantum-blue font-medium"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;