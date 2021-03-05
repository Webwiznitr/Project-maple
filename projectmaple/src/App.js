import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Navbaroverlay from "./Navbar-overlay";
import Navbar from "./Navbar";
import Auth from "./Auth";
import useToken from "./useToken";
import Loader from "./Loader";
import Contact from "./Contact";

function App() {
  //const { token, setToken } = useToken();

  // if (!token) {
  //   return <Auth setToken={setToken} />;
  // }
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //setLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <div className="App">
      {isLoading == true ? (
        <Loader />
      ) : (
        <Fragment>
          <Navbaroverlay />
          <Navbar className="Auth-navbar" />
          <Contact/>
        </Fragment>
      
      )}
    </div>
  );
}

export default App;
