
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
import { Spring } from "react-spring";

class LoginBox extends Component {
  state = {
    email: "",
    password: "",
    errors: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginUser = e => {
    e.preventDefault();

    alert("You are logged in as " + this.state.email);
  };

  render() {
    const onTop = this.props.clickedState;

    return (
      <React.Fragment>
        <Spring
          to={{
            width: "50%",
            position: "absolute",
            zIndex: 2,
            opacity: onTop ? 1 : 0.4,
            transform: onTop ? "translateY(0em)" : "translatey(1em)"
          }}
          config={{ duration: 250 }}
        >
          {styles => {
            return (
              <Box style={styles}>
                <form onSubmit={this.loginUser}>
                  <Field>
                    <h1
                      style={{ marginBottom: "2em" }}
                      className="title is-2"
                      onClick={this.props.clicked}
                    >
                      Login
                    </h1>
                    {this.state.errors ? (
                      <Notification isColor="danger">
                        {this.state.errors}
                      </Notification>
                    ) : null}
                    <Label>Email: </Label>
                    <Control>
                      <Input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        required
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Password: </Label>
                    <Control>
                      <Input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        required
                      />
                    </Control>
                    {this.state.password.length > 0 &&
                    this.state.password.length < 8 ? (
                      <Help isColor="danger">
                        Password must be a minimum length of 8.
                      </Help>
                    ) : null}
                  </Field>
                  <Field isGrouped style={{ marginBottom: "2em" }}>
                    <Control>
                      <Button
                        style={{
                          display: onTop ? "block" : "none"
                        }}
                        type="submit"
                        isColor="primary"
                        disabled={
                          this.state.email.length < 5 ||
                          this.state.password.length < 8
                            ? true
                            : false
                        }
                      >
                        LOGIN
                      </Button>
                      <Button
                        style={{
                          display: onTop ? "none" : "block"
                        }}
                        isColor="primary"
                      >
                        LOGIN
                      </Button>
                    </Control>
                    <Control>
                      <Button
                        onClick={this.props.clicked}
                        isColor="danger"
                        style={{ display: onTop ? "block" : "none" }}
                      >
                        REGISTER
                      </Button>
                    </Control>
                  </Field>
                </form>
              </Box>
            );
          }}
        </Spring>
      </React.Fragment>
    );
  }
}

export default LoginBox;