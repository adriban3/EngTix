function FieldGroup({id, label, ...props}) {
    return (
        <FormGroup controlId = {id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

const requestForm = (

    <form>

        <FieldGroup
            id = "titleInput"
            type = "text"
            label = "Title:"
            placeholder = "Enter Request Title"
        />

        <FieldGroup
            id = "requestorInput"
            type = "text"
            label = "Requestor Name:"
            placeholder = "Enter Your Name"
        />

        <FormGroup controlId = "formDropdown">
            <ControlLabel>Location:</ControlLabel>
            
            <FormControl componentClass = "select" placeholder = "Location">
                <option value = "BUF">BUF</option>
                <option value = "FNO">FNO</option>
                <option value = "LEE">LEE</option>
                <option value = "MDT">MDT</option>
                <option value = "SUW">SUW</option>
            </FormControl>

        </FormGroup>

        <FieldGroup
            id = "ICEScore"
            type = "number"
            label = "ICE Score:"
            placeholder = "Enter Ice Score"
        />

        <FormGroup>

            <Checkbox inline>prod</Checkbox>
            <Checkbox inline>qual</Checkbox>
            <Checkbox inline>safe</Checkbox>
            <Checkbox inline>sale</Checkbox>

        </FormGroup>

    </form>
);

render(requestForm);