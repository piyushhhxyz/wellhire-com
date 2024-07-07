import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import useClickOutside from "../hooks/useClickOutside";

const SearchBar = ({ onSearch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchBarRef = useRef(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  const handleClickOutside = () => {
    setIsExpanded(false);
  };
  useClickOutside(searchBarRef, handleClickOutside);

  return (
    <div
      className="relative w-full lg:w-fit flex items-center justify-center"
      ref={searchBarRef}
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-purple-600 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaSearch size={20} />
      </motion.button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute lg:right-0 flex items-center w-full top-0"
          >
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={handleSearch}
              className="p-3 w-64 border border-gray-300 rounded-full shadow-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
