import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login to WellHire</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account? <Link to="/signup" className="text-purple-600 hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;