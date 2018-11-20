import React, { Component } from 'react';
import Header from './component/Header';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //throw switch back in the mix here, removed because of console error
import Requests from './pages/Requests';
import Modal from './component/Modal';

class App extends Component {
    constructor(props) {
        super(props)

        this.requestHandler = this.requestHandler.bind(this)
        this.modalHandler = this.modalHandler.bind(this)
        this.modalCloser = this.modalCloser.bind(this)

        this.state = {
            modalState: false,
            requestState: 1
        }
    }

    requestHandler() {
        this.setState({
            requestState: this.state.requestState*-1
        })
    }

    modalHandler() {
        this.setState({
            modalState: true
        })
    }

    modalCloser() {
        this.setState({
            modalState: false
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Header modalHandler={this.modalHandler} />
                    <Modal show={this.state.modalState} hide={this.modalCloser} request={this.requestHandler} />
                    <Route exact path='/Requests' render={(props) => <Requests {...props} case = {this.state.requestState}/>} />
                </div>
            </Router>
        )
    }
}

export default App;