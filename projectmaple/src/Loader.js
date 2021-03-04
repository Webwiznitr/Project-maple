import React, { Fragment } from "react";
import Animation from "../src/assets/loader.gif";

const Loader = () => (
  <Fragment>
    <img
      src={Animation}
      style={{ display: "block", margin: "auto", marginTop: "15%" }}
    />
  </Fragment>
);
export default Loader;
