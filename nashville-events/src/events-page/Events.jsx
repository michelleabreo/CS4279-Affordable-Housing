import React from 'react';
import './events.css';
import EventList from './EventList';
import NashNav from '../common-components/NashNav';

export default function Events() {
  return (
    <div className="Events">
      <NashNav />
      <div className="container main-content">
        <h1>Events</h1>
        <EventList />
      </div>
    </div>
  );
}
