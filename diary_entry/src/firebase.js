import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhqt1o5ROWrNZXUYsuPrMsFMRpFGOItJc",
    authDomain: "todo-list-sai.firebaseapp.com",
    projectId: "todo-list-sai",
    storageBucket: "todo-list-sai.appspot.com",
    messagingSenderId: "1050340633709",
    appId: "1:1050340633709:web:b82b8a72bbbf1e24a92364",
    measurementId: "G-Y9WDNLBHK4"
});

const db = firebaseApp.firestore();

export default db;