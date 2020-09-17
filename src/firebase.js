import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCndKNr7cLbNdFENiM3O5bScPaQQtFgABA",
  authDomain: "clone-a5e8b.firebaseapp.com",
  databaseURL: "https://clone-a5e8b.firebaseio.com",
  projectId: "clone-a5e8b",
  storageBucket: "clone-a5e8b.appspot.com",
  messagingSenderId: "957011370188",
  appId: "1:957011370188:web:d20432906bfa6b528f6269",
  measurementId: "G-RYQ2V3PYYG",
};

// Initialize Firebase with a "default" Firebase project
var firebaseProject = firebase.initializeApp(firebaseConfig);

console.log(firebaseProject.name); // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
// var defaultStorage = defaultProject.storage();
var db = firebaseProject.firestore();
var auth = firebase.auth();

// Option 2: Access Firebase services using shorthand notation
// defaultStorage = firebase.storage();
// constdefaultFirestore = firebase.firestore();

export { db, auth };
