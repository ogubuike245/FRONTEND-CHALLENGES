import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="../../public/images/logo-bookmark.svg" alt="" />
        </div>

        <div className="menu-icons">
          <img
            src="../../public/images/icon-hamburger.svg"
            alt=""
            className={`open-icon ${isNavOpen ? "hidden" : "visible"}`}
            onClick={toggleNav}
          />
          <img
            src="../../public/images/icon-close.svg"
            alt=""
            className={`close-icon ${isNavOpen ? "visible" : "hidden"}`}
            onClick={toggleNav}
          />
        </div>

        <ul className={`nav-menu ${isNavOpen ? "active" : ""}`}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <button>Login</button>
        </ul>
      </nav>

      <section>
        <article className="content">
          <h1> A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="cta-hero">
            <button>Get it on Chrome</button>
            <button> Get it on Firefox</button>
          </div>
        </article>
        <article className="illustration">
          <img src="../../public/images/illustration-hero.svg" alt="" />
        </article>
      </section>
    </header>
  );
};

export default Header;
