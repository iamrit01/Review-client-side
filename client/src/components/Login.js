import React, { useContext, useState } from "react";
import "../css/Login.css";
import { useHistory } from "react-router";
import { UserContext } from "./App";
import axios from "axios";
import { Link } from "react-router-dom";
const login_url = "http://localhost:3001/api/v1/users/login";
const Login = (props) => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputChanges = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    const { email, password } = user;
    console.log("user :: ", user);
    const config = {
      "Content-Type": "application/json",
    };
    // validateEmail();
    axios
      .post(login_url, user, config)
      .then((response) => {
        console.log("Login response :: ", response);
        dispatch({ type: "USER", payload: true });
        props.handleUser(response.data.userLogin);
        localStorage.setItem("jwtoken", JSON.stringify(response.data.token));
        history.push("/");
      })
      .catch((error) => {
        console.log("Login error :: ", error);
      });
    // const data = await response.json();
    // if (response.status === 401 || response.status === 402) {
    //   window.alert("Invalid Credentials");
    // } else if (response.status === 422) {
    //   window.alert("Please filled the field properly");
    // } else if (response.status === 500) {
    //   window.alert("Server Error! 500");
    // } else {
    //
    //   window.alert("Login Successfully :)");
    // }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="auth-container">
          <form className="login-form form-tag" method="POST">
            <div className="text-center mb-3">
              <span className="display-6">LogIn Panel</span>
            </div>
            <div className="mb-3">
              <label for="emailFormControlInput" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                value={user.email}
                onChange={handleInputChanges}
                className="form-control"
                id="emailFormControlInput"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-3">
              <label for="passwordFormControlInput" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={user.password}
                onChange={handleInputChanges}
                className="form-control"
                id="passwordFormControlInput"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mb-3">
              <input
                class="btn btn-primary"
                type="submit"
                name="login"
                value="Login"
                onClick={loginUser}
              />
            </div>
            <div className="text-center">
              <Link className="mr-1">forget password?</Link>|
              <Link className="ml-1">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
