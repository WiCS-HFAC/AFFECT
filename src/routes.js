import React, { Component } from 'react';
import classnames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Apply from './components/Apply';
import NotFound from './components/NotFound';

const style = {
    margin: 15,
}

export default class Routes extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { className } = this.props;
        return (
          <div>
            <MuiThemeProvider>
            <div>
            	<RaisedButton label="Home" primary={true} style={style} onClick={(event) => <Route exact path="/" component={Home} />}/>
            	<RaisedButton label="Register" primary={true} style={style} onClick={(event) => <Route path="/register" component={Register} />}/>
            	<RaisedButton label="Login" primary={true} style={style} onClick={(event) => <Route path="/login" component={Login} />}/>
            	<RaisedButton label="Apply" primary={true} style={style} onClick={(event) => <Route path="/apply" component={Apply} />}/>
            	
            </div>
            </MuiThemeProvider>
          </div>
        );
    }

}

/*
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

        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/apply" component={Apply} />
        <Route path="/404" component={NotFound} />
    </div>
  </Router>
);

export default Routes;
*/
