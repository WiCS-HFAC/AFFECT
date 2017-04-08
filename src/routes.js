import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Apply from './components/Apply';
import NotFound from './components/NotFound';

const Routes = () => (
  <Router>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/apply">Apply</Link></li>
        </ul>

        <hr/>

        <Route extract path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
    </div>
  </Router>
);

export default Routes;