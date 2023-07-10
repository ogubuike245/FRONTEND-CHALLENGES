import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row-one">
        <div className="membership">
          <p>35,000+ already joined</p>
        </div>

        <div className="heading">
          <h1> Stay up-to-date with what we’re doing</h1>
        </div>

        <div className="input-field">
          <input type="email" name="" id="" />
          <button> Contact Us</button>
        </div>
      </div>

      <div className="row-two">
        <div className="logo">LOGO</div>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        <div className="socials">
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
