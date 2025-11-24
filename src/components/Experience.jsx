import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Brain, ArrowRight } from 'lucide-react';

const experiences = [
  { 
    title: 'Farm-to-Cup Excellence', 
    description: 'Experience direct-trade coffee from sustainable farms. Every bean tells a story of ethical sourcing and community partnership.',
    icon: Zap,
    color: 'from-quantum-blue to-quantum-teal'
  },
  { 
    title: 'Artisan Roasting Process', 
    description: 'Our master roasters craft each batch with precision, bringing out unique flavor notes that celebrate the bean\'s natural character.',
    icon: Clock,
    color: 'from-quantum-purple to-quantum-pink'
  },
  { 
    title: 'Health-Conscious Blends', 
    description: 'Infused with natural adaptogens and superfoods, our blends support your wellness journey while delivering exceptional taste.',
    icon: Brain,
    color: 'from-quantum-orange to-quantum-pink'
  },
];

function Experience() {
  return (
    <section 
      id="experience" 
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            id="experience-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple"
          >
            The Vitality Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the difference that organic quality and sustainable practices make in every cup
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} experience={exp} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-quantum-orange to-quantum-pink text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-quantum-orange/30 transition-all duration-300 inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-quantum-orange focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Visit our cafe today"
          >
            Visit Us Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

const ExperienceCard = React.memo(({ experience, index }) => {
  const Icon = experience.icon;
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-quantum-orange/50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-orange/5 via-quantum-pink/5 to-quantum-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing Icon Background */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${experience.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-full h-full text-white" />
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-orange group-hover:to-quantum-pink transition-all duration-300">
          {experience.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {experience.description}
        </p>
        
        {/* Decorative Line */}
        <motion.div
          className={`h-1 bg-gradient-to-r ${experience.color} mt-6 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        />
      </div>
    </motion.article>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

export default Experience;
