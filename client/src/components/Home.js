import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link to="/api/v1/users/login">Login </Link>
          </li>
          <li>
            <Link to="/api/v1/users/create">SignUp </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
