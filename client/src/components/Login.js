import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
      error: {
        message: "",
        code: "",
      },
      isloading: false,
      isLoginMode: true,

      errors: {
        email: "",
        password: "",
      },
    };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.user);
    await axios
      .post("/api/v1/users/login", this.state.user)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  onEmailChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        email: e.target.value,
      },
    });
  };
  onPasswordChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        password: e.target.value,
      },
    });
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            type="email"
            value={this.state.user.email}
            placeholder="Enter Email"
            required
            onChange={this.onEmailChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            value={this.state.user.password}
            placeholder="Enter password"
            required
            onChange={this.onPasswordChange}
          />
        </div>
        <div className="field">
          <button onClick={this.onSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
