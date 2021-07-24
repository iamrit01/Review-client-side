import React, { useState } from "react";
import { useHistory } from "react-router";
import "../css/Signup.css";
const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const handleInputChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const signUpUser = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = user;
    const response = await fetch("/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    });
    const data = await response.json();
    if (!data || response.status === 422) {
      console.log("Invalid Credentials");
      window.alert("Invalid Credentials");
    } else if (response.status === 500) {
      console.log("Server Error! 500");
      window.alert("Server Error! 500");
    } else {
      history.push("/api/v1/users/login");
      window.alert("Registration  Successfully :)");
    }
  };

  return (
    <form className="login-form" method="POST">
      <span className="login-signup-header">Sign Up</span>
      <div className="field">
        <input
          placeholder="Enter Name"
          name="name"
          type="text"
          value={user.name}
          onChange={handleInputChanges}
          required
        />
      </div>
      <div className="field">
        <input
          placeholder="Enter Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleInputChanges}
          required
        />
      </div>
      <div className="field">
        <input
          placeholder="Enter Password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleInputChanges}
          required
        />
      </div>
      <div className="field">
        <input
          placeholder="Re-Enter Password"
          name="confirmPassword"
          type="password"
          value={user.confirmPassword}
          onChange={handleInputChanges}
          required
        />
      </div>
      <div className="field">
        <input
          type="submit"
          name="signUp"
          value="signUp"
          onClick={signUpUser}
        />
      </div>
    </form>
  );
};

export default Signup;
