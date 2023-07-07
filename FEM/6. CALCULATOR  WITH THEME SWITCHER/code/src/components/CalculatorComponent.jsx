import { useState, useEffect } from "react";
import Attribution from "./Attribution.jsx";

const CalculatorComponent = () => {
  const [theme, setTheme] = useState(1);

  // Load theme from local storage on component initialization
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(parseInt(storedTheme) || 1);
    }
  }, []);

  // Update theme and save it to local storage
  const handleThemeChange = (e) => {
    const selectedTheme = parseInt(e.target.value);
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <main className={`theme-${theme}`}>
      <section className="wrapper">
        <header className="row-one">
          <div className="logo">
            <h3>calc</h3>
          </div>

          <div className="theme-switcher">
            <span>Theme</span>
            <div className="switcher">
              <ul className="ranges">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <div className="slider">
                <input
                  type="range"
                  name=""
                  id=""
                  min="1"
                  max="3"
                  value={theme}
                  onChange={handleThemeChange}
                />
              </div>
            </div>
          </div>
        </header>
        <article className="row-two">
          <input type="text" name="" id="" />
        </article>
        <article className="row-three">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="delete">del</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>x</button>
          <button className="reset">reset</button>
          <button className="equals">=</button>
        </article>
      </section>

      <Attribution />
    </main>
  );
};

export default CalculatorComponent;
