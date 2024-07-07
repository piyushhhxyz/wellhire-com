import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import CompanyCard from '../components/CompanyCard';
import { companies } from '../utils/mockData';

const HomePage = () => {
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  const handleSearch = (searchTerm) => {
    const filtered = companies.filter(company =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4">Explore Top Tech Companies</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-8">
        Discover opportunities and prepare for interviews with leading tech giants.
      </p>
      <div className="flex justify-end mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map(company => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </motion.div>
  );
};

export default HomePage;