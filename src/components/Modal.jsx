import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Modal({ selectedItem, setSelectedItem, isLoading }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedItem(null)}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 p-6 rounded-lg max-w-lg w-full relative"
      >
        {!isLoading && (
          <>
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <img
              src={selectedItem.image}
              alt={selectedItem.alt}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            
            <h3 className="text-2xl font-bold text-orange-400 mb-2">
              {selectedItem.name}
            </h3>
            
            <p className="text-blue-400 font-bold text-xl mb-2">
              {selectedItem.price}
            </p>
            
            <p className="text-gray-400 mb-4">
              {selectedItem.description}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Add to Cart
            </motion.button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

Modal.propTypes = {
  selectedItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Modal;