import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import NotFound from './components/NotFound';

const Routes = () => (
  <Router>
    <div>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
    </div>
  </Router>
);

export default Routes;