import React from "react";
import "./Auth.css";
function Auth() {
  return (
    <div className="login-wrapper">
      <div className="login-img">
        <img src="https://c7.uihere.com/files/497/432/35/5bbafc5febe2e.jpg" />
      </div>
      <form>
        <h1 className="login">Please Log In</h1>
        <input type="text" placeholder="    Enter your Username" />
        <input type="password" placeholder="    Enter your password" />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
