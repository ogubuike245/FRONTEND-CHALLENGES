import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="../../public/images/logo-bookmark.svg" alt="" />
        </div>
        <ul>
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
