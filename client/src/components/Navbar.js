import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "../css/Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yPH54tvGXpnR-YG4lLq6JJVQwnzQRBqO8Q&usqp=CAU"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input placeholder="Search here.." />
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="user-dp"
              id="user-dp"
            />
            <span>John Doe</span>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/api/v1/users/login">Log In</Link>
              </li>

              <li>
                <Link to="/api/v1/users/create">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
