import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// const CompanyCard = ({ company }) => {
//   return (
//     // <motion.div
//     //   className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative"
//     //   whileHover={{ 
//     //     scale: 1.05, 
//     //     transition: { duration: 0.2 },
//     //     boxShadow: "0px 0px 20px rgba(138, 43, 226, 0.4)"
//     //   }}
//     // >
//     <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
//       <div className="h-48 overflow-hidden">
//         <img src={company.headerImage} alt={company.name} className="w-full object-cover" />
//       </div>
//       {/* <motion.div 
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//         whileHover={{ scale: 1.1 }}
//         transition={{ duration: 0.5 }}
//       > */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <img src={company.logo} alt={company.name} className="w-34 h-34 rounded-full border-4 border-purple-500 shadow-lg" />
//       </div>
//       {/* </motion.div> */}
//       <div className="p-4 pt-16 text-center">
//         <h2 className="text-2xl font-semibold text-white mb-4">{company.name}</h2>
//         <Link
//           to={`/company/${company.id}`}
//           className="block w-full text-center bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
//         >
//           View Colleges
//         </Link>
//       </div>
//     {/* </motion.div> */}
//     </div>
//   );
// };

// export default CompanyCard;

const CompanyCard = ({ company }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative"
      // whileHover={{ 
        // rotate: 360, // Added rotate animation
        // transition: { duration: 0.5 }
      // }}
    >
      <div className="h-48 overflow-hidden">
        <img src={company.headerImage} alt={company.name} className="w-full object-cover" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={company.logo} alt={company.name} className="w-34 h-34 rounded-full border-4 border-purple-500 shadow-lg" />
      </div>
      <div className="p-4 pt-16 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">{company.name}</h2>
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