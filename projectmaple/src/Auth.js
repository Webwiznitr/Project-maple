import React, { useState } from "react";
import "./Auth.css";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/Auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .catch((err) => console.error(err));
}

function Auth({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    console.log(token);
    setToken(token);
  };
  return (
    <div className="login-wrapper">
      <div className="login-img">
        <img src="https://c7.uihere.com/files/497/432/35/5bbafc5febe2e.jpg" />
      </div>
      <form onSubmit={handleSubmit}>
        <h1 className="login">Please Log In</h1>
        <input
          type="text"
          placeholder="    Enter your Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="    Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Auth.propTypes = {
  handlenew: PropTypes.func.isRequired,
};

export default Auth;
