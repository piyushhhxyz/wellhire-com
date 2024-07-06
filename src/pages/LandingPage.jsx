import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const companies = ['Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple', 'Netflix', 'Uber', 'Airbnb'];
  const testimonials = [
    { name: 'Priya Sharma', college: 'IIT Delhi', text: "WellHire's OA question bank was instrumental in my preparation. I cleared OAs for 5 dream companies!" },
    { name: 'Rahul Verma', college: 'BITS Pilani', text: "The community support on WellHire is unparalleled. It's like having a personal prep team." },
    { name: 'Ananya Desai', college: 'NIT Trichy', text: "Thanks to WellHire, I felt confident tackling even the toughest OA questions. Landed my dream job at Google!" },
    { name: 'Arjun Reddy', college: 'IIIT Hyderabad', text: "WellHire's comprehensive coverage of company-specific questions gave me a significant edge in my preparations." },
    { name: 'Neha Gupta', college: 'DTU', text: "The peer-to-peer learning on WellHire's platform accelerated my growth. It's more than just a question bank - it's a community!" },
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen overflow-x-hidden`}>
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <header className="flex justify-between items-center py-6">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">WellHire</h1>
          <nav className="hidden md:flex space-x-6">
            {['OA Questions', 'Companies', 'Community', 'About Us'].map((item) => (
              <a key={item} href="#" className="text-lg text-gray-900 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">{item}</a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a href="#" className="text-lg text-gray-900 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Login</a>
            <a href="#" className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition">Get started</a>
          </div>
        </header>

        <main className="mt-16">
          <section className="text-center relative">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative z-10">
              <Typewriter
                options={{
                  strings: ['Ace your tech OAs', 'Land your dream job', 'Prepare smarter'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600',
                }}
              />
            </h2>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-200 mb-8 max-w-3xl mx-auto relative z-10">
              Access real Online Assessment questions from top tech companies visiting tier 1 colleges across India. 
              Prepare smarter, succeed faster, and join a community of ambitious tech aspirants.
            </p>
            <a href="#" className="bg-purple-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-purple-700 transition relative z-10">
              Start Preparing Now
            </a>
          </section>

          <section className="mt-20">
            <h3 className="text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-200">Why Choose WellHire?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Real OA Questions', desc: 'Access actual questions asked in company OAs, updated regularly to reflect the latest trends.' },
                { title: 'Community Support', desc: 'Join a vibrant community of peers, share experiences, and learn collaboratively.' },
                { title: 'Personalized Learning', desc: 'Track your progress and receive tailored recommendations to improve your skills.' },
                { title: 'Company-Specific Prep', desc: 'Focus your preparation on your dream companies with targeted question sets and insights.' },
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">{feature.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>


          <section className="mt-20 overflow-hidden">
            <h3 className="text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-200">What Our Users Say</h3>
            <div className="relative">
              <motion.div 
                className="flex space-x-8"
                animate={{ x: [0, -2400] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              >
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg w-80 flex-shrink-0">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-purple-600 dark:text-purple-400">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.college}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="mt-20 text-center">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Ready to ace your next OA?</h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of students preparing smarter with WellHire. 
              Get access to real questions, expert insights, and a supportive community.
            </p>
            <motion.a 
              href="#" 
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-purple-700 transition inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started for Free
            </motion.a>
          </section>

          <section className="mt-20 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 text-center">Fun Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  1000+
                </motion.div>
                <p className="text-gray-700 dark:text-gray-300">OA Questions</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  50+
                </motion.div>
                <p className="text-gray-700 dark:text-gray-300">Top Companies</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  10,000+
                </motion.div>
                <p className="text-gray-700 dark:text-gray-300">Happy Users</p>
              </div>
            </div>
          </section>
          </main>

          <footer className="mt-20 py-10 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">WellHire</h4>
                <p className="text-gray-900 dark:text-gray-400">Empowering students to ace their tech interviews.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Home</a></li>
                  <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">OA Questions</a></li>
                  <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Community</a></li>
                  <li><a href="#" className="text-gray-900 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">About Us</a></li>
                </ul>
              </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Twitter</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">LinkedIn</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Discord</a></li>
              </ul>
            </div>
            </div>
          <p className="mt-8 text-center text-gray-900 dark:text-gray-400">© 2023 WellHire. All rights reserved.</p>
        </footer>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* Easter Egg */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          className="text-9xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            rotate: 360 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(128, 0, 128, 0.7))"
          }}
        >
          🚀
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;