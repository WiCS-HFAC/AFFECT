import React, { Component, Link } from 'react';
import classnames from 'classnames';

import './style.css';

export default class NotFound extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('NotFound', className)}>
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p><Link to="/">Go back to the home page</Link></p>
      </div>
    );
  }
}