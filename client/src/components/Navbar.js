import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "../css/Navbar.css";
import { UserContext } from "./App";

const Navbar = (props) => {
  console.log("nav bar props ", props.profileImage);
  const { state } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li id="link_container_id">
            <Link to="/">Home</Link>
          </li>
          <li id="link_container_id">
            <Link to="/profile">Profie</Link>
          </li>
          <li id="link_container_id">
            <Link to="/logout">Logout</Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li id="link_container_id">
            <Link to="/login">Log In</Link>
          </li>

          <li id="link_container_id">
            <Link to="/signUP">Sign Up</Link>
          </li>
        </>
      );
    }
  };

  return (
    <div className="navbar">
      <div className="logo_name_container">
        <div className="logo_container">
          <Link to="/">
            <img
              className="logo"
              src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png"
              alt="logo"
            />
          </Link>
        </div>
        <div id="web_name">
          <h3>React Me</h3>
        </div>
      </div>
      {/* <div>
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input placeholder="Search here.." class="search-query" />
        </div>
      </div> */}
      <div className="right-nav">
        {/* <RenderDp /> */}

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
