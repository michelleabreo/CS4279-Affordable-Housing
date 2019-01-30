import React from 'react';
import './App.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export default function NashNav() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <div className="text-logo">
            {/* <img src={logo} width="30" height="30" alt="Logo"></img> */}
            <b>NASH</b>
          </div>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Events
        </NavItem>
        <NavItem eventKey={2} href="#">
          Housing
        </NavItem>
        <NavItem eventKey={3} href="#">
          Budget
        </NavItem>
      </Nav>
    </Navbar>
  );
}
