import React, { Component, useState } from "react";
import axios from "axios";
import "../css/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    let user = { email, password };
    console.log("user : ", user);
    await axios.post("/api/v1/users/login", {
      data: user,
    });
  };
  return (
    <form className="login-form">
      <span className="login-signup-header">Log In</span>
      <div className="field">
        <input
          type="email"
          placeholder="Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="field">
        <input
          type="password"
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="field">
        <button onClick={onSubmit}>Log In</button>
      </div>
    </form>
  );
};

export default Login;
