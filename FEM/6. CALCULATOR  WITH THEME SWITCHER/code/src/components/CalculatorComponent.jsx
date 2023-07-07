import { useState, useEffect } from "react";
import Attribution from "./Attribution.jsx";

const CalculatorComponent = () => {
  const [theme, setTheme] = useState(1);
  const [inputValue, setInputValue] = useState("");

  // Load theme and input value from local storage on component initialization
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? 1
      : 2;
    const initialTheme = storedTheme ? parseInt(storedTheme) : systemPreference;
    setTheme(initialTheme);
  }, []);

  // Update theme and save it to local storage
  const handleThemeChange = (e) => {
    const selectedTheme = parseInt(e.target.value);
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  // Handle button click events
  const handleButtonClick = (value) => {
    if (value === "=") {
      // Perform calculation
      const result = eval(inputValue); // Warning: Using eval is not recommended for production use

      const formattedResult = result.toLocaleString(); // Format the result with commas
      setInputValue(formattedResult);
    } else if (value === "reset") {
      // Reset input value
      setInputValue("");
    } else if (value === "del") {
      // Delete the last character
      setInputValue(inputValue.slice(0, -1));
    } else {
      // Append the clicked button value to the input value
      setInputValue(inputValue + value);
    }
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
                  name="range-slider"
                  id="range-slider"
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
          <input
            type="text"
            name=""
            id=""
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </article>
        <article className="row-three">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="delete" onClick={() => handleButtonClick("del")}>
            del
          </button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("*")}>x</button>
          <button className="reset" onClick={() => handleButtonClick("reset")}>
            reset
          </button>
          <button className="equals" onClick={() => handleButtonClick("=")}>
            =
          </button>
        </article>
      </section>

      <Attribution />
    </main>
  );
};

export default CalculatorComponent;
