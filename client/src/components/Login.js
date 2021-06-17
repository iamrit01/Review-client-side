import React, { Component } from "react";
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
    };
  }

  onSubmit = async (event) => {
    const auth = this.context;
    event.preventDefault();
    // console.log("this.state.user => ", this.state.user);
    await axios
      .post("/api/v1/users/login", this.state.user)
      .then((response) => {
        console.log(`login user response `, response);
        localStorage.setItem("token", response.data.token);
        // this.props.history.push("/");
        const authAxios = axios.create({
          baseURL: "http://localhost:3001",
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        });
        const userData = authAxios
          .post("/api/v1/profile/viewProfile")
          .then((userdata) => {
            console.log("```` ", userdata.data.userData);
          })
          .catch((e) => {
            console.log(e);
          });

        // auth.login(response.data.userId, response.data.token);
        // return axios.get("/api/v1/profile/viewProfile");
      })

      .catch((e) => {
        console.log(e);
        // this.setState({
        //   error: {
        //     ...this.state.error,
        //     message: e.response.data.message,
        //     code: e.response.satus,
        //   },
        // });
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
