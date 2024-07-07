import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CompanyCard = ({ company }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <div className="h-32 overflow-hidden">
        <img src={company.headerImage} alt={company.name} className="w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-700 -mt-8 shadow-lg" />
          <h2 className="text-xl font-semibold ml-4">{company.name}</h2>
        </div>
        <Link
          to={`/company/${company.id}`}
          className="block w-full text-center bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
        >
          View Colleges
        </Link>
      </div>
    </motion.div>
  );
};

export default CompanyCard;