import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

const button_style = {
    margin: 15,
    maxWidth: 75,
    alignSelf: "center",
}
const appBar_style = {
    display: "flex",
   flexDirection: "row",
}
const tField_style = {
    alignSelf: "center",
}
const whole_style = {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center",
}

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
