import React, { Component } from 'react';
import classnames from 'classnames';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './style.css';

const style = {
    margin: 15,
};

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
            <MuiThemeProvider>
            <div>
              <h1>Register</h1>
               <TextField
                 hintText="Enter your username"
                 floatingLabelText="Username"
                 onChange = {(event,newValue) => this.setState({username:newValue})}
                 />
               <br/>
                 <TextField
                   type="password"
                   hintText="Enter your password"
                   floatingLabelText="Password"
                   onChange = {(event,newValue) => this.setState({password:newValue})}
                   />
                 <br/>
                 <RaisedButton label="Register" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            </div>
            </MuiThemeProvider>
          </div>
        );
    }
}