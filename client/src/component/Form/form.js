import React from 'react';
import './Form.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Radio from 'react-bootstrap/lib/Radio';

function FieldGroup({ id, label, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

class RequestForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return(
            <form>

                <FieldGroup
                    id="titleInput"
                    type="text"
                    label="Title:"
                    placeholder="Enter Request Title"
                />

                <FieldGroup
                    id="requestorInput"
                    type="text"
                    label="Requestor Name:"
                    placeholder="Enter Your Name"
                />

                <FormGroup controlId="formDropdown">
                    <ControlLabel>Location:</ControlLabel>

                    <FormControl componentClass="select" placeholder="Location">
                        <option value="BUF">BUF</option>
                        <option value="FNO">FNO</option>
                        <option value="LEE">LEE</option>
                        <option value="MDT">MDT</option>
                        <option value="SUW">SUW</option>
                    </FormControl>

                </FormGroup>

                <FieldGroup
                    id="ICEScore"
                    type="number"
                    label="ICE Score:"
                    placeholder="Enter Ice Score"
                />

                <FormGroup>

                    <Radio name="radioGroup" inline>prod</Radio>
                    <Radio name="radioGroup" inline>qual</Radio>
                    <Radio name="radioGroup" inline>safe</Radio>
                    <Radio name="radioGroup" inline>sale</Radio>

                </FormGroup>

            </form>
        );
    }
}

export default RequestForm;