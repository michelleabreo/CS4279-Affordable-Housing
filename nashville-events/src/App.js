import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './music_note.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <img src={logo} width="40" height="40" alt="Logo"></img>
          <b>NASH</b>
        </nav>
        <div className="container main-content">
          <h1>Events</h1>
        </div>
      </div>
    );
  }
}

export default App;
