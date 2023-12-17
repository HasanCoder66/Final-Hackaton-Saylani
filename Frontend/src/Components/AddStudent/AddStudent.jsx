import axios from "axios";
import Header from '../Header/Header';
import { useState } from "react";
import "./AddStudent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import app from "../../firebase";    
// import { addProduct } from "../../redux/apiCalls";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [studentId, setStudentId] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const AddStudentHandler = async (e) => {
    e.preventDefault();
    const object = {
      studentId,
      firstname,
      lastname,
      email,
      course,
      phoneNumber,
      password,
    };
    try {
      const result = await axios.post(
        "http://localhost:8500/api/admin/add-students",
        object
      );
      console.log(result);
      console.log(result?.data);
    //   toast.success('User Added Successfully')
    // if(result?.data?.data?.status === 'success'){
    // toast.success("user Login successfully");
    //     setTimeout(() => {
        //       }, 3000);
        //     }
        
                navigate('/addStudent')
    } catch (error) {
      console.log(error);
    }
  };

  // const [inputs, setInputs] = useState('');

  // const [file, setFile] = useState(null);

  //     const dispatch = useDispatch();

  //     const handleChange = (e) => {
  //       setInputs((prev) => {
  //         return { ...prev, [e.target.name]: e.target.value };
  //       });
  //     };
  //     // const handleCat = (e) => {
  //   //   setCat(e.target.value);
  //     // };
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     const fileName = new Date().getTime() + file.name;
  //     const storage = getStorage(app);
  //     const storageRef = ref(storage, fileName);
  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     // Register three observers:
  //     // 1. 'state_changed' observer, called any time the state changes
  //     // 2. Error observer, called on failure
  //     // 3. Completion observer, called on successful completion
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         // Observe state change events such as progress, pause, and resume
  //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log("Upload is " + progress + "% done");
  //           switch (snapshot.state) {
  //             case "paused":
  //               console.log("Upload is paused");
  //               break;
  //             case "running":
  //               console.log("Upload is running");
  //               break;
  //             default:
  //           }
  //         },
  //         (error) => {
  //           // Handle unsuccessful uploads
  //         },
  //         () => {
  //           // Handle successful uploads on complete
  //           // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //             const product = { ...inputs, picture: downloadURL };
  //             addProduct(product, dispatch);
  //           });
  //         }
  //       );
  //     };

  return (
    <div className="newProduct">
        <Header /> 
      <h1 className="addProductTitle">Register A New Student</h1>
      <button onClick={AddStudentHandler} className="addProductButton">
          Add Student
        </button>
        <hr />
       
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Student First Name</label>
          <input
            value={firstname}
            name="username"
            type="text"
            placeholder="type..."
            onChange={(e) => setfirstname(e.target.value)}

          />
         
        </div>
        <div className="addProductItem">
          <label>Student Last Name</label>
          <input
          
            value={lastname}
            name="username"
            type="text"
            placeholder="type..."
            onChange={(e) => setLastname(e.target.value)}

          />
         
        </div>
        <div className="addProductItem">
          <label>Student RollNum</label>
          <input
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            name="rollnum"
            type="text"
            placeholder="type..."
          />
        </div>
        <div className="addProductItem">
          <label>Enrolled in Course</label>
          <input
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            name="coursename"
            placeholder="type..."

          />
        </div>
        <div className="addProductItem">
          <label>Student Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="type..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="type..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="addProductItem">
          <label>Upload Image ↓↓</label>
          <input
            type="file"
            id="file"
            // onChange={(e) => setFile(e.target.files[0])}
          />
          
        </div>
      </form>
         
    </div>
  );
}
