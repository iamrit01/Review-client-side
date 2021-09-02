import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./App";

const Logout = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    logoutUser();
  });
  const logoutUser = async () => {
    await fetch("/api/v1/users/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    dispatch({ type: "USER", payload: false });
    history.push("/login", { replace: true });
    window.location.reload();
  };
  return (
    <>
      <h1>Logout</h1>
    </>
  );
};
export default Logout;
