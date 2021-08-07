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
  // const validateEmail = () => {
  //   const { email } = user;
  //   console.log(email.length);
  //   {
  //     //find first dot
  //     for (let i = 0; i < email.length; i++) {
  //       if (email.charAt(i) === "." && email.length > 9) {
  //         //checking for @
  //         for (let j = i + 1; j < email.length; j++) {
  //           if (email.charAt(j) === "@" && email.length >= 9) {
  //             let checkStr = email.substring(j + 1, email.length);
  //             //checking for gmail.com
  //             console.log("email check ", checkStr);
  //             if (checkStr.includes("gmail.com")) {
  //               alert("email id is correct");
  //               console.log("email is correct ", email);
  //             }
  //           }
  //         }
  //       }
  //     }
  //     //check for @ and then, check for "gmail" ||
  //   }
  // };

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
    console.log("login user data", data);
    if (response.status === 401 || response.status === 402) {
      console.log("Invalid Credentials");
      window.alert("Invalid Credentials");
    } else if (response.status === 422) {
      console.log("Please filled the required properly");
      window.alert("Please filled the field properly");
    } else if (response.status === 500) {
      console.log("Server Error! 500");
      window.alert("Server Error! 500");
    } else {
      dispatch({ type: "USER", payload: true });
      console.log("Login Successfully :)");
      // console.log("profile image ", data.profileImage);
      console.log("login data", data);
      props.handleUser(data.userLogin);
      // props.handleImage(data.profileImage);
      history.push("/");
      window.alert("Login Successfully :)");
    }
  };

  return (
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
  );
};

export default Login;
