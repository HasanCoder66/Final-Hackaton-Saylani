import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./icons.js";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Attendence App</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
              {/* <CodeIcon /> */}
            </span>
          </NavLink>

          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                {/* <HamburgetMenuClose />{" "}x */}
              </span>
            ) : (
              <span className="icon">
                {/* <HamburgetMenuOpen /> */}
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;