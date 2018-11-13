import React from 'react';
import './Modal.css';
import Modal from 'react-bootstrap/lib/Modal';
import requestForm from '../Form';

class RequestModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.State = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add New Request</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <requestForm/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

render(<RequestModal/>)