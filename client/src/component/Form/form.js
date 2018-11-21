import React from 'react';
import './Form.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Radio from 'react-bootstrap/lib/Radio';

function FieldGroup({ id, label, validationState, ...props }) {
    return (
        <FormGroup controlId={id} validationState = {validationState}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

class RequestForm extends React.Component {

    render() {
        return(
            <form>

                <FieldGroup
                    id="titleInput"
                    type="text"
                    label="Title:"
                    placeholder="Enter Request Title"
                    name = "title"
                    value = {this.props.title}
                    onChange={this.props.handleChange}
                    validationState={this.props.titleVal}
                />

                <FieldGroup
                    id="requestorInput"
                    type="text"
                    label="Requestor Name:"
                    placeholder="Enter Your Name"
                    name = "requestor"
                    value = {this.props.requestor}
                    onChange={this.props.handleChange}
                    validationState={this.props.requestorVal}
                />

                <FormGroup controlId="formDropdown" validationState={this.props.locationVal}>
                    <ControlLabel>Location:</ControlLabel>

                    <FormControl componentClass="select" placeholder="Location" name = "location" value = {this.props.location} onChange = {this.props.handleChange}>
                        <option value="BUF">BUF</option>
                        <option value="FNO">FNO</option>
                        <option value="LEE">LEE</option>
                        <option value="MDT">MDT</option>
                        <option value="SUW">SUW</option>
                    </FormControl>

                </FormGroup>

                <FieldGroup
                    id="iceScore"
                    type="number"
                    label="ICE Score:"
                    placeholder="Enter Ice Score"
                    name = "ice"
                    value = {this.props.ice}
                    onChange={this.props.handleChange}
                    validationState={this.props.iceVal}
                />

                <FormGroup
                    controlId = "type"
                    validationState = {this.props.typeVal}
                >
                    <ControlLabel>Type:</ControlLabel>

                        <Radio name="type" inline value = 'prod' onChange = {this.props.handleChange}>prod</Radio>
                        <Radio name="type" inline value = 'qual' onChange = {this.props.handleChange}>qual</Radio>
                        <Radio name="type" inline value =  'safe' onChange = {this.props.handleChange}>safe</Radio>
                        <Radio name="type" inline value =  'sale' onChange = {this.props.handleChange}>sale</Radio>

                </FormGroup>

            </form>
        );
    }
}

export default RequestForm;