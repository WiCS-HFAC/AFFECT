import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Apply from './components/Apply';
import NotFound from './components/NotFound';

const link_style = {
    color: "black",
    display: "inline-block",
    paddingLeft: "17%",
    paddingTop: "17px",
    paddingBottom: "17px"
}


const Routes = () => (
  <Router>
    <div>
        <Link to="/" style={link_style}>Home</Link>
        <Link to="/register" style={link_style}>Register</Link>
        <Link to="/login" style={link_style}>Login</Link>
        <Link to="/apply" style={link_style}>Apply</Link>
        

        

        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/apply" component={Apply} />
        <Route path="/404" component={NotFound} />
    </div>
  </Router>
);

export default Routes;