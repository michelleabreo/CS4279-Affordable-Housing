import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC3VoNgu4Vpep3bUWK6_kMUb3Ag_9Pnu6g',
  authDomain: 'housing-project-7e733.firebaseapp.com',
  databaseURL: 'https://housing-project-7e733.firebaseio.com',
  projectId: 'housing-project-7e733',
  storageBucket: 'housing-project-7e733.appspot.com',
  messagingSenderId: '378164429411',
};
firebase.initializeApp(config);
export default firebase;
