import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Lama App</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmR4fWTeUGYrx2xij5yn1T-ue23HFVG70aCw&usqp=CAU"
            alt=""
          />
          <span className="navbarName">{name}</span>
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
