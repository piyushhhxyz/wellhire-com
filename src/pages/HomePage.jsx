import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import SearchBar from "../components/Searchbar";
import CompanyCard from "../components/CompanyCard";
import { companies } from "../utils/mockData";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-center lg:text-start text-4xl cursor-default font-bold text-white mb-2">
              Explore Top Tech Companies
            </h1>
            <p className="text-center lg:text-start text-xl max-w-[380px] cursor-default text-gray-400">
              Discover opportunities and prepare for interviews with leading
              tech giants.
            </p>
          </div>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
