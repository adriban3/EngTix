import React from 'react';
import './SignUpForm.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

function FieldGroup({ id, label, validationState, ...props }) {
    return (
        <FormGroup controlId={id} validationState={validationState}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

class SignUpForm extends React.Component {
    render() {
        return (
            <form>

                <FieldGroup
                    id="username"
                    type="text"
                    label="Username:"
                    placeholder="Enter Username"
                    name="username"
                    value={this.props.username}
                    onChange={this.props.handleChange}
                    validationState={this.props.userVal}
                />

                <FieldGroup
                    id="password"
                    type="password"
                    label="Password:"
                    placeholder="Enter Password"
                    name="password"
                    value={this.props.password}
                    onChange={this.props.handleChange}
                    validationState={this.props.passVal}
                />
            </form>
        )
    }
}

export default SignUpForm;