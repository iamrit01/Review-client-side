import React, { useContext, useState } from "react";
import "../css/Login.css";
import { useHistory } from "react-router";
import { UserContext } from "./App";
const Login = (props) => {
  const { state, dispatch } = useContext(UserContext);
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

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    // validateEmail();
    const response = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (response.status === 401 || response.status === 402) {
      window.alert("Invalid Credentials");
    } else if (response.status === 422) {
      window.alert("Please filled the field properly");
    } else if (response.status === 500) {
      window.alert("Server Error! 500");
    } else {
      dispatch({ type: "USER", payload: true });
      props.handleUser(data.userLogin);
      history.push("/");
      window.alert("Login Successfully :)");
    }
  };

  return (
    <div className="login_container">
      <form className="login-form" method="POST">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChanges}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="field">
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleInputChanges}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="field">
          <input
            className="field_button"
            type="submit"
            name="login"
            value="Login"
            onClick={loginUser}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
