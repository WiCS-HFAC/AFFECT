import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Apply from './components/Apply';
import NotFound from './components/NotFound';


const link_style = {
    width: "25%",
    textAlign: "center",
    color: "black",
    display: "inline-block",
    paddingTop: "0.5%",
    paddingBottom: "0.5%",
    textDecoration: "None",
}




const Routes = () => (
  <Router>
    <div>
        <div class="navBar">
            <Link to="/" style={link_style}>Home</Link>
            <Link to="/register" style={link_style}>Register</Link>
            <Link to="/login" style={link_style}>Login</Link>
            <Link to="/apply" style={link_style}>Apply</Link>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/apply" component={Apply} />
        <Route path="/404" component={NotFound} />
        {/* TODO: Why isnt asterisk acting as a wildcard */}
    </div>
  </Router>
);

export default Routes;

