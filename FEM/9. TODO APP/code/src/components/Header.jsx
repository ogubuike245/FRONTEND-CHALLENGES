import sunIcon from "/images/icon-sun.svg";
import moonIcon from "/images/icon-moon.svg";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      <h1> Todo</h1>
      <div>
        <img
          onClick={toggleDarkMode}
          src={isDarkMode ? sunIcon : moonIcon}
          alt="theme-switcher-icon"
        />
      </div>
    </header>
  );
};

export default Header;
