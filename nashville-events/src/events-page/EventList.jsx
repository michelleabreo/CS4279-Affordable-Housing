import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import firebase from '../firebase';

const db = firebase.firestore();

export default class EventList extends React.Component {
  createEventList = () => {
    const events = [];
    db.collection('nashville_events')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          events.push(
            <ListGroupItem header={doc.data().Name} href="#">
              {doc.data().Location}
            </ListGroupItem>,
          );
        });
      });
    return events;
  };

  render() {
    return <ListGroup>{this.createEventList()}</ListGroup>;
  }
}
