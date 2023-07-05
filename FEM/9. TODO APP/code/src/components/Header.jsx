import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={isDarkMode ? "dark" : "light"}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;
