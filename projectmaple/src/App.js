import React from "react";
import "./App.css";
import Navbaroverlay from "./Navbar-overlay";
import Navbar from "./Navbar";
import Auth from "./Auth";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Auth setToken={setToken} />;
  // }
  return (
    <div className="App">
      <Navbaroverlay />
      <Navbar className="Auth-navbar" />
    </div>
  );
}

export default App;
