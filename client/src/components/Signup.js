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
    // <div className="Signup">
    //   <div className="signup-container">
    //     <h1> Sign Up Page</h1>
    //     <div className="input-container">
    //       <div className="name ">
    //         <p>Name</p>
    //       </div>
    //       <div className="name-input">
    //         <input
    //           name="password"
    //           type="text"
    //           placeholder="Name"
    //           value={name}
    //           onChange={(event) => setName(event.target.value)}
    //         />
    //       </div>
    //     </div>
    //     <div className="input-container">
    //       <div className="email ">
    //         <p>Email</p>
    //       </div>
    //       <div className="email-input">
    //         <input
    //           name="email"
    //           type="email"
    //           placeholder="Email"
    //           value={email}
    //           onChange={(event) => setEmail(event.target.value)}
    //         />
    //       </div>
    //     </div>
    //     <div className="input-container">
    //       <div className="password">
    //         <p> Password</p>
    //       </div>
    //       <div className="password-input">
    //         <input
    //           name="password"
    //           type="password"
    //           placeholder="Password"
    //           value={password}
    //           onChange={(event) => setPassword(event.target.value)}
    //         />
    //       </div>
    //     </div>
    //     <div className="input-container">
    //       <div className="conf_password">
    //         <p>Confirm Password</p>
    //       </div>
    //       <div className="conf_password-container">
    //         <input
    //           name="password"
    //           type="password"
    //           placeholder="Password"
    //           value={confirmPassword}
    //           onChange={(event) => setConfirmPassword(event.target.value)}
    //         />
    //       </div>
    //     </div>
    //     <input
    //       type="submit"
    //       value="signup"
    //       onClick={(event) => signUPData(event)}
    //     />
    //   </div>
    // </div>
  );
};

export default Signup;
