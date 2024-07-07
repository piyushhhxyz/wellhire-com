// TODO: break into components, connect rest pages.
// TODO: add images in testimonials(pfp.maker)

// Folder: pages,components, all mock data in single file in utils, do proper API handling.

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { companies_2, testimonials } from "../utils/mockData";

const LandingPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <section className="mt-16 text-center relative">
        <h2 className="text-5xl cursor-default md:text-6xl font-bold mb-6 relative z-10">
          <Typewriter
            options={{
              strings: [
                "Ace your next tech OAs",
                "Land your Next Dream Job",
                "Prepare Smarter & Faster",
              ],
              autoStart: true,
              loop: true,
              delay: 35,
              deleteSpeed: 35,
              wrapperClassName:
                "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600",
            }}
          />
        </h2>
        <p className="text-xl cursor-default md:text-2xl dark:text-gray-200 text-gray-800  mb-8 max-w-3xl mx-auto relative z-10">
          Access real Online Assessment questions from top tech companies
          visiting tier 1 colleges across India. Prepare smarter, succeed
          faster, and join a community of ambitious tech aspirants.
        </p>
        <Link
          to="/signup"
          className="bg-purple-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-purple-700 transition relative z-10"
        >
          Start Preparing Now
        </Link>
      </section>

      {/* Companies_2 section */}
      <section className="mt-20 overflow-hidden">
        <h3 className="text-2xl font-semibold text-center cursor-default mb-8 text-gray-800 dark:text-gray-200">
          Interview Questions for Top Companies
        </h3>
        <div className="relative">
          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -1600] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...companies_2, ...companies_2, ...companies_2].map(
              (company, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={`https://logo.clearbit.com/${company.toLowerCase()}.com`}
                    alt={company}
                    className="w-20 h-20"
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Features section */}
      <section className="mt-20">
        <h3 className="text-3xl font-semibold text-center mb-12 text-gray-800 cursor-default dark:text-gray-200">
          Why Choose WellHire?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-default">
          {[
            {
              title: "Real OA Questions",
              desc: "Access actual questions asked in company OAs, updated regularly to reflect the latest trends.",
            },
            {
              title: "Community Support",
              desc: "Join a vibrant community of peers, share experiences, and learn collaboratively.",
            },
            {
              title: "Personalized Learning",
              desc: "Track your progress and receive tailored recommendations to improve your skills.",
            },
            {
              title: "Company-Specific Prep",
              desc: "Focus your preparation on your dream companies with targeted question sets and insights.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                {feature.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials section */}
      <section className="mt-20 overflow-hidden">
        <h3 className="text-3xl cursor-default font-semibold text-center mb-12 text-gray-800 dark:text-gray-200">
          What Our Users Say
        </h3>
        <div className="relative cursor-default">
          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -2400] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg w-80 flex-shrink-0"
                >
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-purple-600 dark:text-purple-400">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.college}
                  </p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="mt-20 text-center">
        <h3 className="text-3xl font-semibold cursor-default mb-8 text-gray-800 dark:text-gray-200">
          Ready to ace your next OA?
        </h3>
        <p className="text-xl cursor-default text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Join thousands of students preparing smarter with WellHire. Get access
          to real questions, expert insights, and a supportive community.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-purple-700 transition inline-block"
          >
            Get Started for Free
          </Link>
        </motion.div>
      </section>

      {/* Fun facts section */}
      <section className="mt-20 cursor-default bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
        <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 text-center">
          Fun Facts
        </h3>
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
    </div>
  );
};

export default LandingPage;
