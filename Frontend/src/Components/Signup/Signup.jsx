import "./Signup.css";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword , addDoc , collection , setDoc , db, doc} from "../../Firebase/config";
// db ,
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  signupFailed,
  signupPending,
  signupSuccess,
  loginFailed,
  loginSuccess,
  loginPending,
} from "../../redux/Slices/authSlice";
import { auth, provider } from "../../Firebase/config";
import { signInWithPopup } from "firebase/auth";
import { current } from "@reduxjs/toolkit";
// import 
// import Cookies from "js-cookie";
// import Footer from "../Footer/Footer";

export default function Signup() {
  // const allCookie = Cookies.get()
  // const cookiesArray = Object.entries(allCookie)

  // const [token ,setToken ] = useState({name : '' , value : ''})
  // const [count ,setCount ] = useState(0)

  // navigate from react router dom =====>
  const navigate = useNavigate();

  // Firebase auth mai store kia hai ====>
  const auth = getAuth();

  // Reference ban raha hai yaha pai input fields ka
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const cPassword = useRef();

  // ======> 🏹

  const dispatch = useDispatch();

  // Destructure ====>
  const { user, isLoading, error } = useSelector((state) => state.auth);

  // Signup with Firebase
  const signupHandlerWithFirebase =  (e) => {
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
      toast.warning("Password must be at least 8 characters long", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    // } else if (password !== cPassword) {
    } else if (password?.current?.value !== cPassword?.current?.value) {
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

      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then( async (userCredential)  => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          console.log(user.uid);

         
          if (user) {
            try {
              // Add a new document in collection "cities"
              await setDoc(doc(db, "user", user.uid), {
               email : email?.current?.value ,
               userName : userName?.current?.value
                
              });
            } catch (error) {
              console.log(error)
            }
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
      dispatch(signupPending());
      try {
        const response = await axios.post(`/api/auth/register`, userCredential);
        // console.log(response?.data);
        dispatch(signupSuccess());
      

        if (response.statusText === "OK") {
          toast.success("user signup successfully");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } catch (error) {
        console.log(error.response.data);
        dispatch(signupFailed(error.response));
      }
    }
  };

  const signupHandlerWithGoogle = async () => {
    console.log("signup with google working");
    try {
      dispatch(loginPending());
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      console.log(result.user.displayName)
      console.log(result.user.email)
      const response = await axios.post("/api/auth/google", {
        
        userName: result.user.displayName,
        email: result.user.email,
        // img : result.user.photoURL,
      });
      
      console.log(response)
      dispatch(loginSuccess(response.data));
      navigate('/')
    } catch (error) {
      dispatch(loginFailed());
    }
  };

  // Cookies.set(token.name , token.value)

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

              <button
                className="loginButtonWithGoogle"
                onClick={signupHandlerWithGoogle}
              >
                {" "}
                Continue with Google
              </button>
              <Link to={"/login"}>
                <button className="loginRegisterButton">
                  Login into Account
                </button>
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* position="bottom-left" autoClose={5000} newestOnTop={false} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" */}
      </div>

      {/* <Footer/> */}
    </>
  );
}
