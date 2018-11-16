import React from 'react';
import './Modal.css';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import RequestForm from '../Form';

class RequestModal extends React.Component {
    // constructor(props, context) {
    //     super(props, context);

    //     // this.handleShow = this.handleShow.bind(this);
    //     // this.handleClose = this.handleClose.bind(this);

    //     // this.state = {
    //     //     show: this.props.show
    //     // };
    // }

    // handleClose() {
    //     this.setState({ show: false });
    // }

    // handleShow() {
    //     this.setState({ show: true });
    // }

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
                        <Button onClick={this.props.hide}>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

// render(<RequestModal />);

export default RequestModal;