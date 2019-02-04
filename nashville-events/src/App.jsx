import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import NashNav from './NashNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NashNav />
        <div className="container main-content">
          <h1>Events</h1>
          <EventList />
        </div>
      </div>
    );
  }
}

export default App;
