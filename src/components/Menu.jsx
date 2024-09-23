import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    { name: 'Quantum Espresso', price: '$5.50', description: 'Superposition of flavors in every sip', image: '/images/quantum-espresso.avif' },
    { name: 'Nebula Nitro Cold Brew', price: '$6.50', description: 'Infused with star-dusted cream', image: '/images/nebula-cold-brew.avif' },
    { name: 'Holographic Latte', price: '$7.00', description: 'Shifting flavors as you drink', image: '/images/holographic-latte.avif' },
    { name: 'Time Warp Macchiato', price: '$6.00', description: 'Tastes like the future, feels like the past', image: '/images/time-warp-macchiato.avif' },
    { name: 'Plasma Mocha Fusion', price: '$7.50', description: 'Energized with chocolate plasma swirls', image: '/images/plasma-mocha.avif' },
    { name: 'Zero-G Affogato', price: '$8.75', description: 'Ice cream that defies gravity', image: '/images/zero-g-affogato.avif' },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-orange-400"
        >
          Innovative Brews
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-orange-500 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"
                animate={{
                  background: ["linear-gradient(45deg, #3b82f6, #8b5cf6)", "linear-gradient(225deg, #3b82f6, #8b5cf6)"],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-3 text-orange-300">{item.name}</h3>
              <p className="text-blue-400 font-bold text-xl mb-3">{item.price}</p>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                onClick={() => setSelectedItem(item)}
              >
                Buy Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-4 text-orange-300">{selectedItem.name}</h3>
            <p className="text-blue-400 font-bold text-xl mb-4">{selectedItem.price}</p>
            <p className="text-gray-400 mb-6">{selectedItem.description}</p>
            <div className="flex justify-between">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
                Confirm Order
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300" onClick={() => setSelectedItem(null)}>
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Menu;