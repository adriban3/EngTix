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

        this.state = {
            title: '',
            requestor: '',
            location: '',
            ice: '',
            type: '',
            username: '',
            password: ''
        }
    }

    handleSubmit(event) {
        this.props.hide(event);
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

    handleChange = (e) => {
        console.log(this.state.password);
        const target = e.target;

        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.hide}>

                    <Modal.Header closeButton>
                        {this.props.whichForm === 1 ?
                            <Modal.Title>Add New Request</Modal.Title>
                            :
                            <Modal.Title>Sign Up</Modal.Title>
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