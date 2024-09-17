import React from 'react';
import { motion } from 'framer-motion';

function Menu() {
  const menuItems = [
    { name: 'Quantum Espresso', price: '$5.50', description: 'Superposition of flavors in every sip', image: '/images/quantum-espresso.jpg' },
    { name: 'Nebula Nitro Cold Brew', price: '$6.50', description: 'Infused with star-dusted cream', image: '/images/nebula-cold-brew.jpg' },
    { name: 'Holographic Latte', price: '$7.00', description: 'Shifting flavors as you drink', image: '/images/holographic-latte.jpg' },
    { name: 'Time Warp Macchiato', price: '$6.00', description: 'Tastes like the future, feels like the past', image: '/images/time-warp-macchiato.jpg' },
    { name: 'Plasma Mocha Fusion', price: '$7.50', description: 'Energized with chocolate plasma swirls', image: '/images/plasma-mocha.jpg' },
    { name: 'Zero-G Affogato', price: '$8.75', description: 'Ice cream that defies gravity', image: '/images/zero-g-affogato.jpg' },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-gray-800 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/coffee3.jpg)' }}
    >
      <div className="container mx-auto bg-gray-900 bg-opacity-70 p-10 rounded-lg">
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
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-orange-500"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-3 text-orange-300">{item.name}</h3>
              <p className="text-blue-400 font-bold text-xl mb-3">{item.price}</p>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
