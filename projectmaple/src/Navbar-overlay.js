import React, { useState, useEffect } from "react";

function Navbaroverlay() {
  const [headerColor, setHeaderColor] = useState("white");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor("inline") : setHeaderColor("none");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div style={{ display: headerColor }} id="nav-bar-overlay">
      <a href="" id="nav-bar-item-Avatar">
        <img src="https://image.freepik.com/free-vector/food-drink-logo-design-brand-label_125269-37.jpg" />
      </a>
      <a href="" id="nav-bar-item-top">
        Foods&Drinks
      </a>
      <a href="" id="nav-bar-item-Ask">
        Ask
      </a>
      <a href="" id="nav-bar-item-About">
        About&nbsp;&nbsp;&&nbsp;&nbsp;Contact
      </a>
    </div>
  );
}

export default Navbaroverlay;
