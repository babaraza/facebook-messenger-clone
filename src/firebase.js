import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCA64euvq-KibsRh8V6qIgUlvnS5xKfpJA",
  authDomain: "messenger-app-3e20d.firebaseapp.com",
  databaseURL: "https://messenger-app-3e20d.firebaseio.com",
  projectId: "messenger-app-3e20d",
  storageBucket: "messenger-app-3e20d.appspot.com",
  messagingSenderId: "760496575149",
  appId: "1:760496575149:web:5666af7a3d84544fb46c24",
});

const db = firebaseApp.firestore();

export default db;
