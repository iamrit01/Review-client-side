import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "../css/Signup.css";
const signUp_URL = "http://localhost:3001/api/v1/users/signup";
const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [dp, setDp] = useState("");
  let name, value;
  const handleInputChanges = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const setFormData = () => {
    const { name, email, password, confirmPassword } = user;
    let formData = new FormData();

    console.log("```` ", formData);
    return formData;
  };

  const signUpUser = (event) => {
    event.preventDefault();
    let formData = new FormData();
    const { name, email, password, confirmPassword } = user;

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("categoryImage", dp);

    const config = {
      "content-type": "multipart/form-data",
    };

    axios
      .post(signUp_URL, formData, config)
      .then((response) => {
        console.log("sign up user response :: ", response);
      })
      .catch((error) => {
        console.log("sign up user error :: ", error);
      });

    // axios.post("", {
    //   ...user,
    // });
    // const data = await response.json();
    // if (!data || response.status === 422) {
    //   console.log("Invalid Credentials");
    //   window.alert("Invalid Credentials");
    // } else if (response.status === 500) {
    //   console.log("Server Error! 500");
    //   window.alert("Server Error! 500");
    // } else {
    //   history.push("/login");
    //   window.alert("Registration  Successfully :)");
    // }
  };

  return (
    <div className="signup_container">
      <form
        className="login-form"
        id="signup_form"
        method="POST"
        encType="multipart/form-data"
      >
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
        <div className="field" id="input_field_id">
          <input
            name="categoryImage"
            type="file"
            onChange={(e) => setDp(e.target.files[0])}
            required
          />
        </div>
        <div className="field">
          <input
            className="field_button"
            type="submit"
            name="signUp"
            value="Sign Up"
            onClick={signUpUser}
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
