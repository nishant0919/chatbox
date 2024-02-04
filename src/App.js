import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register.jsx";
import Signin from "./pages/Login.jsx";
import Landingpage from "./pages/Landingpage.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        

      </Routes>
    </Router>
  );
}

export default App;
