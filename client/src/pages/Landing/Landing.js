import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.loggedIn ?
                    <h1>Hello {this.props.username}</h1>
                    :
                    <h1>Hello, please login or signup to submit a request</h1>
                }
            </div>
        )
    }
};