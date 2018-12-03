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
        this.handleLogin = this.handleLogin.bind(this)

        this.state = {
            modalState: false,
            formState: 0,
            requestState: 1,
            signInState: 0,
            loggedIn: false,
            username: ''
        }
    }

    requestHandler() {
        this.setState({
            requestState: this.state.requestState * -1
        })
    }

    modalHandler(whichModal) {
        whichModal === 1 ?
            this.setState({
                modalState: true,
                formState: 1
            })
            :
            whichModal === 2 ?
                this.setState({
                    modalState: true,
                    formState: 2,
                    signInState: 1
                })
                :
                this.setState({
                    modalState: true,
                    formState: 2,
                    signInState: 2
                })
    }

    modalCloser() {
        this.setState({
            modalState: false,
            formState: 0
        })
    }

    handleLogin(username) {
        this.setState({
            username,
            loggedIn: true
        })
    }

    //add method to redirect to '/' (landing page) when user logs in; have 'redirectTo' state in Modal component

    render() {
        return (
            <Router>
                <div className='background'>
                    <Header loggedIn={this.state.loggedIn} username={this.state.username} modalHandler={this.modalHandler} />
                    <Modal loggedIn={this.handleLogin} inUp={this.state.signInState} whichForm={this.state.formState} show={this.state.modalState} hide={this.modalCloser} request={this.requestHandler} />
                    {/* <Route exact path='/' component={Landing} /> */}
                    <Route exact path='/Requests' render={(props) => <Requests {...props} case={this.state.requestState} />} />
                </div>
            </Router>
        )
    }
}

export default App;