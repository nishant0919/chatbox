import React from "react";
import user_icon from "../assets/user_icon.png";

const sidebar = () => {
  return (
    <div className="chatContainer">
      <div className="chatHeader">
        <h1>Chats</h1>
        <input type="text" placeholder="Search chats" />
      </div>
      <div className="cardContainer">
        <div className="chatCards">
          <div className="cardImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="cardText">
            <h3>Nishant Kafle</h3>
            <p>K chha </p>
          </div>
        </div>
        <div className="chatCards">
          <div className="cardImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="cardText">
            <h3>Nishant Kafle</h3>
            <p>K chha </p>
          </div>
        </div>
        <div className="chatCards">
          <div className="cardImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="cardText">
            <h3>Nishant Kafle</h3>
            <p>K chha </p>
          </div>
        </div>
        <div className="chatCards">
          <div className="cardImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="cardText">
            <h3>Nishant Kafle</h3>
            <p>K chha </p>
          </div>
        </div>
        <div className="chatCards">
          <div className="cardImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="cardText">
            <h3>Nishant Kafle</h3>
            <p>K chha </p>
          </div>
        </div>
        <div className="chatCards">
          <div className="cardImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="cardText">
            <h3>Nishant Kafle</h3>
            <p>K chha </p>
          </div>
        </div>
        <div className="chatCards">
          <div className="cardImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="cardText">
            <h3>Nishant Kafle</h3>
            <p>K chha </p>
          </div>
        </div>
        <div className="chatCards">
          <div className="cardImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="cardText">
            <h3>Nishant Kafle</h3>
            <p>K chha </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
