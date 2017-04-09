import React, { Component } from 'react';
import baseTheme from './theme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LogoImg from "./heartgalleryfamilylogo.jpg"

import './style.css';

const button_style = {
	margin: 15,
	alignSelf: "left",
}

const whole_style = {
	display: "flex",
	flexFlow: "columnWrap",
	alignContent: "center",
}

export default class Home extends Component {
  constructor(props) {
  	super(props);
  }
    render() {
        return (
          <div>
            <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)} style={whole_style}>
            
            <div>
              <img src={LogoImg}/>
              <h1>A Family For Every Child</h1>
              
              <h2>Home</h2>
              
              <RaisedButton label="Sign Here" primary={true} style={button_style} onClick={(event) => this.handleClick(event)}/>
            </div>
            </MuiThemeProvider>
          </div>
    );
  }
}
