import { Navbar, Login, Signup, Home, NotFound } from "./Index";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/api/v1/users/login" component={Login} />
        <Route path="/api/v1/users/create" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
