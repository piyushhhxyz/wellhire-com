import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <header className="bg-white dark:bg-gray-900 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div>
            <div className="flex justify-between items-center py-6">
              <Link to="/" className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Well9Hire
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/pricing" className="text-lg text-gray-900 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Pricing</Link>
                <Link to="/community" className="text-lg text-gray-900 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Community</Link>
                <Link to="/about" className="text-lg text-gray-900 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">About Us</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <DarkModeToggle />
                <Link to="/login" className="text-lg text-gray-900 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Login</Link>
                <Link to="/signup" className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition">Get started</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </motion.header>
  );
};

export default Header;