import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('App', className)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Time to get going!
        </p>
      </div>
    );
  }
}

export default App;
