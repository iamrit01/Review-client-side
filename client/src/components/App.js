import { Navbar, Login, Signup, Home } from "./Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/api/v1/users/login" component={Login} />
        <Route exact path="/api/v1/users/create" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
