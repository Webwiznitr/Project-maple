import React, { useState, useEffect } from "react";

import "./App.css";

function Home() {
  const [imgtransition, setimgtransition] = useState("");

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setimgtransition("foodimg-fadeout")
      : setimgtransition("");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div id="first-solid-bar">
      <div className="cafefood">
        <div className={`cafefood-img  ${imgtransition}`}></div>
        <div className="cafefood-text">
          <h3>Your Order Sir </h3>
          <p>
            Brand style guides have historically been presented as a large
            document, complete with headers. Uber's approach to digitally
            presenting their brand guidelines excels at presenting a large
            volume of information in an easy-to-use, intuitive format. Users can
            quickly and easily navigate through this simple, forward-thinking
            menu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
