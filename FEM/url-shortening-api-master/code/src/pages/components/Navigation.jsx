import React from "react";

const Navigation = () => {
  return (
    <nav className="container">
      <article className="nav-links">
        <div className="logo">
          <img src="/images/logo.svg" alt="" />
        </div>

        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </article>

      <article className="actions">
        <button>Login</button>
        <button>Sign Up</button>
      </article>

      <article className="menu-icons">
        <i class="fa fa-bars "></i>
        <i class="fa fa-times"></i>
      </article>
    </nav>
  );
};

export default Navigation;
