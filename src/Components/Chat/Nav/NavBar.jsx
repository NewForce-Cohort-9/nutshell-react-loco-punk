import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate =useNavigate()

  return (
    <div>
      <Navbar>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownMenu right>
                <DropdownItem onClick={() => {navigate("/")}}>Dashboard</DropdownItem>
                <DropdownItem onClick={() => {navigate("/articles")}}>News</DropdownItem>
                <DropdownItem>Tasks</DropdownItem>
                <DropdownItem>Images</DropdownItem>
                <DropdownItem>Events</DropdownItem>
                <DropdownItem onClick={()=>{navigate("/messages")}}>Messages</DropdownItem>
                {localStorage.getItem("nutshell_user")? "" : <DropdownItem onClick={() => {navigate("/login")}}>Login</DropdownItem>}
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
