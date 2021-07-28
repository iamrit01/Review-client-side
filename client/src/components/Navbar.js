import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "../css/Navbar.css";
import { UserContext } from "./App";

const Navbar = (props) => {
  console.log("nav bar props ", props.profileImage);
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profie</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/login">Log In</Link>
          </li>

          <li>
            <Link to="/signUP">Sign Up</Link>
          </li>
        </>
      );
    }
  };
  const RenderDp = () => {
    // const { state, dispatch } = useContext(UserContext);
    if (state) {
      return (
        <img
          alt="user-dp"
          id="user-dp"
          src={`${props.profileImage}`}
          // src="https://image.flaticon.com/icons/png/512/2922/2922524.png"
        />
      );
    } else {
      return (
        <img
          alt="user-dp"
          id="user-dp"
          // src={`${props.profileImage}`}
          src="https://image.flaticon.com/icons/png/512/2922/2922524.png"
        />
      );
    }
  };

  return (
    <div className="navbar">
      <div className="logo_container">
        <Link to="/">
          <img
            className="logo"
            src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png"
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input placeholder="Search here.." class="search-query" />
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <RenderDp />

          <span>{props.name}</span>
        </div>
        <div className="nav-links">
          <ul>
            <RenderMenu />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
