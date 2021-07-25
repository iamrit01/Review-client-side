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
import { Route, Switch } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/UseReducer";
export const UserContext = createContext();
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Timeline} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route path="/logout" component={Logout} />
      <Route exact component={NotFound} />
    </Switch>
  );
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
        <Navigation />
      </UserContext.Provider>
    </>
  );
};

export default App;
