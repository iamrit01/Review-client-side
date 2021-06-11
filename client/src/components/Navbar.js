import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/api/v1/users/login">Login Page</Link>
          </li>
          <li>
            <Link to="/api/v1/users/create">SignUp Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
