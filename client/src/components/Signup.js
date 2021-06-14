import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUPData = async (event) => {
    event.preventDefault();

    let user = { name, email, password, confirmPassword };
    // console.log("signup user", user);

    await axios.post("http://localhost:8000/api/v1/users/create", {
      data: user,
    });
  };
  return (
    <div>
      <h1> Sign Up Page</h1>
      <div>
        <label>
          Name
          <input
            name="password"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
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
      <div>
        <label>
          Confirm Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
      </div>
      <input
        type="submit"
        value="signup"
        onClick={(event) => signUPData(event)}
      />
    </div>
  );
};

export default Signup;
