import React from 'react';
import './Modal.css';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import RequestForm from '../Form';
import API from '../../utils/API';

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
                        <Modal.Title>Add New Request</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <RequestForm title = {this.state.title} 
                                     requestor = {this.state.requestor} 
                                     location = {this.state.location} 
                                     ice = {this.state.ice} 
                                     type = {this.state.type} 
                                     handleChange = {this.handleChange}/>
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