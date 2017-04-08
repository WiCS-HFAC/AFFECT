import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class Home extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('Home', className)}>
        <div className="Home-header">
          <h1>Home</h1>
        </div>

        <p className="Home-intro"> This is the homepage.</p>
      </div>
    );
  }
}

export default Home;
