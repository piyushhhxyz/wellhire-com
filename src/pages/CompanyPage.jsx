import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "../components/Searchbar";
import CompanyCard from "../components/CompanyCard";
import { colleges } from "../utils/mockData";

const CompanyPage = () => {
  const { companyId } = useParams();
  const [filteredColleges, setFilteredColleges] = useState(colleges);

  const handleSearch = (searchTerm) => {
    const filtered = colleges.filter((college) =>
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
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-center lg:text-start text-4xl cursor-default font-bold text-white mb-2">
              Colleges for Company {companyId}
            </h1>
            <p className="text-center lg:text-start text-xl max-w-[380px] cursor-default text-gray-400">
              Explore top colleges and their placement records for this company.
            </p>
          </div>

          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <CompanyCard key={college.id} company={college} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyPage;
