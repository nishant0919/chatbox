import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="header">Register an account</span>
        <form>
          <input type="Name" placeholder="Name" />
          <input type="Wmail" placeholder="Email" />
          <input type="Password" placeholder="Password" />
          <button>Signup</button>
        </form>
        <p>
          Have already an account?{" "}
          <span className="logcol">
            <Link to="/signin">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
