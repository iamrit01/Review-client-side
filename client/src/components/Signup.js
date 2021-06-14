import React, { Component } from "react";
import api from "../api";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
    };
  }
  signUPData() {
    const { name, password, confirmPassword } = this.state;
    const payload = { name, password, confirmPassword };

    api.signup(payload).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(`error from signup api ${error}`);
      }
    );
  }
  render() {
    return (
      <div>
        <h1> Sign Up Page</h1>
        <form action="/api/v1/users/create" method="POST">
          <p>Email</p>
          <input type="email" placeholder="enter email"></input>
          <p>password</p>
          <input type="password" placeholder="enter password"></input>
          <p>confirm password</p>
          <input type="password" placeholder="enter confirm password"></input>
          <button onClick={this.signUPData}>Sign UP</button>
        </form>
      </div>
    );
  }
}

export default Signup;
