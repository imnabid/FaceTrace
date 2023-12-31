import "./App.css";
import React from "react";
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from './components/Login'
import Footer from "./components/Footer";
import Forgot_password from "./components/Forget_password";
import About_us from "./components/About_us";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Form />} />
        <Route path="/" element={<Form />} />
        <Route path="/Police" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgot_password />} />
        <Route path="/about us" element={<About_us />} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
