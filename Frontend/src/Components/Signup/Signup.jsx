import "./Signup.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signupPending, signupSuccess } from "../../redux/Slices/authSlice";
// import Footer from "../Footer/Footer";

export default function Signup() {
  const navigate = useNavigate();
  const auth = getAuth();
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const cPassword = useRef();
  const dispatch = useDispatch();
  const {user , isLoading , error} = useSelector((state) => state.auth);

  // Signup with Firebase
  const signupHandlerWithFirebase = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
    console.log(userName);

    if (
      email.current.value === "" ||
      userName.current.value === "" ||
      password.current.value === "" ||
      cPassword.current.value === ""
    ) {
      // console.log("Missing fields")
      toast.error("Missing fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    } else if (password.length < 8) {
      toast.warning("Password must be atleast 8 characters long", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    } else if (password !== cPassword) {
      toast.warning("Password does not match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    }else {
      console.log("signup handler is working");

      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
  
          if (user) {
            toast.success("user signup successfully");
            setTimeout(() => {
              navigate("/login");
            }, 5000);
          } else {
            toast.warning("user not registered");
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ..
        });
    }
  
  };

  const signupHandlerWithMongoDb = async (e) => {
    e.preventDefault();

    // console.log(email);
    // console.log(password);
    // console.log(userName);

    if (
      email.current.value === "" ||
      userName.current.value === "" ||
      password.current.value === "" ||
      cPassword.current.value === ""
    ) {
      // console.log("Missing fields")
      toast.error("Missing fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    } else if (password.current.value.length < 8) {
      toast.warning("Password must be at least 8 characters long", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    } else if (password.current.value !== cPassword.current.value) {
      toast.warning("Password does not match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    } else {
      console.log("signup handler is working");
      const userCredential = {
        userName: userName.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      // console.log(userCredential);
      dispatch(signupPending())
      try {
        const response = await axios.post(
          `http://localhost:8500/api/auth/register`,
          userCredential
          
        );
        // console.log(response?.data);
        dispatch(signupSuccess())
      
        if(response.statusText   === 'OK') {
          toast.success("user signup successfully");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } 
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          {/* <div className="loginLeft">
            <div className="loginLogo">
              <img src="../../src/assets/BH_Logo_AI-01.png" alt="" />
            </div>
          </div> */}
          <div className="loginRight">
            <div className="signupBox">
              <input
                placeholder="UserName"
                type="text"
                className="loginInput"
                ref={userName}
              />
              <input
                placeholder="Email Address"
                type="email"
                className="loginInput"
                ref={email}
              />
              <input
                placeholder=" Password"
                type="password"
                className="loginInput"
                ref={password}
              />
              <input
                placeholder="Confirm Password "
                type="password"
                className="loginInput"
                ref={cPassword}
              />

              <button
                className="loginButton"
                onClick={signupHandlerWithMongoDb}
              >
                {" "}
                Sign Up
              </button>
              <Link to={"/login"}>
                <button className="loginRegisterButton">
                  Login into Account
                </button>
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-left" autoClose={5000} newestOnTop={false} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      </div>

      {/* <Footer/> */}
    </>
  );
}


