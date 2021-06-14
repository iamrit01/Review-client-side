import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-container">
          <div className="logo-img">
            <Link to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yPH54tvGXpnR-YG4lLq6JJVQwnzQRBqO8Q&usqp=CAU"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search-container">
            <FiSearch />
            <input placeholder="Search here.." />
          </div>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/api/v1/users/login">Login</Link>
            </li>
            <li>
              <Link to="/api/v1/users/create">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
