import React, { Component } from 'react';
import Header from './component/Header';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //throw switch back in the mix here, removed because of console error
import Requests from './pages/Requests';
import Modal from './component/Modal';

class App extends Component {
    constructor(props) {
        super(props)

        this.modalHandler = this.modalHandler.bind(this)
        this.modalCloser = this.modalCloser.bind(this)

        this.state = {
            modalState: false
        }
    }

    modalHandler(e) {
        e.preventDefault()
        this.setState({
            modalState: true
        })
    }

    modalCloser(e) {
        e.preventDefault()
        this.setState({
            modalState: false
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Header modalHandler={this.modalHandler} />
                    <Modal show={this.state.modalState} hide={this.modalCloser} />
                    <Route exact path='/Requests' component={Requests} />
                </div>
            </Router>
        )
    }
}

export default App;