import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ToggleButton.css';
import { FaSun, FaMoon } from 'react-icons/fa';


const ToggleButton = () => {


  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('isDarkMode');
    if (storedPreference) {
      setIsDarkMode(JSON.parse(storedPreference));
    } else {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button

      data-testid='ToggleButton'
      onClick={toggleDarkMode}
      className={`relative w-12 h-6 bg-gray-300 dark:bg-gray-800 rounded-full focus:outline-none transition-colors duration-300 ${isDarkMode ? 'dark' : ''
        }`}
    >
      <div className="absolute inset-1 left-1 flex items-center justify-center w-4 h-4 bg-white dark:bg-gray-700 rounded-full transition-transform duration-300 transform translate-x-0 dark:translate-x-6">
        {isDarkMode ? (
          <FaMoon className="text-yellow-400 p-[1px]" />
        ) : (
          <FaSun className="text-yellow-500 p-[1px]" />
        )}
      </div>
    </button>
  );
};


ToggleButton.propTypes = {};

ToggleButton.defaultProps = {};

export default ToggleButton;
