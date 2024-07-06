import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ComingSoonPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Coming Soon
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
          We're working hard to bring you an amazing new feature. Stay tuned!
        </p>
        <motion.div
          className="mb-12"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <span className="text-8xl">🚀</span>
        </motion.div>
        <Link
          to="/"
          className="inline-block bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ComingSoonPage;