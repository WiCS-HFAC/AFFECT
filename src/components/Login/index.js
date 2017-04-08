import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Login extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Login', className)}>
        <h1>
          Login
        </h1>
      </div>
    );
  }
}