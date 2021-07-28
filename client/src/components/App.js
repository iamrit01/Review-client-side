import {
  Navbar,
  Login,
  Signup,
  Timeline,
  NotFound,
  Profile,
  Navigation,
  About,
  Logout,
} from "./Index";
import { createContext, useEffect, useReducer, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { initialState, reducer } from "../reducer/UseReducer";
export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // useEffect(() => {
  //   getUser();
  // }, [user]);
  useEffect(() => {
    getUser();
    console.log("chedcking");
  }, []);
  const getUser = async () => {
    console.log("hahah");
    try {
      const res = await fetch("/api/v1/users/getUser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log("app data", data);
      setUser({
        ...data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log("app user data ", user);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar name={user.name} profileImage={user.profileImage} />
        <Switch>
          <Route exact path="/" component={Timeline} />
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
