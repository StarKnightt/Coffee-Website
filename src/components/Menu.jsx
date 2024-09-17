import React from 'react';
import { motion } from 'framer-motion';

function Menu() {
  const menuItems = [
    { name: 'Classic Espresso', price: '$2.50', description: 'Rich and bold, our signature espresso' },
    { name: 'Cappuccino', price: '$3.50', description: 'Espresso with steamed milk and a touch of foam' },
    { name: 'Americano', price: '$3.00', description: 'Espresso diluted with hot water' },
    { name: 'Latte', price: '$4.00', description: 'Espresso with steamed milk and a light layer of foam' },
    { name: 'Mocha', price: '$4.50', description: 'Espresso with chocolate and steamed milk' },
    { name: 'Cold Brew', price: '$3.75', description: 'Smooth, cold-steeped coffee served over ice' },
  ];

  return (
    <section id="menu" className="py-20 bg-amber-100">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Our Signature Menu
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
              <p className="text-amber-600 font-bold text-xl mb-3">{item.price}</p>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;