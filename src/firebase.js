import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBGM9Cd5dLCl4Rovy79cB2Ji98mOMsJqnA',
  authDomain: 'markdown-a6c0e.firebaseapp.com',
  databaseURL: 'https://markdown-a6c0e.firebaseio.com',
  projectId: 'markdown-a6c0e',
  storageBucket: 'markdown-a6c0e.appspot.com',
  messagingSenderId: '427119662358'
};

firebase.initializeApp(config);

export default firebase.database();
