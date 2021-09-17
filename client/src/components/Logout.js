import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./App";
const Logout = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    logoutUser();
  });
  const logoutUser = () => {
    localStorage.removeItem("jwtoken");
    window.location.reload();
  };
  return (
    <>
      <h1>Logout</h1>
    </>
  );
};
export default Logout;
