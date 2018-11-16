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
    //     // this.handleClose = this.handleClose.bind(this);

    //     // this.state = {
    //     //     show: this.props.show
    //     // };
    }

    // handleClose() {
    //     this.setState({ show: false });
    // }

    handleSubmit(event, title, requestor, location, ice, type) {
        this.props.hide(event);

        API.newTicket({
            title: title,
            requestor: requestor,
            su: location,
            ice: ice,
            type: type
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.hide}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add New Request</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <RequestForm />
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