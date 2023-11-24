import { useState } from 'react'
// import './App.css'
// import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import About from './components/About/About.jsx'
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
 <Route path='/' element={<Home />} />
 <Route path='/login' element={<Login />} />
 <Route path='/signup' element={<Signup />} />
 
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
