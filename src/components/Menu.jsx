import React, { useState, useMemo, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from 'lucide-react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

const Modal = lazy(() => import('./Modal'));

const menuItems = [
  {
    name: "Organic Espresso",
    price: "$5.50",
    description: "Pure, bold, and sustainably sourced",
    longDescription: "Our signature organic espresso from single-origin Ethiopian beans. Rich, bold, and perfectly balanced with notes of dark chocolate and berries.",
    image: "/images/quantum-espresso.avif",
    alt: "A steaming cup of Organic Espresso coffee",
    tags: ["Strong", "Bold", "Signature"]
  },
  {
    name: "Cold Brew Bliss",
    price: "$6.50",
    description: "Smooth, naturally sweet cold brew",
    longDescription: "Cold-brewed for 18 hours with premium Colombian beans. Naturally sweet with hints of caramel and nuts. No bitterness, just pure coffee flavor.",
    image: "/images/nebula-cold-brew.avif",
    alt: "A cup of Cold Brew Bliss coffee",
    tags: ["Cold", "Smooth", "Popular"]
  },
  {
    name: "Wellness Latte",
    price: "$7.00",
    description: "Infused with natural adaptogens",
    longDescription: "Our signature latte blended with organic oat milk and natural adaptogens like ashwagandha and reishi. Balanced energy without the jitters.",
    image: "/images/holographic-latte.avif",
    alt: "A cup of Wellness Latte coffee",
    tags: ["Sweet", "Healthy", "Unique"]
  },
  {
    name: "Golden Turmeric Macchiato",
    price: "$6.00",
    description: "Anti-inflammatory golden milk blend",
    longDescription: "Organic espresso meets golden turmeric milk with cinnamon and ginger. A delicious way to boost your immunity and reduce inflammation.",
    image: "/images/time-warp-macchiato.avif",
    alt: "A cup of Golden Turmeric Macchiato",
    tags: ["Balanced", "Healthy", "Artisan"]
  },
  {
    name: "Dark Chocolate Mocha",
    price: "$7.50",
    description: "Rich organic dark chocolate blend",
    longDescription: "Fair-trade dark chocolate meets our premium espresso and organic milk. Antioxidant-rich and guilt-free indulgence.",
    image: "/images/plasma-mocha.avif",
    alt: "A cup of Dark Chocolate Mocha coffee",
    tags: ["Chocolate", "Rich", "Organic"]
  },
  {
    name: "Classic Affogato",
    price: "$8.75",
    description: "Italian tradition meets organic excellence",
    longDescription: "Organic vanilla bean gelato drowned in a shot of our signature espresso. A perfect balance of hot and cold, bitter and sweet.",
    image: "/images/zero-g-affogato.avif",
    alt: "A cup of Classic Affogato dessert",
    tags: ["Dessert", "Cold", "Premium"]
  },
];

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const sortedMenuItems = useMemo(() => 
    [...menuItems].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  return (
    <section 
      id="menu" 
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50"
      aria-labelledby="menu-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-quantum-orange mx-auto" />
          </motion.div>
          <h2
            id="menu-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-quantum-orange via-quantum-pink to-quantum-purple"
          >
            Artisan Brews
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Each drink is carefully crafted with organic, sustainably sourced ingredients for your health and enjoyment
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedMenuItems.map((item, index) => (
            <MenuItem 
              key={item.name} 
              item={item} 
              index={index} 
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedItem && (
          <Suspense fallback={<LoadingSpinner fullScreen />}>
            <Modal 
              selectedItem={selectedItem} 
              setSelectedItem={setSelectedItem}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}

const MenuItem = React.memo(({ item, index, setSelectedItem }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative"
  >
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-quantum-orange/50 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-orange/5 via-quantum-pink/5 to-quantum-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Container */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {item.tags.slice(0, 2).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-quantum-orange rounded-full border border-quantum-orange/30 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-orange group-hover:to-quantum-pink transition-all duration-300">
          {item.name}
        </h3>
        
        <p className="text-quantum-orange font-bold text-2xl mb-3">
          {item.price}
        </p>
        
        <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
          {item.description}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedItem(item)}
          className="w-full bg-gradient-to-r from-quantum-orange to-quantum-pink text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg hover:shadow-quantum-orange/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-quantum-orange focus:ring-offset-2 focus:ring-offset-white"
          aria-label={`View details for ${item.name}`}
        >
          View Details
        </motion.button>
      </div>
    </div>
  </motion.article>
));

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default React.memo(Menu);