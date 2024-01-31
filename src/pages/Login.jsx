import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="header">Register an account</span>
        <form>
          <input type="Wmail" placeholder="Enter your email" />
          <input type="Password" placeholder="Enter your password" />
          <button>Signin</button>
        </form>
        <p>
          Do not have an account?{" "}
          <span className="logcol">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
