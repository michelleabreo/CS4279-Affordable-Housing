import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';

import logo from './music_note.svg';
import EventCard from './EventCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <div className="text-logo">  
              {/* <img src={logo} width="30" height="30" alt="Logo"></img> */}
                <b>NASH</b></div>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="container main-content">
          <h1>Events</h1>
          <EventCard></EventCard>
        </div>
      </div>
    );
  }
}

export default App;
