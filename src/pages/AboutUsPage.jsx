// Add Luma video for us.

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    {
      name: 'Piyush',
      role: 'Backend and AI',
    //   image: 'https://avatars.githubusercontent.com/u/171325594?v=4',
    //   image: 'https://github.com/Bot9Ai/backend/assets/111758968/638ed29e-c89d-42b0-b7fd-c42a419ef8ce',
      image: 'images/teams/piyush.png',
      description: 'Backend Engineer @ Dukaan',
      bio: 'Piyush is a backend developer specializing in AI and machine learning. He ensures WellHire stays ahead with cutting-edge technology.',
      skills: ['Python', 'AWS', 'Docker'],
    },
    {
      name: 'Shiwangi',
      role: 'Product Designer and Frontend',
    //   image: 'https://avatars.githubusercontent.com/u/77545230?v=4',
      image: 'images/teams/shiwangi.jpeg',
      description: 'Frontend Engineer @ Accenture',
      bio: 'Shiwangi designs beautiful UIs, making WellHire a delightful experience. Her attention to detail adds magic to our platform.',
      skills: ['React', 'Figma', 'TypeScript'],
    },
    {
      name: 'Parv',
      role: 'Backend Engineer',
    //   image: 'https://avatars.githubusercontent.com/u/134908757?v=4',
    //   image: 'https://github.com/Bot9Ai/backend/assets/111758968/5ea9bd16-c7b1-46cc-a703-89dd969e8ab2',
      image: 'images/teams/parv.jpg',
      description: 'SDE @ TLE- Eliminators',
      bio: 'Parv ensures our backend infrastructure is scalable and reliable, handling WellHire\'s growing user base effortlessly.',
      skills: ['Node.js', 'MongoDB', 'Microservices'],
    },
  ];

  const AboutUsPage = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex flex-col justify-center mt-16">
        <motion.h1 
          className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About WellHire
        </motion.h1>
        
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Our Mission</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
            At WellHire, we're revolutionizing tech interview preparation, ensuring every aspiring developer has access to high-quality, company-specific practice materials.
          </p>
        </motion.section>
  
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-purple-500" />
                <h3 className="text-2xl font-semibold text-center mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 text-center mb-2 font-medium">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-4 italic">{member.description}</p>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      
      {/* <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      > */}
        {/* <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Our Journey</h2>
        {/* <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-800 dark:text-purple-200">The Spark</h3>
            <p className="text-gray-700 dark:text-gray-300">
              WellHire was born from our personal struggles with tech interviews. We realized the gap between theoretical knowledge and practical interview questions and decided to bridge it.
            </p>
          </motion.div>
          <motion.div 
            className="bg-pink-100 dark:bg-pink-900 p-6 rounded-lg mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-pink-800 dark:text-pink-200">The Build</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We spent months curating questions, building our platform, and testing with fellow students. Their feedback was invaluable in shaping WellHire into what it is today.
            </p>
          </motion.div>
          <motion.div 
            className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-800 dark:text-indigo-200">The Impact</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Today, WellHire has helped thousands of students land their dream jobs. But we're just getting started - our mission is to empower every aspiring tech professional worldwide.
            </p>
          </motion.div>
        </div> */}
      {/* </motion.section> */}

      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Join Our Mission</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          We're always looking for passionate individuals to join our team and help shape the future of tech interview preparation.
        </p>
        <motion.a
          href="#"
          className="inline-block bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Open Positions
        </motion.a>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;