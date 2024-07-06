import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">WellHire</h4>
            <p className="text-gray-900 dark:text-gray-400">Empowering students to ace their tech interviews.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Pricing</Link></li>
              <li><Link to="/community" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Community</Link></li>
              <li><Link to="/about" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Twitter</a></li>
              <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">LinkedIn</a></li>
              <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Discord</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-900 dark:text-gray-400">© 2023 WellHire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;