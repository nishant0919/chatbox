import React from 'react'
import Navbar from './navbar'
import user_icon from "../assets/user_icon.png";


const Mainpart = () => {
  return (
    <div className="mainPart">
        <Navbar />
        <div className="chatSection">
            <div className="chatContent">
                <div className="messageTime">
                    <p>10:00 am</p>
                </div>
                <div className="messageContainer">
                <div className="imgContainer">
                <img src={user_icon} alt="" />
                </div>
                <div className="message">
                <div className="messageText">
                    <p>Hi, how are you?</p>
                </div>
                </div>
                </div>
            </div>
            <div className="chatInput">
                <div className="chatInputBox">
                <input type="text" placeholder="Type a message here" />
                </div>
                <div className="chatInputButton">
                <button>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mainpart