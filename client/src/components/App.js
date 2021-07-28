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

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar name={name} profileImage={image} />
        <Switch>
          <Route exact path="/" component={Timeline} />
          <Route
            path="/login"
            render={() => (
              <Login
                handleName={(name) => setName(name)}
                handleImage={(image) => setImage(image)}
              />
            )}
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
