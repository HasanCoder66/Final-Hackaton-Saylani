import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import Button from "../Button";

function Navbar() {
  return (
    <div className="navbar navbar shadow sticky z-50 top-0 bg-white border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="logo">
        {" "}
        {/* <img src="../../src/assets/BH_Logo_AI-01.png" alt="Branding-Hopes " /> */}
      </div>
      <ul className="nav-links">
        <Link>
          <li>
            <a>Home</a>
          </li>
        </Link>

        <Link to="/login">
          <li>
            <a>Login</a>
          </li>
        </Link>
        <Link to="/signup">
          <li>
            <a>Signup</a>
          </li>
        </Link>
        <Link to="/login">
          <li>
            <a>Logout</a>
          </li>
        </Link>
        {/* <Link to="/about">
          <li>
            <a>About</a>
          </li>
        </Link> */}
        {/* <Link to="/services">
          <li>
            <a>Services</a>
          </li>
        </Link> */}
        {/* <Link to="/blog">
          <li>
            <a>Blog</a>
          </li>
        </Link> */}
        {/* <Link to="/contact">
          <li>
            <a>Contact</a>
          </li>
        </Link> */}
      </ul>
      {/* {type !== "about" ? (
        <div class="button-container">
          <Link to="/login">
            <button class="login-button">Login</button>
          </Link>
          <Link to="/signup">
            <button class="signup-button">Signup</button>
          </Link>
        </div>
      ) : (
        " "
      )} */}
    </div>
  );
}

export default Navbar;
