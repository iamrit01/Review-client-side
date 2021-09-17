import {
  Navbar,
  Login,
  Signup,
  Timeline,
  NotFound,
  Profile,
  About,
  Logout,
} from "./Index";

import { createContext, useEffect, useReducer, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { initialState, reducer } from "../reducer/UseReducer";
import axios from "axios";
export const UserContext = createContext();
const getUser_url = "http://localhost:3001/api/v1/users/getUser";
const App = () => {
  const [user, setUser] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getUser();
  });
  const getUser = () => {
    try {
      const config = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };

      axios
        .post(
          getUser_url,
          { token: JSON.parse(localStorage.getItem("jwtoken")) },
          config
        )
        .then((response) => {
          console.log("get user response :: ", response);
        })
        .catch((error) => {
          console.log("get user error :: ", error);
        });

      // withCredentials: true,)
      //
      // const res = await fetch("", {
      //   method: "GET",
      //   headers: {},
      //   credentials: "include",
      // });
      // const data = await res.json();
      // setUser({
      //   ...data,
      // });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar name={user.name} profileImage={user.profileImage} />
        <Switch>
          <Route exact path="/" render={() => <Timeline user={user} />} />
          <Route
            path="/login"
            render={() => <Login handleUser={(user) => setUser(user)} />}
          />
          <Route path="/signUp" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/logout" component={Logout} />
          <Route exact component={NotFound} />
        </Switch>
      </UserContext.Provider>
    </>
  );
};

export default App;
