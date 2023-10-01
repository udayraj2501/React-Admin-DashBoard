import React from "react";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <i class="fa-regular fa-bell"></i>
            <span className="topIconBag">2</span>
          </div>

          <div className="topbarIconContainer">
            <i class="fa-solid fa-language"></i>
            <span className="topIconBag">2</span>
          </div>

          <div className="topbarIconContainer">
            <i class="fa-solid fa-gear"></i>
          </div>

          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="topAvatar" />


        </div>
      </div>
    </div>
  );
};

export default Topbar;
