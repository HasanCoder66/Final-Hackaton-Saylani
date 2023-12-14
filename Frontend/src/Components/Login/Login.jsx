import "./Login.css";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "../../Firebase/config";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginFailed, loginPending, loginSuccess } from "../../redux/Slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const auth = getAuth();
  const email = useRef();
  const password = useRef();

  const loginHandlerWithFirebase = () => {
    console.log("login handler is working");
    signInWithEmailAndPassword(
      auth,
      email?.current?.value,
      password?.current?.value
    )
      .then((userCredential) => {
        // Signed in
        console.log("sign in user");
        const user = userCredential.user;
        // ...
        if (user) {
          toast.success("user Login successfully");
          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else {
          toast.warning("user not Login successfully");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  // login with mongodb
  const loginHandlerWithMongoDb = async (e) => {
    e.preventDefault();
    console.log(email, "=====>>>>> email");
    console.log(password, "=====>>>>> password");
    if (email.current.value === "" || password.current.value === "") {
      // console.log("Missing fields")
      toast.error("Missing fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    }  else {
      const userCredential = {
        email: email.current.value,
        password: password.current.value,
      };

      console.log(userCredential);
      dispatch(loginPending())
      try {
        const response = await axios.post(
          `http://localhost:8500/api/auth/login`,
          userCredential
        );
        console.log(response);
        dispatch(loginSuccess(response?.data))
        if (response.statusText === "OK") {
          toast.success("user Login successfully");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        dispatch(loginFailed(error.response))

      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">
            <img src="../../src/assets/BH_Logo_AI-01.png" alt="" />
          </div>
          {/* <span className="loginDesc">Connect with us to see new blogs.</span> */}
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email Address"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              ref={password}
              placeholder=" Password"
              type="password"
              className="loginInput"
            />

            <button className="loginButton" onClick={loginHandlerWithMongoDb}>
              {" "}
              Log In
            </button>
            <span className="loginForgot">Forgot Password</span>
            <Link to={"/signup"}>
              <button className="loginRegisterButton">
                Create a new Account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
