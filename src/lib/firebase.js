import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA98qoYyMdKCnpjcUpmYeNhrR2jW9qMTYM",
  authDomain: "poll-connect.firebaseapp.com",
  projectId: "poll-connect",
  storageBucket: "poll-connect.appspot.com",
  messagingSenderId: "269776002955",
  appId: "1:269776002955:web:a52713915e272fe70b598e",
  measurementId: "G-6HDGQ49FNG"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}