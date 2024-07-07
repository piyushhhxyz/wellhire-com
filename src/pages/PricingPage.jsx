// TODO, add a timer to show when early bird ending

import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { pricingPlans } from '../utils/mockData';

const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
      <motion.h1 
        className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose Your Plan
      </motion.h1>
      <motion.p 
        className="text-xl text-center text-gray-700 dark:text-gray-300 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Invest in your future with a WellHire plan that fits your needs and budget.
      </motion.p>

      <motion.div 
        className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg mb-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-2 text-purple-800 dark:text-purple-200">Early Bird Offer!</h2>
        <p className="text-lg text-purple-700 dark:text-purple-300">
          Limited time discount on all plans. Don't miss out on these incredible savings!
        </p>
      </motion.div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg ${
              plan.name === 'Student' ? 'border-4 border-purple-600' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{plan.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
            <div className="mb-6">
              {plan.price !== 0 && (
                <span className="text-2xl font-bold text-gray-500 dark:text-gray-400 line-through mr-2">
                  ₹{plan.name === 'Student' ? '159' : '1599'}{plan.term ? `/${plan.term}` : ''}
                </span>
              )}
              <span className="text-4xl font-bold text-purple-600">
                {plan.price === 0 ? 'Free' : `₹${plan.price}${plan.term ? `/${plan.term}` : ''}`}
              </span>
            </div>
            <ul className="mb-8 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/signup"
              className={`block w-full text-center py-3 px-4 rounded-md transition duration-300 ${
                plan.name === 'Student'
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
              }`}
            >
              {plan.name === 'Free Trial' ? 'Start Free Trial' : 'Choose Plan'}
            </Link>
          </motion.div>
        ))}
      </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg ${
              plan.name === 'Student' ? 'border-4 border-purple-600' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{plan.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
            <div className="mb-6">
              {plan.price !== 0 && (
                <div className="text-2xl font-bold text-gray-500 dark:text-gray-400 line-through mb-1">
                  ${plan.name === 'Student' ? '19.99' : '199.99'}{plan.term ? `/${plan.term}` : ''}
                </div>
              )}
              <div className="text-4xl font-bold text-purple-600">
                {plan.price === 0 ? 'Free' : `$${(plan.price / 80).toFixed(2)}${plan.term ? `/${plan.term}` : ''}`}
              </div>
            </div>
            <ul className="mb-8 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/home')}
              className={`block w-full text-center py-3 px-4 rounded-md transition duration-300 ${
                plan.name === 'Student'
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
              }`}
            >
              {plan.name === 'Free Trial' ? 'Start Free Trial' : 'Choose Plan'}
            </button>
          </motion.div>
        ))}
        </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Not sure which plan is right for you?</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Our team is here to help you choose the best plan for your needs. Get in touch with us for personalized advice.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
};

export default PricingPage;