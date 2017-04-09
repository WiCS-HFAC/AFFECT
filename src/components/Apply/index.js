import React from 'react';

import baseTheme from './theme.js';
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {grey700, red300, grey200} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Description from 'material-ui/svg-icons/action/description';
import Checkbox from 'material-ui/Checkbox';

import "./style.css";

const whole_style = {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center",
}

const dark_grey = {
    color: "#424242",
    paddingLeft: "10px",
}


function handleTouchTap() {
    window.open("http://www.afamilyforeverychild.org/Adoption/TheBasics/OrientationAndTraining.php");
}

export default class Apply extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(5), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
                <div style={whole_style}>
                    <h1>Application Forms</h1>
                    <h4 style={dark_grey}>Form Progress:</h4>

                    <LinearProgress mode="determinate" value={this.state.completed} />

                    <br/>

                    <div>
                        <Card>
                            <CardHeader
                                title="Documents"
                                subtitle="Please download and read these."
                                avatar={<Description />}
                            />

                        </Card>
                    </div>

                    <div>

                    </div>
                </div>
                </MuiThemeProvider>
            </div>
        );
    }
}