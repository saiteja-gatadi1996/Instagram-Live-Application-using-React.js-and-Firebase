import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCEFlT0bPYzmlbI6iJMZibqbdomP5ODMP0",
    authDomain: "instagram-live-5cdbe.firebaseapp.com",
    databaseURL: "https://instagram-live-5cdbe.firebaseio.com",
    projectId: "instagram-live-5cdbe",
    storageBucket: "instagram-live-5cdbe.appspot.com",
    messagingSenderId: "743429184702",
    appId: "1:743429184702:web:a2461bae81653824a552ef",
    measurementId: "G-QZ4R6EBER1"
});

const db=firebaseApp.firestore();
const auth= firebase.auth();
const storage=firebase.storage();

export{db, auth, storage};


