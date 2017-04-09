import React, { Component, Link } from 'react';
import classnames from 'classnames';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './style.css';

const style = {
    margin: 15,
};

export default class Login extends Component {
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
            <MuiThemeProvider>
            <div>
              <h1>Login</h1>
              <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange = {(event,newValue) => this.setState({username:newValue})}
              />
              <br/>

              <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange = {(event,newValue) => this.setState({password:newValue})}
              />
              <br/>

              <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
              <RaisedButton label="Register" primary={false} style={style} onClick={() => { this.props.history.push('/register')}}/>
            </div>
            </MuiThemeProvider>
          </div>
        );
    }
}