import sunIcon from "/images/icon-sun.svg";
import moonIcon from "/images/icon-moon.svg";

const Header = ({ theme, handleThemeChange }) => {
  return (
    <header>
      <h1> Todo</h1>
      <div>
        <img
          onClick={handleThemeChange}
          src={theme === "dark" ? sunIcon : moonIcon}
          alt="theme-switcher-icon"
        />
      </div>
    </header>
  );
};

export default Header;
