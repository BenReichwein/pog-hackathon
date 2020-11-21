import firebase from 'firebase';

// Config for firebase
const config = {
    apiKey: "AIzaSyA-lmmE1oZOsw3smOMm0ZtpZQh4zgN7Dt8",
    authDomain: "pog-hackathon.firebaseapp.com",
    databaseURL: "https://pog-hackathon.firebaseio.com",
    projectId: "pog-hackathon",
    storageBucket: "pog-hackathon.appspot.com",
    messagingSenderId: "318598557415",
    appId: "1:318598557415:web:6251a139ff7dd96380fc42",
    measurementId: "G-LV8KT1L10Q"
};

firebase.initializeApp(config);

let db = firebase.firestore();

export { db, firebase as default };