import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Login } from '../../auth/Login.jsx';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate()


  return (
    <div>
      <Navbar>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownMenu right>
                <DropdownItem>News</DropdownItem>
                <DropdownItem>Tasks</DropdownItem>
                <DropdownItem>Images</DropdownItem>
                <DropdownItem>Events</DropdownItem>
                <DropdownItem>Messages</DropdownItem>
                <DropdownItem onClick={() => {navigate("/login")}}>Login</DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
