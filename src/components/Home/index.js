import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';


class Home extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Home', className)}>
        <div>
          <h1>Home</h1>
        </div>
      </div>
    );
  }
}

export default Home;