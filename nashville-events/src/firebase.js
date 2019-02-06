import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC3VoNgu4Vpep3bUWK6_kMUb3Ag_9Pnu6g',
  authDomain: 'housing-project-7e733.firebaseapp.com',
  databaseURL: 'https://housing-project-7e733.firebaseio.com',
  projectId: 'housing-project-7e733',
  storageBucket: 'housing-project-7e733.appspot.com',
  messagingSenderId: '378164429411',
};

const defaultConfig = firebase.initializeApp(config);
console.log(defaultConfig.name);

export default firebase;
