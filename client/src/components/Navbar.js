import React, { Component } from "react";
import { Link } from "react-router-dom";
import Home from "./Index";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
