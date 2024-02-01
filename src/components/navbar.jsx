import React from 'react'
import user_icon from "../assets/user_icon.png";
import { IoIosCall } from "react-icons/io";
import { FcVideoCall } from "react-icons/fc";
import { IoIosMore } from "react-icons/io";




const Navbar = () => {
  return (
<div className="chatNavbar">
<div className="navChat">
          <div className="navImg">
            <img src={user_icon} alt="" />
          </div>
          <div className="navText">
            <h3>Nishant Kafle</h3>
            <p>Active 2 hours ago </p>
          </div>
          <div className="chatIcon">
          <IoIosCall size={30} />
            <FcVideoCall size={30} />
            <IoIosMore size={30} />

          </div>
        </div>
</div>  )
}

export default Navbar