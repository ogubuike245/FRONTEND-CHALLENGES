import React, { useState } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="container">
      <article className="nav-links">
        <div className="logo">
          <img src="/images/logo.svg" alt="" />
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={` ${isMobileMenuOpen ? "active" : ""}`}
        >
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </motion.ul>
      </article>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className={`actions ${isMobileMenuOpen ? "active" : ""}`}
      >
        <button>Login</button>
        <button>Sign Up</button>
      </motion.article>

      <article className="menu-icons">
        <i
          className={`fa ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
          onClick={toggleMobileMenu}
        ></i>
      </article>
    </nav>
  );
};

export default Navigation;
