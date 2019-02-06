import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import firebase from '../firebase';

const db = firebase.firestore();

export default function EventList() {
  db.collection('nashville_events')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Name}`);
      });
    });
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
