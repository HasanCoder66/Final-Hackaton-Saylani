import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Slices/authSlice";
// import Button from "../Button";

function Navbar({ setDarkMode, darkMode}) {
  const { user, isLoading, error } = useSelector((state) => state.auth);
  // console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandlerWithMongoDb = () => {
    console.log("logout handler is working ");
    dispatch(logout());
    navigate('/login')
    window.location.href = "/login";
  };
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

        {user ? (
          <Link to="">
            <li>
              <a>`logged in ${user}` </a>
            </li>
          </Link>
        ) : (
          <>
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
          </>
        )}

        <Link>
          <li onClick={logoutHandlerWithMongoDb}>
            <a>Logout</a>
          </li>
        </Link>

        {/* <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} mode
        </Item> */}
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
