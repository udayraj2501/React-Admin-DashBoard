import React from "react";
import "./user.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
         <Link to = "/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="userShowImg"
            />

            <div className="userShowTopTitle">
              <span className="userSHowUsername">Udayraj Bhosle</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>

          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <i class="userShowIcon fa-regular fa-user"></i>
              <span className="userShowInfoTitle">udayraj23</span>
            </div>

            <div className="userShowInfo">
              <i class="userShowIcon fa-regular fa-calendar-days"></i>
              <span className="userShowInfoTitle">25/09/2001</span>
            </div>

            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <i class="userShowIcon fa-solid fa-phone"></i>
              <span className="userShowInfoTitle">9370661641</span>
            </div>

            <div className="userShowInfo">
              <i class="userShowIcon fa-solid fa-envelope"></i>
              <span className="userShowInfoTitle">udayraj@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <i class="userShowIcon fa-solid fa-location-dot"></i>
              <span className="userShowInfoTitle">Aurangabad</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>

          <div className="userUpdateForm">

            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="udayraj25"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Udayraj Bhosle"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="udayraj@gmail.com"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="9370661641"
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Aurangabad"
                  className="userUpdateInput"
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <label htmlFor="file">
                  <i class="userUpdateIcon fa-solid fa-upload"></i>
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
