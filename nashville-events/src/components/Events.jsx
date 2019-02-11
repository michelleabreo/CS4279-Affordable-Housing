import React from 'react';
import '../styling/events.css';
import EventList from '../events-page/EventList';

export default function Events() {
  return (
    <div className="Events">
      <div className="container main-content">
        <h1>Events</h1>
        <EventList />
      </div>
    </div>
  );
}
