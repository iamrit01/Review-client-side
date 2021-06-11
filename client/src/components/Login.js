import React, { Component } from "react";

class Login extends Component {
  postData() {}
  render() {
    return (
      <div className="login">
        <form action="/api/v1/users/login" method="POST">
          <p>Email</p>
          <input type="email" placeholder="enter email"></input>
          <p>password</p>
          <input type="password" placeholder="enter password"></input>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
