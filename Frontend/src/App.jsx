import { useState } from "react";
// import './App.css'
// import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import AddStudent from './Components/AddStudent/AddStudent.jsx'
import Attendance from "./Components/Attendance/Attendance.jsx";
// import { PersistGate } from "redux-persist/lib/integration/react.js";
// import persistor from './redux/store.js'
// import Contact from './components/Contact/Contact.jsx'
// import About from './components/About/About.jsx'
function App() {
  return (
    <Provider store={store}>
       {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
