import React from "react";
import myLogo from "../../images/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar-container" id="sidebar">
      <div className="logo-container">
        <img src={myLogo} alt="my logo" />
      </div>
      <ul>
        <Link to="/" className="router-link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="router-link">
          <li>About</li>
        </Link>
        <li>Portfolio</li>
        <li>Work-ex</li>
        <Link to="/contact" className="router-link">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="social-icons" id="social">
        <BsLinkedin />
        <AiFillGithub />
      </div>
    </div>
  );
}

export default Sidebar;
