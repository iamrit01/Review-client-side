import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    logoutUser();
  });
  const logoutUser = async () => {
    const res = await fetch("/api/v1/users/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    history.push("/login", { replace: true });
    // const data = await res.json();
    // if (!data || data.status != 200) {
    //     window.alert("Unauthorized User");
    // } else if (data.status === 500) {
    //     window.alert("Server Error ");
    // } else {
    //   console.log("~~~~~~~~~~~~~~ ", res.json().status);
    // }
  };
  return (
    <>
      <h1>Logout</h1>
    </>
  );
};
export default Logout;
