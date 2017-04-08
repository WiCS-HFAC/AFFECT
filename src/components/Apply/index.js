import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Apply extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Apply', className)}>
        <h1>Apply For Adoption</h1>
      </div>
    );
  }
}