import React from "react";

import "./App.css";
function Navbar() {
  return (
    <div className="nav-bar">
      <h3 id="site-title">Foods&Drink</h3>
      <div id="sections">
        <a href="" className="Avatar">
          <img
            src="https://image.freepik.com/free-vector/food-drink-logo-design-brand-label_125269-37.jpg"
            alt="Logo"
          />
        </a>
        <a href="" id="about-section">
          ABOUT
        </a>
        <a href="" id="contact-section">
          CONTACT
        </a>
        <a href="" id="other-section">
          OTHER
        </a>
        <a href="" id="ask-section">
          ASK
        </a>
      </div>
    </div>
  );
}
export default Navbar;
