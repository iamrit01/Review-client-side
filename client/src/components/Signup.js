import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <form action="/api/v1/users/create" method="POST">
          <p>Email</p>
          <input type="email" placeholder="enter email"></input>
          <p>password</p>
          <input type="password" placeholder="enter password"></input>
          <p>confirm password</p>
          <input type="password" placeholder="enter confirm password"></input>
          <button>Sign UP</button>
        </form>
      </div>
    );
  }
}

export default Signup;
