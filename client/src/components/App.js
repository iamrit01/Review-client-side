import { Navbar, Login, Signup, Home } from "./Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/api/v1/users/login">
            <Login />
          </Route>
          <Route exact path="/api/v1/users/create">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
