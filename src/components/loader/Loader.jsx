import React, { useEffect } from "react";
import LoaderG from "../../images/loader.gif";
import Logo from "../../images/logo.png";
import "./Loader.scss";

function Loader() {
  useEffect(() => {
    document.getElementById("model").addEventListener("load", () => {
      document.getElementById("loader").classList.add("hidden");
    });
  });
  return (
    <div id="loader">
      <div className="loader-container">
        <img src={Logo} alt="logo" />
        <h2>Great Things Take Time . .</h2>
        <img src={LoaderG} alt="loader" />
      </div>
    </div>
  );
}

export default Loader;
