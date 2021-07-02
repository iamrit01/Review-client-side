import React, { Component } from "react";
import axios from "axios";
import "../css/Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userId: "",
        email: "",
        password: "",
      },
    };
  }

  onSubmit = (event) => {
    console.log("login this.state.user", this.state.user);
    event.preventDefault();
    axios
      .post("/api/v1/users/login", this.state.user)
      .then((response) => {
        console.log("on submit response ", response);
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/api/v1/profile/timeline");
        const authAxios = axios.create({
          baseURL: "http://localhost:3001",
          headers: {
            Authorization: `Bearer ${response.data.data.token}`,
          },
        });
        authAxios
          .post("/api/v1/profile/timeline")
          .then((userdata) => {
            console.log("api timeline user data :: ", userdata.data);

            this.props.handleUserChanges(userdata.data);
          })
          .catch((e) => {
            console.log(e);
          });
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
