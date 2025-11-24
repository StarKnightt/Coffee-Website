import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import PropTypes from 'prop-types';

const testimonials = [
  { 
    name: 'Sarah Mitchell', 
    role: 'Wellness Coach',
    text: 'Vitality Coffee has completely changed my morning routine. The organic quality and natural energy boost keeps me going all day without the jitters!',
    image: '/images/sarah-quantum.avif',
    rating: 5
  },
  { 
    name: 'Marcus Chen', 
    role: 'Fitness Trainer',
    text: 'As someone who values clean nutrition, I love that every cup is organic and sustainably sourced. The taste is exceptional too!',
    image: '/images/john-nebula.avif',
    rating: 5
  },
  { 
    name: 'Emma Rodriguez', 
    role: 'Nutritionist',
    text: 'Finally, a coffee shop that prioritizes health without compromising on flavor. Their adaptogen lattes are my go-to recommendation!',
    image: '/images/emma-cortex.avif',
    rating: 5
  },
];

function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-quantum-orange/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Quote className="w-12 h-12 text-quantum-orange mx-auto" />
          </motion.div>
          <h2 
            id="testimonials-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple"
          >
            Customer Reviews
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our community has to say about their Vitality Coffee experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = React.memo(({ testimonial, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -5 }}
    className="group relative bg-white p-8 pb-10 rounded-2xl shadow-lg border border-gray-200 hover:border-quantum-pink/50 hover:shadow-2xl transition-all duration-300"
  >
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-quantum-orange/5 via-quantum-pink/5 to-quantum-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    
    {/* Quote Icon Background */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-quantum-orange to-quantum-pink opacity-10 rounded-full blur-2xl" />
    
    <div className="relative z-10">
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-quantum-orange/40 mb-4" />
      
      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </blockquote>
      
      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-quantum-orange text-quantum-orange" />
        ))}
      </div>
      
      {/* Author Info */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-orange to-quantum-pink rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <img 
            src={testimonial.image} 
            alt={`${testimonial.name}, ${testimonial.role}`}
            className="relative w-14 h-14 rounded-full object-cover border-2 border-gray-200 group-hover:border-quantum-orange/50 transition-colors duration-300" 
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-quantum-orange transition-colors duration-300">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
    
    {/* Decorative Bottom Line - Fixed positioning */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple rounded-b-2xl"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
      style={{ transformOrigin: 'left' }}
    />
  </motion.article>
));

TestimonialCard.displayName = 'TestimonialCard';

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Testimonials;