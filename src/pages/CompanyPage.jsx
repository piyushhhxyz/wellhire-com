import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import CompanyCard from '../components/CompanyCard';
import { colleges } from '../utils/mockData';

const CompanyPage = () => {
  const { companyId } = useParams();
  const [filteredColleges, setFilteredColleges] = useState(colleges);

  const handleSearch = (searchTerm) => {
    const filtered = colleges.filter(college =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColleges(filtered);
  };

  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Colleges for Company {companyId}</h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-8">
          Explore top colleges and their placement records for this company.
        </p>
        <div className="flex justify-end mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map(college => (
            <CompanyCard key={college.id} company={college} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyPage;