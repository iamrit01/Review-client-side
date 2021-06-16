import React, { useState } from "react";
import axios from "axios";
import "../css/Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUPData = async (event) => {
    event.preventDefault();
    let user = { name, email, password, confirmPassword };
    console.log(user);
    await axios.post("/api/v1/users/create", user).then((response) => {
      console.log(response);
      this.props.history.push("/");
    });
  };
  return (
    <form className="login-form">
      <span className="login-signup-header">Sign Up</span>
      <div className="field">
        <input
          type="text"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="password"
          placeholder="Re-Enter Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="field">
        <button onClick={signUPData}>Sign Up</button>
      </div>
    </form>
  );
};

export default Signup;
