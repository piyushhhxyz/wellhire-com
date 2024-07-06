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
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-indigo-50 to-purple-100'} min-h-screen overflow-x-hidden`}>
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <header className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">WellHire</h1>
          <nav className="hidden md:flex space-x-6">
            {['OA Questions', 'Companies', 'Community', 'About Us'].map((item) => (
              <a key={item} href="#" className="text-lg text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">{item}</a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a href="#" className="text-lg text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">Login</a>
            <a href="#" className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition">Get started</a>
          </div>
        </header>

        <main className="mt-16">
          <section className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <Typewriter
                options={{
                  strings: ['Ace your tech OAs', 'Land your dream job', 'Prepare smarter'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600',
                }}
              />
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Access real Online Assessment questions from top tech companies visiting tier 1 colleges across India. 
              Prepare smarter, succeed faster, and join a community of ambitious tech aspirants.
            </p>
            <a href="#" className="bg-purple-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-purple-700 transition">
              Start Preparing Now
            </a>
          </section>

          <section className="mt-20 overflow-hidden">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">Interview Questions for Top Companies</h3>
            <div className="relative">
              <motion.div 
                className="flex space-x-8"
                animate={{ x: [0, -1600] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {[...companies, ...companies, ...companies].map((company, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img src={`https://logo.clearbit.com/${company.toLowerCase()}.com`} alt={company} className="w-20 h-20" />
                  </div>
                ))}
              </motion.div>
            </div>
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
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">{feature.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
                </div>
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
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80 flex-shrink-0">
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
            <a href="#" className="bg-purple-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-purple-700 transition">
              Get Started for Free
            </a>
          </section>
        </main>

        <footer className="mt-20 py-10 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">WellHire</h4>
              <p className="text-gray-600 dark:text-gray-400">Empowering students to ace their tech interviews.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Home</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">OA Questions</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Community</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">About Us</a></li>
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
          <p className="mt-8 text-center text-gray-600 dark:text-gray-400">© 2023 WellHire. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;