import React from 'react';
import './Modal.css';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import RequestForm from '../Form';
import API from '../../utils/API';
import SignUpForm from '../SignUpForm';

class RequestModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            title: '',
            requestor: '',
            location: '',
            ice: '',
            type: '',
            username: '',
            password: '',
            redirectTo: ''
        }
    }

    handleSubmit() {
        console.log(this.props.whichForm, this.props.inUp);
        if (this.props.whichForm === 1) {
            this.handleHide()
            this.props.request();

            API.newTicket({
                title: this.state.title,
                requestor: this.state.requestor,
                su: this.state.location,
                ice: this.state.ice,
                type: this.state.type
            }).then(
                this.setState({
                    title: '',
                    requestor: '',
                    su: '',
                    ice: '',
                    type: ''
                })
            );
        }
        else if (this.props.whichForm === 2 && this.props.inUp === 1) {
            API.newUser({
                username: this.state.username,
                password: this.state.password
            }).then(response => {
                console.log(response)
                if (response.data) {
                    console.log('Successful signup')
                }
                else {
                    console.log('Signup error');
                }
            }).catch(error => console.log(error.message)).then(this.handleHide());
        }

        else if (this.props.whichForm === 2 && this.props.inUp === 2) {
            API.login({
                username: this.state.username,
                password: this.state.password
            }).then(response => {
                console.log(response)
                if (response.status === 200) {
                    console.log('Successful signin')
                    this.props.loggedIn(this.state.username)
                    this.setState({
                        //this should redirect to home
                        redirectTo: '/'
                    })
                }
                else {
                    console.log('Signin error');
                }
            }).catch(error => console.log(error.message)).then(this.handleHide());
        }
    }

    handleChange = (e) => {
        const target = e.target;

        this.setState({
            [target.name]: target.value
        });
    }

    handleHide = () => {
        this.props.hide();

        this.setState({
            title: '',
            requestor: '',
            location: '',
            ice: '',
            type: '',
            username: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.handleHide}>

                    <Modal.Header closeButton>
                        {this.props.whichForm === 1 ?
                            <Modal.Title>Add New Request</Modal.Title>
                            :
                            this.props.inUp === 1 ?
                                <Modal.Title>Sign Up</Modal.Title>
                                :
                                <Modal.Title>Sign In</Modal.Title>
                        }
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.whichForm === 1 ?
                            <RequestForm title={this.state.title}
                                requestor={this.state.requestor}
                                location={this.state.location}
                                ice={this.state.ice}
                                type={this.state.type}
                                handleChange={this.handleChange} />
                            :
                            <SignUpForm
                                username={this.state.username}
                                password={this.state.password}
                                handleChange={this.handleChange} />
                        }
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={(event) => this.handleSubmit(event)}>Submit</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

// render(<RequestModal />);

export default RequestModal;