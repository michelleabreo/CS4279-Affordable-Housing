import React, { Component } from 'react';
import './App.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import EventList from './EventList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <div className="container main-content">
          <h1>Events</h1>
          <EventList />
        </div>
      </div>
    );
  }
}

export default App;
