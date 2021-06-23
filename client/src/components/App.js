import {
  Navbar,
  Login,
  Signup,
  Home,
  Timeline,
  NotFound,
  Profile,
} from "./Index";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        // name: "",
        email: "",
        // password: "",
      },
    };
  }
  handleUserChanges = (data) => {
    console.log("app function :: ", data.data.userData);
    this.setState({
      user: data.data.userData,
    });
  };
  render() {
    console.log("app return ", this.state.user);
    return (
      <div className="App">
        <Navbar email={this.state.user.email} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/api/v1/users/login"
            render={(props) => (
              <Login
                {...props}
                user={this.state.user}
                handleUserChanges={this.handleUserChanges}
              />
            )}
          />
          <Route path="/api/v1/users/create" component={Signup} />
          <Route path="/api/v1/profile/viewProfile" component={Profile} />
          <Route path="/api/v1/profile/timeline" component={Timeline} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
