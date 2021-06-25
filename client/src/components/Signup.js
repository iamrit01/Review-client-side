import React, { Component } from "react";
import axios from "axios";
import "../css/Signup.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  onNameChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        name: e.target.value,
      },
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
  onconfirmPasswordChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        confirmPassword: e.target.value,
      },
    });
  };

  signUPData = async (event) => {
    event.preventDefault();
    console.log("this.state.user ", this.state.user);
    await axios
      .post("/api/v1/users/signup", this.state.user)
      .then((response) => {
        console.log("response ", response);
        // localStorage.item('token', response.to)
        this.props.history.push("/api/v1/users/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        <div className="field">
          <input
            type="text"
            value={this.state.user.name}
            placeholder="Enter Name"
            required
            onChange={this.onNameChange}
          />
        </div>
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
            placeholder="Enter Password"
            required
            onChange={this.onPasswordChange}
          />
        </div>
        <div className="field">
          <input
            type="password"
            value={this.state.user.confirmPassword}
            placeholder="Re-Enter Password"
            required
            onChange={this.onconfirmPasswordChange}
          />
        </div>
        <div className="field">
          <button onClick={this.signUPData}>Sign Up</button>
        </div>
      </form>
    );
  }
}

export default Signup;
