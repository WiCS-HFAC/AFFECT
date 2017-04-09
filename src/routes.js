import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Apply from './components/Apply';
import NotFound from './components/NotFound';

import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui';

const muiTheme = getMuiTheme(theme);

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return  (
            <Router>
                <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab label="Home" value="a" route="/" />
                        <Tab label="Login" value="b" route="/login" />
                        <Tab label="Register" value="c" route="/register" />
                        <Tab label="Apply" value="d" route="/apply" />
                    </Tabs>
                </MuiThemeProvider>

                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/apply" component={Apply} />
                <Route path="/404" component={NotFound} />
                {/* TODO: Why isnt asterisk acting as a wildcard */}

                </div>
            </Router>
        )
    }
}

export default Routes;

