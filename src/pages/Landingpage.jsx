import React from "react";
import { Link } from "react-router-dom";
import mobile_icon from "../assets/phone.png";

const Landingpage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navLogo">
          <h1>Chatapp</h1>
        </div>
        <div className="navMenu">
          <ul>
            <li>Features</li>
            <li>Blog</li>
            <button className="btn-signup">
              <Link to="/register">
                <p>Signup</p>
              </Link>
            </button>
          </ul>
        </div>
      </div>
      <div className="mainContent">
        <div className="mainText">
          <div className="text1">Hello You</div>
          <h1>Easy Chat With Your Friends</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            distinctio. Accusamus minima, ratione non iste qui sint eaque minus
            et alias sit repudiandae totam sunt ab excepturi magnam, praesentium
            atque.
          </p>
          <button className="start_now">
            <Link to="/register">Start Now </Link>
          </button>
        </div>
        <div className="mainImg">
          <img src={mobile_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
