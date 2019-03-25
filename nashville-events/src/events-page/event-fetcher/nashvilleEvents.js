const firebase = require('firebase');
require('firebase/firestore');
const request = require('request');
const cheerio = require('cheerio');

firebase.initializeApp({
  apiKey: 'AIzaSyC3VoNgu4Vpep3bUWK6_kMUb3Ag_9Pnu6g',
  authDomain: 'housing-project-7e733.firebaseapp.com',
  databaseURL: 'https://housing-project-7e733.firebaseio.com',
  projectId: 'housing-project-7e733',
  storageBucket: 'housing-project-7e733.appspot.com',
  messagingSenderId: '378164429411',
});

const url = 'https://www.visitmusiccity.com/visitors/events/upcomingevents';
const db = firebase.firestore();

request(url, (error, response, body) => {
  if (!error) {
    const $ = cheerio.load(body);
    const events = [];
    $('.events')
      .find('li')
      .each(function () {
        let current = $(this).text();
        current = current.replace('@', '-');
        eventInfo = current.split('-', 3);
        pushToFirebase(eventInfo);
        events.push();
      });
  } else {
    console.log(`We’ve encountered an error: ${error}`);
  }
});

function pushToFirebase(eventInfo) {
  console.log(eventInfo[0]);
  db.collection('nashville_events')
    .add({
      Name: String(eventInfo[0]).trim(),
      Location: String(eventInfo[1]).trim(),
      Date: String(eventInfo[2]).trim(),
      Type: 'event',
    })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
}
