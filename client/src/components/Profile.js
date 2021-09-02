import React, { useState, useEffect } from "react";
import "../css/Profile.css";
const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
  });
  useEffect(() => {
    displayProfile();
  });

  const displayProfile = async () => {
    const res = await fetch("/api/v1/profile/profile", {
      method: "GET",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log("fron end side profile data", data);

    setUser({
      ...user,
      name: data.name,
      email: data.email,
      profileImage: data.profileImage,
    });
  };
  console.log("profile state ", user);
  return (
    <div className="profile_main_container">
      <div className="image_container">
        <img src={`${user.profileImage}`} alt="..." />
      </div>
      <div className="info_container">
        <div className="info_item">
          <h1>Name :&nbsp;</h1>
          <h1>{user.name}</h1>
        </div>
        <div className="info_item">
          <p>Email :&nbsp;</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
