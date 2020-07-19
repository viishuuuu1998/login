import React, { Component } from "react";
import {
  Box,
  Field,
  Label,
  Control,
  Input,
  Button,
  Notification,
  Help
} from "bloomer";

import { Spring, config } from "react-spring";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerUser = e => {
    
    e.preventDefault();

    alert("Thanks for registering, " + this.state.name);
  };

  render() {
    const LoginOnTop = this.props.clickedState;

    return (
      <Spring
        to={{
          width: "50%",
          position: "absolute",
          zIndex: LoginOnTop ? 1 : 2,
          opacity: LoginOnTop ? 0.4 : 1,
          transform: LoginOnTop ? "translateY(0em)" : "translatey(-1em)"
        }}
        config={{ duration: 250 }}
      >
        {styles => {
          return (
            <Box style={styles}>
              <form onSubmit={this.registerUser}>
                <h1 className="title is-2" onClick={this.props.clicked}>
                  Register
                </h1>
                <Field>
                  {this.state.errors ? (
                    <Notification isColor="danger">
                      {this.state.errors}
                    </Notification>
                  ) : null}

                  <Label>Name: </Label>
                  <Control>
                    <Input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                    />
                  </Control>
                  {this.state.name.length > 0 && this.state.name.length < 3 ? (
                    <Help isColor="danger">
                      Name must be a minimum length of 3.
                    </Help>
                  ) : null}
                </Field>
                <Field>
                  <Label>Email: </Label>
                  <Control>
                    <Input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </Control>
                  {this.state.email.length > 0 &&
                  this.state.email.length < 3 ? (
                    <Help isColor="danger">
                      Email must be a minimum length of 3.
                    </Help>
                  ) : null}
                </Field>
                <Field>
                  <Label>Password: </Label>
                  <Control>
                    <Input
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                    />
                    {this.state.password.length > 0 &&
                    this.state.password.length < 8 ? (
                      <Help isColor="danger">
                        Password must be a minimum length of 8.
                      </Help>
                    ) : null}
                  </Control>
                </Field>
                <Field isGrouped>
                  <Control>
                    <Button
                      style={{
                        display: LoginOnTop ? "none" : "block"
                      }}
                      type="submit"
                      isColor="danger"
                    >
                      REGISTER
                    </Button>
                    <Button
                      onClick={this.props.clicked}
                      style={{
                        display: LoginOnTop ? "block" : "none"
                      }}
                      isColor="danger"
                    >
                      REGISTER
                    </Button>
                  </Control>
                  <Control>
                    <Button
                      onClick={this.props.clicked}
                      isColor="primary"
                      style={{ display: LoginOnTop ? "none" : "block" }}
                    >
                      LOGIN
                    </Button>
                  </Control>
                </Field>
              </form>
            </Box>
          );
        }}
      </Spring>
    );
  }
}

export default Register;