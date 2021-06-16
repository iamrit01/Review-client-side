import { Navbar, Login, Signup, Home, NotFound } from "./Index";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import jwt from "jsonwebtoken";
class App extends Component {
  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decodedToken = jwt.verfiy(
  //       token,
  //       "!)(@{?:Dwrwa4v64576iugsfdxchqtewyb6p['';eueu6wTDq`394g./phrasdfwyafsdh"
  //     );

  //     console.log("server side decoding ", decodedToken);
  //   }
  // }
  render() {
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
}

export default App;
