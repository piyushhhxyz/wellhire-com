import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;