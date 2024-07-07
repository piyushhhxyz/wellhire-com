import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      onClick={toggleDarkMode} 
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;