import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import firebase from '../firebase.js';

export default function EventList() {
  const events = firebase.database().ref('nashville_events');
  return (
    <ListGroup>
      <ListGroupItem header="In the Round" href="#">
        Bluebird Cafe, Nightly
      </ListGroupItem>
      <ListGroupItem header="Heading 2" href="#">
        Linked item
      </ListGroupItem>
      <ListGroupItem header="Heading 3">Danger styling</ListGroupItem>
    </ListGroup>
  );
}
