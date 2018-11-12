import React, {Component} from 'react';
import Header from './component/Header';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; //throw switch back in the mix here, removed because of console error
import Requests from './pages/Requests';

class App extends Component {
    constuctor(props) {
        super(props)

        this.modalHandler = this.modalHandler.bind(this)

    state = {
        modalState = false
    }
    }

    modalHandler(e) {
        e.preventDefault()
        this.setState({
            modalState: true
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Header modalHandler = {this.modalHandler}/>
                    <Route exact path = '/Requests' component = {Requests}/>
                </div>
            </Router>
        )
    }
}

export default App;