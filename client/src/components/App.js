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
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        name: "",
        email: "",
        // password: "",
      },
    };
  }
  handleUserChanges = (userData) => {
    console.log("app function :: ", userData);
    this.setState({
      user: userData,
    });
  };
  render() {
    console.log("app return ", this.state.user);
    return (
      <div className="App">
        <Navbar name={this.state.user.name} />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Timeline} />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                user={this.state.user}
                handleUserChanges={this.handleUserChanges}
              />
            )}
          />
          <Route path="/signUp" component={Signup} />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} />}
          />
          <Route path="/about" component={About} />
          <Route path="/logout" component={Logout} />

          <Route exact component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
