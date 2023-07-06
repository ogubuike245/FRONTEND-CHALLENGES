import { useEffect, useState } from "react";
import TodoSection from "./TodoSection.jsx";
import Header from "./Header.jsx";

const MainContainer = () => {
  const setThemeInStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };

  setThemeInStorage("light");

  const getThemeInStorage = () => {
    localStorage.getItem("theme"); // returns 'light' in this case
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <main className={isDarkMode ? "dark" : "light"}>
      <section className="container">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <TodoSection />
      </section>
    </main>
  );
};

export default MainContainer;
