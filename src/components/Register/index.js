import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Register extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Register', className)}>
        <h1>Register</h1>
      </div>
    );
  }
}