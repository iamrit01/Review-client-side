import React, { Component, useState } from "react";
import axios from "axios";

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
      <h1>Login Page</h1>
      <div>
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
      <div>
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
  );
};

export default Login;
