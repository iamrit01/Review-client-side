import React, { Component, useState } from "react";
import axios from "axios";
import "../css/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    console.log("submit");
    event.preventDefault();
    let user = { email, password };
    await axios.post("http://localhost:8000/api/v1/users/login", {
      data: user,
    });
  };
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login Page</h1>
        <div className="input-container">
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <input type="submit" onClick={(e) => onSubmit(e)} value="submit" />
      </div>
    </div>
  );
};

export default Login;
