import React, { Component, Link } from 'react';
import classnames from 'classnames';
import baseTheme from './theme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './style.css';

const button_style = {
    margin: 15,
    maxWidth: 75,
    alignSelf: "center",
}
const appBar_style = {
    display: "flex",
   flexDirection: "row",
}
const tField_style = {
    alignSelf: "center",
}
const whole_style = {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center",
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            open: false
        }
    }

    render() {
        const { className } = this.props;
        return (
          <div>
            <MuiThemeProvider>
            <div style={whole_style}>
              <h1>Login</h1>
              <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              style={tField_style}
              onChange = {(event,newValue) => this.setState({username:newValue})}
              />
              <br/>

              <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              style={tField_style}
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
              <br/>

              <RaisedButton label="Login" primary={true} style={button_style} onClick={(event) => this.handleClick(event)}/>
              <RaisedButton label="Register" primary={false} style={button_style} onClick={() => { this.props.history.push('/register')}}/>

            </div>
            </MuiThemeProvider>
          </div>
        );
    }
}