import { useEffect, useState } from "react";
import TodoSection from "./TodoSection.jsx";
import Header from "./Header.jsx";

const MainContainer = () => {
  const [theme, setTheme] = useState();

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <section className="container">
        <Header theme={theme} handleThemeChange={handleThemeChange} />
        <TodoSection />
      </section>
    </main>
  );
};

export default MainContainer;
