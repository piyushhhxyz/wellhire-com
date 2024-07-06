import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Piyush',
    role: 'Backend and AI',
    image: 'https://avatars.githubusercontent.com/u/171325594?v=4',
    description: 'Backend Engineer @ Dukaan',
  },
  {
    name: 'Shiwangi',
    role: 'Product Designer and Frontend',
    image: 'https://avatars.githubusercontent.com/u/77545230?v=4',
    description: 'Frontend Engineer @ Accenture',
  },
  {
    name: 'Parv',
    role: 'Backend',
    image: 'https://avatars.githubusercontent.com/u/134908757?v=4',
    description: 'SDE @ TLE- Eliminators',
  },
];

const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">About WellHire</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Our Story</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          WellHire was born out of a shared frustration and a common dream. As recent graduates ourselves, we experienced firsthand the challenges of preparing for technical interviews and online assessments (OAs) for top tech companies.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          We realized that while there were plenty of coding platforms and interview prep resources out there, none of them truly captured the essence of what companies were actually asking in their OAs. That's when we decided to create WellHire - a platform that bridges this gap by providing real, company-specific OA questions to help students prepare more effectively.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our mission is simple: to empower students with the right tools and resources to ace their technical interviews and land their dream jobs in the tech industry.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-purple-600 dark:text-purple-400 text-center mb-2">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-center">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Our Impact</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Since our launch, WellHire has helped thousands of students across India prepare for and succeed in their technical interviews. We've received countless success stories from users who have landed positions at top tech companies, thanks to the targeted preparation our platform provides.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          But we're not stopping here. We're constantly working to improve our platform, expand our question bank, and develop new features to make your preparation even more effective. With WellHire, we're not just helping you land a job - we're helping you kickstart your career in tech.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;