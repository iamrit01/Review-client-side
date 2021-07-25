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
import { createContext, useReducer, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { initialState, reducer } from "../reducer/UseReducer";
export const UserContext = createContext();
const Routing = (handleUserName) => {
  console.log("app props", handleUserName);
  return (
    <Switch>
      <Route exact path="/" component={Timeline} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route
        path="/logout"
        render={() => <Login handleName={handleUserName()} />}
      />
      <Route exact component={NotFound} />
    </Switch>
  );
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const handleNameChange = (name) => {
    setName({
      name,
    });
  };
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar name={name} />
        {/* <Routing handleUserName={(name) => setName(name)} /> */}
        <Switch>
          <Route exact path="/" component={Timeline} />
          <Route
            path="/login"
            render={() => <Login handleName={(name) => setName(name)} />}
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
