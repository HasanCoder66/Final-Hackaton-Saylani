import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {Person2Icon , AssignmentIndIcon} from '@mui/icons-material';
// import AssignmentIndIcon from '@mui/icons-material/';

import './sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Slices/authSlice";
import Center from '../center/Center';
function Sidebar() {
    const { user, isLoading, error } = useSelector((state) => state.auth);
    // console.log(user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const logoutHandlerWithMongoDb = () => {
      console.log("logout handler is working ");
      dispatch(logout());
      toast.success('user Logout Successfuly')
      navigate("/login");
    //   window.location.href = "/login";
    };
    return (
        <>
        <div className='mainDiv'>
      <div className="sideBar">
        <div className="sideBarWrapper">
          <button className=" logo">LOGO</button>
          <button className="sideBarButton">
            {/* <Person2Icon /> */}
           Students</button>
          <button className="sideBarButton">
            {/* <AssignmentIndIcon /> */}
             Attendence</button>
          {/* <hr className="sideBarHr" /> */}
          <ul className="sideBarFriendList">
           {/* {Users.map(u => (
            <Friend key={u.id} user={u}/>
           ))} */}
          </ul>
         
        </div>
        <div className='logoutBtn sideBarButton'>
            <button onClick={logoutHandlerWithMongoDb}>Logout</button>
        </div>
      </div>

      <Center />
      </div>
      </>
    );
  }
  
  export default Sidebar;