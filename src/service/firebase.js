import firebase from "firebase/app";
import "firebase/firestore";

function initFirebase() {
  var firebaseConfig = {
    apiKey: "AIzaSyAY0rEbiOlV7VGEPI7KvQYYThEtvKokDcQ",
    authDomain: "akhil-mulpuri.firebaseapp.com",
    projectId: "akhil-mulpuri",
    storageBucket: "akhil-mulpuri.appspot.com",
    messagingSenderId: "276080998919",
    appId: "1:276080998919:web:11b7257ec81c2cc72c88a2",
    measurementId: "G-E4WTJ8D6X7",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
}

function addDataToCollection(payload) {
  return firebase.firestore().collection("feedbacks").add(payload);
}

const Firebase = { addDataToCollection, initFirebase };

export default Firebase;
