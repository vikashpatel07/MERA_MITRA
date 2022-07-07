import firebase from 'firebase';
//import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyARu5jKGPGcThtg_yRoYSfIHIgtvX8UXNc",
  authDomain: "baatien-sai-f00f3.firebaseapp.com",
  projectId: "baatien-sai-f00f3",
  storageBucket: "baatien-sai-f00f3.appspot.com",
  messagingSenderId: "241894537252",
  appId: "1:241894537252:web:b1e926ac57601944b940b1",
  measurementId: "G-F199ZKGH2R"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};