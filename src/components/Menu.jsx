import React, { useState, useMemo, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';

const Modal = lazy(() => import('./Modal'));

const menuItems = [
  {
    name: "Quantum Espresso",
    price: "$5.50",
    description: "Superposition of flavors in every sip",
    image: "/images/quantum-espresso.avif",
    alt: "A steaming cup of Quantum Espresso coffee"
  },
  {
    name: "Nebula Nitro Cold Brew",
    price: "$6.50",
    description: "Infused with star-dusted cream",
    image: "/images/nebula-cold-brew.avif",
    alt: "A cup of Nebula Nitro Cold Brew coffee"
  },
  {
    name: "Holographic Latte",
    price: "$7.00",
    description: "Shifting flavors as you drink",
    image: "/images/holographic-latte.avif",
    alt: "A cup of Holographic Latte coffee"
  },
  {
    name: "Time Warp Macchiato",
    price: "$6.00",
    description: "Tastes like the future, feels like the past",
    image: "/images/time-warp-macchiato.avif",
    alt: "A cup of Time Warp Macchiato coffee"
  },
  {
    name: "Plasma Mocha Fusion",
    price: "$7.50",
    description: "Energized with chocolate plasma swirls",
    image: "/images/plasma-mocha.avif",
    alt: "A cup of Plasma Mocha Fusion coffee"
  },
  {
    name: "Zero-G Affogato",
    price: "$8.75",
    description: "Ice cream that defies gravity",
    image: "/images/zero-g-affogato.avif",
    alt: "A cup of Zero-G Affogato ice cream"
  },
];

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sortedMenuItems = useMemo(() => 
    [...menuItems].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  return (
    <section id="menu" className="py-20 bg-gray-800" aria-label="Menu">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-orange-400"
        >
          Innovative Brews
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedMenuItems.map((item, index) => (
            <MenuItem 
              key={item.name} 
              item={item} 
              index={index} 
              setSelectedItem={setSelectedItem}
              setIsLoading={setIsLoading} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedItem && (
          <Suspense fallback={<LoadingSpinner />}>
            <Modal 
              selectedItem={selectedItem} 
              setSelectedItem={setSelectedItem}
              isLoading={isLoading} 
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}

const MenuItem = React.memo(({ item, index, setSelectedItem, setIsLoading }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-orange-500 relative overflow-hidden"
  >
    <BackgroundGradient />
    <img
      src={item.image}
      alt={item.alt}
      className="w-full h-48 object-cover mb-4 rounded"
      loading="lazy"
      onLoad={() => setIsLoading(false)}
    />
    <h3 className="text-2xl font-semibold mb-3 text-orange-300">
      {item.name}
    </h3>
    <p className="text-blue-400 font-bold text-xl mb-3">
      {item.price}
    </p>
    <p className="text-gray-400 mb-4">{item.description}</p>
    <OrderButton onClick={() => setSelectedItem(item)} />
  </motion.div>
));

const BackgroundGradient = React.memo(() => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"
    animate={{
      background: [
        "linear-gradient(45deg, #3b82f6, #8b5cf6)",
        "linear-gradient(225deg, #3b82f6, #8b5cf6)",
      ],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
));

const OrderButton = React.memo(({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
    onClick={onClick}
  >
    Buy Now
  </motion.button>
));

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500" />
  </div>
);

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};

OrderButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default React.memo(Menu);