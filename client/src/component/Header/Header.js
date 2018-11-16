import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Header = props => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            {/*Want to add the habasit logo here*/}
            <Navbar.Brand>
                {/*Change the font here, green outline, with white and black double stroke, is this possible?  Also center*/}
                <a href="#brand">Engineering Tickets</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                {/*move this over to right side and add cool three line drop down image instead of words*/}
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} href="/Requests">View Requests</MenuItem> {/*add links inside these menu items*/}
                    <MenuItem eventKey={3.2} onClick={props.modalHandler}>Add New Request</MenuItem>
                    <MenuItem eventKey={3.3}>Edit Requests</MenuItem> {/*admin only*/}
                    <MenuItem eventKey={3.4}>Statistics</MenuItem> {/*admin only*/}
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Logout</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header;