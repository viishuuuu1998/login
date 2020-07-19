import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginBox from "./LoginBox";
import Register from "./Register";
import Logout   from "./Logout";

import "./styles.css";

class App extends Component {
  state = {
    LoginOnTop: true
  };

  clicked = () => {
    this.setState(prevState => ({ LoginOnTop: !prevState.LoginOnTop }));
  };
  render() {
    return (
      <div className="App">
        <LoginBox clickedState={this.state.LoginOnTop} clicked={this.clicked} />
        <Register clickedState={this.state.LoginOnTop} clicked={this.clicked} />
        <Logout   clickedState={this.state.LoginOnTop} clicked={this.clicked} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
