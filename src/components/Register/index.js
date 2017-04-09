import React, { Component } from 'react';
import classnames from 'classnames';

import baseTheme from './theme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './style.css';


const button_style = {
    margin: 15,
    alignSelf: "center",
}

const tField_style = {
    alignSelf: "center",
}
const whole_style = {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center",
}

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        const { className } = this.props;
        return (
          <div>
            <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
            <div style={whole_style}>
              <h1>Register</h1>
                <TextField
                 hintText="Enter your username"
                 floatingLabelText="Username"
                 style={tField_style}
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                />
                <br/>
                <TextField
                   type="password"
                   hintText="Enter your password"
                   floatingLabelText="Password"
                   style={tField_style}
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                />
                <br/>
                <RaisedButton label="Register" primary={true} style={button_style} onClick={(event) => this.handleClick(event)}/>
            </div>
            </MuiThemeProvider>
          </div>
        );
    }
}