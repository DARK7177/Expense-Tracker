import React, { useState, useEffect } from 'react';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply the dark-mode class to the body when the theme changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]); // The effect will run when darkMode changes

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleButton;
