import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingCart, Star } from 'lucide-react';
import PropTypes from 'prop-types';

function Modal({ selectedItem, setSelectedItem }) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setSelectedItem]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedItem(null)}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-2xl w-full relative overflow-hidden border border-gray-200 shadow-2xl"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-orange/5 via-quantum-pink/5 to-quantum-purple/5" />
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedItem(null)}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-quantum-orange shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Content */}
        <div className="relative">
          {/* Image */}
          <div className="relative h-72 overflow-hidden">
            <img
              src={selectedItem.image}
              alt={selectedItem.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
            
            {/* Tags */}
            {selectedItem.tags && (
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-white/90 backdrop-blur-sm text-quantum-orange rounded-full border border-quantum-orange/30 shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Details */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 
                  id="modal-title"
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple mb-2"
                >
                  {selectedItem.name}
                </h3>
                
                <div className="flex items-center gap-1 text-quantum-orange mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">(4.9/5.0)</span>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-3xl font-bold text-quantum-orange">
                  {selectedItem.price}
                </p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedItem.description}
              </p>
              
              {selectedItem.longDescription && (
                <p className="text-gray-600 leading-relaxed">
                  {selectedItem.longDescription}
                </p>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-quantum-orange to-quantum-pink text-white py-4 px-6 rounded-full font-semibold hover:shadow-lg hover:shadow-quantum-orange/30 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-quantum-orange focus:ring-offset-2 focus:ring-offset-white"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-quantum-blue hover:text-quantum-blue hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-quantum-blue focus:ring-offset-2 focus:ring-offset-white"
              >
                Learn More
              </motion.button>
            </div>
            
            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Prep Time</p>
                  <p className="text-gray-900 font-semibold">3-5 min</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Caffeine</p>
                  <p className="text-gray-900 font-semibold">High</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Temperature</p>
                  <p className="text-gray-900 font-semibold">Quantum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

Modal.propTypes = {
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default Modal;